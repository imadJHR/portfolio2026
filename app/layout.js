import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Script from "next/script";

/* -------------------- FONTS -------------------- */

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

/* -------------------- SEO CONSTANTS -------------------- */

const siteUrl = "https://nemsimedia.ma";
const siteName =
  "Nemsi Media Maroc - Agence Création Sites Web & Marketing Digital";
const siteDescription = {
  fr: "Agence web au Maroc spécialisée en création de sites internet professionnels, marketing digital, SEO et e-commerce. Solutions complètes pour entreprises marocaines.",
  ar: "وكالة ويب في المغرب متخصصة في تصميم مواقع الإنترنت الاحترافية، التسويق الرقمي، تحسين محركات البحث والتجارة الإلكترونية. حلول شاملة للشركات المغربية.",
};

/* -------------------- METADATA -------------------- */

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Nemsi Media Maroc - Agence Création Sites Web & Marketing Digital | وكالة تصميم مواقع وتسويق رقمي المغرب",
    template: `%s | ${siteName}`,
  },

  description: siteDescription.fr,

  keywords: [
    // French
    "agence web maroc",
    "création site web maroc",
    "agence digitale casablanca",
    "agence marketing digital maroc",
    "site e-commerce maroc",
    "référencement SEO maroc",
    "développement web maroc",
    "design web maroc",
    "solution digitale entreprise maroc",
    "application web maroc",
    "responsive design maroc",
    "hébergement web maroc",
    "maintenance site web maroc",
    "consultant digital maroc",
    "stratégie digitale maroc",
    "agence web casablanca",
    "création site internet maroc",
    "communication digitale maroc",
    "audit seo maroc",
    "campagne publicitaire maroc",
    "réseaux sociaux maroc",

    // Arabic
    "وكالة ويب المغرب",
    "تصميم مواقع المغرب",
    "وكالة رقمية الدار البيضاء",
    "وكالة تسويق رقمي المغرب",
    "متجر إلكتروني المغرب",
    "تحسين محركات البحث المغرب",
    "تطوير مواقع المغرب",
    "تصميم ويب المغرب",
    "حلول رقمية للشركات المغرب",
    "تطبيق ويب المغرب",
    "تصميم متجاوب المغرب",
    "استضافة مواقع المغرب",
    "صيانة مواقع المغرب",
    "استشارات رقمية المغرب",
    "استراتيجية رقمية المغرب",
    "وكالة ويب الدار البيضاء",
    "إنشاء موقع إنترنت المغرب",
    "اتصالات رقمية المغرب",
    "تدقيق سيو المغرب",
    "حملة إعلانية المغرب",
    "وسائل التواصل الاجتماعي المغرب",
  ],

  authors: [{ name: "Nemsi Media Maroc", url: siteUrl }],
  creator: "Nemsi Media Maroc",
  publisher: "Nemsi Media Maroc - Agence Web",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ هنا فين ضفنا كود التحقق ديال جوجل بالطريقة الصحيحة في Next.js
  verification: {
    google: "ETtJY6sKr6Hwt5T63gjP5T3LKfdi2JHz3qBplCim6Mw",
  },

  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["ar_MA", "fr_FR"],
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription.fr,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nemsi Media Maroc - Agence Web et Marketing Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@NemsiMedia_maroc",
    creator: "@NemsiMedia_maroc",
    title: siteName,
    description: siteDescription.fr,
    images: ["/twitter-image.jpg"],
  },

  // ✅ تأكد أن هاد الملفات كاينين ف dossier 'public'
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#520371" }],
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: siteUrl,
    languages: {
      fr: `${siteUrl}/fr`,
      ar: `${siteUrl}/ar`,
      "x-default": siteUrl,
    },
  },
};

/* -------------------- SCHEMA / STRUCTURED DATA -------------------- */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "DigitalMarketingAgency",
  name: "Nemsi Media Maroc",
  url: siteUrl,
  logo: `${siteUrl}/logo.jpg`,
  description: siteDescription.fr,
  foundingDate: "2024",
  founders: [{ "@type": "Person", name: "Imad Johar" }],
  sameAs: [
    "https://github.com/imadJHR",
    "https://www.linkedin.com/company/nemsi-media",
    "https://www.instagram.com/nemsimedia/",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services Nemsi Media Maroc",
  numberOfItems: 6,
};

/* -------------------- ROOTLAYOUT -------------------- */

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* 
          ملاحظة: حيدت الـ meta tag اليدوية ديال google-site-verification من هنا 
          حيت درناها الفوق ف الـ metadata object، وهكا أحسن لـ Next.js 
        */}

        {/* ---------------- GOOGLE ANALYTICS (G-HHESPWMXQF) ---------------- */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HHESPWMXQF"
        />

        <Script
          id="ga-main"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HHESPWMXQF');
            `,
          }}
        />

        {/* ---------------- SCHEMA JSON-LD ---------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />

        {/* Mobile & PWA */}
        <meta name="theme-color" content="#520371" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`font-sans ${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    Chargement de l&apos;agence Nemsi Media Maroc...
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