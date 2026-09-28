"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { LogoMark } from "./logo/logo-mark"

const navigation = {
  fr: [{ label: "Accueil", href: "/fr" }, { label: "Expertises", href: "/fr#services" }, { label: "Projets", href: "/fr/projets" }, { label: "Studio", href: "/fr/a-propos" }, { label: "Insights", href: "/fr/insights" }],
  en: [{ label: "Home", href: "/en" }, { label: "Services", href: "/en#services" }, { label: "Projects", href: "/en/projets" }, { label: "Studio", href: "/en/a-propos" }, { label: "Insights", href: "/en/insights" }],
}

function localePath(pathname, locale) {
  const suffix = pathname?.replace(/^\/(fr|en)(?=\/|$)/, "") || ""
  return `/${locale}${suffix}`
}

export default function Navbar({ lang }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const locale = lang === "en" ? "en" : "fr"
  const isEnglish = locale === "en"
  const items = navigation[locale]
  const copy = isEnglish
    ? { skip: "Skip to content", nav: "Main navigation", cta: "New project", open: "Open menu", close: "Close menu", mobile: "Mobile navigation", language: "Language", start: "Start a project" }
    : { skip: "Aller au contenu", nav: "Navigation principale", cta: "Nouveau projet", open: "Ouvrir le menu", close: "Fermer le menu", mobile: "Navigation mobile", language: "Langue", start: "Démarrer un projet" }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const languageSwitcher = (mobile = false) => (
    <div className={mobile ? "nm-mobile-language" : "nm-lang"} role="group" aria-label={copy.language} style={{ display: "flex", alignItems: "center", gap: ".25rem" }}>
      <Link href={localePath(pathname, "fr")} aria-current={locale === "fr" ? "page" : undefined} onClick={mobile ? () => setIsOpen(false) : undefined} style={mobile ? { display: "inline", padding: 0, border: 0, fontSize: ".8rem" } : undefined}>FR</Link>
      <span aria-hidden="true"> | </span>
      <Link href={localePath(pathname, "en")} aria-current={locale === "en" ? "page" : undefined} onClick={mobile ? () => setIsOpen(false) : undefined} style={mobile ? { display: "inline", padding: 0, border: 0, fontSize: ".8rem" } : undefined}>EN</Link>
    </div>
  )

  return (
    <header className="nm-header">
      <a href="#home" className="sr-only focus:not-sr-only">{copy.skip}</a>
      <div className="container nm-nav">
        <Link href={`/${locale}`} className="nm-brand"><LogoMark className="nm-brand__mark" /><span>NEMSI<small>MEDIA</small></span></Link>
        <nav className="nm-nav__desktop" aria-label={copy.nav}>{items.map((item, index) => <Link key={item.href} href={item.href}><small>0{index + 1}</small>{item.label}</Link>)}</nav>
        <div className="nm-nav__actions">
          {languageSwitcher()}
          <Link className="nm-nav__cta" href={`/${locale}/devis`}>{copy.cta}<ArrowUpRight aria-hidden="true" /></Link>
          <button className="nm-menu-button" type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? copy.close : copy.open}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && <div id="mobile-navigation" className="nm-mobile-nav"><nav className="container" aria-label={copy.mobile}>{items.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}><small>0{index + 1}</small><span>{item.label}</span></Link>)}<Link href={`/${locale}/devis`} onClick={() => setIsOpen(false)}><small>06</small><span>{copy.start}</span></Link>{languageSwitcher(true)}</nav></div>}
    </header>
  )
}
