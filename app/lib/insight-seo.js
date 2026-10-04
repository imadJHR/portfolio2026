const metaTitles = {
  "site-web-premium-maroc": {
    en: "Premium website in Morocco: is it worth investing?",
    fr: "Site web premium au Maroc : quand investir ?",
  },
  "seo-maroc-2026": {
    en: "SEO in Morocco 2026: priorities for success",
    fr: "SEO Maroc 2026 : les priorités pour réussir",
  },
  "ecommerce-maroc": {
    en: "E-commerce in Morocco: a guide to getting started",
    fr: "E-commerce au Maroc : le guide pour se lancer",
  },
  "marketing-reseaux-sociaux-maroc": {
    en: "Social media in Morocco: 2026 strategy",
    fr: "Réseaux sociaux au Maroc : stratégie 2026",
  },
  "branding-identite-maroc": {
    en: "Branding in Morocco: building a strong brand",
    fr: "Branding au Maroc : bâtir une marque forte",
  },
  "performance-web-mobile-maroc": {
    en: "Web performance: speed and conversion",
    fr: "Performance web mobile : mesurer et corriger",
  },
  "seo-local-maroc": {
    en: "Local SEO in Morocco: cities and visibility",
    fr: "SEO local au Maroc : méthode et visibilité",
  },
  "design-ux-maroc-2026": {
    en: "UX design in Morocco: effective interfaces",
    fr: "Design UX au Maroc : améliorer les parcours",
  },
  "twilio-whatsapp-automation": {
    en: "WhatsApp automation for your customers",
    fr: "Automatisation WhatsApp avec Twilio : méthode",
  },
  "landing-page-ou-site-vitrine": {
    en: "Landing Page vs Business Website: Which to Choose?",
    fr: "Landing page ou site vitrine : lequel choisir ?",
  },
  "newsletter-entreprise-audience-existante": {
    en: "Business Newsletter: Plan for an Existing Audience",
    fr: "Newsletter d’entreprise : planifier pour son audience",
  },
  "preparer-catalogue-produit-ecommerce": {
    en: "How to Prepare a Product Catalogue for an E-commerce Website",
    fr: "Préparer un catalogue produit avant un site e-commerce",
  },
  "seo-avant-refonte-site": {
    en: "SEO Before a Website Redesign: What to Prepare",
    fr: "SEO avant une refonte de site : les points à préparer",
  },
  "prix-seo-maroc": {
    fr: "Prix SEO au Maroc : tarifs, budgets et devis",
  },
  "prix-creation-site-web-maroc": {
    fr: "Prix site web au Maroc : budget et devis",
  },
  "site-sur-mesure-ou-template": {
    fr: "Site sur mesure ou template au Maroc ?",
  },
}

export function getInsightMetaTitle(article, lang) {
  return metaTitles[article.id]?.[lang] || article.title[lang]
}
