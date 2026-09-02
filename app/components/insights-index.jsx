import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import insightsData from "../lib/insights-data.json"
import Navbar from "./navbar"
import Footer from "./footer"
import { PageHero } from "./page-hero"

export function InsightsIndex({ lang }) {
  const isRTL = lang === "ar"
  return <div dir={isRTL ? "rtl" : "ltr"}><Navbar lang={lang} /><main><PageHero lang={lang} index="01" eyebrow={isRTL ? "أفكار وملاحظات" : "NOTES & PERSPECTIVES"} title={isRTL ? "نفكر في الويب كما نبنيه." : "Nous pensons le web autant que nous le construisons."} description={isRTL ? "ملاحظات عملية حول التصميم، التقنية، SEO والنمو الرقمي في المغرب." : "Des notes concrètes sur le design, la technique, le SEO et la croissance digitale au Maroc."} /><section className="nm-insights section"><div className="container nm-insights__grid">{insightsData.map((article, index) => <article key={article.id}><div><span>{String(index + 1).padStart(2, "0")}</span><small>{article.category[lang]} / {article.readTime[lang]}</small></div><h2><Link href={`/${lang}/insights/${article.id}`}>{article.title[lang]}</Link></h2><p>{article.excerpt[lang]}</p><footer><time dateTime={article.date}>{article.date}</time><Link href={`/${lang}/insights/${article.id}`} aria-label={isRTL ? `قراءة: ${article.title.ar}` : `Lire : ${article.title.fr}`}><ArrowUpRight aria-hidden="true" /><span className="sr-only">{isRTL ? `قراءة ${article.title.ar}` : `Lire ${article.title.fr}`}</span></Link></footer></article>)}</div></section></main><Footer lang={lang} /></div>
}
