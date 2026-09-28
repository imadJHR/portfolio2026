import { OG_IMAGE, SITE_URL } from "./seo"

export function buildServiceMetadata(service, lang) {
  const content = service[lang]
  const canonical = `${SITE_URL}/${lang}/services/${service.slug}`

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical,
      languages: {
        "fr-MA": `${SITE_URL}/fr/services/${service.slug}`,
        en: `${SITE_URL}/en/services/${service.slug}`,
        "x-default": `${SITE_URL}/fr/services/${service.slug}`,
      },
    },
    openGraph: {
      type: "website",
      title: `${content.metaTitle} | Nemsi Media`,
      description: content.metaDescription,
      url: canonical,
      locale: lang === "en" ? "en" : "fr_MA",
      alternateLocale: [lang === "en" ? "fr_MA" : "en"],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: content.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.metaTitle} | Nemsi Media`,
      description: content.metaDescription,
      images: [OG_IMAGE],
    },
  }
}

export function buildServiceSchemas(service, lang) {
  const content = service[lang]
  const url = `${SITE_URL}/${lang}/services/${service.slug}`
  const homeName = lang === "en" ? "Home" : "Accueil"
  const servicesName = "Services"
  const inLanguage = lang === "en" ? "en" : "fr-MA"

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: content.name,
      serviceType: content.title,
      description: content.metaDescription,
      url,
      inLanguage,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Morocco" },
      audience: content.audiences.map((audience) => ({ "@type": "Audience", audienceType: audience })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: homeName, item: `${SITE_URL}/${lang}` },
        { "@type": "ListItem", position: 2, name: servicesName, item: `${SITE_URL}/${lang}/services` },
        { "@type": "ListItem", position: 3, name: content.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage,
      mainEntity: content.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ]
}
