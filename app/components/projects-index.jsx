import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import portfolioData from "../lib/portfolio-data.json"
import Navbar from "./navbar"
import Footer from "./footer"
import { PageHero } from "./page-hero"
import { ProjectsGrid } from "./projects-grid"

export function ProjectsIndex({ lang }) {
  return (
    <div>
      <Navbar lang={lang} />
      <main>
        <PageHero
          lang={lang}
          index="01"
          eyebrow={lang === "en" ? "OUR PROJECTS" : "NOS PROJETS"}
          title={lang === "en" ? "Digital projects designed for real goals." : "Des projets digitaux pensés pour des objectifs réels."}
          description={lang === "en" ? "Showcase websites, e-commerce stores and digital experiences created for ambitious Moroccan brands." : "Sites vitrines, e-commerce et expériences digitales réalisés pour des marques marocaines ambitieuses."}
        />
        <section className="nm-projects-index section" aria-labelledby={`projects-list-title-${lang}`}>
          <div className="container">
            <div className="nm-projects-index__intro">
              <span>{String(portfolioData.length).padStart(2, "0")}</span>
              <h2 id={`projects-list-title-${lang}`}>{lang === "en" ? "All projects" : "Tous les projets"}</h2>
              <p>{lang === "en" ? "Every project is a tailored response to a distinct need, audience and context." : "Chaque projet répond à un besoin, un public et un contexte qui lui sont propres."}</p>
            </div>
            <ProjectsGrid lang={lang} projects={portfolioData} headingLevel="h3" />
            <div className="nm-work__footer">
              <p>{lang === "en" ? "Ready to build your next project?" : "Envie de construire le prochain ?"}</p>
              <Link href={`/${lang}/devis`} className="nm-button nm-button--primary">
                {lang === "en" ? "Request a quote" : "Demander un devis"}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  )
}
