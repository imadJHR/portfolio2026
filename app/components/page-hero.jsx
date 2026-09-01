export function PageHero({ lang, index = "01", eyebrow, title, description }) {
  const isRTL = lang === "ar"
  return <section id="home" className="nm-page-hero" dir={isRTL ? "rtl" : "ltr"}><div className="container"><div className="nm-page-hero__top"><span>{index}</span><p className="nm-kicker">{eyebrow}</p></div><h1>{title}</h1>{description && <p className="nm-page-hero__intro">{description}</p>}</div></section>
}
