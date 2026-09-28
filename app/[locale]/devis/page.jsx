import { notFound } from "next/navigation"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import QuoteForm from "../../components/quote-form"
import { PageHero } from "../../components/page-hero"
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo"

const publicLocales = ["fr", "en"]
const isPublicLocale = (locale) => publicLocales.includes(locale)
const copy = {
  fr: { metaTitle: "Demander un devis", metaDescription: "Décrivez votre projet et recevez une première direction claire et un devis adapté.", eyebrow: "NOUVEAU PROJET", title: "Un périmètre clair avant de commencer.", description: "Quelques informations suffisent pour préparer une première estimation utile." },
  en: { metaTitle: "Request a quote", metaDescription: "Describe your project and receive a clear initial direction and a tailored quote.", eyebrow: "NEW PROJECT", title: "A clear scope before we begin.", description: "A few details are enough to prepare a useful first estimate." },
}
export const dynamicParams = false
export function generateStaticParams() { return publicLocales.map((locale) => ({ locale })) }
export async function generateMetadata({ params }) { const { locale } = await params; if (!isPublicLocale(locale)) return {}; const item = copy[locale]; const url = `${SITE_URL}/${locale}/devis`; return { title: item.metaTitle, description: item.metaDescription, alternates: { canonical: url, languages: { "fr-MA": `${SITE_URL}/fr/devis`, en: `${SITE_URL}/en/devis`, "x-default": `${SITE_URL}/fr/devis` } }, openGraph: { title: item.metaTitle, description: item.metaDescription, url, siteName: SITE_NAME, locale: locale === "en" ? "en_US" : "fr_MA", alternateLocale: [locale === "en" ? "fr_MA" : "en_US"], type: "website", images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: item.metaTitle }] }, twitter: { card: "summary_large_image", title: item.metaTitle, description: item.metaDescription, images: [OG_IMAGE] } } }
export default async function Page({ params }) { const { locale } = await params; if (!isPublicLocale(locale)) notFound(); const content = copy[locale]; return <div dir="ltr"><Navbar lang={locale} /><main><PageHero lang={locale} eyebrow={content.eyebrow} title={content.title} description={content.description} /><section className="nm-form-page section"><div className="container"><div className="nm-form-page__box"><QuoteForm lang={locale} /></div></div></section></main><Footer lang={locale} /></div> }
