import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Version canonique unique du site.
const CANONICAL_HOST = "www.nemsimedia.ma"
const CANONICAL_PROTOCOL = "https"

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const host = req.headers.get("host") ?? ""
  const proto = req.headers.get("x-forwarded-proto") ?? "http"

  // Le chemin canonique :
  //   "/"  -> "/fr" (la home par défaut est /fr)
  //   autre -> inchangé
  const targetPath = pathname === "/" ? "/fr" : pathname

  // Une seule redirection 301 vers l'URL canonique complète.
  // S'applique à tous les hôtes (y compris localhost) pour que le comportement
  // soit cohérent en prod et en local/worker.
  const isCanonicalHost = host === CANONICAL_HOST
  const isSecure = proto === CANONICAL_PROTOCOL

  // Normalise la destination : https + www + /fr si racine.
  const url = req.nextUrl.clone()
  url.protocol = CANONICAL_PROTOCOL
  url.host = CANONICAL_HOST
  url.pathname = targetPath
  url.search = search

  // Si on est déjà sur la version canonique ==> pas de redirection (flux normal).
  if (isCanonicalHost && isSecure && pathname !== "/") {
    return NextResponse.next()
  }

  // Tout le reste -> 301 vers la destination canonique (une seule redirection).
  return NextResponse.redirect(url.toString(), 301)
}

// S'applique aux routes pages (exclut statics, images, fichiers courants).
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|json)$).*)",
  ],
}
