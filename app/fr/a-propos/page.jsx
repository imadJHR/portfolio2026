import { StudioPage } from "../../components/studio-page"
import { buildLocalizedPageMetadata } from "../../lib/page-seo"

export const metadata = buildLocalizedPageMetadata({
  lang: "fr",
  path: "a-propos",
  title: "Le studio",
  description: "Découvrez Nemsi Media, studio digital indépendant à Casablanca spécialisé en stratégie, design et développement web.",
})
export default function Page() { return <StudioPage lang="fr" /> }
