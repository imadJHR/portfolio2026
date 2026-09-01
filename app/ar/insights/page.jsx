import { InsightsIndex } from "../../components/insights-index"
import { SITE_URL } from "../../lib/seo"

const title = "نصائح حول تصميم المواقع والسيو في المغرب"
const description = "مقالات عملية حول تصميم المواقع، تحسين محركات البحث، التجارة الإلكترونية، الأداء والنمو الرقمي في المغرب."

export const metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/ar/insights`,
    languages: { fr: `${SITE_URL}/fr/insights`, ar: `${SITE_URL}/ar/insights`, "x-default": `${SITE_URL}/fr/insights` },
  },
  openGraph: { title, description, url: `${SITE_URL}/ar/insights`, locale: "ar_MA", type: "website" },
}
export default function Page() { return <InsightsIndex lang="ar" /> }
