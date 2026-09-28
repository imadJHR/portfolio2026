import { notFound } from "next/navigation"
import { ServiceDetailPage } from "../../../components/service-detail-page"
import { getServiceBySlug, serviceCatalog } from "../../../lib/service-data"
import { buildServiceMetadata, buildServiceSchemas } from "../../../lib/service-seo"

const publicLocales = ["fr", "en"]
const isPublicLocale = (locale) => publicLocales.includes(locale)

export const dynamicParams = false
export function generateStaticParams() { return publicLocales.flatMap((locale) => serviceCatalog.map((service) => ({ locale, slug: service.slug }))) }
export async function generateMetadata({ params }) { const { locale, slug } = await params; const service = getServiceBySlug(slug); return isPublicLocale(locale) && service ? buildServiceMetadata(service, locale) : {} }
export default async function ServicePage({ params }) { const { locale, slug } = await params; if (!isPublicLocale(locale)) notFound(); const service = getServiceBySlug(slug); if (!service) notFound(); const relatedServices = service.related.map(getServiceBySlug).filter(Boolean).map((related) => ({ slug: related.slug, icon: related.icon, name: related[locale].name, description: related[locale].description })); const schemas = buildServiceSchemas(service, locale); return <><ServiceDetailPage slug={service.slug} icon={service.icon} content={service[locale]} relatedServices={relatedServices} lang={locale} />{schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}</> }
