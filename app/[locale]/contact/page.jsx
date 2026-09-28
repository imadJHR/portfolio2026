import { notFound } from "next/navigation"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { PageHero } from "../../components/page-hero"
import { Contact } from "../../components/contact"
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo"

const publicLocales = ["fr", "en"]
const isPublicLocale = (locale) => publicLocales.includes(locale)
const copy = {
  fr: { metaTitle: "Contact agence web Casablanca", metaDescription: "Parlez-nous de votre projet digital. Nemsi Media vous répond avec une première direction claire sous 24h.", eyebrow: "CONTACT", title: "Commençons par une conversation simple.", description: "Parlez-nous du contexte, de l’objectif et du moment où vous souhaitez avancer." },
  en: { metaTitle: "Contact web agency Casablanca", metaDescription: "Tell us about your digital project. Nemsi Media will reply with a clear initial direction within 24 hours.", eyebrow: "CONTACT", title: "Let’s start with a simple conversation.", description: "Tell us about the context, your goal and when you want to move forward." },
}
export const dynamicParams = false
export function generateStaticParams() { return publicLocales.map((locale) => ({ locale })) }
export async function generateMetadata({ params }) { const { locale } = await params; if (!isPublicLocale(locale)) return {}; const item = copy[locale]; const url = `${SITE_URL}/${locale}/contact`; return { title: item.metaTitle, description: item.metaDescription, alternates: { canonical: url, languages: { "fr-MA": `${SITE_URL}/fr/contact`, en: `${SITE_URL}/en/contact`, "x-default": `${SITE_URL}/fr/contact` } }, openGraph: { title: item.metaTitle, description: item.metaDescription, url, siteName: SITE_NAME, locale: locale === "en" ? "en_US" : "fr_MA", alternateLocale: [locale === "en" ? "fr_MA" : "en_US"], type: "website", images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: item.metaTitle }] }, twitter: { card: "summary_large_image", title: item.metaTitle, description: item.metaDescription, images: [OG_IMAGE] } } }
export default async function Page({ params }) { const { locale } = await params; if (!isPublicLocale(locale)) notFound(); const content = copy[locale]; return <div dir="ltr"><Navbar lang={locale} /><main><PageHero lang={locale} eyebrow={content.eyebrow} title={content.title} description={content.description} /><Contact lang={locale} /></main><Footer lang={locale} /></div> }
