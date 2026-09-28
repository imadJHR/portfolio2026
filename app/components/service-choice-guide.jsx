import Link from "next/link"

const guides = {
  fr: [
    ["creation-site-web-maroc", "Présenter votre entreprise et recevoir des demandes", "Un site vitrine convient si vos clients ont besoin de comprendre votre activité, de consulter vos réalisations et de vous contacter. Préparez vos services, les questions fréquentes de vos prospects et les contenus disponibles. La page de création de sites web détaille les étapes de conception et les éléments à prévoir avant le lancement.", "Création de sites web au Maroc"],
    ["ecommerce-maroc", "Vendre des produits en ligne", "Une boutique e-commerce ajoute un catalogue et un parcours de commande à votre présence en ligne. Le choix dépend du nombre de produits, des variantes, de la gestion des stocks et des modalités de livraison et de paiement à prévoir. Consultez notre offre pour identifier les fonctionnalités utiles à votre commerce avant de demander une estimation.", "Création de boutiques e-commerce"],
    ["seo-maroc", "Améliorer la visibilité d’un site existant", "Si vous avez déjà un site, commencez par identifier les pages et les recherches qui peuvent apporter des demandes pertinentes. Le référencement naturel, ou SEO, combine l’accès aux pages pour les moteurs de recherche, des contenus utiles et des liens entre les services. Notre page SEO présente cette démarche et les points à examiner pour votre site au Maroc.", "Référencement naturel au Maroc"],
  ],
  en: [
    ["creation-site-web-maroc", "Present your business and receive enquiries", "A showcase website is suitable when customers need to understand your business, view your work and contact you. Prepare your services, the questions prospects often ask and the content you have available. The web design page details the design stages and what to prepare before launch.", "Web design in Morocco"],
    ["ecommerce-maroc", "Sell products online", "An e-commerce store adds a product catalogue and ordering journey to your online presence. The right choice depends on the number of products, their variants, stock management, and the delivery and payment options to plan for. Review our offer to identify the features your business needs before requesting an estimate.", "E-commerce store creation"],
    ["seo-maroc", "Improve an existing site's search visibility", "If you already have a website, start by identifying the pages and searches that can bring relevant enquiries. Search engine optimisation, or SEO, combines search-engine access to pages, useful content and links between services. Our SEO page explains this approach and the points to review for your website in Morocco.", "SEO in Morocco"],
  ],
}

export function ServiceChoiceGuide({ lang }) {
  return <section className="section">
    <div className="container">
      <div className="nm-section-heading">
        <span className="nm-index">03</span>
        <p className="nm-kicker">{lang === "en" ? "CHOOSE YOUR SERVICE" : "CHOISIR VOTRE SERVICE"}</p>
        <h2>{lang === "en" ? "Which service is right for your project?" : "Quel service choisir pour votre projet ?"}</h2>
        <p>{lang === "en" ? "Start with what you want visitors to do: discover your business, order a product or find an answer before contacting you." : "Partez de l’action attendue de vos visiteurs : découvrir votre entreprise, commander un produit ou trouver une réponse avant de vous contacter."}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {guides[lang].map(([slug, title, description, label]) => <article key={slug} className="space-y-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="leading-relaxed text-[var(--text-muted)]">{description}</p>
          <Link href={`/${lang}/services/${slug}`} className="underline underline-offset-4">{label}</Link>
        </article>)}
      </div>
      <p className="mt-8 max-w-3xl leading-relaxed">{lang === "en" ? "To prepare a clear request, tell us about your business, target audience, required languages and the URL of your existing website, if you have one. Add the essential features, your approximate budget and preferred timeline so we can discuss priorities." : "Pour préparer votre demande, indiquez votre activité, votre public, les langues souhaitées et l’adresse de votre site existant. Ajoutez les fonctionnalités indispensables, votre budget indicatif et le calendrier envisagé pour discuter des priorités."} {" "}<Link href={`/${lang}/devis`} className="underline underline-offset-4">{lang === "en" ? "Request a quote" : "Demander un devis"}</Link></p>
    </div>
  </section>
}
