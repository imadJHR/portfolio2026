import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import insightsData from "../lib/insights-data.json"

export function HomeInsights({ lang }) {
  const isEnglish = lang === "en"
  const articles = [...insightsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
  const dateFormatter = new Intl.DateTimeFormat(isEnglish ? "en" : "fr-MA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section className="nm-home-insights section" aria-labelledby={`home-insights-title-${lang}`}>
      <div className="container">
        <div className="nm-section-heading">
          <span className="nm-index">06</span>
          <p className="nm-kicker">{isEnglish ? "LATEST INSIGHTS" : "DERNIERS INSIGHTS"}</p>
          <h2 id={`home-insights-title-${lang}`}>{isEnglish ? "Practical ideas for better digital decisions." : "Des idées utiles pour mieux décider en digital."}</h2>
          <p>{isEnglish ? "Clear articles on web design, SEO, performance, and digital growth in Morocco." : "Des articles concrets sur le design web, le SEO, la performance et la croissance digitale au Maroc."}</p>
        </div>
        <div className="nm-home-insights__grid">
          {articles.map((article, index) => (
            <article key={article.id}>
              <div className="nm-home-insights__meta"><span>{String(index + 1).padStart(2, "0")}</span><small>{article.category[lang] || article.category.fr} / {article.readTime[lang] || article.readTime.fr}</small></div>
              <h3><Link href={`/${lang}/insights/${article.id}`}>{article.title[lang] || article.title.fr}</Link></h3>
              <p>{article.excerpt[lang] || article.excerpt.fr}</p>
              <footer><time dateTime={article.date}>{dateFormatter.format(new Date(`${article.date}T00:00:00`))}</time><Link href={`/${lang}/insights/${article.id}`} aria-label={isEnglish ? `Read: ${article.title.en}` : `Lire : ${article.title.fr}`}><ArrowUpRight aria-hidden="true" /><span className="sr-only">{isEnglish ? `Read ${article.title.en}` : `Lire ${article.title.fr}`}</span></Link></footer>
            </article>
          ))}
        </div>
        <div className="nm-home-insights__footer"><Link href={`/${lang}/insights`} className="nm-button nm-button--primary">{isEnglish ? "View all articles" : "Voir tous les articles"}<ArrowUpRight aria-hidden="true" /></Link></div>
      </div>
    </section>
  )
}
