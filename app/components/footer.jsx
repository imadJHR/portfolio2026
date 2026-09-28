import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { LogoMark } from "./logo/logo-mark"

const content = {
  fr: { links: [["Expertises", "/fr/services"], ["Projets", "/fr/projets"], ["Studio", "/fr/a-propos"], ["Insights", "/fr/insights"], ["Contact", "/fr/contact"]], tagline: "Digital. Clair. Marocain.", location: "Casablanca, Maroc", top: "Retour en haut ↑" },
  en: { links: [["Services", "/en/services"], ["Projects", "/en/projets"], ["Studio", "/en/a-propos"], ["Insights", "/en/insights"], ["Contact", "/en/contact"]], tagline: "Digital. Clear. Moroccan.", location: "Casablanca, Morocco", top: "Back to top ↑" },
}
export default function Footer({ lang }) {
  const copy = content[lang] || content.fr
  return <footer className="nm-footer"><div className="container"><div className="nm-footer__top"><Link href={`/${lang}`} className="nm-footer__brand"><LogoMark /><span>NEMSI MEDIA</span></Link><p className="nm-footer__tagline">{copy.tagline}</p></div><div className="nm-footer__grid"><nav>{copy.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><div><a href="mailto:contact@nemsimedia.ma">contact@nemsimedia.ma</a><a href="tel:+212645288216">+212 6 45 28 82 16</a></div><div><a href="https://www.instagram.com/nemsimedia/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight /></a><a href="https://www.linkedin.com/company/nemsi-media" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a></div></div><div className="nm-footer__bottom"><span>© {new Date().getFullYear()} Nemsi Media</span><span>{copy.location}</span><a href="#home">{copy.top}</a></div></div></footer>
}