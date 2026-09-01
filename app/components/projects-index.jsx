import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import portfolioData from "../lib/portfolio-data.json"
import Navbar from "./navbar"
import Footer from "./footer"
import { PageHero } from "./page-hero"
import { ProjectsGrid } from "./projects-grid"

export function ProjectsIndex({ lang }) {
  const isRTL = lang === "ar"

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <Navbar lang={lang} />
      <main>
        <PageHero
          lang={lang}
          index="01"
          eyebrow={isRTL ? "مشاريعنا" : "NOS PROJETS"}
          title={isRTL ? "مشاريع رقمية مصممة لتخدم أهدافاً حقيقية." : "Des projets digitaux pensés pour des objectifs réels."}
          description={isRTL
            ? "مواقع عرض، متاجر إلكترونية وتجارب رقمية أنجزناها لعلامات مغربية طموحة."
            : "Sites vitrines, e-commerce et expériences digitales réalisés pour des marques marocaines ambitieuses."}
        />
        <section className="nm-projects-index section" aria-labelledby={`projects-list-title-${lang}`}>
          <div className="container">
            <div className="nm-projects-index__intro">
              <span>{String(portfolioData.length).padStart(2, "0")}</span>
              <h2 id={`projects-list-title-${lang}`}>{isRTL ? "جميع المشاريع" : "Tous les projets"}</h2>
              <p>{isRTL ? "كل مشروع هو إجابة خاصة على حاجة، جمهور وسياق مختلف." : "Chaque projet répond à un besoin, un public et un contexte qui lui sont propres."}</p>
            </div>
            <ProjectsGrid lang={lang} projects={portfolioData} headingLevel="h3" />
            <div className="nm-work__footer">
              <p>{isRTL ? "هل ترغب في بناء مشروعك القادم؟" : "Envie de construire le prochain ?"}</p>
              <Link href={`/${lang}/devis`} className="nm-button nm-button--primary">
                {isRTL ? "اطلب عرضاً" : "Demander un devis"}
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
