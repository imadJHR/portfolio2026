import portfolioData from "../../lib/portfolio-data.json"
import { ProjectsIndex } from "../../components/projects-index"
import { OG_IMAGE, SITE_URL, SITE_NAME, seoKeywords } from "../../lib/seo"

const title = "مشاريع مواقع ومتاجر إلكترونية في المغرب"
const description = "اكتشف مواقع الويب والمتاجر الإلكترونية والتجارب الرقمية التي أنجزتها Nemsi Media لعلامات تجارية في المغرب."
const pageUrl = `${SITE_URL}/ar/projets`

export const metadata = {
  title,
  description,
  keywords: [...seoKeywords, "مشاريع مواقع المغرب", "أعمال وكالة ويب الدار البيضاء", "متاجر إلكترونية المغرب"],
  alternates: {
    canonical: pageUrl,
    languages: { fr: `${SITE_URL}/fr/projets`, ar: pageUrl, "x-default": `${SITE_URL}/fr/projets` },
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: SITE_NAME,
    locale: "ar_MA",
    alternateLocale: ["fr_MA"],
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "مشاريع رقمية من إنجاز Nemsi Media" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
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
      inLanguage: "ar-MA",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: { "@id": `${pageUrl}#projects` },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#projects`,
      name: "مشاريع Nemsi Media الرقمية",
      numberOfItems: portfolioData.length,
      itemListElement: portfolioData.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title.ar || project.title.fr,
          description: project.challenge.ar || project.challenge.fr,
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
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/ar` },
        { "@type": "ListItem", position: 2, name: "المشاريع", item: pageUrl },
      ],
    },
  ],
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsIndex lang="ar" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }} />
    </>
  )
}
