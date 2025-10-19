import { getTranslation } from "../lib/i18n"
import Navbar from "../components/navbar"
import { Hero } from "../components/hero"
import { Services } from "../components/services"
import { Portfolio } from "../components/portfolio"
import { Testimonials } from "../components/testimonials"
import { Contact } from "../components/contact"
import Footer from "../components/footer"
import { SocialSidebar } from "../components/social-sidebar"

export const metadata = {
  title: "Agence Web Maroc | Création Sites Web & Marketing Digital Casablanca",
  description: "🚀 Agence web au Maroc spécialisée en création de sites internet professionnels, marketing digital, SEO et e-commerce. Solutions complètes pour booster votre présence en ligne à Casablanca.",
  keywords: [
    "agence web maroc", "création site web casablanca", "marketing digital maroc",
    "référencement SEO maroc", "site e-commerce maroc", "agence digitale casablanca",
    "création site internet maroc", "stratégie digitale maroc", "campagne publicitaire maroc",
    "réseaux sociaux maroc", "google ads maroc", "email marketing maroc",
    "design web maroc", "développement web maroc", "solution digitale entreprise"
  ],
  authors: [{ name: "أتمسين | Atsmin", url: "https://NemsiMedia.ma" }],
  creator: "imad johar | souhaib messioui",
  publisher: "Nemsi Media - Agence Web Maroc",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: "https://NemsiMedia.ma/fr",
    languages: {
      "ar": "https://nemsimedia.ma/ar",
      "fr": "https://nemsimedia.ma/fr",
      "x-default": "https://nemsimedia.ma",
    },
  },

  openGraph: {
    title: "Agence Web Maroc | Création Sites Web & Marketing Digital Casablanca",
    description: "Agence web au Maroc spécialisée en création de sites internet professionnels, marketing digital, SEO et e-commerce. Solutions complètes pour entreprises.",
    url: "https://NemsiMedia.ma/fr",
    siteName: "Nemsi Media | Nemsi Media - Agence Web Maroc",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "https://nemsimedia.ma/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nemsi | Nemsi Media - Agence Web et Marketing Digital au Maroc",
        type: "image/jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@atsmin_media",
    creator: "@NemsiMedia",
    title: "Agence Web Maroc | Création Sites Web & Marketing Digital",
    description: "Agence web au Maroc - Création sites web et stratégies marketing digital",
    images: ["https://NemsiMedia.ma/logo.jpg"],
  },

  verification: {
    google: "your-google-verification-code",
  },

  category: "marketing digital",
  classification: "Création Sites Web, Marketing Digital, SEO, E-commerce, Stratégie Digitale",

  other: {
    "geo.region": "MA-CAS",
    "geo.placename": "Casablanca",
    "geo.position": "33.5731;-7.5898",
    "ICBM": "33.5731, -7.5898",
  }
}

export default function FrenchPage() {
  const t = getTranslation("fr")

  // Enhanced Structured Data for Digital Marketing Agency
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DigitalMarketingAgency",
    "name": "أتمسين | Atsmin Media",
    "alternateName": ["Atsmin Media", "أتمسين ميديا"],
    "description": "Agence web au Maroc spécialisée en création de sites internet professionnels, marketing digital, SEO et solutions e-commerce",
    "url": "https://NemsiMedia.ma",
    "logo": "https://NemsiMedia.ma/logo.png",
    "image": "https://NemsiMedia.ma/agency-portrait.jpg",
    "foundingDate": "2024",

    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MA",
      "addressRegion": "Casablanca-Settat",
      "addressLocality": "Casablanca",
      "postalCode": "20000",
      "streetAddress": "Centre Ville"
    },

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+212-XXX-XXXXXX",
      "contactType": "customer service",
      "areaServed": "MA",
      "availableLanguage": ["fr", "ar"],
      "email": "contact@NemsiMedia.ma"
    },

    "sameAs": [
      'https://github.com/imadJHR',
      'https://www.linkedin.com/company/nemsi-media',
      'https://www.instagram.com/nemsimedia/',
    ],

    "knowsAbout": [
      "Web Development",
      "Digital Marketing",
      "SEO Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Google Ads",
      "E-commerce Solutions",
      "UI/UX Design",
      "Brand Strategy",
      "Marketing Automation",
      "Analytics & Reporting",
      "Conversion Rate Optimization",
      "Responsive Web Design",
      "WordPress Development",
      "Shopify Development"
    ],

    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Création de Sites Web",
          "description": "Sites web professionnels, responsives et optimisés pour le référencement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stratégie Marketing Digital",
          "description": "Plans marketing personnalisés pour augmenter votre visibilité en ligne"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Référencement SEO",
          "description": "Optimisation pour les moteurs de recherche et amélioration du classement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestion des Réseaux Sociaux",
          "description": "Gestion complète de votre présence sur les médias sociaux"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Campagnes Publicitaires",
          "description": "Campagnes Google Ads et réseaux sociaux ciblées"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solutions E-commerce",
          "description": "Boutiques en ligne avec systèmes de paiement sécurisés"
        }
      }
    ],

    "areaServed": {
      "@type": "Country",
      "name": "Morocco"
    },

    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 33.5731,
        "longitude": -7.5898
      },
      "geoRadius": "500000"
    },

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Services d'Agence Web et Marketing Digital",
    "description": "Services complets de création web et marketing digital pour entreprises au Maroc",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Création de Sites Web",
          "description": "Sites web professionnels, responsives et optimisés SEO pour tous les appareils",
          "provider": {
            "@type": "Organization",
            "name": "Nemsi Media | Nemsi Media"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Marketing Digital",
          "description": "Stratégies digitales complètes pour augmenter votre visibilité en ligne",
          "provider": {
            "@type": "Organization",
            "name": "Nemsi Media | Nemsi Media"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Référencement SEO",
          "description": "Optimisation pour les moteurs de recherche et amélioration du trafic organique",
          "provider": {
            "@type": "Organization",
            "name":"Nemsi Media | Nemsi Media"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "E-commerce",
          "description": "Boutiques en ligne avec systèmes de paiement marocains et gestion de stock",
          "provider": {
            "@type": "Organization",
            "name": "Nemsi Media | Nemsi Media"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "Réseaux Sociaux",
          "description": "Gestion complète des plateformes sociales et création de contenu engageant",
          "provider": {
            "@type": "Organization",
            "name": "Nemsi Media | Nemsi Media"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "Campagnes Publicitaires",
          "description": "Campagnes ciblées Google Ads et réseaux sociaux pour maximiser le ROI",
          "provider": {
            "@type": "Organization",
            "name": "Nemsi Media | Nemsi Media"
          }
        }
      }
    ]
  }

  return (
    <div className="ltr" dir="ltr">
      <SocialSidebar isRTL={false} />
      <Navbar lang="fr" t={t} />
      <Hero lang="fr" t={t} />
      <Services lang="fr" t={t} />
      <Portfolio lang="fr" t={t} />
      <Testimonials lang="fr" t={t} />
      <Contact lang="fr" t={t} />
      <Footer lang="fr" t={t} />

      {/* Enhanced JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
    </div>
  )
}