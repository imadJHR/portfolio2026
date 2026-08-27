import Navbar from "../../components/navbar"
import { Services } from "../../components/services"
import Footer from "../../components/footer"
import { SocialSidebar } from "../../components/social-sidebar"
import { buildServicesIndexMetadata } from "../../lib/services-index-seo"

const title = "خدماتنا — نمسي ميديا"
const description =
  "اكتشف جميع خدمات نمسي ميديا: الهوية والعلامة، التصميم الجرافيكي، الصور والفيديو، وسائل التواصل، الإعلانات، البريد، المواقع، UI/UX، صفحات الهبوط، المتاجر، SEO، الصيانة، وتطبيقات الويب."

export const metadata = {
  title,
  description,
  ...buildServicesIndexMetadata("ar"),
  openGraph: {
    title: `${title} | Nemsi Media`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Nemsi Media`,
    description,
  },
}

export default function ArabicServicesIndex() {
  return (
    <div className="rtl" dir="rtl">
      <SocialSidebar isRTL />
      <Navbar lang="ar" t={undefined} />
      <main>
        <section className="section relative pt-28 sm:pt-32">
          <div className="container text-center">
            <div className="divider mb-6" />
            <h1 className="mb-4 text-[clamp(2rem,6vw,3.5rem)] font-bold">
              <span className="gradient-text">خدماتنا</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg">
              نظام رقمي متكامل لنموك: تصميم واضح، تطوير سريع، وتجربة موبايل ممتازة.
            </p>
          </div>
        </section>
        <Services lang="ar" />
      </main>
      <Footer lang="ar" t={undefined} />
    </div>
  )
}
