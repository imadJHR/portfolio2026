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

export async function generateStaticParams() {
  return insightsData.map((article) => ({ id: article.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const article = insightsData.find((a) => a.id === id)
  if (!article) return {}
  const metaTitle = getInsightMetaTitle(article, "ar")

  return {
    title: metaTitle,
    description: article.excerpt.ar,
    openGraph: {
      title: metaTitle,
      description: article.excerpt.ar,
      type: "article",
      url: `${SITE_URL}/ar/insights/${id}`,
      locale: "ar_MA",
      publishedTime: article.date,
      authors: ["Nemsi Media"],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: article.title.ar }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: article.excerpt.ar,
      images: [OG_IMAGE],
    },
    alternates: {
      canonical: `${SITE_URL}/ar/insights/${id}`,
      languages: {
        fr: `${SITE_URL}/fr/insights/${id}`,
        ar: `${SITE_URL}/ar/insights/${id}`,
        "x-default": `${SITE_URL}/fr/insights/${id}`,
      },
    },
  }
}

export default async function ArabicArticlePage({ params }) {
  const { id } = await params
  const article = insightsData.find((a) => a.id === id)
  if (!article) notFound()

  const t = getTranslation("ar")
  const links = getInsightLinks(id)
  const service = getServiceBySlug(links.service)
  const relatedArticles = links.related.map((relatedId) => insightsData.find((item) => item.id === relatedId)).filter(Boolean)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/ar/insights/${id}#article`,
    headline: article.title.ar,
    description: article.excerpt.ar,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "ar-MA",
    mainEntityOfPage: `${SITE_URL}/ar/insights/${id}`,
    image: OG_IMAGE,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/ar` },
      { "@type": "ListItem", position: 2, name: "المقالات", item: `${SITE_URL}/ar/insights` },
      { "@type": "ListItem", position: 3, name: article.title.ar, item: `${SITE_URL}/ar/insights/${id}` },
    ],
  }

  return (
    <div className="rtl" dir="rtl">
      <Navbar lang="ar" t={t} />

      <article className="pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/ar/insights"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--brand)] transition-colors mb-8"
            >
              → العودة إلى المقالات
            </Link>

            <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)] sm:gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--brand)]/30 text-[var(--brand)]">
                {article.category.ar}
              </span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime.ar}</span>
            </div>

            <h1 className="mb-8 text-[clamp(2rem,8vw,3rem)] font-bold">
              {article.title.ar}
            </h1>

            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-[var(--border)]">
              <div className="w-10 h-10 rounded-full bg-[var(--brand)]/20 border border-[var(--border)] flex items-center justify-center text-sm font-bold text-[var(--brand)]">
                NM
              </div>
              <div>
                <p className="text-sm font-medium">{article.author}</p>
                <p className="text-xs text-[var(--text-muted)]">نشر في {article.date}</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              {article.content.ar.map((paragraph, i) => (
                <p key={i} className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <section className="mt-12 border-y border-[var(--border)] py-8" aria-labelledby="related-reading-title">
              <h2 id="related-reading-title" className="mb-4 text-2xl font-bold">للتعمق أكثر</h2>
              <p className="mb-5 text-[var(--text-secondary)]">
                اكتشف خبرتنا في{
                " "}<Link className="font-semibold text-[var(--brand)] hover:underline" href={`/ar/services/${service.slug}`}>{service.ar.name}</Link>{
                " "}لتحويل المعلومات إلى خطة عمل مناسبة لمشروعك.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {relatedArticles.map((related) => (
                  <li key={related.id}>
                    <Link className="block rounded-xl border border-[var(--border)] p-4 font-medium transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]" href={`/ar/insights/${related.id}`}>
                      {related.title.ar}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 text-center sm:p-8">
              <p className="text-lg font-bold mb-2">أعجبك هذا المقال؟</p>
              <p className="text-sm text-[var(--text-muted)] mb-4">
                تواصل معنا لمناقشة مشروعك الرقمي.
              </p>
              <SpecularLink
                href="https://wa.me/212645288216?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A."
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="w-full sm:w-auto"
              >
                تحدث عبر واتساب
              </SpecularLink>
            </div>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Footer lang="ar" t={t} />
    </div>
  )
}
