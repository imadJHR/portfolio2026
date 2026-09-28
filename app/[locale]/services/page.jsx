import { notFound } from "next/navigation"
import { ServiceChoiceGuide } from "../../components/service-choice-guide"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { PageHero } from "../../components/page-hero"
import { Services } from "../../components/services"
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo"

const publicLocales = ["fr", "en"]
const isPublicLocale = (locale) => publicLocales.includes(locale)
const copy = {
  fr: { metaTitle: "Agence digitale Casablanca — Expertises web", metaDescription: "Agence digitale à Casablanca : stratégie de marque, sites web, e-commerce, UI/UX, applications, marketing digital et SEO au Maroc.", eyebrow: "EXPERTISES", title: "Une agence digitale à Casablanca, une vision complète.", description: "De la stratégie de marque au site, au SEO et au marketing digital, nous gardons une même vision du début à la fin." },
  en: { metaTitle: "Digital agency Casablanca — Web expertise", metaDescription: "Digital agency in Casablanca: brand strategy, websites, e-commerce, UI/UX, applications, digital marketing and SEO in Morocco.", eyebrow: "EXPERTISE", title: "A digital agency in Casablanca with a complete vision.", description: "From brand strategy to websites, SEO and digital marketing, we maintain one vision from start to finish." },
}
export const dynamicParams = false
export function generateStaticParams() { return publicLocales.map((locale) => ({ locale })) }
export async function generateMetadata({ params }) { const { locale } = await params; if (!isPublicLocale(locale)) return {}; const item = copy[locale]; const url = `${SITE_URL}/${locale}/services`; return { title: item.metaTitle, description: item.metaDescription, alternates: { canonical: url, languages: { "fr-MA": `${SITE_URL}/fr/services`, en: `${SITE_URL}/en/services`, "x-default": `${SITE_URL}/fr/services` } }, openGraph: { title: item.metaTitle, description: item.metaDescription, url, siteName: SITE_NAME, locale: locale === "en" ? "en_US" : "fr_MA", alternateLocale: [locale === "en" ? "fr_MA" : "en_US"], type: "website", images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: item.metaTitle }] }, twitter: { card: "summary_large_image", title: item.metaTitle, description: item.metaDescription, images: [OG_IMAGE] } } }
export default async function Page({ params }) { const { locale } = await params; if (!isPublicLocale(locale)) notFound(); const content = copy[locale]; return <div dir="ltr"><Navbar lang={locale} /><main><PageHero lang={locale} eyebrow={content.eyebrow} title={content.title} description={content.description} /><Services lang={locale} variant="index" /><ServiceChoiceGuide lang={locale} /></main><Footer lang={locale} /></div> }
