import { Inter, Playfair_Display } from "next/font/google"
import { Suspense } from "react"
import Script from "next/script"
import { ThemeProvider } from "./components/theme-provider"
import { SmoothScroll } from "./components/smooth-scroll"
import { AiReferralTracker } from "./components/ai-referral-tracker"
import { LogoMark } from "./components/logo/logo-mark"
import { HtmlLangUpdater } from "./components/html-lang-updater"
import {
  SITE_NAME,
  SITE_URL,
  descriptions,
  seoKeywords,
  organizationSchema,
  websiteSchema,
} from "./lib/seo"
import "lenis/dist/lenis.css"
import "./components/react-bits/react-bits.css"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
})

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
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
        url: "/opengraph-image",
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
    images: ["/opengraph-image"],
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
  themeColor: "#0d0716",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Nemsi Media — AI-readable information" />
        <link rel="alternate" hreflang="fr" href={`${SITE_URL}/fr`} />
        <link rel="alternate" hreflang="ar" href={`${SITE_URL}/ar`} />
        <link rel="alternate" hreflang="x-default" href={`${SITE_URL}/fr`} />
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
        className={`font-sans ${inter.variable} ${playfair.variable} antialiased bg-[var(--bg)] text-[var(--text)]`}
      >
        <HtmlLangUpdater />
        <ThemeProvider>
          <SmoothScroll />
          <AiReferralTracker />
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-[var(--bg)]">
                <div className="text-center">
                  <LogoMark className="mx-auto mb-4 h-12 w-12 animate-pulse" />
                  <p className="text-sm text-[var(--text-muted)]">Nemsi Media</p>
                </div>
              </div>
            }
          >
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
