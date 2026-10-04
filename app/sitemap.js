import insightsData from "./lib/insights-data.json"
import { SITE_URL } from "./lib/seo"
import { serviceCatalog } from "./lib/service-data"

export default function sitemap() {
  const updatedAt = new Date("2026-09-02")
  const staticPages = [
    { path: "/fr", priority: 1, changeFrequency: "weekly" },
    { path: "/en", priority: 1, changeFrequency: "weekly" },
    { path: "/fr/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/en/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/fr/a-propos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/en/a-propos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/fr/projets", priority: 0.9, changeFrequency: "monthly" },
    { path: "/en/projets", priority: 0.9, changeFrequency: "monthly" },
    { path: "/fr/insights", priority: 0.85, changeFrequency: "weekly" },
    { path: "/en/insights", priority: 0.85, changeFrequency: "weekly" },
    { path: "/fr/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/en/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/fr/devis", priority: 0.9, changeFrequency: "weekly" },
    { path: "/en/devis", priority: 0.9, changeFrequency: "weekly" },
  ].map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: updatedAt,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  const articlePages = insightsData.flatMap((article) =>
    (article.locales || ["fr", "en"]).map((lang) => ({
      url: `${SITE_URL}/${lang}/insights/${article.id}`,
      lastModified: new Date(article.updatedAt || article.date),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  )

  const servicePages = serviceCatalog.flatMap((service) =>
    ["fr", "en"].map((lang) => ({
      url: `${SITE_URL}/${lang}/services/${service.slug}`,
      lastModified: updatedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    })),
  )

  return [...staticPages, ...servicePages, ...articlePages]
}
