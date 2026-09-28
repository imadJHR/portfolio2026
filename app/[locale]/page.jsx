import { notFound } from "next/navigation"
import { getTranslation } from "../lib/i18n"
import { OG_IMAGE, SITE_URL, descriptions, seoKeywords } from "../lib/seo"
import Navbar from "../components/navbar"
import { Hero } from "../components/hero"
import { ClientLogos } from "../components/client-logos"
import { Services } from "../components/services"
import { TechStack } from "../components/tech-stack"
import { Portfolio } from "../components/portfolio"
import { Testimonials } from "../components/testimonials"
import { HomeInsights } from "../components/home-insights"
import { LeadFaq } from "../components/lead-faq"
import { Contact } from "../components/contact"
import Footer from "../components/footer"

const publicLocales = ["fr", "en"]
const isPublicLocale = (locale) => publicLocales.includes(locale)
const content = {
  fr: { title: "Agence web Casablanca — Sites, SEO, e-commerce", serviceName: "Services web de Nemsi Media", imageAlt: "Nemsi Media — Agence web à Casablanca", language: "fr-MA", services: [["creation-site-web-maroc", "Création de sites web", "Sites vitrines premium rapides, responsives et optimisés pour le SEO au Maroc."], ["landing-page-maroc", "Landing pages", "Pages concentrées sur un objectif de conversion précis."], ["ecommerce-maroc", "Sites e-commerce", "Boutiques en ligne claires et simples à administrer."], ["application-web-sur-mesure", "Applications web", "Plateformes et outils métier développés sur mesure."], ["ui-ux-identite-visuelle", "Design UI/UX", "Interfaces, parcours utilisateur et design system."], ["seo-maroc", "Référencement SEO", "Fondations techniques et croissance organique sur Google."], ["branding-identite-marque", "Identité de marque", "Logo, système visuel et lignes directrices de la marque."], ["design-graphique-maroc", "Design graphique", "Visuels, flyers et déclinaisons pour la communication."], ["production-photo-video-maroc", "Production photo & vidéo", "Shooting, montage et motion design pour le contenu."], ["social-media-maroc", "Réseaux sociaux", "Stratégie, contenu et community management."], ["email-marketing-maroc", "Email marketing", "Newsletters et automatisations pour fidéliser."], ["marketing-influence-maroc", "Marketing d’influence", "Collaborations créateurs et campagnes de contenu."], ["publicite-payante-maroc", "Publicité payante", "Meta Ads, Google Ads et TikTok Ads au Maroc."], ["maintenance-site-web", "Maintenance de sites web", "Suivi technique, optimisation et amélioration continue."], ["backend-api", "Backend & API", "Architecture, base de données et intégrations robustes."]] },
  en: { title: "Web Agency Casablanca — Websites, SEO, E-commerce", serviceName: "Nemsi Media web services", imageAlt: "Nemsi Media — Web agency in Casablanca", language: "en", services: [["creation-site-web-maroc", "Website design", "Fast, responsive premium business websites optimised for SEO in Morocco."], ["landing-page-maroc", "Landing pages", "Pages focused on one clear conversion goal."], ["ecommerce-maroc", "E-commerce websites", "Clear online stores that are simple to manage."], ["application-web-sur-mesure", "Web applications", "Custom platforms and business tools."], ["ui-ux-identite-visuelle", "UI/UX design", "Interfaces, user journeys and design systems."], ["seo-maroc", "SEO", "Technical foundations and organic growth on Google."], ["branding-identite-marque", "Brand identity", "Logo, visual system and brand guidelines."], ["design-graphique-maroc", "Graphic design", "Visuals, flyers and communication assets."], ["production-photo-video-maroc", "Photo & video production", "Photography, editing and motion design for content."], ["social-media-maroc", "Social media", "Strategy, content and community management."], ["email-marketing-maroc", "Email marketing", "Newsletters and automations that build loyalty."], ["marketing-influence-maroc", "Influencer marketing", "Creator partnerships and content campaigns."], ["publicite-payante-maroc", "Paid advertising", "Meta Ads, Google Ads and TikTok Ads in Morocco."], ["maintenance-site-web", "Website maintenance", "Technical monitoring, optimisation and continuous improvement."], ["backend-api", "Backend & API", "Architecture, databases and robust integrations."]] },
}

export const dynamicParams = false
export function generateStaticParams() { return publicLocales.map((locale) => ({ locale })) }
export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isPublicLocale(locale)) return {}
  const item = content[locale]
  const description = descriptions[locale]
  return { title: item.title, description, keywords: seoKeywords, alternates: { canonical: `${SITE_URL}/${locale}`, languages: { "fr-MA": `${SITE_URL}/fr`, en: `${SITE_URL}/en`, "x-default": `${SITE_URL}/fr` } }, openGraph: { title: `${item.title} | Nemsi Media`, description, url: `${SITE_URL}/${locale}`, siteName: "Nemsi Media", locale: locale === "en" ? "en_US" : "fr_MA", alternateLocale: [locale === "en" ? "fr_MA" : "en_US"], type: "website", images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: item.imageAlt }] }, twitter: { card: "summary_large_image", title: `${item.title} | Nemsi Media`, description, images: [OG_IMAGE] }, other: { "geo.region": "MA-CAS", "geo.placename": "Casablanca" } }
}
export default async function HomePage({ params }) {
  const { locale } = await params
  if (!isPublicLocale(locale)) notFound()
  const item = content[locale]
  const description = descriptions[locale]
  const t = getTranslation(locale)
  const pageSchema = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${SITE_URL}/${locale}#webpage`, url: `${SITE_URL}/${locale}`, name: item.title, alternateName: ["NemsiMedia", "nemsimedia", "nemsimedia.ma"], description, inLanguage: item.language, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` } }
  const serviceSchema = { "@context": "https://schema.org", "@type": "ItemList", name: item.serviceName, itemListElement: item.services.map(([slug, name, serviceDescription], index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Service", name, description: serviceDescription, url: `${SITE_URL}/${locale}/services/${slug}`, areaServed: { "@type": "Country", name: "Morocco" }, provider: { "@id": `${SITE_URL}/#organization` } } })) }
  return <div className="ltr" dir="ltr"><Navbar lang={locale} t={t} /><main><Hero lang={locale} t={t} /><ClientLogos lang={locale} /><Services lang={locale} t={t} /><TechStack lang={locale} /><Portfolio lang={locale} t={t} /><Testimonials lang={locale} t={t} /><HomeInsights lang={locale} /><LeadFaq lang={locale} /><Contact lang={locale} t={t} /></main><Footer lang={locale} t={t} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /></div>
}
