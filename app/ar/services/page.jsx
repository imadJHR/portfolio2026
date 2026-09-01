import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { PageHero } from "../../components/page-hero"
import { Services } from "../../components/services"
export const metadata = { title: "الخبرات — Nemsi Media", description: "الهوية والمواقع والتجارة الإلكترونية وUI/UX والتطبيقات وSEO ضمن رؤية رقمية متكاملة." }
export default function Page() { return <div dir="rtl"><Navbar lang="ar" /><main><PageHero lang="ar" eyebrow="الخبرات" title="مقاربة متكاملة، بدون فرق مشتتة." description="من اتجاه العلامة إلى المنتج المنشور، نحافظ على رؤية واحدة من البداية إلى النهاية." /><Services lang="ar" /></main><Footer lang="ar" /></div> }
