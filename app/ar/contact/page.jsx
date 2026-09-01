import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { PageHero } from "../../components/page-hero"
import { Contact } from "../../components/contact"
import { buildLocalizedPageMetadata } from "../../lib/page-seo"

export const metadata = buildLocalizedPageMetadata({
  lang: "ar",
  path: "contact",
  title: "اتصل بنا",
  description: "حدثنا عن مشروعك الرقمي وسنجيبك باتجاه أولي واضح خلال 24 ساعة.",
})
export default function Page() { return <div dir="rtl"><Navbar lang="ar" /><main><PageHero lang="ar" eyebrow="اتصل بنا" title="كل مشروع جيد يبدأ بمحادثة بسيطة." description="شاركنا السياق والهدف والوقت الذي تريد أن تبدأ فيه." /><Contact lang="ar" /></main><Footer lang="ar" /></div> }
