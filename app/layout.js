import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// --- SEO METADATA ---
const siteUrl = "https://nemsimedia.ma";
const siteName = "Nemsi Media Maroc - Agence Création Sites Web & Marketing Digital";
const siteDescription = {
  fr: "Agence web au Maroc spécialisée en création de sites internet professionnels, marketing digital, SEO et e-commerce. Solutions complètes pour entreprises marocaines.",
  ar: "وكالة ويب في المغرب متخصصة في تصميم مواقع الإنترنت الاحترافية، التسويق الرقمي، تحسين محركات البحث والتجارة الإلكترونية. حلول شاملة للشركات المغربية."
};

export const metadata = {
  metadataBase: new URL(siteUrl),

  // Title templates
  title: {
    default: "Nemsi Media Maroc - Agence Création Sites Web & Marketing Digital | وكالة تصميم مواقع وتسويق رقمي المغرب",
    template: `%s | ${siteName}`,
  },

  description: siteDescription.fr,

  // Comprehensive keywords for Moroccan market
  keywords: [
    // French keywords - Agency focus
    "agence web maroc", "création site web maroc", "agence digitale casablanca",
    "agence marketing digital maroc", "site e-commerce maroc", "référencement SEO maroc",
    "développement web maroc", "design web maroc", "solution digitale entreprise maroc",
    "application web maroc", "responsive design maroc", "hébergement web maroc",
    "maintenance site web maroc", "consultant digital maroc", "stratégie digitale maroc",
    "agence web casablanca", "création site internet maroc", "communication digitale maroc",
    "audit seo maroc", "campagne publicitaire maroc", "réseaux sociaux maroc",

    // Arabic keywords - Agency focus
    "وكالة ويب المغرب", "تصميم مواقع المغرب", "وكالة رقمية الدار البيضاء",
    "وكالة تسويق رقمي المغرب", "متجر إلكتروني المغرب", "تحسين محركات البحث المغرب",
    "تطوير مواقع المغرب", "تصميم ويب المغرب", "حلول رقمية للشركات المغرب",
    "تطبيق ويب المغرب", "تصميم متجاوب المغرب", "استضافة مواقع المغرب",
    "صيانة مواقع المغرب", "استشارات رقمية المغرب", "استراتيجية رقمية المغرب",
    "وكالة ويب الدار البيضاء", "إنشاء موقع إنترنت المغرب", "اتصالات رقمية المغرب",
    "تدقيق سيو المغرب", "حملة إعلانية المغرب", "وسائل التواصل الاجتماعي المغرب"
  ],

  authors: [{ name: "Nemsi Media Maroc", url: siteUrl }],
  creator: "Nemsi Media Maroc",
  publisher: "Nemsi Media Maroc - Agence Web",

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification for search engines
  verification: {
    google: "your-google-verification-code",
  },

  // --- Open Graph for Social Media ---
  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["ar_MA", "fr_FR"],
    url: siteUrl,
    siteName: siteName,
    title: "Nemsi Media Maroc - Agence Création Sites Web & Marketing Digital",
    description: siteDescription.fr,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nemsi Media Maroc - Agence Création Sites Web & Marketing Digital au Maroc",
        type: "image/jpeg",
      },
    ],
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    site: "@Nemsi Media_maroc",
    creator: "@Nemsi Media_maroc",
    title: "Nemsi Media Maroc - Agence Création Sites Web & Marketing Digital",
    description: siteDescription.fr,
    images: ["/twitter-image.jpg"],
  },

  // --- Icons and Manifest ---
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#520371",
      },
    ],
  },

  manifest: "/manifest.json",

  // --- Multilingual SEO ---
  alternates: {
    canonical: siteUrl,
    languages: {
      'fr': `${siteUrl}/fr`,
      'ar': `${siteUrl}/ar`,
      'x-default': siteUrl,
    },
  },

  // --- Additional SEO ---
  category: "technology",
  classification: "Web Development, Digital Marketing, E-commerce, Web Agency",

  // --- Additional Meta Tags ---
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "facebook-domain-verification": "your-facebook-verification",
  }
};

// Enhanced Structured Data for Digital Marketing Agency
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'DigitalMarketingAgency',
  'name': 'Nemsi Media Maroc',
  'alternateName': ['Nemsi Media Morocco', 'نمسي ميديا المغرب', 'NemsiMedia Agence Web'],
  'url': siteUrl,
  'logo': `${siteUrl}/logo.jpg`,
  'description': siteDescription.fr,
  'foundingDate': '2024',
  'founders': [
    {
      '@type': 'Person',
      'name': 'Imad Johar'
    }
  ],
  'sameAs': [
    'https://github.com/imadJHR',
    'https://www.linkedin.com/company/nemsi-media',
    'https://www.instagram.com/nemsimedia/',
  ],
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Centre Ville',
    'addressLocality': 'Casablanca',
    'postalCode': '20000',
    'addressCountry': 'MA',
    'addressRegion': 'Casablanca-Settat'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+212-645-288216',
    'contactType': 'customer service',
    'areaServed': 'MA',
    'availableLanguage': ['fr', 'ar'],
    'email': 'imadjohar4@gmail.com'
  },
  'areaServed': {
    '@type': 'Country',
    'name': 'Morocco'
  },
  'serviceArea': {
    '@type': 'GeoCircle',
    'geoMidpoint': {
      '@type': 'GeoCoordinates',
      'latitude': 33.5731,
      'longitude': -7.5898
    },
    'geoRadius': '500000'
  },
  'knowsAbout': [
    'Web Development',
    'Full Stack Development',
    'Front-End Development',
    'Back-End Development',
    'API Integration',
    'Database Management',
    'MongoDB',
    'Express.js',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'ShadCN UI',
    'JavaScript',
    'TypeScript',
    'UI/UX Design',
    'Web Design',
    'Responsive Design',
    'SEO',
    'Digital Marketing',
    'Social Media Marketing',
    'Email Marketing',
    'Content Marketing',
    'Brand Strategy',
    'E-commerce',
    'Payment Integration',
    'CMS Integration',
    'Website Optimization',
    'Performance Tuning',
    'Web Security',
    'Version Control (Git/GitHub)',
    'Deployment & Hosting',
    'RESTful APIs',
    'Nodemailer',
    'Axios',
    'NextAuth',
    'Stripe Integration',
    'Cloud Services',
    'Google Analytics',
    'Copywriting',
    'Creative Direction',
    'Graphic Design',
    'UI Animation',
    'Conversion Rate Optimization'
  ]
  ,
  'makesOffer': [
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Création de Sites Web',
        'description': 'Développement de sites web professionnels et responsives'
      }
    },
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Marketing Digital',
        'description': 'Stratégies de marketing digital et campagnes publicitaires'
      }
    },
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'Référencement SEO',
        'description': 'Optimisation pour les moteurs de recherche'
      }
    },
    {
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Service',
        'name': 'E-commerce Solutions',
        'description': 'Développement de boutiques en ligne'
      }
    }
  ],
  'priceRange': '$$',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'reviewCount': '50',
    'bestRating': '5',
    'worstRating': '1'
  }
};

// Additional Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'name': 'Services de l\'agence NesmiMedia Maroc',
  'description': 'Services complets de création web et marketing digital',
  'numberOfItems': 6,
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'item': {
        '@type': 'Service',
        'name': 'Création de Sites Web',
        'description': 'Sites web professionnels responsifs et optimisés SEO',
        'provider': {
          '@type': 'Organization',
          'name': 'Nemsi Media Maroc'
        },
        'areaServed': 'Morocco',
        'audience': 'Entreprises marocaines'
      }
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'item': {
        '@type': 'Service',
        'name': 'E-commerce',
        'description': 'Boutiques en ligne avec systèmes de paiement marocains',
        'provider': {
          '@type': 'Organization',
          'name': 'Nemsi Media '
        }
      }
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'item': {
        '@type': 'Service',
        'name': 'Marketing Digital & SEO',
        'description': 'Stratégies digitales et optimisation pour Google',
        'provider': {
          '@type': 'Organization',
          'name': 'Nemsi Media '
        }
      }
    },
    {
      '@type': 'ListItem',
      'position': 4,
      'item': {
        '@type': 'Service',
        'name': 'Gestion des Réseaux Sociaux',
        'description': 'Gestion complète des plateformes sociales',
        'provider': {
          '@type': 'Organization',
          'name': 'Nemsi Media '
        }
      }
    },
    {
      '@type': 'ListItem',
      'position': 5,
      'item': {
        '@type': 'Service',
        'name': 'Cartes NFC Intelligentes',
        'description': 'Solutions digitales innovantes avec technologie NFC',
        'provider': {
          '@type': 'Organization',
          'name': 'Nesmi Media '
        }
      }
    },
    {
      '@type': 'ListItem',
      'position': 6,
      'item': {
        '@type': 'Service',
        'name': 'Consultation Digitale',
        'description': 'Audit et stratégie digitale personnalisée',
        'provider': {
          '@type': 'Organization',
          'name': 'Nemsi Media Maroc'
        }
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        {/* Performance optimizations */}
        <meta name="theme-color" content="#520371" />
        <meta name="color-scheme" content="light dark" />

        {/* Mobile optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />

        {/* PWA capabilities */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nemsi Media Maroc - Agence Web" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="MA-CAS" />
        <meta name="geo.placename" content="Casablanca" />
        <meta name="geo.position" content="33.5731;-7.5898" />
        <meta name="ICBM" content="33.5731, -7.5898" />

        {/* Business-specific meta tags */}
        <meta name="business:contact_data:country_name" content="Morocco" />
        <meta name="business:contact_data:locality" content="Casablanca" />
        <meta name="business:contact_data:email" content="contact@Nemsi Media.ma" />
        <meta name="business:contact_data:phone_number" content="+212645288216" />
      </head>
      <body className={`font-sans ${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    Chargement de l'agence Nemsi Media Maroc...
                  </p>
                </div>
              </div>
            }
          >
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}