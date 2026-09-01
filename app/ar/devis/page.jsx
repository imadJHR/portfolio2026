import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import QuoteForm from "../../components/quote-form"
import { PageHero } from "../../components/page-hero"
export const metadata = { title: "طلب عرض — Nemsi Media", description: "صف مشروعك واحصل على اتجاه أولي واضح وعرض مناسب." }
export default function Page() { return <div dir="rtl"><Navbar lang="ar" /><main><PageHero lang="ar" eyebrow="مشروع جديد" title="نحدد الصورة بوضوح قبل أن نبدأ." description="بعض المعلومات تكفينا لإعداد تقدير أولي مفيد لمشروعك." /><section className="nm-form-page section"><div className="container"><div className="nm-form-page__box"><QuoteForm lang="ar" /></div></div></section></main><Footer lang="ar" /></div> }
