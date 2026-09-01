import { StudioPage } from "../../components/studio-page"
import { buildLocalizedPageMetadata } from "../../lib/page-seo"

export const metadata = buildLocalizedPageMetadata({
  lang: "ar",
  path: "a-propos",
  title: "الاستوديو",
  description: "تعرف على Nemsi Media، استوديو رقمي مستقل في الدار البيضاء متخصص في الاستراتيجية والتصميم وتطوير الويب.",
})
export default function Page() { return <StudioPage lang="ar" /> }
