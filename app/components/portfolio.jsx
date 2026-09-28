import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import portfolioData from "../lib/portfolio-data.json"
import { ProjectsGrid } from "./projects-grid"

export function Portfolio({ lang }) {
  const featuredProjects = [...portfolioData.slice(0, 4), ...portfolioData.slice(-2)]

  return <section id="portfolio" className="nm-work section"><div className="container">
    <div className="nm-section-heading"><span className="nm-index">04</span><p className="nm-kicker">{lang === "en" ? "SELECTED PROJECTS" : "PROJETS SÉLECTIONNÉS"}</p><h2>{lang === "en" ? "Every project finds its own language." : "Chaque projet trouve son propre langage."}</h2><p>{lang === "en" ? "A selection of platforms and identities created for ambitious Moroccan brands." : "Une sélection de plateformes et d’identités créées pour des marques marocaines ambitieuses."}</p></div>
    <ProjectsGrid lang={lang} projects={featuredProjects} />
    <div className="nm-work__footer"><p>{lang === "en" ? "Have a project in mind?" : "Un projet en tête ?"}</p><div className="nm-work__actions"><Link href={`/${lang}/projets`} className="nm-button nm-button--text">{lang === "en" ? `View all ${portfolioData.length} projects` : `Voir les ${portfolioData.length} projets`}<ArrowUpRight aria-hidden="true" /></Link><Link href={`/${lang}/devis`} className="nm-button nm-button--primary">{lang === "en" ? "Let's talk" : "Parlons-en"}<ArrowUpRight aria-hidden="true" /></Link></div></div>
  </div></section>
}
