import { notFound } from "next/navigation"
import { ServiceDetailPage } from "../../../components/service-detail-page"
import { getServiceBySlug, serviceCatalog } from "../../../lib/service-data"
import { buildServiceMetadata, buildServiceSchemas } from "../../../lib/service-seo"

export function generateStaticParams() {
  return serviceCatalog.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  return service ? buildServiceMetadata(service, "fr") : {}
}

export default async function FrenchServicePage({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const relatedServices = service.related.map(getServiceBySlug).filter(Boolean).map((related) => ({
    slug: related.slug,
    icon: related.icon,
    name: related.fr.name,
    description: related.fr.description,
  }))
  const schemas = buildServiceSchemas(service, "fr")

  return (
    <>
      <ServiceDetailPage slug={service.slug} icon={service.icon} content={service.fr} relatedServices={relatedServices} lang="fr" />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}
