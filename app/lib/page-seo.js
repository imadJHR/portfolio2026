import { SITE_NAME, SITE_URL } from "./seo"

export function buildLocalizedPageMetadata({ lang, path, title, description }) {
  const canonical = `${SITE_URL}/${lang}/${path}`
  const frenchUrl = `${SITE_URL}/fr/${path}`
  const arabicUrl = `${SITE_URL}/ar/${path}`

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: frenchUrl,
        ar: arabicUrl,
        "x-default": frenchUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: lang === "ar" ? "ar_MA" : "fr_MA",
      alternateLocale: [lang === "ar" ? "fr_MA" : "ar_MA"],
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  }
}
