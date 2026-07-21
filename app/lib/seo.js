export const SITE_URL = "https://www.nemsimedia.ma"
export const SITE_NAME = "Nemsi Media"
export const PHONE = "+212 6 45 28 82 16"
export const EMAIL = "contact@nemsimedia.ma"
export const WHATSAPP = "+2126625288216"
export const addressLine = "Casablanca, Maroc"
export const region = "Casablanca-Settat"
export const geo = { lat: 33.5731, lng: -7.5898 }
export const officeHours = "Mo-Fr 09:00-19:00, Sa 10:00-15:00"
export const openingHoursSchema = ["Mo-Fr 09:00-19:00", "Sa 10:00-15:00"]

export const descriptions = {
  fr: "Agence web à Casablanca : création de sites rapides, SEO et e-commerce au Maroc. Devis clair, prise de rendez-vous et projet prêt à convertir vos visiteurs en clients.",
  ar: "وكالة ويب في الدار البيضاء : تصميم مواقع سريعة، SEO وتجارة إلكترونية في المغرب. عرض واضح وموعد جاهز لتحويل الزيارات إلى تواصل حقيقي.",
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
  "agence web à Casablanca",
  "création site web Casablanca",
  "référencement SEO Maroc",
  "SEO Casablanca",
  "site e-commerce Maroc",
  "marketing digital Casablanca",
  "site internet Casablanca",
  "développement web Maroc",
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
