const technologies = ["Strategy", "Art direction", "Figma", "Next.js", "React", "Node.js", "TypeScript", "SEO", "Analytics", "Mobile-first"]

export function TechStack({ lang }) {
  const isRTL = lang === "ar"
  return <section className="nm-capabilities" dir={isRTL ? "rtl" : "ltr"}><div className="container">
    <div className="nm-capabilities__heading"><span className="nm-index">03</span><div><p className="nm-kicker">{isRTL ? "الأدوات والمنهج" : "OUTILS & MÉTHODE"}</p><h2>{isRTL ? "التقنية في خدمة الفكرة." : "La technologie au service de l’idée."}</h2></div></div>
    <div className="nm-capabilities__list">{technologies.map((technology, index) => <span key={technology}><small>{String(index + 1).padStart(2, "0")}</small>{technology}</span>)}</div>
  </div></section>
}
