import { SITE_URL } from "./seo"

// Utilitaire générique pour les pages index /fr/services et /ar/services.
// Garantit un canonical auto-référent + un jeu hreflang fr/ar/x-default réciproque
// et symétrique (chaque page pointe vers elle-même et vers son équivalente).
export function buildServicesIndexMetadata(lang) {
  const self = `${SITE_URL}/${lang}/services`
  const other = lang === "ar" ? "fr" : "ar"
  const otherUrl = `${SITE_URL}/${other}/services`
  const defaultUrl = `${SITE_URL}/fr/services`

  return {
    alternates: {
      canonical: self,
      languages: {
        fr: `${SITE_URL}/fr/services`,
        ar: `${SITE_URL}/ar/services`,
        "x-default": defaultUrl,
      },
    },
    openGraph: {
      type: "website",
      url: self,
      locale: lang === "ar" ? "ar_MA" : "fr_MA",
      alternateLocale: [lang === "ar" ? "fr_MA" : "ar_MA"],
      siteName: "Nemsi Media",
    },
  }
}
