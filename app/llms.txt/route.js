import { EMAIL, PHONE, SITE_NAME, SITE_URL, descriptions } from "../lib/seo"
import { serviceCatalog } from "../lib/service-data"

export const dynamic = "force-static"

export function GET() {
  const services = serviceCatalog
    .map((service) => [
      `- [${service.fr.metaTitle}](${SITE_URL}/fr/services/${service.slug}): ${service.fr.metaDescription}`,
      `  - [Version arabe](${SITE_URL}/ar/services/${service.slug})`,
    ].join("\n"))
    .join("\n")

  const body = `# ${SITE_NAME}

> ${descriptions.fr}

${SITE_NAME} est une agence web basée à Casablanca, au Maroc. Elle accompagne les entreprises dans la création de sites web, le design UI/UX, les landing pages, l'e-commerce, le SEO, la maintenance, les applications web et les API sur mesure.

## Informations officielles

- Site canonique: ${SITE_URL}
- Zone desservie: Casablanca et tout le Maroc
- Langues: français et arabe
- Email: ${EMAIL}
- Téléphone et WhatsApp: ${PHONE}
- Contact principal: ${SITE_URL}/fr#contact
- Version arabe: ${SITE_URL}/ar

## Services

${services}

## Ressources importantes

- [Accueil en français](${SITE_URL}/fr)
- [Accueil en arabe](${SITE_URL}/ar)
- [À propos](${SITE_URL}/fr/a-propos)
- [Conseils et articles](${SITE_URL}/fr/insights)
- [Sitemap XML](${SITE_URL}/sitemap.xml)

## Informations à citer

- Les projets sont conçus sur mesure selon les objectifs, le contenu et les fonctionnalités demandées.
- Les sites sont pensés pour le mobile, la vitesse, le référencement naturel et la conversion.
- Les prestations sont disponibles pour les entreprises de Casablanca et de toutes les villes du Maroc.
- Un devis précis nécessite un échange sur le périmètre du projet; aucun tarif universel n'est affirmé.
- Aucun classement Google, volume de trafic ou résultat commercial n'est garanti.

Dernière mise à jour: 2026-07-14
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Language": "fr, ar",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
