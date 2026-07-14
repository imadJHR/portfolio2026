import { getTranslation } from "../../lib/i18n"
import Link from "next/link"
import insightsData from "../../lib/insights-data.json"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export const metadata = {
  title: "Conseils web, SEO & e-commerce au Maroc",
  description: "Conseils pratiques sur la création de sites, le SEO et l'e-commerce au Maroc pour améliorer votre visibilité et convertir plus de visiteurs.",
  openGraph: {
    title: "Conseils web, SEO & e-commerce au Maroc | Nemsi Media",
    description: "Conseils pratiques pour améliorer votre visibilité et convertir plus de visiteurs au Maroc.",
    url: "https://nemsimedia.ma/fr/insights",
    locale: "fr_MA",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Conseils web et SEO par Nemsi Media" }],
  },
  alternates: {
    canonical: "https://nemsimedia.ma/fr/insights",
    languages: {
      ar: "https://nemsimedia.ma/ar/insights",
      fr: "https://nemsimedia.ma/fr/insights",
      "x-default": "https://nemsimedia.ma/fr/insights",
    },
  },
}

function ArticleCard({ article, index }) {
  const categories = {
    "Web Design": "border-[var(--brand)]/30 text-[var(--brand)]",
    "SEO": "border-[var(--brand)]/30 text-[var(--brand)]",
    "E-commerce": "border-emerald-700/30 text-emerald-600",
  }

  const categoryStyle = categories[article.category.fr] || categories["Web Design"]

  return (
    <article className="card-accent overflow-hidden group">
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryStyle}`}>
            {article.category.fr}
          </span>
          <span className="text-xs text-[var(--text-muted)]">{article.readTime.fr}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[var(--brand)] transition-colors">
          <Link href={`/fr/insights/${article.id}`}>
            {article.title.fr}
          </Link>
        </h2>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {article.excerpt.fr}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
            <span>{article.author}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <span>{article.date}</span>
          </div>
          <Link
            href={`/fr/insights/${article.id}`}
            className="text-sm font-medium text-[var(--brand)] hover:text-[var(--brand-primary-light)] transition-colors"
          >
            Lire →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function InsightsPage() {
  const t = getTranslation("fr")

  return (
    <div className="ltr" dir="ltr">
      <Navbar lang="fr" t={t} />

      <section className="relative min-h-[40vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[var(--brand)]/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2] text-center">
          <div className="badge mx-auto mb-6">INSIGHTS</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Articles, conseils et{" "}
            <span className="gradient-text">tendances digitales</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Notre vision du web, du design, du SEO et du marketing digital au Maroc.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightsData.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer lang="fr" t={t} />
    </div>
  )
}
