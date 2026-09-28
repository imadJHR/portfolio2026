import { SITE_URL } from "./seo"

// Utilitaire générique pour les pages index /fr/services et /en/services.
// Garantit un canonical auto-référent + un jeu hreflang fr-MA/en/x-default réciproque
// et symétrique (chaque page pointe vers elle-même et vers son équivalente).
export function buildServicesIndexMetadata(lang) {
  const self = `${SITE_URL}/${lang}/services`
  const defaultUrl = `${SITE_URL}/fr/services`

  return {
    alternates: {
      canonical: self,
      languages: {
        "fr-MA": `${SITE_URL}/fr/services`,
        en: `${SITE_URL}/en/services`,
        "x-default": defaultUrl,
      },
    },
    openGraph: {
      type: "website",
      url: self,
      locale: lang === "en" ? "en" : "fr_MA",
      alternateLocale: [lang === "en" ? "fr_MA" : "en"],
      siteName: "Nemsi Media",
    },
  }
}
