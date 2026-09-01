import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Version canonique unique du site.
const CANONICAL_HOST = "www.nemsimedia.ma"
const CANONICAL_PROTOCOL = "https"

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const host = req.headers.get("host") ?? ""
  const proto = req.headers.get("x-forwarded-proto") ?? "http"

  // Preserve local development URLs instead of redirecting them to the
  // production domain. The root still resolves to the default French page.
  const hostname = host.startsWith("[")
    ? host.slice(1, host.indexOf("]"))
    : host.split(":")[0]
  const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(hostname.toLowerCase())

  if (isLocalHost) {
    if (pathname === "/") {
      const localUrl = req.nextUrl.clone()
      localUrl.pathname = "/fr"
      return NextResponse.rewrite(localUrl)
    }

    return NextResponse.next()
  }

  // Le chemin canonique :
  //   "/"  -> "/fr" (la home par défaut est /fr)
  //   autre -> inchangé
  const targetPath = pathname === "/" ? "/fr" : pathname

  // Une seule redirection 301 vers l'URL canonique complète.
  // S'applique aux hôtes non locaux afin de conserver une URL publique unique.
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
