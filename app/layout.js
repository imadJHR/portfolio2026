import { Inter, Playfair_Display } from "next/font/google"
import { Suspense } from "react"
import Script from "next/script"
import { ThemeProvider } from "./components/theme-provider"
import { SmoothScroll } from "./components/smooth-scroll"
import { AiReferralTracker } from "./components/ai-referral-tracker"
import {
  SITE_NAME,
  SITE_URL,
  descriptions,
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
    default: "Agence web à Casablanca | Nemsi Media",
    template: `%s | ${SITE_NAME}`,
  },
  description: descriptions.fr,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "Création de sites web et marketing digital",
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
    title: "Nemsi Media — Sites web, SEO et e-commerce au Maroc",
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
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/icon.jpg", type: "image/jpeg" }],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070912",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Nemsi Media — AI-readable information" />
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
        <ThemeProvider>
          <SmoothScroll />
          <AiReferralTracker />
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-[var(--bg)]">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-[var(--brand-primary)]/30 border-t-[var(--brand-primary)]" />
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
