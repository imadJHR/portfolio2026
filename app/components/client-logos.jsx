const clients = [
  { name: "FadlloCar", mark: <>FADLLO<span>CAR</span></>, style: "fadllo" },
  { name: "La Burratina", mark: <>LA <strong>BURRATINA</strong></>, style: "burratina" },
  { name: "Café Bianca", mark: <>BIANCA<small>CAFÉ</small></>, style: "bianca" },
  { name: "Ironz Équipements", mark: <>IRONZ<small>ÉQUIPEMENTS</small></>, style: "ironz" },
  { name: "MJ Pub", mark: <>MJ<span>PUB</span></>, style: "mj" },
  { name: "Pâtisserie Les Jumeaux", mark: <>LES JUMEAUX<small>PÂTISSERIE</small></>, style: "jumeaux" },
  { name: "Firdaous Spa", mark: <>FIRDAOUS<small>SPA & MASSAGE</small></>, style: "firdaous" },
  { name: "Copine", mark: <>copine<span>.</span></>, style: "copine" },
  { name: "L’atelier Tonka", mark: <>TONKA<small>ATELIER CHOCOLATIER</small></>, style: "tonka" },
  { name: "Sou9 Al Maghreb", mark: <>SOU9<small>AL MAGHREB</small></>, style: "sou9" },
  { name: "Nature’s Dates", mark: <><strong>NATURE’S</strong><strong>DATES</strong></>, style: "natures" },
  { name: "Atelier Lamiaa", mark: <><small>ATELIER</small><strong>LAMIAA</strong></>, style: "lamiaa" },
]

const copy = {
  fr: { title: "Des marques nous ont confié leur présence digitale.", description: "Des collaborations dans la restauration, le commerce, les services et les marques locales.", clients: "Nos clients" },
  en: { title: "Brands that trust us with their digital presence.", description: "Partnerships across hospitality, retail, services, and local brands.", clients: "Our clients" },
}

export function ClientLogos({ lang }) {
  const text = copy[lang] || copy.fr

  return (
    <section className="nm-clients section" aria-labelledby="client-logos-title">
      <div className="container">
        <header className="nm-clients__heading">
          <h2 id="client-logos-title">{text.title}</h2>
          <p>{text.description}</p>
        </header>
        <ul className="nm-clients__grid" aria-label={text.clients}>
          {clients.map((client) => (
            <li key={client.name} aria-label={client.name}>
              <span className={`nm-client-mark nm-client-mark--${client.style}`} aria-hidden="true">{client.mark}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
