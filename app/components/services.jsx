import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { serviceCatalog } from "../lib/service-data"

const serviceImages = [
  "/services/identity.webp",
  "/services/corporate-sites.webp",
  "/services/ecommerce.webp",
  "/services/web-apps.webp",
  "/services/ui-ux.webp",
  "/services/seo.webp",
  "/services/digital-content.webp",
  "/services/support.webp",
]

// Libellés compacts et différenciés pour la grille des services.
// Chaque entrée reste alignée avec le name/title de la page de service correspondante.
const gridLabels = {
  "branding-identite-marque": { fr: ["Identité de marque", "Logo, système visuel et lignes directrices"], en: ["Brand identity", "Logo, visual system and guidelines"] },
  "creation-site-web-maroc": { fr: ["Sites corporate", "Interfaces précises, rapides et responsives"], en: ["Corporate websites", "Precise, fast and responsive interfaces"] },
  "ecommerce-maroc": { fr: ["E-commerce", "Boutiques claires et simples à administrer"], en: ["E-commerce", "Clear online stores that are easy to manage"] },
  "application-web-sur-mesure": { fr: ["Applications web", "Plateformes et outils métier sur mesure"], en: ["Web applications", "Custom platforms and business tools"] },
  "ui-ux-identite-visuelle": { fr: ["UI/UX design", "Interfaces, parcours et design system"], en: ["UI/UX design", "Interfaces, user journeys and design systems"] },
  "seo-maroc": { fr: ["SEO & visibilité", "Fondations solides et croissance organique"], en: ["SEO & visibility", "Strong foundations and organic growth"] },
  "social-media-maroc": { fr: ["Réseaux sociaux", "Stratégie, contenu et community management"], en: ["Social media", "Strategy, content and community management"] },
  "email-marketing-maroc": { fr: ["Email marketing", "Newsletters et automatisations qui fidélisent"], en: ["Email marketing", "Newsletters and automations that build loyalty"] },
  "maintenance-site-web": { fr: ["Maintenance web", "Suivi, optimisation et amélioration continue"], en: ["Website maintenance", "Monitoring, optimisation and continuous improvement"] },
  "design-graphique-maroc": { fr: ["Design graphique", "Visuels, flyers et déclinaisons de campagne"], en: ["Graphic design", "Visuals, flyers and campaign assets"] },
  "production-photo-video-maroc": { fr: ["Photo & vidéo", "Shooting, montage et motion design"], en: ["Photo & video", "Photography, editing and motion design"] },
  "marketing-influence-maroc": { fr: ["Marketing d’influence", "Collaborations créateurs et campagnes UGC"], en: ["Influencer marketing", "Creator partnerships and UGC campaigns"] },
  "publicite-payante-maroc": { fr: ["Publicité payante", "Meta Ads, Google Ads et TikTok Ads"], en: ["Paid advertising", "Meta Ads, Google Ads and TikTok Ads"] },
  "landing-page-maroc": { fr: ["Landing pages", "Pages concentrées sur un objectif de conversion"], en: ["Landing pages", "Pages focused on a single conversion goal"] },
  "backend-api": { fr: ["Backend & API", "Architecture, base de données et intégrations"], en: ["Backend & API", "Architecture, databases and integrations"] },
}

// Regroupe les services par pôle pour la page index.
// La home conserve uniquement les services prioritaires via `homeSlugs`.
// La structure des pôles est partagée avec la navigation via `service-nav.js`.
import { serviceClusters } from "../lib/service-nav"
const clusters = serviceClusters

const homeSlugs = [
  "creation-site-web-maroc",
  "ecommerce-maroc",
  "seo-maroc",
  "landing-page-maroc",
  "application-web-sur-mesure",
  "branding-identite-marque",
  "ui-ux-identite-visuelle",
  "social-media-maroc",
]

const bySlug = Object.fromEntries(serviceCatalog.map((s) => [s.slug, s]))

export function Services({ lang, variant = "home" }) {
  const imageFor = (slug, index) => {
    const catalogIndex = serviceCatalog.findIndex((s) => s.slug === slug)
    return serviceImages[catalogIndex % serviceImages.length]
  }

  const card = (slug, index) => {
    const service = bySlug[slug]
    if (!service) return null
    const [title, description] = gridLabels[slug][lang]
    return (
      <Link href={`/${lang}/services/${slug}`} className="nm-service-card" key={slug}>
        <span className="nm-service-card__media">
          <Image src={imageFor(slug, index)} alt={lang === "en" ? `Illustration of the ${title} service` : `Illustration du service ${title}`} width={1122} height={1402} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
        </span>
        <span className="nm-service-card__number">{String(index + 1).padStart(2, "0")}</span>
        <div className="nm-service-card__content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <span className="nm-service-card__link">{lang === "en" ? "Discover" : "Découvrir"}<ArrowUpRight aria-hidden="true" /></span>
      </Link>
    )
  }

  if (variant === "index") {
    return (
      <section id="services" className="nm-services section">
        <div className="container">
          <div className="nm-section-heading">
            <span className="nm-index">01</span>
            <p className="nm-kicker">{lang === "en" ? "AREAS OF EXPERTISE" : "CHAMPS D’EXPERTISE"}</p>
            <h2>{lang === "en" ? "Fifteen areas of expertise, one vision." : "Quinze expertises, une seule vision."}</h2>
            <p>{lang === "en" ? "Our services cover the full digital brand journey: identity, website, application, marketing and maintenance." : "De l’identité au site, à l’application, au marketing et à la maintenance : tout le parcours digital."}</p>
          </div>
          {clusters.map((cluster) => (
            <div key={cluster.id} className="nm-service-cluster">
              <h3 className="nm-service-cluster__title">{lang === "en" ? cluster.en : cluster.fr}</h3>
              <div className="nm-service-grid">
                {cluster.slugs.map((slug, index) => card(slug, index))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  const services = homeSlugs
  return (
    <section id="services" className="nm-services section">
      <div className="container">
        <div className="nm-section-heading"><span className="nm-index">02</span><p className="nm-kicker">{lang === "en" ? "AREAS OF EXPERTISE" : "CHAMPS D’EXPERTISE"}</p><h2>{lang === "en" ? "Eight essential areas to get started." : "Huit expertises pour démarrer."}</h2><p>{lang === "en" ? "The usual foundation: website, identity, interfaces and acquisition. The rest is available when needed." : "Le socle habituel : le site, l’identité, les interfaces et l’acquisition. Le reste s’ajoute à la demande."}</p></div>
        <div className="nm-service-grid">{services.map((slug, index) => card(slug, index))}</div>
      </div>
    </section>
  )
}
