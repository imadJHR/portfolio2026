import { serviceCatalog } from "./service-data"

// Unique source de vérité des pôles de services, utilisée par la navigation
// (navbar, menu mobile) et par la page d'index des services.
// Les libellés et les slugs viennent du serviceCatalog : aucune liste
// de services n'est dupliquée ici.
export const serviceClusters = [
  { id: "web", fr: "Web & Développement", en: "Web & Development", slugs: ["creation-site-web-maroc", "landing-page-maroc", "ecommerce-maroc", "application-web-sur-mesure", "backend-api"] },
  { id: "marketing", fr: "Marketing & Acquisition", en: "Marketing & Acquisition", slugs: ["seo-maroc", "publicite-payante-maroc", "social-media-maroc", "email-marketing-maroc", "marketing-influence-maroc"] },
  { id: "brand", fr: "Brand & Contenu", en: "Brand & Content", slugs: ["branding-identite-marque", "ui-ux-identite-visuelle", "design-graphique-maroc", "production-photo-video-maroc", "maintenance-site-web"] },
]

const bySlug = Object.fromEntries(serviceCatalog.map((service) => [service.slug, service]))

// Construit la structure de navigation : 3 pôles, chacun avec ses services
// libellés dans la langue courante. Les liens sont générés depuis le catalogue.
export function navServices(locale) {
  return serviceClusters.map((cluster) => ({
    id: cluster.id,
    label: cluster[locale] || cluster.fr,
    items: cluster.slugs
      .map((slug) => bySlug[slug])
      .filter(Boolean)
      .map((service) => ({ slug: service.slug, name: (service[locale] || service.fr).name })),
  }))
}

export const allServiceSlugs = serviceCatalog.map((service) => service.slug)
