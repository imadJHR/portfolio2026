"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Globe, MessageCircle, Moon, Sun, Sparkles } from "lucide-react"
import { useTheme } from "./theme-provider"
import { openWhatsApp } from "../lib/leads"
import { SpecularButton, SpecularLink } from "./react-bits/specular-button"

export default function Navbar({ lang }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const progressRef = useRef(null)
  const { theme, toggleTheme } = useTheme()
  const isRTL = lang === "ar"

  const items = lang === "fr"
    ? [{ label: "Accueil", href: "/fr" }, { label: "Services", href: "/fr#services" }, { label: "Portfolio", href: "/fr#portfolio" }, { label: "À propos", href: "/fr/a-propos" }, { label: "Insights", href: "/fr/insights" }, { label: "Contact", href: "/fr#contact" }]
    : [{ label: "الرئيسية", href: "/ar" }, { label: "خدماتنا", href: "/ar#services" }, { label: "أعمالنا", href: "/ar#portfolio" }, { label: "من نحن", href: "/ar/a-propos" }, { label: "مقالات", href: "/ar/insights" }, { label: "اتصل بنا", href: "/ar#contact" }]

  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 12
        setIsScrolled((current) => current === nextScrolled ? current : nextScrolled)

        const max = document.documentElement.scrollHeight - window.innerHeight
        const nextProgress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${nextProgress})`
        }
        frame = 0
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const handleWhatsApp = () => {
    openWhatsApp(
      lang === "ar" ? "مرحبا، أود مناقشة مشروعي معكم." : "Bonjour, je souhaite discuter de mon projet avec vous.",
      "navbar_cta",
      { language: lang },
    )
  }
  const otherLang = lang === "fr" ? "ar" : "fr"

  return (
    <header className="site-header fixed left-0 right-0 top-0 z-50 px-2.5 pt-2.5 sm:px-3 sm:pt-3" dir={isRTL ? "rtl" : "ltr"}>
      <motion.div initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5 }} className={`site-navbar-shell container relative overflow-hidden rounded-full border transition-all duration-500 ${isScrolled ? "border-[var(--border)] bg-[var(--bg-card)] shadow-[var(--shadow-md)] backdrop-blur-2xl" : "border-transparent bg-transparent"}`}>
        <div ref={progressRef} className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[var(--brand-2)] via-[var(--brand-hover)] to-[var(--brand-3)] will-change-transform ${isRTL ? "origin-right" : "origin-left"}`} style={{ transform: "scaleX(0)" }} />
        <nav className="flex h-14 min-w-0 items-center justify-between gap-2 sm:h-16 sm:gap-3">
          <Link href={lang === "fr" ? "/fr" : "/ar"} className="site-brand flex min-w-0 items-center gap-2 sm:gap-2.5" aria-label="Nemsi Media">
            <Image src="/dark.png" alt="" width={38} height={38} className="site-brand-logo h-8 w-8 shrink-0 rounded-xl object-cover sm:h-9 sm:w-9" priority />
            <span className="site-brand-wordmark truncate text-sm font-black tracking-tight sm:text-lg">Nemsi<span className="gradient-text ml-1">Media</span></span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] p-1 backdrop-blur-xl xl:flex">
            {items.map((item) => <Link key={item.label} href={item.href} className="rounded-full px-3.5 py-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--bg-card-hover)] hover:text-[var(--text)]">{item.label}</Link>)}
          </div>

          <div className="hidden items-center gap-2 xl:flex">
            <SpecularLink href={`/${otherLang}`} variant="ghost" size="sm"><Globe className="h-3.5 w-3.5" />{otherLang === "ar" ? "AR" : "FR"}</SpecularLink>
            <SpecularButton onClick={toggleTheme} variant="ghost" size="icon" aria-label={isRTL ? "تغيير المظهر" : "Changer le thème"}>{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</SpecularButton>
            <SpecularButton onClick={handleWhatsApp} size="sm"><MessageCircle className="h-3.5 w-3.5" />{lang === "fr" ? "Devis" : "استشارة"}</SpecularButton>
          </div>

          <div className="flex shrink-0 items-center gap-1 xl:hidden sm:gap-1.5">
            <SpecularButton onClick={toggleTheme} variant="ghost" size="icon" aria-label={isRTL ? "تغيير المظهر" : "Changer le thème"}>{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</SpecularButton>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild><SpecularButton variant="ghost" size="icon" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</SpecularButton></SheetTrigger>
              <SheetContent side={isRTL ? "right" : "left"} className="w-[min(22rem,calc(100vw-1rem))] max-w-none overflow-y-auto border-[var(--border)] bg-[var(--bg)] p-5 text-[var(--text)] sm:p-6">
                <div className="badge mt-6"><Sparkles className="h-3.5 w-3.5" />Menu</div>
                <div className="mt-8 flex flex-col gap-3">
                  {items.map((item) => <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 font-semibold text-[var(--text-secondary)]">{item.label}</Link>)}
                  <Link href={`/${otherLang}`} onClick={() => setIsOpen(false)} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 font-semibold text-[var(--text-secondary)]">{otherLang === "ar" ? "العربية" : "Français"}</Link>
                  <SpecularButton onClick={handleWhatsApp} className="mt-3 w-full"><MessageCircle className="h-4 w-4" />{lang === "fr" ? "Devis gratuit" : "استشارة مجانية"}</SpecularButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.div>
    </header>
  )
}
