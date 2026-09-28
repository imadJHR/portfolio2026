import { notFound } from "next/navigation"
import { StudioPage } from "../../components/studio-page"
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo"

const publicLocales = ["fr", "en"]
const isPublicLocale = (locale) => publicLocales.includes(locale)
const copy = {
  fr: { title: "Studio digital à Casablanca", description: "Découvrez Nemsi Media, studio digital indépendant à Casablanca spécialisé en stratégie, design et développement web." },
  en: { title: "Digital studio in Casablanca", description: "Discover Nemsi Media, an independent digital studio in Casablanca specialising in strategy, design and web development." },
}
export const dynamicParams = false
export function generateStaticParams() { return publicLocales.map((locale) => ({ locale })) }
export async function generateMetadata({ params }) { const { locale } = await params; if (!isPublicLocale(locale)) return {}; const item = copy[locale]; const url = `${SITE_URL}/${locale}/a-propos`; return { title: item.title, description: item.description, alternates: { canonical: url, languages: { "fr-MA": `${SITE_URL}/fr/a-propos`, en: `${SITE_URL}/en/a-propos`, "x-default": `${SITE_URL}/fr/a-propos` } }, openGraph: { title: item.title, description: item.description, url, siteName: SITE_NAME, locale: locale === "en" ? "en_US" : "fr_MA", alternateLocale: [locale === "en" ? "fr_MA" : "en_US"], type: "website", images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: item.title }] }, twitter: { card: "summary_large_image", title: item.title, description: item.description, images: [OG_IMAGE] } } }
export default async function Page({ params }) { const { locale } = await params; if (!isPublicLocale(locale)) notFound(); return <StudioPage lang={locale} /> }
