const technologies = ["Strategy", "Art direction", "Figma", "Next.js", "React", "Node.js", "TypeScript", "SEO", "Analytics", "Mobile-first"]

export function TechStack({ lang }) {
  const isEnglish = lang === "en"
  return <section className="nm-capabilities"><div className="container">
    <div className="nm-capabilities__heading"><span className="nm-index">03</span><div><p className="nm-kicker">{isEnglish ? "TOOLS & METHOD" : "OUTILS & MÉTHODE"}</p><h2>{isEnglish ? "Technology in service of the idea." : "La technologie au service de l’idée."}</h2></div></div>
    <div className="nm-capabilities__list">{technologies.map((technology, index) => <span key={technology}><small>{String(index + 1).padStart(2, "0")}</small>{technology}</span>)}</div>
  </div></section>
}
