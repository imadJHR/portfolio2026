export const insightLinks = {
  "site-web-premium-maroc": {
    service: "creation-site-web-maroc",
    related: ["performance-web-mobile-maroc", "design-ux-maroc-2026"],
  },
  "seo-maroc-2026": {
    service: "seo-maroc",
    related: ["seo-local-maroc", "performance-web-mobile-maroc"],
  },
  "ecommerce-maroc": {
    service: "ecommerce-maroc",
    related: ["performance-web-mobile-maroc", "seo-maroc-2026"],
  },
  "marketing-reseaux-sociaux-maroc": {
    service: "social-media-maroc",
    related: ["branding-identite-maroc", "twilio-whatsapp-automation"],
  },
  "branding-identite-maroc": {
    service: "branding-identite-marque",
    related: ["design-ux-maroc-2026", "marketing-reseaux-sociaux-maroc"],
  },
  "performance-web-mobile-maroc": {
    service: "maintenance-site-web",
    related: ["seo-maroc-2026", "design-ux-maroc-2026"],
  },
  "seo-local-maroc": {
    service: "seo-maroc",
    related: ["seo-maroc-2026", "site-web-premium-maroc"],
  },
  "design-ux-maroc-2026": {
    service: "ui-ux-identite-visuelle",
    related: ["branding-identite-maroc", "performance-web-mobile-maroc"],
  },
  "twilio-whatsapp-automation": {
    service: "application-web-sur-mesure",
    related: ["ecommerce-maroc", "marketing-reseaux-sociaux-maroc"],
  },
}

export function getInsightLinks(id) {
  return insightLinks[id]
}
