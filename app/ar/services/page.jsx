import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { PageHero } from "../../components/page-hero"
import { Services } from "../../components/services"
import { buildLocalizedPageMetadata } from "../../lib/page-seo"

export const metadata = buildLocalizedPageMetadata({
  lang: "ar",
  path: "services",
  title: "وكالة رقمية في الدار البيضاء — خبرات الويب",
  description: "وكالة رقمية في الدار البيضاء تجمع الهوية والمواقع والتجارة الإلكترونية وUI/UX والتسويق الرقمي وSEO ضمن رؤية متكاملة.",
})
export default function Page() { return <div dir="rtl"><Navbar lang="ar" /><main><PageHero lang="ar" eyebrow="الخبرات" title="وكالة رقمية في الدار البيضاء برؤية متكاملة." description="من استراتيجية العلامة إلى الموقع وSEO والتسويق الرقمي، نحافظ على رؤية واحدة من البداية إلى النهاية." /><Services lang="ar" /></main><Footer lang="ar" /></div> }
