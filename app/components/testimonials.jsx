import { ArrowUpRight } from "lucide-react"

export function Testimonials({ lang }) {
  const isEnglish = lang === "en"
  const projects = isEnglish ? [
    {
      brand: "FadlloCar",
      mark: <span className="nm-proof__wordmark">FADLLO<i>CAR</i></span>,
      service: "Service website · Direct booking",
      text: "A clear interface to showcase the fleet and simplify booking requests by phone or WhatsApp.",
      url: "https://fadllocar.ma",
    },
    {
      brand: "Nature’s Dates",
      mark: <span className="nm-proof__wordmark nm-proof__wordmark--natures"><b>NATURE’S</b><b>DATES</b></span>,
      service: "Food brand · Product platform",
      text: "A complete brand platform that brings together Medjool products, nutritional content, and recipes in one experience.",
      url: "https://naturesdates.com/",
    },
    {
      brand: "Atelier Lamiaa",
      mark: <span className="nm-proof__wordmark nm-proof__wordmark--lamiaa"><small>ATELIER</small><b>LAMIAA</b></span>,
      service: "Artisanal pastry · Digital catalogue",
      text: "A mobile-first catalogue that presents Moroccan pastries, makes products easy to discover, and guides ordering.",
      url: "https://atelierlamiaa.vercel.app/",
    },
  ] : [
    {
      brand: "FadlloCar",
      mark: <span className="nm-proof__wordmark">FADLLO<i>CAR</i></span>,
      service: "Site de service · Réservation directe",
      text: "Une interface claire pour présenter la flotte et simplifier les demandes de réservation par téléphone ou WhatsApp.",
      url: "https://fadllocar.ma",
    },
    {
      brand: "Nature’s Dates",
      mark: <span className="nm-proof__wordmark nm-proof__wordmark--natures"><b>NATURE’S</b><b>DATES</b></span>,
      service: "Marque food · Plateforme produits",
      text: "Une plateforme de marque complète qui réunit produits Medjool, contenus nutritionnels et recettes dans une même expérience.",
      url: "https://naturesdates.com/",
    },
    {
      brand: "Atelier Lamiaa",
      mark: <span className="nm-proof__wordmark nm-proof__wordmark--lamiaa"><small>ATELIER</small><b>LAMIAA</b></span>,
      service: "Pâtisserie artisanale · Catalogue digital",
      text: "Un catalogue gourmand et mobile-first pour présenter les créations marocaines, faciliter la découverte et guider la commande.",
      url: "https://atelierlamiaa.vercel.app/",
    },
  ]

  return (
    <section className="nm-quotes section">
      <div className="container">
        <header className="nm-quotes__title">
          <span className="nm-index">05</span>
          <div>
            <h2>{isEnglish ? "Real projects, built around each brand." : "Des projets réels, pensés autour de chaque marque."}</h2>
            <p>{isEnglish ? "No fake names or inflated numbers: only what has been designed and developed." : "Pas de faux noms ni de chiffres inventés : uniquement ce qui a été conçu et développé."}</p>
          </div>
        </header>
        <div className="nm-quotes__grid">
          {projects.map((project, index) => (
            <article key={project.brand}>
              <div className="nm-proof__top">
                {project.mark}
                <span>0{index + 1}</span>
              </div>
              <p>{project.text}</p>
              <footer>
                <small>{project.service}</small>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {isEnglish ? "Visit the site" : "Voir le site"}<span className="sr-only"> — {project.brand}</span><ArrowUpRight aria-hidden="true" />
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
