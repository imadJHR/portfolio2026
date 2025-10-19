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
// Replace with your actual domain name
const siteUrl = "https://techdev.ma";
const siteName = "TechDev Maroc - Développeur Web & Marketing Digital";
const siteDescription = {
  fr: "Expert en création de sites web professionnels, marketing digital et solutions e-commerce au Maroc. Développeur web freelance à Casablanca spécialisé en Next.js, React et SEO.",
  ar: "خبير في تصميم وتطوير المواقع الإلكترونية، التسويق الرقمي وحلول التجارة الإلكترونية في المغرب. مطور ويب فريلانسر في الدار البيضاء متخصص في Next.js، React وتحسين محركات البحث."
};

export const metadata = {
  metadataBase: new URL(siteUrl),

  // Title templates for different languages
  title: {
    default: "TechDev Maroc - Développeur Web & Marketing Digital | مطور مواقع وتسويق رقمي المغرب",
    template: `%s | ${siteName}`,
  },

  description: siteDescription.fr,
  
  // Comprehensive keywords for Moroccan market
  keywords: [
    // French keywords
    "développeur web maroc", "création site web maroc", "freelance développeur casablanca", 
    "agence web maroc", "site e-commerce maroc", "référencement SEO maroc", 
    "développeur next.js maroc", "marketing digital maroc", "développement web casablanca",
    "application web maroc", "responsive design maroc", "hébergement web maroc",
    "maintenance site web maroc", "consultant digital maroc", "startup maroc",
    
    // Arabic keywords
    "مطور مواقع المغرب", "تصميم مواقع في المغرب", "فريلانسر الدار البيضاء",
    "شركة تصميم مواقع المغرب", "متجر إلكتروني المغرب", "تحسين محركات البحث المغرب",
    "مطور نيكست.js المغرب", "تسويق رقمي المغرب", "تطوير مواقع الدار البيضاء",
    "تطبيق ويب المغرب", "تصميم متجاوب المغرب", "استضافة مواقع المغرب",
    "صيانة مواقع المغرب", "استشارات رقمية المغرب", "شركات ناشئة المغرب"
  ],
  
  authors: [{ name: "Imad Johar", url: siteUrl }],
  creator: "Imad Johar",
  publisher: "TechDev Maroc",
  
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
    google: "your-google-verification-code", // Add your Google Search Console code
    yandex: "your-yandex-verification-code", // Add if targeting Russian market
    yahoo: "your-yahoo-verification-code", // Add if needed
  },

  // --- Open Graph for Social Media ---
  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["ar_MA", "fr_FR"],
    url: siteUrl,
    siteName: siteName,
    title: "TechDev Maroc - Développeur Web & Marketing Digital",
    description: siteDescription.fr,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechDev Maroc - Développeur Web & Marketing Digital au Maroc",
        type: "image/jpeg",
      },
    ],
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    site: "@imad__johar",
    creator: "@imad__johar",
    title: "TechDev Maroc - Développeur Web & Marketing Digital",
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
    types: {
      'application/rss+xml': `${siteUrl}/rss.xml`,
    },
  },

  // --- Additional SEO ---
  category: "technology",
  classification: "Web Development, Digital Marketing, E-commerce",
  
  // --- Structured Data Hints ---
  other: {
    "google-site-verification": "your-google-verification-code", // Alternative method
    "msvalidate.01": "your-bing-verification-code", // For Bing Webmaster Tools
    "facebook-domain-verification": "your-facebook-verification", // For Facebook Pixel
  }
};

// Structured Data for Organization (JSON-LD)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'TechDev Maroc',
  'alternateName': ['TechDev Morocco', 'تيك ديف المغرب'],
  'url': siteUrl,
  'logo': `${siteUrl}/logo.png`,
  'description': siteDescription.fr,
  'sameAs': [
    'https://github.com/imadJHR',
    'https://www.linkedin.com/in/imad-johar-423556274/',
    'https://www.instagram.com/imad__johar/'
  ],
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Casablanca',
    'addressCountry': 'MA',
    'addressRegion': 'Casablanca-Settat'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+212-645-288216',
    'contactType': 'customer service',
    'areaServed': 'MA',
    'availableLanguage': ['fr', 'ar']
  },
  'areaServed': {
    '@type': 'Country',
    'name': 'Morocco'
  }
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
        <meta name="apple-mobile-web-app-title" content="TechDev Maroc" />
        
        {/* Security headers would be added in next.config.js */}
      </head>
      <body className={`font-sans ${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense 
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--brand-primary)]"></div>
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