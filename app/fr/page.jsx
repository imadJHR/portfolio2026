import { getTranslation } from "../lib/i18n"
import { SITE_URL, SITE_NAME, descriptions, seoKeywords, PHONE, EMAIL, addressLine, region, geo, openingHoursSchema } from "../lib/seo"
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

const title = "Agence web à Casablanca — Sites, SEO & e-commerce"

export const metadata = {
  title,
  description: descriptions.fr,
  keywords: seoKeywords,
  alternates: {
    canonical: `${SITE_URL}/fr`,
    languages: {
      fr: `${SITE_URL}/fr`,
      ar: `${SITE_URL}/ar`,
      "x-default": `${SITE_URL}/fr`,
    },
  },
  openGraph: {
    title: `${title} | Nemsi Media`,
    description: descriptions.fr,
    url: `${SITE_URL}/fr`,
    siteName: "Nemsi Media",
    locale: "fr_MA",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nemsi Media — Agence web à Casablanca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Nemsi Media`,
    description: descriptions.fr,
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
  "@id": `${SITE_URL}/fr#webpage`,
  url: `${SITE_URL}/fr`,
  name: title,
  alternateName: ["NemsiMedia", "nemsimedia", "nemsimedia.ma"],
  description: descriptions.fr,
  inLanguage: "fr-MA",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services web de Nemsi Media",
  itemListElement: [
    "Création de sites web",
    "Landing pages",
    "Sites e-commerce",
    "Référencement SEO",
    "Refonte de sites web",
    "Applications web",
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

export default function FrenchPage() {
  const t = getTranslation("fr")

  return (
    <div className="ltr" dir="ltr">
      <SocialSidebar isRTL={false} />
      <Navbar lang="fr" t={t} />
      <main>
        <Hero lang="fr" t={t} />
        <Services lang="fr" t={t} />
        <TechStack lang="fr" />
        <Portfolio lang="fr" t={t} />
        <Testimonials lang="fr" t={t} />
        <LeadFaq lang="fr" />
        <Contact lang="fr" t={t} />
      </main>
      <Footer lang="fr" t={t} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${SITE_URL}/fr#localbusiness`,
            name: SITE_NAME,
            image: `${SITE_URL}/opengraph-image`,
            url: SITE_URL,
            telephone: PHONE,
            email: EMAIL,
            address: {
              "@type": "PostalAddress",
              streetAddress: addressLine,
              addressLocality: "Casablanca",
              addressRegion: region,
              addressCountry: "MA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: geo.lat,
              longitude: geo.lng,
            },
            openingHoursSpecification: openingHoursSchema.map((o) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: o.includes("Mo-Fr") ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] : ["Saturday"],
              opens: o.includes("Mo-Fr") ? "09:00" : "10:00",
              closes: o.includes("Mo-Fr") ? "19:00" : "15:00",
            })),
            areaServed: [
              { "@type": "City", name: "Casablanca" },
              { "@type": "City", name: "Rabat" },
              { "@type": "City", name: "Tanger" },
              { "@type": "City", name: "Marrakech" },
            ],
            priceRange: "$$",
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création de site web" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO à Casablanca" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce" } },
            ],
          }),
        }}
      />
    </div>
  )
}
