import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import portfolioData from "../lib/portfolio-data.json"
import { ProjectsGrid } from "./projects-grid"

export function Portfolio({ lang }) {
  const isRTL = lang === "ar"
  const featuredProjects = [...portfolioData.slice(0, 4), ...portfolioData.slice(-2)]

  return <section id="portfolio" className="nm-work section" dir={isRTL ? "rtl" : "ltr"}><div className="container">
    <div className="nm-section-heading"><span className="nm-index">04</span><p className="nm-kicker">{isRTL ? "أعمال مختارة" : "PROJETS SÉLECTIONNÉS"}</p><h2>{isRTL ? "كل مشروع له منطقه الخاص." : "Chaque projet trouve son propre langage."}</h2><p>{isRTL ? "بعض المنصات والهويات التي صممناها لعلامات مغربية طموحة." : "Une sélection de plateformes et d’identités créées pour des marques marocaines ambitieuses."}</p></div>
    <ProjectsGrid lang={lang} projects={featuredProjects} />
    <div className="nm-work__footer"><p>{isRTL ? "هل لديك مشروع في ذهنك؟" : "Un projet en tête ?"}</p><div className="nm-work__actions"><Link href={`/${lang}/projets`} className="nm-button nm-button--text">{isRTL ? "عرض جميع المشاريع" : `Voir les ${portfolioData.length} projets`}<ArrowUpRight aria-hidden="true" /></Link><Link href={`/${lang}/devis`} className="nm-button nm-button--primary">{isRTL ? "لنتحدث" : "Parlons-en"}<ArrowUpRight aria-hidden="true" /></Link></div></div>
  </div></section>
}
