import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { PageHero } from "../../components/page-hero"
import { Services } from "../../components/services"
import { buildLocalizedPageMetadata } from "../../lib/page-seo"

export const metadata = buildLocalizedPageMetadata({
  lang: "fr",
  path: "services",
  title: "Agence digitale Casablanca — Expertises web",
  description: "Agence digitale à Casablanca : stratégie de marque, sites web, e-commerce, UI/UX, applications, marketing digital et SEO au Maroc.",
})
export default function Page() { return <div dir="ltr"><Navbar lang="fr" /><main><PageHero lang="fr" eyebrow="EXPERTISES" title="Une agence digitale à Casablanca, une vision complète." description="De la stratégie de marque au site, au SEO et au marketing digital, nous gardons une même vision du début à la fin." /><Services lang="fr" /></main><Footer lang="fr" /></div> }
