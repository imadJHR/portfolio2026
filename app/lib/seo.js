export const SITE_URL = "https://www.nemsimedia.ma"
export const SITE_NAME = "Nemsi Media"
export const PHONE = "+212645288216"
export const EMAIL = "contact@nemsimedia.ma"

export const descriptions = {
  fr: "Nemsi Media (nemsimedia.ma), agence web à Casablanca spécialisée en création de sites rapides, SEO et e-commerce. Obtenez une recommandation claire et un devis adapté à votre projet.",
  ar: "Nemsi Media (nemsimedia.ma)، وكالة ويب في الدار البيضاء متخصصة في تصميم المواقع السريعة، تحسين محركات البحث والتجارة الإلكترونية. احصل على تصور واضح وعرض مناسب لمشروعك.",
}

export const brandAliases = [
  "Nemsi Media",
  "Nemsi Media Maroc",
  "Nemsi media Casablanca",
  "NemsiMedia",
  "nemsimedia",
  "nemsimedia.ma",
]

export const seoKeywords = [
  ...brandAliases,
  "agence web Casablanca",
  "agence web Maroc",
  "création site web Maroc",
  "création site web Casablanca",
  "référencement SEO Maroc",
  "site e-commerce Maroc",
  "marketing digital Maroc",
]

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: brandAliases,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpg`,
  description: descriptions.fr,
  email: EMAIL,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    addressCountry: "MA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: PHONE,
    email: EMAIL,
    areaServed: "MA",
    availableLanguage: ["fr", "ar"],
  },
  areaServed: {
    "@type": "Country",
    name: "Morocco",
  },
  sameAs: [
    "https://github.com/imadJHR",
    "https://www.linkedin.com/company/nemsi-media",
    "https://www.instagram.com/nemsimedia/",
  ],
  knowsAbout: [
    "Création de sites web",
    "Référencement naturel",
    "E-commerce",
    "UI/UX design",
    "Marketing digital",
  ],
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: brandAliases,
  url: SITE_URL,
  description: descriptions.fr,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["fr-MA", "ar-MA"],
}

export function localizedOrganizationSchema(lang) {
  return {
    ...organizationSchema,
    "@id": `${SITE_URL}/#organization`,
    description: descriptions[lang],
    inLanguage: lang === "ar" ? "ar-MA" : "fr-MA",
  }
}
