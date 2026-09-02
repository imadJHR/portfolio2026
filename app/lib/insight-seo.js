const metaTitles = {
  "site-web-premium-maroc": {
    fr: "Site web premium au Maroc : faut-il investir ?",
    ar: "موقع ويب احترافي بالمغرب: لماذا تستثمر؟",
  },
  "seo-maroc-2026": {
    fr: "SEO Maroc 2026 : les priorités pour réussir",
    ar: "SEO المغرب 2026: أولويات الظهور",
  },
  "ecommerce-maroc": {
    fr: "E-commerce au Maroc : le guide pour se lancer",
    ar: "متجر إلكتروني في المغرب: دليل الإطلاق",
  },
  "marketing-reseaux-sociaux-maroc": {
    fr: "Réseaux sociaux au Maroc : stratégie 2026",
    ar: "التواصل الاجتماعي بالمغرب: خطة 2026",
  },
  "branding-identite-maroc": {
    fr: "Branding au Maroc : bâtir une marque forte",
    ar: "هوية بصرية قوية لعلامتك في المغرب",
  },
  "performance-web-mobile-maroc": {
    fr: "Performance web : vitesse et conversion",
    ar: "أداء الويب: السرعة والتحويل",
  },
  "seo-local-maroc": {
    fr: "SEO local au Maroc : villes et visibilité",
    ar: "SEO محلي بالمغرب: ظهور أقوى",
  },
  "design-ux-maroc-2026": {
    fr: "Design UX au Maroc : des interfaces efficaces",
    ar: "تجربة المستخدم بالمغرب: واجهات فعالة",
  },
  "twilio-whatsapp-automation": {
    fr: "Automatisation WhatsApp pour vos clients",
    ar: "أتمتة واتساب لخدمة عملائك",
  },
}

export function getInsightMetaTitle(article, lang) {
  return metaTitles[article.id]?.[lang] || article.title[lang]
}
