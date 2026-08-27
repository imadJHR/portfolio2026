import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Version canonique unique du site.
const CANONICAL_HOST = "www.nemsimedia.ma"
const CANONICAL_PROTOCOL = "https"

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const host = req.headers.get("host") ?? ""
  const proto = req.headers.get("x-forwarded-proto") ?? CANONICAL_PROTOCOL

  // La normalisation du domaine (www + https) ne s'applique qu'en production.
  // En localhost / preview Vercel, on laisse passer pour ne pas casser le dev.
  const isProdHost = host.endsWith("nemsimedia.ma")

  // Hôte de production mais non canonique (non-www) -> on force www + https.
  if (isProdHost && host !== CANONICAL_HOST) {
    const url = req.nextUrl.clone()
    url.protocol = CANONICAL_PROTOCOL
    url.host = CANONICAL_HOST
    url.pathname = targetPath
    url.search = search
    return NextResponse.redirect(url.toString(), 301)
  }

  // Hôte canonique mais non sécurisé (http) -> https (une seule redirection).
  if (isProdHost && !isSecure) {
    const url = req.nextUrl.clone()
    url.protocol = CANONICAL_PROTOCOL
    url.pathname = targetPath
    url.search = search
    return NextResponse.redirect(url.toString(), 301)
  }

  // Racine "/" -> "/fr" (s'applique partout, y compris localhost pour le dev).
  if (pathname === "/") {
    const url = req.nextUrl.clone()
    url.pathname = "/fr"
    url.search = search
    return NextResponse.redirect(url.toString(), 301)
  }

  return NextResponse.next()
}

// S'applique aux routes pages (exclut statics, images, favicon, robots, sitemap).
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|json)$).*)",
  ],
}
