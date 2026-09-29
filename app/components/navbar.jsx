"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { LogoMark } from "./logo/logo-mark"
import { navServices } from "../lib/service-nav"

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
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const locale = lang === "en" ? "en" : "fr"
  const isEnglish = locale === "en"
  const items = navigation[locale]
  const clusters = navServices(locale)
  const copy = isEnglish
    ? { skip: "Skip to content", nav: "Main navigation", cta: "New project", open: "Open menu", close: "Close menu", mobile: "Mobile navigation", language: "Language", start: "Start a project", services: "Services", allServices: "All services", clusters: "Service areas" }
    : { skip: "Aller au contenu", nav: "Navigation principale", cta: "Nouveau projet", open: "Ouvrir le menu", close: "Fermer le menu", mobile: "Navigation mobile", language: "Langue", start: "Démarrer un projet", services: "Services", allServices: "Tous les services", clusters: "Pôles d’expertise" }

  const isServicesArea = pathname?.startsWith(`/${locale}/services`)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Ferme le menu mobile quand on change de page.
  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [pathname])

  // Ferme le mega-menu desktop avec Escape.
  useEffect(() => {
    if (!servicesOpen) return
    const onKeyDown = (event) => { if (event.key === "Escape") setServicesOpen(false) }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [servicesOpen])

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
        <nav className="nm-nav__desktop" aria-label={copy.nav}>
          <button
            type="button"
            className={`nm-nav__trigger${isServicesArea ? " nm-nav__trigger--active" : ""}`}
            aria-expanded={servicesOpen}
            aria-controls="services-menu"
            aria-current={isServicesArea ? "page" : undefined}
            onClick={() => setServicesOpen((value) => !value)}
          >
            <small>01</small>
            <span>{copy.services}</span>
            <ChevronDown aria-hidden="true" className="nm-nav__chevron" data-open={servicesOpen ? "" : undefined} />
          </button>
          {items.slice(1).map((item, index) => <Link key={item.href} href={item.href}><small>0{index + 2}</small>{item.label}</Link>)}
        </nav>
        <div className="nm-nav__actions">
          {languageSwitcher()}
          <Link className="nm-nav__cta" href={`/${locale}/devis`}>{copy.cta}<ArrowUpRight aria-hidden="true" /></Link>
          <button className="nm-menu-button" type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? copy.close : copy.open}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>

      <div id="services-menu" className="nm-mega" data-open={servicesOpen ? "" : undefined} hidden={!servicesOpen}>
        <div className="container nm-mega__inner">
          <div className="nm-mega__head">
            <Link className="nm-mega__hub" href={`/${locale}/services`} onClick={() => setServicesOpen(false)}>{copy.allServices}<ArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="nm-mega__grid">
            {clusters.map((cluster) => (
              <div key={cluster.id} className="nm-mega__group">
                <p className="nm-mega__label">{cluster.label}</p>
                <ul className="nm-mega__list">
                  {cluster.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/${locale}/services/${item.slug}`}
                        aria-current={pathname === `/${locale}/services/${item.slug}` ? "page" : undefined}
                        onClick={() => setServicesOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="mobile-navigation" className="nm-mobile-nav" data-open={isOpen ? "" : undefined} hidden={!isOpen}>
        <nav className="container" aria-label={copy.mobile}>
          <Link href={`/${locale}`} onClick={() => setIsOpen(false)}><small>00</small><span>{items[0].label}</span></Link>
          <div className="nm-mobile-group">
            <button
              type="button"
              className="nm-mobile-group__btn"
              aria-expanded={servicesOpen}
              aria-controls="mobile-services"
              onClick={() => setServicesOpen((value) => !value)}
            >
              <small>01</small>
              <span>{copy.services}</span>
              <ChevronDown aria-hidden="true" className="nm-mobile-group__chevron" data-open={servicesOpen ? "" : undefined} />
            </button>
            <div id="mobile-services" className="nm-mobile-sub" data-open={servicesOpen ? "" : undefined} hidden={!servicesOpen}>
              <Link className="nm-mobile-sub__hub" href={`/${locale}/services`} onClick={() => setIsOpen(false)}>{copy.allServices}</Link>
              {clusters.map((cluster) => (
                <div key={cluster.id} className="nm-mobile-sub__group">
                  <p className="nm-mobile-sub__label">{cluster.label}</p>
                  <ul className="nm-mobile-sub__list">
                    {cluster.items.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/${locale}/services/${item.slug}`} onClick={() => setIsOpen(false)}>{item.name}</Link>
                      </li>
                        ))}
                      </ul>
                    </div>
                  ))}
            </div>
          </div>
          {items.slice(1).map((item, index) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}><small>0{index + 2}</small><span>{item.label}</span></Link>)}
          <Link href={`/${locale}/devis`} onClick={() => setIsOpen(false)}><small>06</small><span>{copy.start}</span></Link>
          {languageSwitcher(true)}
        </nav>
      </div>
    </header>
  )
}
