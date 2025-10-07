import { getTranslation } from "../lib/i18n"
import Navbar from "../components/navbar"
import {Hero} from "../components/hero"
import {Services} from "../components/services"
import {Portfolio} from "../components/portfolio"
import {Testimonials} from "../components/testimonials"
import {Contact} from "../components/contact"
import Footer from "../components/footer"
import {SocialSidebar} from "../components/social-sidebar"

export const metadata = {
  title: "مطور مواقع في المغرب | تصميم موقع إلكتروني احترافي",
  description: "مطور مواقع محترف في المغرب. تصميم مواقع إلكترونية احترافية، متاجر إلكترونية، وتحسين محركات البحث SEO",
  alternates: {
    canonical: "https://techdev.ma/ar",
    languages: {
      "ar-MA": "https://techdev.ma/ar",
      "fr-MA": "https://techdev.ma/fr",
    },
  },
  openGraph: {
    title: "مطور مواقع في المغرب | تصميم موقع إلكتروني احترافي",
    description: "مطور مواقع محترف في المغرب. تصميم مواقع إلكترونية احترافية",
    url: "https://techdev.ma/ar",
    siteName: "مطور مواقع المغرب",
    locale: "ar_MA",
    type: "website",
  },
}

export default function ArabicPage() {
  const t = getTranslation("ar")

  return (
    <div className="rtl" dir="rtl">
      <SocialSidebar isRTL={true} />
      <Navbar lang="ar" t={t} />
      <Hero lang="ar" t={t} />
      <Services lang="ar" t={t} />
      <Portfolio lang="ar" t={t} />
      <Testimonials lang="ar" t={t} />
      <Contact lang="ar" t={t} />
      <Footer lang="ar" t={t} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "مطور مواقع المغرب",
            url: "https://techdev.ma",
            logo: "https://techdev.ma/logo.png",
            description: "مطور مواقع محترف في المغرب",
            address: {
              "@type": "PostalAddress",
              addressCountry: "MA",
            },
            sameAs: ["https://github.com/yourprofile", "https://linkedin.com/in/yourprofile"],
          }),
        }}
      />
    </div>
  )
}