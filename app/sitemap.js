import insightsData from "./lib/insights-data.json"
import { SITE_URL } from "./lib/seo"
import { serviceCatalog } from "./lib/service-data"

export default function sitemap() {
  const updatedAt = new Date("2026-07-14")
  const staticPages = [
    { path: "/fr", priority: 1, changeFrequency: "weekly" },
    { path: "/ar", priority: 1, changeFrequency: "weekly" },
    { path: "/fr/a-propos", priority: 0.7, changeFrequency: "monthly" },
    { path: "/ar/a-propos", priority: 0.7, changeFrequency: "monthly" },
    { path: "/fr/insights", priority: 0.8, changeFrequency: "weekly" },
    { path: "/ar/insights", priority: 0.8, changeFrequency: "weekly" },
  ].map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: updatedAt,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  const articlePages = insightsData.flatMap((article) =>
    ["fr", "ar"].map((lang) => ({
      url: `${SITE_URL}/${lang}/insights/${article.id}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly",
      priority: 0.65,
    })),
  )

  const servicePages = serviceCatalog.flatMap((service) =>
    ["fr", "ar"].map((lang) => ({
      url: `${SITE_URL}/${lang}/services/${service.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
  )

  return [...staticPages, ...servicePages, ...articlePages]
}
