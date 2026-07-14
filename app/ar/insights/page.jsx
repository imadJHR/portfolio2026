import { getTranslation } from "../../lib/i18n"
import Link from "next/link"
import insightsData from "../../lib/insights-data.json"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { SITE_URL } from "../../lib/seo"

export const metadata = {
  title: "نصائح المواقع وSEO والتجارة الإلكترونية في المغرب",
  description: "نصائح عملية حول تصميم المواقع وتحسين محركات البحث والتجارة الإلكترونية في المغرب لزيادة الظهور وتحويل الزوار إلى عملاء.",
  openGraph: {
    title: "نصائح المواقع وSEO في المغرب | Nemsi Media",
    description: "نصائح عملية لزيادة الظهور وتحويل زوار موقعك إلى عملاء في المغرب.",
    url: `${SITE_URL}/ar/insights`,
    locale: "ar_MA",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "نصائح المواقع وSEO من Nemsi Media" }],
  },
  alternates: {
    canonical: `${SITE_URL}/ar/insights`,
    languages: {
      ar: `${SITE_URL}/ar/insights`,
      fr: `${SITE_URL}/fr/insights`,
      "x-default": `${SITE_URL}/fr/insights`,
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
      <div className="p-5 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryStyle}`}>
            {article.category.ar}
          </span>
          <span className="text-xs text-[var(--text-muted)]">{article.readTime.ar}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[var(--brand)] transition-colors">
          <Link href={`/ar/insights/${article.id}`}>
            {article.title.ar}
          </Link>
        </h2>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {article.excerpt.ar}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] sm:gap-3">
            <span>{article.author}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <span>{article.date}</span>
          </div>
          <Link
            href={`/ar/insights/${article.id}`}
            className="text-sm font-medium text-[var(--brand)] hover:text-[var(--brand-primary-light)] transition-colors"
          >
            اقرأ ←
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function ArabicInsightsPage() {
  const t = getTranslation("ar")

  return (
    <div className="rtl" dir="rtl">
      <Navbar lang="ar" t={t} />

      <section className="relative flex min-h-[40svh] items-center justify-center overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[var(--brand)]/5 blur-[120px] rounded-full" />
        <div className="container relative z-[2] text-center">
          <div className="badge mx-auto mb-6">مقالات</div>
          <h1 className="mb-6 text-[clamp(2.35rem,11vw,3.75rem)] font-bold">
            مقالات، نصائح و{" "}
            <span className="gradient-text">اتجاهات رقمية</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            رؤيتنا للويب، التصميم، تحسين محركات البحث والتسويق الرقمي في المغرب.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightsData.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer lang="ar" t={t} />
    </div>
  )
}
