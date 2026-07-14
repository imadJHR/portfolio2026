import { getTranslation } from "../lib/i18n"
import { SITE_URL, descriptions } from "../lib/seo"
import Navbar from "../components/navbar"
import { Hero } from "../components/hero"
import { Services } from "../components/services"
import { TechStack } from "../components/tech-stack"
import { Portfolio } from "../components/portfolio"
import { Testimonials } from "../components/testimonials"
import { LeadFaq } from "../components/lead-faq"
import { Contact } from "../components/contact"
import Footer from "../components/footer"
import { SocialSidebar } from "../components/social-sidebar"

const title = "وكالة ويب في الدار البيضاء — تصميم مواقع وSEO"

export const metadata = {
  title,
  description: descriptions.ar,
  alternates: {
    canonical: `${SITE_URL}/ar`,
    languages: {
      fr: `${SITE_URL}/fr`,
      ar: `${SITE_URL}/ar`,
      "x-default": `${SITE_URL}/fr`,
    },
  },
  openGraph: {
    title: `${title} | Nemsi Media`,
    description: descriptions.ar,
    url: `${SITE_URL}/ar`,
    siteName: "Nemsi Media",
    locale: "ar_MA",
    alternateLocale: ["fr_MA"],
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nemsi Media — وكالة ويب في الدار البيضاء" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Nemsi Media`,
    description: descriptions.ar,
    images: ["/opengraph-image"],
  },
  other: {
    "geo.region": "MA-CAS",
    "geo.placename": "Casablanca",
  },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/ar#webpage`,
  url: `${SITE_URL}/ar`,
  name: title,
  description: descriptions.ar,
  inLanguage: "ar-MA",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "خدمات Nemsi Media الرقمية",
  itemListElement: [
    "تصميم مواقع الشركات",
    "صفحات الهبوط",
    "المتاجر الإلكترونية",
    "تحسين محركات البحث",
    "إعادة تصميم المواقع",
    "تطبيقات الويب",
  ].map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name,
      areaServed: { "@type": "Country", name: "Morocco" },
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  })),
}

export default function ArabicPage() {
  const t = getTranslation("ar")

  return (
    <div className="rtl" dir="rtl">
      <SocialSidebar isRTL />
      <Navbar lang="ar" t={t} />
      <main>
        <Hero lang="ar" t={t} />
        <Services lang="ar" t={t} />
        <TechStack lang="ar" />
        <Portfolio lang="ar" t={t} />
        <Testimonials lang="ar" t={t} />
        <LeadFaq lang="ar" />
        <Contact lang="ar" t={t} />
      </main>
      <Footer lang="ar" t={t} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </div>
  )
}
