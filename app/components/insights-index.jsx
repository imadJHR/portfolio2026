import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import insightsData from "../lib/insights-data.json"
import Navbar from "./navbar"
import Footer from "./footer"
import { PageHero } from "./page-hero"

export function InsightsIndex({ lang }) {
  const isEnglish = lang === "en"
  const articles = insightsData.filter((article) => (article.locales || ["fr", "en"]).includes(lang))
  return <div><Navbar lang={lang} /><main><PageHero index="01" eyebrow={isEnglish ? "IDEAS & INSIGHTS" : "NOTES & PERSPECTIVES"} title={isEnglish ? "We think about the web as much as we build it." : "Nous pensons le web autant que nous le construisons."} description={isEnglish ? "Practical notes on design, technology, SEO, and digital growth in Morocco." : "Des notes concrètes sur le design, la technique, le SEO et la croissance digitale au Maroc."} /><section className="nm-insights section"><div className="container nm-insights__grid">{articles.map((article, index) => <article key={article.id}><div><span>{String(index + 1).padStart(2, "0")}</span><small>{article.category[lang] || article.category.fr} / {article.readTime[lang] || article.readTime.fr}</small></div><h2><Link href={`/${lang}/insights/${article.id}`}>{article.title[lang] || article.title.fr}</Link></h2><p>{article.excerpt[lang] || article.excerpt.fr}</p><footer><time dateTime={article.date}>{article.date}</time><Link href={`/${lang}/insights/${article.id}`} aria-label={isEnglish ? `Read: ${article.title.en}` : `Lire : ${article.title.fr}`}><ArrowUpRight aria-hidden="true" /><span className="sr-only">{isEnglish ? `Read ${article.title.en}` : `Lire ${article.title.fr}`}</span></Link></footer></article>)}</div></section></main><Footer lang={lang} /></div>
}
