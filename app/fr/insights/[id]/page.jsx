import { notFound } from "next/navigation"
import Link from "next/link"
import insightsData from "../../../lib/insights-data.json"
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { getTranslation } from "../../../lib/i18n"
import { SITE_URL } from "../../../lib/seo"
import { SpecularLink } from "../../../components/react-bits/specular-button"

export async function generateStaticParams() {
  return insightsData.map((article) => ({ id: article.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const article = insightsData.find((a) => a.id === id)
  if (!article) return {}

  return {
    title: article.title.fr,
    description: article.excerpt.fr,
    openGraph: {
      title: article.title.fr,
      description: article.excerpt.fr,
      type: "article",
      url: `${SITE_URL}/fr/insights/${id}`,
      locale: "fr_MA",
      publishedTime: article.date,
      authors: ["Nemsi Media"],
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: article.title.fr }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title.fr,
      description: article.excerpt.fr,
      images: ["/opengraph-image"],
    },
    alternates: {
      canonical: `${SITE_URL}/fr/insights/${id}`,
      languages: {
        fr: `${SITE_URL}/fr/insights/${id}`,
        ar: `${SITE_URL}/ar/insights/${id}`,
        "x-default": `${SITE_URL}/fr/insights/${id}`,
      },
    },
  }
}

export default async function ArticlePage({ params }) {
  const { id } = await params
  const article = insightsData.find((a) => a.id === id)
  if (!article) notFound()

  const t = getTranslation("fr")
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/fr/insights/${id}#article`,
    headline: article.title.fr,
    description: article.excerpt.fr,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "fr-MA",
    mainEntityOfPage: `${SITE_URL}/fr/insights/${id}`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  }

  return (
    <div className="ltr" dir="ltr">
      <Navbar lang="fr" t={t} />

      <article className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back */}
            <Link
              href="/fr/insights"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--brand)] transition-colors mb-8"
            >
              ← Retour aux articles
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--brand)]/30 text-[var(--brand)]">
                {article.category.fr}
              </span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime.fr}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              {article.title.fr}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-[var(--border)]">
              <div className="w-10 h-10 rounded-full bg-[var(--brand)]/20 border border-[var(--border)] flex items-center justify-center text-sm font-bold text-[var(--brand)]">
                NM
              </div>
              <div>
                <p className="text-sm font-medium">{article.author}</p>
                <p className="text-xs text-[var(--text-muted)]">Publié le {article.date}</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              {article.content.fr.map((paragraph, i) => (
                <p key={i} className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share / CTA */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] text-center">
              <p className="text-lg font-bold mb-2">Vous avez aimé cet article ?</p>
              <p className="text-sm text-[var(--text-muted)] mb-4">
                Contactez-nous pour discuter de votre projet web.
              </p>
              <SpecularLink
                href="https://wa.me/212645288216?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mon%20projet%20web."
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
              >
                Discuter sur WhatsApp
              </SpecularLink>
            </div>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Footer lang="fr" t={t} />
    </div>
  )
}
