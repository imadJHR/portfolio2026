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
  title: "نمسي ميديا - وكالة ويب المغرب | تصميم مواقع إلكترونية وتسويق رقمي",
  description: "🚀 وكالة نمسي ميديا في المغرب متخصصة في تصميم مواقع الإنترنت الاحترافية، التسويق الرقمي، تحسين محركات البحث والتجارة الإلكترونية. حلول شاملة للشركات المغربية.",
  keywords: [
    "وكالة ويب المغرب", "تصميم مواقع المغرب", "وكالة رقمية الدار البيضاء",
    "وكالة تسويق رقمي المغرب", "متجر إلكتروني المغرب", "تحسين محركات البحث المغرب",
    "تطوير مواقع المغرب", "تصميم ويب المغرب", "حلول رقمية للشركات المغرب",
    "تطبيق ويب المغرب", "تصميم متجاوب المغرب", "استضافة مواقع المغرب",
    "صيانة مواقع المغرب", "استشارات رقمية المغرب", "استراتيجية رقمية المغرب",
    "وكالة ويب الدار البيضاء", "إنشاء موقع إنترنت المغرب", "اتصالات رقمية المغرب",
    "تدقيق سيو المغرب", "حملة إعلانية المغرب", "وسائل التواصل الاجتماعي المغرب",
    "نمسي ميديا", "Nemsi Media", "Nemsimedia"
  ],
  authors: [{ name: "نمسي ميديا | Nemsi Media", url: "https://nemsimedia.ma" }],
  creator: "نمسي ميديا | Nemsi Media",
  publisher: "نمسي ميديا - وكالة ويب المغرب",
  
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
    canonical: "https://nemsimedia.ma/ar",
    languages: {
      "ar": "https://nemsimedia.ma/ar",
      "fr": "https://nemsimedia.ma/fr",
      "x-default": "https://nemsimedia.ma",
    },
  },

  openGraph: {
    title: "نمسي ميديا - وكالة ويب المغرب | تصميم مواقع إلكترونية وتسويق رقمي",
    description: "وكالة نمسي ميديا في المغرب متخصصة في تصميم مواقع الإنترنت الاحترافية، التسويق الرقمي، تحسين محركات البحث والتجارة الإلكترونية.",
    url: "https://nemsimedia.ma/ar",
    siteName: "نمسي ميديا | Nemsi Media - وكالة ويب المغرب",
    locale: "ar_MA",
    type: "website",
    images: [
      {
        url: "https://nemsimedia.ma/og-image-ar.jpg",
        width: 1200,
        height: 630,
        alt: "نمسي ميديا | Nemsi Media - وكالة ويب وتصميم مواقع في المغرب",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@nemsimedia_ma",
    creator: "@nemsimedia_ma",
    title: "نمسي ميديا - وكالة ويب المغرب | تصميم مواقع وتسويق رقمي",
    description: "وكالة نمسي ميديا في المغرب - تصميم مواقع إلكترونية واستراتيجيات تسويق رقمي",
    images: ["https://nemsimedia.ma/twitter-image-ar.jpg"],
  },

  verification: {
    google: "your-google-verification-code",
  },

  category: "تكنولوجيا",
  classification: "تصميم مواقع الإنترنت, التسويق الرقمي, التجارة الإلكترونية, تحسين محركات البحث",

  other: {
    "geo.region": "MA-CAS",
    "geo.placename": "الدار البيضاء",
    "geo.position": "33.5731;-7.5898",
    "ICBM": "33.5731, -7.5898",
  }
}

export default function ArabicPage() {
  const t = getTranslation("ar")

  // Enhanced Structured Data for Digital Marketing Agency
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DigitalMarketingAgency",
    "name": "نمسي ميديا | Nemsi Media",
    "alternateName": ["Nemsi Media", "نمسي ميديا", "Nemsimedia"],
    "description": "وكالة ويب في المغرب متخصصة في تصميم مواقع الإنترنت الاحترافية، التسويق الرقمي، تحسين محركات البحث والتجارة الإلكترونية",
    "url": "https://nemsimedia.ma",
    "logo": "https://nemsimedia.ma/logo.png",
    "image": "https://nemsimedia.ma/agency-portrait.jpg",
    "foundingDate": "2024",
    
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MA",
      "addressRegion": "جهة الدار البيضاء-سطات",
      "addressLocality": "الدار البيضاء",
      "postalCode": "20000",
      "streetAddress": "وسط المدينة"
    },
    
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+212-645-288216",
      "contactType": "customer service",
      "areaServed": "MA",
      "availableLanguage": ["ar", "fr"],
      "email": "imadjohar4@gmail.com"
    },
    
    "sameAs": [
      "https://github.com/imadJHR",
      "https://linkedin.com/company/nemsi-media",
      "https://twitter.com/nemsimedia_ma",
      "https://www.instagram.com/nemsimedia/",
      "https://www.facebook.com/nemsimedia.ma"
    ],
    
    "knowsAbout": [
      "تطوير الويب",
      "التسويق الرقمي",
      "تحسين محركات البحث",
      "التسويق عبر وسائل التواصل الاجتماعي",
      "التسويق بالمحتوى",
      "التسويق عبر البريد الإلكتروني",
      "إعلانات جوجل",
      "حلول التجارة الإلكترونية",
      "تصميم واجهة المستخدم",
      "استراتيجية العلامة التجارية",
      "أتمتة التسويق",
      "التحليلات والتقارير",
      "تحسين معدل التحويل",
      "التصميم المتجاوب",
      "تطوير ووردبريس",
      "تطوير شوبيفاي"
    ],
    
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "تصميم مواقع الويب",
          "description": "مواقع ويب احترافية، متجاوبة ومحسنة لمحركات البحث"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "استراتيجية التسويق الرقمي",
          "description": "خطط تسويق مخصصة لزيادة ظهورك على الإنترنت"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "تحسين محركات البحث",
          "description": "تحسين لمحركات البحث وتحسين التصنيف"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "إدارة وسائل التواصل الاجتماعي",
          "description": "إدارة شاملة لوجودك على وسائل التواصل الاجتماعي"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "الحملات الإعلانية",
          "description": "حملات إعلانية مستهدفة على جوجل ووسائل التواصل الاجتماعي"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "حلول التجارة الإلكترونية",
          "description": "متاجر إلكترونية بأنظمة دفع آمنة"
        }
      }
    ],
    
    "areaServed": {
      "@type": "Country",
      "name": "المغرب"
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
    "name": "خدمات وكالة ويب والتسويق الرقمي",
    "description": "خدمات شاملة لتصميم الويب والتسويق الرقمي للشركات في المغرب",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "تصميم مواقع الويب",
          "description": "مواقع ويب احترافية، متجاوبة ومحسنة لمحركات البحث لجميع الأجهزة",
          "provider": {
            "@type": "Organization",
            "name": "نمسي ميديا | Nemsi Media"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "التسويق الرقمي",
          "description": "استراتيجيات رقمية شاملة لزيادة ظهورك على الإنترنت",
          "provider": {
            "@type": "Organization",
            "name": "نمسي ميديا | Nemsi Media"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "تحسين محركات البحث",
          "description": "تحسين لمحركات البحث وزيادة الحركة العضوية",
          "provider": {
            "@type": "Organization",
            "name": "نمسي ميديا | Nemsi Media"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "التجارة الإلكترونية",
          "description": "متاجر إلكترونية بأنظمة دpayment مغربية وإدارة المخزون",
          "provider": {
            "@type": "Organization",
            "name": "نمسي ميديا | Nemsi Media"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "وسائل التواصل الاجتماعي",
          "description": "إدارة شاملة لمنصات التواصل الاجتماعي وإنشاء محتوى جذاب",
          "provider": {
            "@type": "Organization",
            "name": "نمسي ميديا | Nemsi Media"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "الحملات الإعلانية",
          "description": "حملات مستهدفة على إعلانات جوجل ووسائل التواصل الاجتماعي لتعظيم العائد على الاستثمار",
          "provider": {
            "@type": "Organization",
            "name": "نمسي ميديا | Nemsi Media"
          }
        }
      }
    ]
  }

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