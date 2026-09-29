import { notFound } from "next/navigation"
import Link from "next/link"
import insightsData from "../../../lib/insights-data.json"
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { getTranslation } from "../../../lib/i18n"
import { OG_IMAGE, SITE_URL } from "../../../lib/seo"
import { getInsightMetaTitle } from "../../../lib/insight-seo"
import { getInsightLinks } from "../../../lib/insight-links"
import { getServiceBySlug } from "../../../lib/service-data"
import { SpecularLink } from "../../../components/react-bits/specular-button"

const publicLocales = ["fr", "en"]
const isPublicLocale = (locale) => publicLocales.includes(locale)
const copy = {
  fr: { back: "← Retour aux articles", published: "Publié le", related: "Pour aller plus loin", prefix: "Découvrez notre expertise en", suffix: "pour passer de la lecture à un plan d’action adapté à votre projet.", ctaTitle: "Vous avez aimé cet article ?", ctaText: "Contactez-nous pour discuter de votre projet web.", cta: "Discuter sur WhatsApp", whatsapp: "https://wa.me/212645288216?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mon%20projet%20web.", home: "Accueil", index: "Insights" },
  en: { back: "← Back to insights", published: "Published on", related: "Go further", prefix: "Discover our expertise in", suffix: "to turn what you have read into an action plan tailored to your project.", ctaTitle: "Enjoyed this article?", ctaText: "Contact us to discuss your web project.", cta: "Chat on WhatsApp", whatsapp: "https://wa.me/212645288216?text=Hello%2C%20I%20would%20like%20to%20discuss%20my%20web%20project.", home: "Home", index: "Insights" },
}

export const dynamicParams = false

export function generateStaticParams() {
  return publicLocales.flatMap((locale) => insightsData.map((article) => ({ locale, id: article.id })))
}

export async function generateMetadata({ params }) {
  const { locale, id } = await params
  const article = insightsData.find((item) => item.id === id)
  if (!isPublicLocale(locale) || !article) return {}

  const title = getInsightMetaTitle(article, locale)
  const description = article.excerpt[locale]
  const url = `${SITE_URL}/${locale}/insights/${id}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url,
      locale: locale === "en" ? "en_US" : "fr_MA",
      alternateLocale: [locale === "en" ? "fr_MA" : "en_US"],
      publishedTime: article.date,
      authors: ["Nemsi Media"],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: article.title[locale] }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
    alternates: {
      canonical: url,
      languages: {
        "fr-MA": `${SITE_URL}/fr/insights/${id}`,
        en: `${SITE_URL}/en/insights/${id}`,
        "x-default": `${SITE_URL}/fr/insights/${id}`,
      },
    },
  }
}

function ArticleBody({ article, locale }) {
  const sections = article.sections?.[locale]

  if (!sections) {
    return article.content[locale].map((paragraph, index) => (
      <p key={index} className="mb-6 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">{paragraph}</p>
    ))
  }

  return sections.map((section) => (
    <section key={section.heading} className="mb-10">
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{section.heading}</h2>
      {section.paragraphs?.map((paragraph, index) => <p key={index} className="mb-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">{paragraph}</p>)}
      {section.list?.length ? <ul className="mb-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
      {section.links?.length ? <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">{section.links.map((link, index) => <span key={link.service}>{index > 0 ? " · " : ""}<Link className="font-semibold text-[var(--brand)] hover:underline" href={`/${locale}/services/${link.service}`}>{link.label}</Link></span>)}</p> : null}
      {section.table ? <div className="overflow-x-auto rounded-xl border border-[var(--border)]"><table className="min-w-[640px] w-full text-left text-sm"><thead className="bg-[var(--bg-surface)]"><tr>{section.table.headers.map((header) => <th key={header} className="px-4 py-3 font-semibold">{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-[var(--border)]">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 align-top text-[var(--text-secondary)]">{cell}</td>)}</tr>)}</tbody></table></div> : null}
    </section>
  ))
}

export default async function ArticlePage({ params }) {
  const { locale, id } = await params
  if (!isPublicLocale(locale)) notFound()

  const article = insightsData.find((item) => item.id === id)
  if (!article) notFound()

  const labels = copy[locale]
  const t = getTranslation(locale)
  const links = getInsightLinks(id)
  const service = getServiceBySlug(links.service)
  const related = links.related.map((relatedId) => insightsData.find((item) => item.id === relatedId)).filter(Boolean)
  const url = `${SITE_URL}/${locale}/insights/${id}`
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`, headline: article.title[locale], description: article.excerpt[locale], datePublished: article.date, dateModified: article.date, inLanguage: locale === "en" ? "en" : "fr-MA", mainEntityOfPage: url, image: OG_IMAGE, isPartOf: { "@id": `${SITE_URL}/#website` }, author: { "@id": `${SITE_URL}/#organization` }, publisher: { "@id": `${SITE_URL}/#organization` } }
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: labels.home, item: `${SITE_URL}/${locale}` }, { "@type": "ListItem", position: 2, name: labels.index, item: `${SITE_URL}/${locale}/insights` }, { "@type": "ListItem", position: 3, name: article.title[locale], item: url }] }

  return <div className="ltr" dir="ltr"><Navbar lang={locale} t={t} /><article className="pb-16 pt-24 sm:pb-20 sm:pt-28"><div className="container"><div className="mx-auto max-w-3xl"><Link href={`/${locale}/insights`} className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--brand)]">{labels.back}</Link><div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)] sm:gap-3"><span className="rounded-full border border-[var(--brand)]/30 px-3 py-1 text-xs font-medium text-[var(--brand)]">{article.category[locale]}</span><span>{article.readTime[locale]}</span></div><h1 className="mb-8 text-[clamp(2rem,8vw,3rem)] font-bold">{article.title[locale]}</h1><div className="mb-10 flex items-center gap-3 border-b border-[var(--border)] pb-8"><div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--brand)]/20 text-sm font-bold text-[var(--brand)]">NM</div><div><p className="text-sm font-medium">{article.author}</p><p className="text-xs text-[var(--text-muted)]">{labels.published} {article.date}</p></div></div><div className="prose prose-invert max-w-none"><ArticleBody article={article} locale={locale} /></div><section className="mt-12 border-y border-[var(--border)] py-8" aria-labelledby="related-reading-title"><h2 id="related-reading-title" className="mb-4 text-2xl font-bold">{labels.related}</h2><p className="mb-5 text-[var(--text-secondary)]">{labels.prefix}{" "}<Link className="font-semibold text-[var(--brand)] hover:underline" href={`/${locale}/services/${service.slug}`}>{service[locale].name}</Link>{" "}{labels.suffix}</p><ul className="grid gap-3 sm:grid-cols-2">{related.map((item) => <li key={item.id}><Link className="block rounded-xl border border-[var(--border)] p-4 font-medium transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]" href={`/${locale}/insights/${item.id}`}>{item.title[locale]}</Link></li>)}</ul></section><div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 text-center sm:p-8"><p className="mb-2 text-lg font-bold">{labels.ctaTitle}</p><p className="mb-4 text-sm text-[var(--text-muted)]">{labels.ctaText}</p><SpecularLink href={labels.whatsapp} target="_blank" rel="noopener noreferrer" size="sm" className="w-full sm:w-auto">{labels.cta}</SpecularLink></div></div></div></article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><Footer lang={locale} t={t} /></div>
}