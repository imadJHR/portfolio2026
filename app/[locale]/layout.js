import { notFound } from "next/navigation"
import { Space_Grotesk } from "next/font/google"
import {
  SITE_NAME,
  SITE_URL,
  OG_IMAGE,
  descriptions,
  seoKeywords,
  organizationSchema,
  websiteSchema,
} from "../lib/seo"
import "../components/react-bits/react-bits.css"
import "../globals.css"

const publicLocales = ["fr", "en"]
const isPublicLocale = (locale) => publicLocales.includes(locale)

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
  display: "swap",
  preload: true,
})

export const dynamicParams = false

export function generateStaticParams() {
  return publicLocales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isPublicLocale(locale)) return {}

  const isEnglish = locale === "en"
  const title = isEnglish ? "Web Agency Casablanca | Nemsi Media" : "Agence web Casablanca | Nemsi Media"
  const description = descriptions[locale]
  const url = `${SITE_URL}/${locale}`

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s | ${SITE_NAME}` },
    description,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    applicationName: SITE_NAME,
    category: isEnglish ? "Web agency in Casablanca, SEO and e-commerce in Morocco" : "Agence web à Casablanca, SEO et e-commerce au Maroc",
    keywords: seoKeywords,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, noimageindex: false, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
    verification: { google: "ETtJY6sKr6Hwt5T63gjP5T3LKfdi2JHz3qBplCim6Mw" },
    alternates: { canonical: url, languages: { "fr-MA": `${SITE_URL}/fr`, en: `${SITE_URL}/en`, "x-default": `${SITE_URL}/fr` } },
    openGraph: {
      type: "website",
      locale: isEnglish ? "en_US" : "fr_MA",
      alternateLocale: [isEnglish ? "fr_MA" : "en_US"],
      url,
      siteName: SITE_NAME,
      title: isEnglish ? "Web Agency Casablanca — Websites, SEO & E-commerce in Morocco" : "Agence web Casablanca — Sites, SEO & e-commerce au Maroc",
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: isEnglish ? "Nemsi Media — Web agency in Casablanca" : "Nemsi Media — Agence web à Casablanca" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
    other: { "geo.region": "MA-CAS", "geo.placename": "Casablanca" },
    icons: { icon: [{ url: "/favicon.ico" }, { url: "/logo/icon-32.png", type: "image/png", sizes: "32x32" }, { url: "/logo/icon-192.png", type: "image/png", sizes: "192x192" }], apple: [{ url: "/apple-touch-icon.png" }] },
  }
}

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" }

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!isPublicLocale(locale)) notFound()

  const organization = {
    ...organizationSchema,
    description: descriptions[locale],
    inLanguage: locale === "en" ? "en" : "fr-MA",
    contactPoint: { ...organizationSchema.contactPoint, availableLanguage: ["fr", "en"] },
  }
  const website = { ...websiteSchema, description: descriptions[locale], inLanguage: locale === "en" ? ["en"] : ["fr-MA"] }

  return (
    <html lang={locale} dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Nemsi Media — AI-readable information" />
        <script id="deferred-analytics" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', 'G-HHESPWMXQF');
          (function(){
            var loaded = false;
            function loadAnalytics(){ if (loaded) return; loaded = true; var script = document.createElement('script'); script.async = true; script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HHESPWMXQF'; document.head.appendChild(script); }
            function schedule(){ window.setTimeout(loadAnalytics, 6000); }
            if (document.readyState === 'complete') schedule(); else window.addEventListener('load', schedule, { once: true });
            var value = [new URLSearchParams(location.search).get('utm_source') || '', new URLSearchParams(location.search).get('ref') || '', document.referrer || ''].join(' ').toLowerCase();
            var sources = [['chatgpt',['chatgpt.com','chat.openai.com','openai.com']],['perplexity',['perplexity.ai']],['copilot',['copilot.microsoft.com']],['gemini',['gemini.google.com']],['claude',['claude.ai']],['you',['you.com']],['poe',['poe.com']],['phind',['phind.com']]];
            var match = sources.find(function(item){ return item[1].some(function(domain){ return value.indexOf(domain) !== -1; }); });
            if (match) window.gtag('event', 'ai_referral', { ai_source: match[0], landing_path: location.pathname });
          })();
        ` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      </head>
      <body className={`font-sans ${spaceGrotesk.variable} antialiased bg-[var(--bg)] text-[var(--text)]`}>
        {children}
      </body>
    </html>
  )
}
