import { InsightsIndex } from "../../components/insights-index"
import { SITE_URL } from "../../lib/seo"

const title = "Conseils web, SEO et design au Maroc"
const description = "Conseils pratiques sur la création de sites web, le SEO, l’e-commerce, la performance et le design digital au Maroc."

export const metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/fr/insights`,
    languages: { fr: `${SITE_URL}/fr/insights`, ar: `${SITE_URL}/ar/insights`, "x-default": `${SITE_URL}/fr/insights` },
  },
  openGraph: { title, description, url: `${SITE_URL}/fr/insights`, locale: "fr_MA", type: "website" },
}
export default function Page() { return <InsightsIndex lang="fr" /> }
