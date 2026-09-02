const origin = process.argv[2] || "http://localhost:3001"
const publicOrigin = "https://www.nemsimedia.ma"

const decode = (value = "") => value
  .replaceAll("&amp;", "&")
  .replaceAll("&quot;", '"')
  .replaceAll("&#x27;", "'")
  .replaceAll("&#39;", "'")
  .replaceAll("&lt;", "<")
  .replaceAll("&gt;", ">")

const attr = (tag, name) => {
  const match = tag.match(new RegExp(`\\s${name}=["']([^"']*)["']`, "i"))
  return match ? decode(match[1]) : null
}

const response = await fetch(`${origin}/sitemap.xml`)
if (!response.ok) throw new Error(`Sitemap HTTP ${response.status}`)
const sitemap = await response.text()
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
const issues = []
const pages = []
const internalTargets = new Set()

for (const publicUrl of urls) {
  const pathname = new URL(publicUrl).pathname
  const pageResponse = await fetch(`${origin}${pathname}`)
  const html = await pageResponse.text()
  const title = decode(html.match(/<title>(.*?)<\/title>/is)?.[1] || "")
  const descriptionTag = html.match(/<meta[^>]+name=["']description["'][^>]*>/i)?.[0] || ""
  const description = attr(descriptionTag, "content") || ""
  const canonicalTag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0] || ""
  const canonical = attr(canonicalTag, "href")
  const alternates = [...html.matchAll(/<link[^>]+rel=["']alternate["'][^>]*>/gi)]
    .map((match) => ({ lang: attr(match[0], "hreflang"), href: attr(match[0], "href") }))
    .filter((item) => item.lang)
  const h1Count = (html.match(/<h1\b/gi) || []).length
  const robots = [...html.matchAll(/<meta[^>]+name=["']robots["'][^>]*>/gi)].map((match) => attr(match[0], "content") || "").join(" ")
  const imageTags = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0])
  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/gis)]
  const schemaTypes = []
  const localizedPath = pathname.replace(/^\/(fr|ar)/, "")
  const expectedAlternates = {
    fr: `${publicOrigin}/fr${localizedPath}`,
    ar: `${publicOrigin}/ar${localizedPath}`,
    "x-default": `${publicOrigin}/fr${localizedPath}`,
  }

  if (pageResponse.status !== 200) issues.push({ publicUrl, issue: `HTTP ${pageResponse.status}` })
  if (!title) issues.push({ publicUrl, issue: "Titre absent" })
  if (title.length > 60) issues.push({ publicUrl, issue: `Titre trop long (${title.length})` })
  if (!description) issues.push({ publicUrl, issue: "Meta description absente" })
  if (description.length > 160) issues.push({ publicUrl, issue: `Description trop longue (${description.length})` })
  if (canonical !== publicUrl) issues.push({ publicUrl, issue: `Canonical incorrecte: ${canonical}` })
  for (const lang of ["fr", "ar", "x-default"]) {
    const alternate = alternates.find((item) => item.lang === lang)
    if (!alternate) issues.push({ publicUrl, issue: `hreflang ${lang} absent` })
    else if (alternate.href !== expectedAlternates[lang]) issues.push({ publicUrl, issue: `hreflang ${lang} incorrect: ${alternate.href}` })
  }
  if (h1Count !== 1) issues.push({ publicUrl, issue: `${h1Count} H1` })
  if (/noindex/i.test(robots)) issues.push({ publicUrl, issue: "noindex inattendu" })
  if (!html.includes(`${publicOrigin}/api/og`)) issues.push({ publicUrl, issue: "Image sociale /api/og absente" })

  for (const tag of imageTags) {
    if (attr(tag, "alt") === null) issues.push({ publicUrl, issue: "Image sans attribut alt" })
    if (!attr(tag, "width") || !attr(tag, "height")) issues.push({ publicUrl, issue: "Image sans dimensions intrinsèques" })
  }

  for (const block of jsonLdBlocks) {
    try {
      const parsed = JSON.parse(decode(block[1]))
      schemaTypes.push(parsed["@type"] || "unknown")
      if (parsed["@type"] === "LocalBusiness") issues.push({ publicUrl, issue: "LocalBusiness non vérifié" })
    } catch {
      issues.push({ publicUrl, issue: "JSON-LD invalide" })
    }
  }

  const expectedLanguage = pathname.startsWith("/ar") ? "ar-MA" : "fr-MA"
  if (pageResponse.headers.get("content-language") !== expectedLanguage) {
    issues.push({ publicUrl, issue: `Content-Language incorrect (${pageResponse.headers.get("content-language")})` })
  }

  for (const match of html.matchAll(/<a\b[^>]*>/gi)) {
    const href = attr(match[0], "href")
    if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(href)) continue
    try {
      const target = new URL(href, publicUrl)
      if (["www.nemsimedia.ma", "nemsimedia.ma"].includes(target.hostname)) internalTargets.add(target.pathname)
    } catch {
      issues.push({ publicUrl, issue: `Lien invalide: ${href}` })
    }
  }

  pages.push({ publicUrl, title, description, schemaTypes })
}

for (const field of ["title", "description"]) {
  const values = new Map()
  for (const page of pages) {
    if (!page[field]) continue
    const matches = values.get(page[field]) || []
    matches.push(page.publicUrl)
    values.set(page[field], matches)
  }
  for (const [value, matches] of values) {
    if (matches.length > 1) issues.push({ publicUrl: matches.join(", "), issue: `${field} dupliqué: ${value}` })
  }
}

const ogResponse = await fetch(`${origin}/api/og`)
if (!ogResponse.ok || !ogResponse.headers.get("content-type")?.startsWith("image/")) {
  issues.push({ publicUrl: `${publicOrigin}/api/og`, issue: `Image OG invalide (${ogResponse.status})` })
}

for (const pathname of internalTargets) {
  if (pathname.startsWith("/_next/") || pathname.startsWith("/api/")) continue
  const targetResponse = await fetch(`${origin}${pathname}`, { redirect: "manual" })
  if (targetResponse.status >= 400) issues.push({ publicUrl: `${publicOrigin}${pathname}`, issue: `Lien interne HTTP ${targetResponse.status}` })
}

console.log(JSON.stringify({ routes: urls.length, pages: pages.length, internalTargets: internalTargets.size, ogStatus: ogResponse.status, issues, issueCount: issues.length }, null, 2))
if (issues.length) process.exitCode = 1
