import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function ProjectsGrid({ lang, projects, headingLevel = "h3" }) {
  const Heading = headingLevel

  return (
    <div className="nm-work__grid">
      {projects.map((project, index) => {
        const title = project.title?.[lang] || project.title?.fr
        const challenge = project.challenge?.[lang] || project.challenge?.fr
        const content = (
          <>
            <div className={`nm-work__image ${project.imageLayout === "wide" ? "nm-work__image--wide" : ""}`}>
              <Image
                src={project.image}
                alt={lang === "ar" ? `مشروع ${title} من Nemsi Media` : `Projet ${title} réalisé par Nemsi Media`}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
            <div className="nm-work__meta">
              <span>{String(index + 1).padStart(2, "0")} / {project.category}</span>
              <ArrowUpRight aria-hidden="true" />
            </div>
            <Heading>{title}</Heading>
            {challenge && <p>{challenge}</p>}
          </>
        )

        return project.liveUrl ? (
          <a
            className="nm-work__item"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            aria-label={lang === "ar" ? `مشاهدة مشروع ${title}` : `Voir le projet ${title}`}
          >
            {content}
          </a>
        ) : (
          <article className="nm-work__item" key={project.id}>{content}</article>
        )
      })}
    </div>
  )
}
