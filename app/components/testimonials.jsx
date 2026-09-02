import { ArrowUpRight } from "lucide-react"

export function Testimonials({ lang }) {
  const isRTL = lang === "ar"
  const projects = isRTL ? [
    {
      brand: "FadlloCar",
      mark: <span className="nm-proof__wordmark">FADLLO<i>CAR</i></span>,
      service: "موقع خدمات · حجز مباشر",
      text: "واجهة واضحة لعرض أسطول السيارات وتسهيل طلبات الحجز عبر الهاتف وواتساب.",
      url: "https://fadllocar.ma",
    },
    {
      brand: "Nature’s Dates",
      mark: <span className="nm-proof__wordmark nm-proof__wordmark--natures"><b>NATURE’S</b><b>DATES</b></span>,
      service: "علامة غذائية · منصة منتجات",
      text: "منصة متكاملة تجمع قصة العلامة، منتجات تمور المجهول، المحتوى الغذائي والوصفات في تجربة واحدة.",
      url: "https://naturesdates.com/",
    },
    {
      brand: "Atelier Lamiaa",
      mark: <span className="nm-proof__wordmark nm-proof__wordmark--lamiaa"><small>ATELIER</small><b>LAMIAA</b></span>,
      service: "حلويات حرفية · كتالوج رقمي",
      text: "كتالوج بصري سريع على الهاتف يعرض الحلويات المغربية والسابلي ويسهّل اكتشاف المنتجات والطلب.",
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
    <section className="nm-quotes section" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        <header className="nm-quotes__title">
          <span className="nm-index">05</span>
          <div>
            <h2>{isRTL ? "مشاريع حقيقية، مبنية حول كل علامة." : "Des projets réels, pensés autour de chaque marque."}</h2>
            <p>{isRTL ? "لا أسماء وهمية ولا أرقام مبالغ فيها: فقط ما تم تصميمه وتطويره." : "Pas de faux noms ni de chiffres inventés : uniquement ce qui a été conçu et développé."}</p>
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
                  {isRTL ? "زيارة الموقع" : "Voir le site"}<span className="sr-only"> — {project.brand}</span><ArrowUpRight aria-hidden="true" />
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
