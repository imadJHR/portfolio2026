import portfolioData from "../../lib/portfolio-data.json"
import { ProjectsIndex } from "../../components/projects-index"
import { SITE_URL, SITE_NAME, seoKeywords } from "../../lib/seo"

const title = "Projets web, e-commerce et branding au Maroc"
const description = "Découvrez les sites web, boutiques e-commerce et expériences digitales réalisés par Nemsi Media pour des marques au Maroc."
const pageUrl = `${SITE_URL}/fr/projets`

export const metadata = {
  title,
  description,
  keywords: [...seoKeywords, "portfolio agence web Maroc", "projets web Casablanca", "réalisations e-commerce Maroc"],
  alternates: {
    canonical: pageUrl,
    languages: { fr: pageUrl, ar: `${SITE_URL}/ar/projets`, "x-default": pageUrl },
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: SITE_NAME,
    locale: "fr_MA",
    alternateLocale: ["ar_MA"],
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Projets digitaux réalisés par Nemsi Media" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
}

const projectsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: "fr-MA",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: { "@id": `${pageUrl}#projects` },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#projects`,
      name: "Réalisations digitales de Nemsi Media",
      numberOfItems: portfolioData.length,
      itemListElement: portfolioData.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title.fr,
          description: project.challenge.fr,
          image: `${SITE_URL}${project.image}`,
          ...(project.liveUrl ? { url: project.liveUrl } : {}),
          creator: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/fr` },
        { "@type": "ListItem", position: 2, name: "Projets", item: pageUrl },
      ],
    },
  ],
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsIndex lang="fr" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }} />
    </>
  )
}
