import { getTranslation } from "../lib/i18n"
import  Navbar  from "../components/navbar"
import { Hero } from "../components/hero"
import { Services } from "../components/services"
import { Portfolio } from "../components/portfolio"
import { Testimonials } from "../components/testimonials"
import { Pricing } from "../components/pricing"
import { Contact } from "../components/contact"
import Footer from "../components/footer"
import { SocialSidebar } from "../components/social-sidebar"

export const metadata = {
  title: "Développeur Web Maroc | Création Site Web Casablanca",
  description:
    "Développeur web professionnel au Maroc. Création de sites web, e-commerce et référencement SEO à Casablanca",
  alternates: {
    canonical: "https://techdev.ma/fr",
    languages: {
      "ar-MA": "https://techdev.ma/ar",
      "fr-MA": "https://techdev.ma/fr",
    },
  },
  openGraph: {
    title: "Développeur Web Maroc | Création Site Web Casablanca",
    description: "Développeur web professionnel au Maroc. Création de sites web professionnels",
    url: "https://techdev.ma/fr",
    siteName: "DevWeb Maroc",
    locale: "fr_MA",
    type: "website",
  },
}

export default function FrenchPage() {
  const t = getTranslation("fr")

  return (
    <div className="ltr" dir="ltr">
      <SocialSidebar isRTL={false} />
      <Navbar lang="fr" t={t} />
      <Hero lang="fr" t={t} />
      <Services lang="fr" t={t} />
      <Portfolio lang="fr" t={t} />
      <Testimonials lang="fr" t={t} />
      <Pricing lang="fr" t={t} />
      <Contact lang="fr" t={t} />
      <Footer lang="fr" t={t} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "DevWeb Maroc",
            url: "https://techdev.ma",
            logo: "https://techdev.ma/logo.png",
            description: "Développeur web professionnel au Maroc",
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
