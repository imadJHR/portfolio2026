import { Space_Grotesk, Noto_Sans_Arabic } from "next/font/google"
import {
  SITE_NAME,
  SITE_URL,
  OG_IMAGE,
  descriptions,
  seoKeywords,
  organizationSchema,
  websiteSchema,
} from "./lib/seo"
import "./components/react-bits/react-bits.css"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
  display: "swap",
  preload: true,
})

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Agence web Casablanca | Nemsi Media",
    template: `%s | ${SITE_NAME}`,
  },
  description: descriptions.fr,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "Agence web à Casablanca, SEO et e-commerce au Maroc",
  keywords: seoKeywords,
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
  verification: {
    google: "ETtJY6sKr6Hwt5T63gjP5T3LKfdi2JHz3qBplCim6Mw",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      fr: `${SITE_URL}/fr`,
      ar: `${SITE_URL}/ar`,
      "x-default": `${SITE_URL}/fr`,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["ar_MA"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Agence web Casablanca — Sites, SEO & e-commerce au Maroc",
    description: descriptions.fr,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nemsi Media — Agence web à Casablanca",
      },
    ],
  },
  twitter: {
  card: "summary_large_image",
  title: "Nemsi Media — Agence web à Casablanca",
  description: descriptions.fr,
  images: [OG_IMAGE],
  },
  other: {
    "geo.region": "MA-CAS",
    "geo.placename": "Casablanca",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo/icon-32.png", type: "image/png", sizes: "32x32" }, { url: "/logo/icon-192.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          id="locale-document-attributes"
          dangerouslySetInnerHTML={{
            __html: `(function(){var ar=location.pathname==='/ar'||location.pathname.indexOf('/ar/')===0;document.documentElement.lang=ar?'ar':'fr';document.documentElement.dir=ar?'rtl':'ltr';})();`,
          }}
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Nemsi Media — AI-readable information" />
        <script
          id="deferred-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
              window.gtag('js', new Date());
              window.gtag('config', 'G-HHESPWMXQF');
              (function(){
                var loaded = false;
                function loadAnalytics(){
                  if (loaded) return;
                  loaded = true;
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HHESPWMXQF';
                  document.head.appendChild(script);
                }
                function schedule(){ window.setTimeout(loadAnalytics, 6000); }
                if (document.readyState === 'complete') schedule();
                else window.addEventListener('load', schedule, { once: true });

                var value = [new URLSearchParams(location.search).get('utm_source') || '', new URLSearchParams(location.search).get('ref') || '', document.referrer || ''].join(' ').toLowerCase();
                var sources = [['chatgpt',['chatgpt.com','chat.openai.com','openai.com']],['perplexity',['perplexity.ai']],['copilot',['copilot.microsoft.com']],['gemini',['gemini.google.com']],['claude',['claude.ai']],['you',['you.com']],['poe',['poe.com']],['phind',['phind.com']]];
                var match = sources.find(function(item){ return item[1].some(function(domain){ return value.indexOf(domain) !== -1; }); });
                if (match) window.gtag('event', 'ai_referral', { ai_source: match[0], landing_path: location.pathname });
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`font-sans ${spaceGrotesk.variable} ${notoArabic.variable} antialiased bg-[var(--bg)] text-[var(--text)]`}
      >
        {children}
      </body>
    </html>
  )
}
