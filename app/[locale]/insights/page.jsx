import { notFound } from "next/navigation"
import { InsightsIndex } from "../../components/insights-index"
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo"

const publicLocales = ["fr", "en"]
const isPublicLocale = (locale) => publicLocales.includes(locale)
const copy = {
  fr: { title: "Conseils web, SEO et design au Maroc", description: "Conseils pratiques sur la création de sites web, le SEO, l’e-commerce, la performance et le design digital au Maroc." },
  en: { title: "Web, SEO and design advice in Morocco", description: "Practical advice on website creation, SEO, e-commerce, performance and digital design in Morocco." },
}
export const dynamicParams = false
export function generateStaticParams() { return publicLocales.map((locale) => ({ locale })) }
export async function generateMetadata({ params }) { const { locale } = await params; if (!isPublicLocale(locale)) return {}; const item = copy[locale]; const url = `${SITE_URL}/${locale}/insights`; return { title: item.title, description: item.description, alternates: { canonical: url, languages: { "fr-MA": `${SITE_URL}/fr/insights`, en: `${SITE_URL}/en/insights`, "x-default": `${SITE_URL}/fr/insights` } }, openGraph: { title: item.title, description: item.description, url, siteName: SITE_NAME, locale: locale === "en" ? "en_US" : "fr_MA", alternateLocale: [locale === "en" ? "fr_MA" : "en_US"], type: "website", images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: item.title }] }, twitter: { card: "summary_large_image", title: item.title, description: item.description, images: [OG_IMAGE] } } }
export default async function Page({ params }) { const { locale } = await params; if (!isPublicLocale(locale)) notFound(); return <InsightsIndex lang={locale} /> }
