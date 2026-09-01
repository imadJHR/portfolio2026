import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { PageHero } from "../../components/page-hero"
import { Services } from "../../components/services"
import { buildLocalizedPageMetadata } from "../../lib/page-seo"

export const metadata = buildLocalizedPageMetadata({
  lang: "fr",
  path: "services",
  title: "Expertises digitales",
  description: "Identité, sites web, e-commerce, UI/UX, applications et SEO réunis dans une approche digitale cohérente.",
})
export default function Page() { return <div dir="ltr"><Navbar lang="fr" /><main><PageHero lang="fr" eyebrow="EXPERTISES" title="Une approche complète, sans équipe fragmentée." description="De la direction de marque au produit en ligne, nous gardons une même vision du début à la fin." /><Services lang="fr" /></main><Footer lang="fr" /></div> }
