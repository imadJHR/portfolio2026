"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  X,
  Globe,
  Sun,
  Moon,
  ArrowRight,
  MessageCircle,
} from "lucide-react"
import logoLight from "@/public/light.png"
import logoDark from "@/public/dark.png"

export default function Navbar({ lang, t }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState("light")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  const isRTL = lang === "ar"

  const colors = {
    primary: "#520371",
    secondary: "#7c3aed",
    lightBg: "#fdfaff",
    darkBg: "#0f0a1a",
    lightAccent: "#9333ea",
    darkAccent: "#c084fc",
    lightText: "#1a0525",
    darkText: "#f5f0ff",
  }

  const cssVariables = {
    "--brand-primary": colors.primary,
    "--brand-secondary": colors.secondary,
    "--brand-light-bg": colors.lightBg,
    "--brand-dark-bg": colors.darkBg,
    "--brand-light-accent": colors.lightAccent,
    "--brand-dark-accent": colors.darkAccent,
    "--brand-light-text": colors.lightText,
    "--brand-dark-text": colors.darkText,
  }

  const whatsappInfo = {
    phone: "212645288216",
    message: {
      fr: "Bonjour, je souhaite discuter de mon projet avec vous.",
      ar: "مرحبا، أود مناقشة مشروعي معكم.",
    },
  }

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      whatsappInfo.message[lang] || whatsappInfo.message.fr
    )
    window.open(`https://wa.me/${whatsappInfo.phone}?text=${text}`, "_blank")
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress =
        docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0

      setIsScrolled(scrollTop > 10)
      setScrollProgress(progress)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(savedTheme)
  }, [isMounted])

  const toggleTheme = () => {
    if (!isMounted) return

    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(newTheme)
  }

  const navItems = [
    { href: `/${lang}#home`, label: t?.nav?.home || (isRTL ? "الرئيسية" : "Accueil") },
    { href: `/${lang}#services`, label: t?.nav?.services || (isRTL ? "الخدمات" : "Services") },
    { href: `/${lang}#portfolio`, label: t?.nav?.portfolio || (isRTL ? "الأعمال" : "Portfolio") },
    { href: `/${lang}#testimonials`, label: t?.nav?.testimonials || (isRTL ? "الآراء" : "Témoignages") },
    { href: `/${lang}#contact`, label: t?.nav?.contact || (isRTL ? "التواصل" : "Contact") },
  ]

  const getLogo = () => (theme === "light" ? logoLight : logoDark)

  if (!isMounted) {
    return (
      <nav
        style={cssVariables}
        className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 bg-[var(--brand-light-bg)]/95 dark:bg-[var(--brand-dark-bg)]/95 backdrop-blur-xl border-b border-[var(--brand-primary)]/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary)]/10 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-28 rounded bg-[var(--brand-primary)]/10 animate-pulse" />
              <div className="h-3 w-16 rounded bg-[var(--brand-primary)]/10 animate-pulse" />
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav
      style={cssVariables}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0f0a1a]/80 backdrop-blur-2xl border-b border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 shadow-[0_4px_24px_rgba(82,3,113,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="flex-shrink-0"
          >
            <Link href={`/${lang}#home`} className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                <Image
                  src={getLogo()}
                  alt={isRTL ? "نمسي ميديا" : "Nemsi Media"}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="min-w-0 hidden xs:flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent leading-tight whitespace-nowrap tracking-tight">
                  {isRTL ? "نمسي ميديا" : "Nemsi Media"}
                </span>
                <span className="text-[10px] sm:text-xs text-[var(--brand-light-text)]/40 dark:text-[var(--brand-dark-text)]/40 -mt-0.5 font-medium uppercase tracking-widest">
                  {isRTL ? "المغرب" : "Maroc"}
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="hidden lg:flex items-center justify-center flex-1 px-6"
          >
            <div className="flex items-center gap-1 rounded-2xl border border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8 bg-white/55 dark:bg-white/[0.04] backdrop-blur-xl px-2 py-1.5 shadow-[0_2px_12px_rgba(82,3,113,0.03)]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3.5 py-2 text-sm font-medium text-[var(--brand-light-text)]/68 dark:text-[var(--brand-dark-text)]/68 hover:text-[var(--brand-light-text)] dark:hover:text-[var(--brand-dark-text)] transition-all duration-300 rounded-xl hover:bg-[var(--brand-primary)]/[0.05] dark:hover:bg-[var(--brand-dark-accent)]/[0.06]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Desktop actions */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="hidden lg:flex items-center gap-2 flex-shrink-0"
          >
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 flex items-center justify-center hover:bg-[var(--brand-primary)]/[0.08] dark:hover:bg-[var(--brand-dark-accent)]/[0.08] transition-all duration-300"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-[var(--brand-primary)]" />
              ) : (
                <Sun className="w-4 h-4 text-[var(--brand-dark-accent)]" />
              )}
            </button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-10 px-3.5 rounded-xl border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl"
            >
              <Link href={lang === "ar" ? "/fr" : "/ar"}>
                <Globe className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
                <span className="ml-2 font-semibold text-sm text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                  {lang === "ar" ? "FR" : "AR"}
                </span>
              </Link>
            </Button>

            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="h-10 px-5 rounded-xl bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white border-0 shadow-[0_4px_20px_rgba(82,3,113,0.25)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span className={`${isRTL ? "mr-2" : "ml-2"} font-semibold`}>
                {t?.nav?.cta || (isRTL ? "ابدأ مشروعك" : "Parler de votre projet")}
              </span>
            </Button>
          </motion.div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 flex items-center justify-center"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-[var(--brand-primary)]" />
              ) : (
                <Sun className="w-4 h-4 text-[var(--brand-dark-accent)]" />
              )}
            </button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="w-9 h-9 rounded-xl bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 flex items-center justify-center">
                  {isOpen ? (
                    <X className="w-4 h-4 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]" />
                  ) : (
                    <Menu className="w-4 h-4 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]" />
                  )}
                </button>
              </SheetTrigger>

              <SheetContent
                side={isRTL ? "right" : "left"}
                className="w-[88vw] max-w-sm border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8 bg-white/95 dark:bg-[#0f0a1a]/95 backdrop-blur-2xl p-0"
              >
                <div className="flex flex-col h-full">
                  {/* top */}
                  <div className="flex items-center justify-between p-5 border-b border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8">
                    <Link
                      href={`/${lang}#home`}
                      className="flex items-center gap-3"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="relative w-10 h-10">
                        <Image
                          src={getLogo()}
                          alt={isRTL ? "نمسي ميديا" : "Nemsi Media"}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-extrabold bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent tracking-tight">
                          {isRTL ? "نمسي ميديا" : "Nemsi Media"}
                        </span>
                        <span className="text-[10px] text-[var(--brand-light-text)]/40 dark:text-[var(--brand-dark-text)]/40 uppercase tracking-widest">
                          {isRTL ? "المغرب" : "Maroc"}
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* nav links */}
                  <div className="flex-1 overflow-y-auto p-5">
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: isRTL ? 14 : -14 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: index * 0.06 }}
                        >
                          <Link
                            href={item.href}
                            className="group flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-[var(--brand-light-text)]/72 dark:text-[var(--brand-dark-text)]/72 hover:text-[var(--brand-light-text)] dark:hover:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/[0.05] dark:hover:bg-[var(--brand-dark-accent)]/[0.06] transition-all"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{item.label}</span>
                            <ArrowRight
                              className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all ${
                                isRTL ? "rotate-180" : ""
                              }`}
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* footer */}
                  <div className="p-5 border-t border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8 space-y-3">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-xl border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 bg-white/60 dark:bg-white/[0.04]"
                    >
                      <Link href={lang === "ar" ? "/fr" : "/ar"} onClick={() => setIsOpen(false)}>
                        <Globe className="w-4 h-4" />
                        <span className={`${isRTL ? "mr-2" : "ml-2"}`}>
                          {lang === "ar" ? "Passer au Français" : "التغيير إلى العربية"}
                        </span>
                      </Link>
                    </Button>

                    <Button
                      onClick={() => {
                        setIsOpen(false)
                        handleWhatsAppClick()
                      }}
                      className="w-full rounded-xl bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white border-0 h-11"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className={`${isRTL ? "mr-2" : "ml-2"}`}>
                        {t?.nav?.cta || (isRTL ? "ابدأ مشروعك" : "Parler de votre projet")}
                      </span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--brand-primary)]/5 dark:bg-[var(--brand-dark-accent)]/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)]"
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </nav>
  )
}