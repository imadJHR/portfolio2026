import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import insightsData from "../lib/insights-data.json"

export function HomeInsights({ lang }) {
  const isRTL = lang === "ar"
  const articles = [...insightsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
  const dateFormatter = new Intl.DateTimeFormat(isRTL ? "ar-MA" : "fr-MA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section className="nm-home-insights section" aria-labelledby={`home-insights-title-${lang}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        <div className="nm-section-heading">
          <span className="nm-index">06</span>
          <p className="nm-kicker">{isRTL ? "أحدث المقالات" : "DERNIERS INSIGHTS"}</p>
          <h2 id={`home-insights-title-${lang}`}>
            {isRTL ? "أفكار عملية لاتخاذ قرارات رقمية أفضل." : "Des idées utiles pour mieux décider en digital."}
          </h2>
          <p>
            {isRTL
              ? "مقالات واضحة حول تصميم المواقع، تحسين محركات البحث، الأداء والنمو الرقمي في المغرب."
              : "Des articles concrets sur le design web, le SEO, la performance et la croissance digitale au Maroc."}
          </p>
        </div>

        <div className="nm-home-insights__grid">
          {articles.map((article, index) => (
            <article key={article.id}>
              <div className="nm-home-insights__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{article.category[lang]} / {article.readTime[lang]}</small>
              </div>
              <h3>
                <Link href={`/${lang}/insights/${article.id}`}>{article.title[lang]}</Link>
              </h3>
              <p>{article.excerpt[lang]}</p>
              <footer>
                <time dateTime={article.date}>{dateFormatter.format(new Date(`${article.date}T00:00:00`))}</time>
                <Link href={`/${lang}/insights/${article.id}`} aria-label={isRTL ? `قراءة: ${article.title.ar}` : `Lire : ${article.title.fr}`}>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </footer>
            </article>
          ))}
        </div>

        <div className="nm-home-insights__footer">
          <Link href={`/${lang}/insights`} className="nm-button nm-button--primary">
            {isRTL ? "عرض جميع المقالات" : "Voir tous les articles"}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
