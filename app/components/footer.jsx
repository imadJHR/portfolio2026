import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { LogoMark } from "./logo/logo-mark"

export default function Footer({ lang }) {
  const isRTL = lang === "ar"
  const links = isRTL ? [["الخدمات", "/ar/services"], ["المشاريع", "/ar/projets"], ["من نحن", "/ar/a-propos"], ["المقالات", "/ar/insights"], ["اتصل بنا", "/ar/contact"]] : [["Expertises", "/fr/services"], ["Projets", "/fr/projets"], ["Studio", "/fr/a-propos"], ["Insights", "/fr/insights"], ["Contact", "/fr/contact"]]
  return <footer className="nm-footer" dir={isRTL ? "rtl" : "ltr"}><div className="container"><div className="nm-footer__top"><Link href={`/${lang}`} className="nm-footer__brand"><LogoMark /><span>NEMSI MEDIA</span></Link><p className="nm-footer__tagline">{isRTL ? "رقمي. واضح. مغربي." : "Digital. Clair. Marocain."}</p></div><div className="nm-footer__grid"><nav>{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><div><a href="mailto:contact@nemsimedia.ma">contact@nemsimedia.ma</a><a href="tel:+212645288216">+212 6 45 28 82 16</a></div><div><a href="https://www.instagram.com/nemsimedia/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight /></a><a href="https://www.linkedin.com/company/nemsi-media" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a></div></div><div className="nm-footer__bottom"><span>© {new Date().getFullYear()} Nemsi Media</span><span>Casablanca, Maroc</span><a href="#home">{isRTL ? "إلى الأعلى ↑" : "Retour en haut ↑"}</a></div></div></footer>
}
