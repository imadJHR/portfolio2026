"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { LogoMark } from "./logo/logo-mark"

export default function Navbar({ lang }) {
  const [isOpen, setIsOpen] = useState(false)
  const isRTL = lang === "ar"
  const otherLang = isRTL ? "fr" : "ar"
  const items = isRTL
    ? [{ label: "الرئيسية", href: "/ar" }, { label: "الخدمات", href: "/ar#services" }, { label: "المشاريع", href: "/ar/projets" }, { label: "من نحن", href: "/ar/a-propos" }, { label: "المقالات", href: "/ar/insights" }]
    : [{ label: "Accueil", href: "/fr" }, { label: "Expertises", href: "/fr#services" }, { label: "Projets", href: "/fr/projets" }, { label: "Studio", href: "/fr/a-propos" }, { label: "Insights", href: "/fr/insights" }]

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <header className="nm-header" dir={isRTL ? "rtl" : "ltr"}>
      <a href="#home" className="sr-only focus:not-sr-only">{isRTL ? "انتقل إلى المحتوى" : "Aller au contenu"}</a>
      <div className="container nm-nav">
        <Link href={`/${lang}`} className="nm-brand"><LogoMark className="nm-brand__mark" /><span>NEMSI<small>MEDIA</small></span></Link>
        <nav className="nm-nav__desktop" aria-label={isRTL ? "التنقل الرئيسي" : "Navigation principale"}>
          {items.map((item, index) => <Link key={item.href} href={item.href}><small>0{index + 1}</small>{item.label}</Link>)}
        </nav>
        <div className="nm-nav__actions">
          <a className="nm-lang" href={`/${otherLang}`}>{otherLang.toUpperCase()}</a>
          <Link className="nm-nav__cta" href={`/${lang}/devis`}>{isRTL ? "مشروع جديد" : "Nouveau projet"}<ArrowUpRight aria-hidden="true" /></Link>
          <button className="nm-menu-button" type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? (isRTL ? "إغلاق القائمة" : "Fermer le menu") : (isRTL ? "فتح القائمة" : "Ouvrir le menu")}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && <div id="mobile-navigation" className="nm-mobile-nav"><nav className="container" aria-label={isRTL ? "قائمة الهاتف" : "Navigation mobile"}>{items.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}><small>0{index + 1}</small><span>{item.label}</span></Link>)}<Link href={`/${lang}/devis`} onClick={() => setIsOpen(false)}><small>06</small><span>{isRTL ? "ابدأ مشروعك" : "Démarrer un projet"}</span></Link></nav></div>}
    </header>
  )
}
