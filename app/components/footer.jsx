import Link from "next/link"

import { LogoMark } from "./logo/logo-mark"
import { navServices } from "../lib/service-nav"

const content = {
  fr: { links: [["Studio", "/fr/a-propos"], ["Insights", "/fr/insights"], ["Contact", "/fr/contact"]], tagline: "Digital. Clair. Marocain.", location: "Casablanca, Maroc", top: "Retour en haut ↑", allServices: "Tous les services", servicesLabel: "Services" },
  en: { links: [["Studio", "/en/a-propos"], ["Insights", "/en/insights"], ["Contact", "/en/contact"]], tagline: "Digital. Clear. Moroccan.", location: "Casablanca, Morocco", top: "Back to top ↑", allServices: "All services", servicesLabel: "Services" },
}
export default function Footer({ lang }) {
  const locale = lang === "en" ? "en" : "fr"
  const copy = content[locale] || content.fr
  const clusters = navServices(locale)
  return <footer className="nm-footer"><div className="container"><div className="nm-footer__top"><Link href={`/${locale}`} className="nm-footer__brand"><LogoMark /><span>NEMSI MEDIA</span></Link><p className="nm-footer__tagline">{copy.tagline}</p></div><div className="nm-footer__grid nm-footer__grid--services"><nav aria-label={copy.servicesLabel} className="nm-footer__services">{clusters.map((cluster) => (<div key={cluster.id} className="nm-footer__cluster"><p className="nm-footer__cluster-label">{cluster.label}</p><ul>{cluster.items.map((item) => (<li key={item.slug}><Link href={`/${locale}/services/${item.slug}`}>{item.name}</Link></li>))}</ul></div>))}<div className="nm-footer__cluster"><p className="nm-footer__cluster-label">{copy.servicesLabel}</p><ul><li><Link href={`/${locale}/services`}>{copy.allServices}</Link></li>{copy.links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div></nav><div><a href="mailto:contact@nemsimedia.ma">contact@nemsimedia.ma</a><a href="tel:+212****8216">+212 6 45 28 82 16</a></div></div><div className="nm-footer__bottom"><span>© {new Date().getFullYear()} Nemsi Media</span><span>{copy.location}</span><a href="#home">{copy.top}</a></div></div></footer>
}