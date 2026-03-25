"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Globe, Sun, Moon, Sparkles, ArrowRight, MessageCircle } from "lucide-react"
import Image from "next/image"
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

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      const winHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset
      const trackLength = docHeight - winHeight
      const progress = Math.floor((scrollTop / trackLength) * 100)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.className = savedTheme
  }, [isMounted])

  const toggleTheme = () => {
    if (!isMounted) return
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.className = newTheme
  }

  const navItems = [
    { href: `/${lang}#home`, label: t.nav.home || "Home" },
    { href: `/${lang}#services`, label: t.nav.services },
    { href: `/${lang}#portfolio`, label: t.nav.portfolio },
    { href: `/${lang}#testimonials`, label: t.nav.testimonials || "Témoignages" },
    { href: `/${lang}#contact`, label: t.nav.contact },
  ]

  const getLogo = () => (theme === "light" ? logoLight : logoDark)

  if (!isMounted) {
    return (
      <nav
        style={cssVariables}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--brand-light-bg)]/95 dark:bg-[var(--brand-dark-bg)]/95 backdrop-blur-xl border-b border-[var(--brand-primary)]/10 h-16 sm:h-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--brand-primary)]/10 rounded-xl animate-pulse" />
              <div className="flex flex-col gap-1.5">
                <div className="h-5 w-24 bg-[var(--brand-primary)]/10 rounded-lg animate-pulse" />
                <div className="h-3 w-14 bg-[var(--brand-primary)]/10 rounded-lg animate-pulse" />
              </div>
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
          ? "bg-white/80 dark:bg-[#0f0a1a]/80 backdrop-blur-2xl border-b border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 shadow-[0_4px_24px_rgba(82,3,113,0.06)] dark:shadow-[0_4px_24px_rgba(192,132,252,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* ── Logo ── */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            <Link
              href={`/${lang}#home`}
              className="flex items-center gap-2 sm:gap-3 group min-w-0"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
                <Image
                  src={getLogo()}
                  alt={isRTL ? "نمسي ميديا" : "NemsiMedia"}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent leading-tight whitespace-nowrap tracking-tight">
                  {isRTL ? "نمسي ميديا" : "Nemsi Media"}
                </span>
                <span className="text-[10px] sm:text-xs text-[var(--brand-light-text)]/40 dark:text-[var(--brand-dark-text)]/40 -mt-0.5 hidden xs:block whitespace-nowrap font-medium uppercase tracking-widest">
                  {isRTL ? "المغرب" : "Maroc"}
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── Desktop Navigation ── */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center gap-0.5 flex-1 justify-center mx-4"
          >
            <div className="flex items-center gap-1 bg-white/50 dark:bg-white/[0.04] backdrop-blur-xl border border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8 rounded-2xl px-2 py-1.5 shadow-[0_2px_12px_rgba(82,3,113,0.03)]">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-3.5 py-2 text-sm text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 hover:text-[var(--brand-light-text)] dark:hover:text-[var(--brand-dark-text)] transition-all duration-300 group font-medium whitespace-nowrap rounded-xl hover:bg-[var(--brand-primary)]/[0.05] dark:hover:bg-[var(--brand-dark-accent)]/[0.06]"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] transition-all duration-300 group-hover:w-3/5 rounded-full" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Desktop Actions ── */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center gap-2 flex-shrink-0"
          >
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 flex items-center justify-center hover:bg-[var(--brand-primary)]/[0.08] dark:hover:bg-[var(--brand-dark-accent)]/[0.08] transition-all duration-300 shadow-[0_2px_8px_rgba(82,3,113,0.04)]"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-[var(--brand-primary)]" />
              ) : (
                <Sun className="w-4 h-4 text-[var(--brand-dark-accent)]" />
              )}
            </motion.button>

            {/* Language Switcher */}
            <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2 border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl hover:bg-[var(--brand-primary)]/[0.06] dark:hover:bg-[var(--brand-dark-accent)]/[0.06] transition-all duration-300 h-10 px-3.5 rounded-xl shadow-[0_2px_8px_rgba(82,3,113,0.04)]"
              >
                <Link href={lang === "ar" ? "/fr" : "/ar"}>
                  <Globe className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
                  <span className="font-semibold text-sm text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                    {lang === "ar" ? "FR" : "AR"}
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="sm"
                className="relative overflow-hidden group bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-[0_4px_20px_rgba(82,3,113,0.25)] dark:shadow-[0_4px_20px_rgba(192,132,252,0.2)] hover:shadow-[0_8px_28px_rgba(82,3,113,0.35)] transition-all duration-500 h-10 px-5 text-sm font-semibold rounded-xl border-0"
              >
                <Link href={`/${lang}#contact`}>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">
                    {t.nav.cta || (isRTL ? "ابدأ مشروعك" : "Démarrer")}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 relative z-10 ${
                      isRTL ? "mr-1.5 rotate-180" : "ml-1.5"
                    } group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform`}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Mobile Actions ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 sm:gap-2 lg:hidden"
          >
            {/* Theme Toggle - Mobile */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-[0_2px_8px_rgba(82,3,113,0.04)]"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-[var(--brand-primary)]" />
              ) : (
                <Sun className="w-4 h-4 text-[var(--brand-dark-accent)]" />
              )}
            </motion.button>

            {/* Language Switcher - Mobile */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden xs:block">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-1.5 border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl h-9 px-2.5 flex-shrink-0 rounded-xl shadow-[0_2px_8px_rgba(82,3,113,0.04)]"
              >
                <Link href={lang === "ar" ? "/fr" : "/ar"}>
                  <Globe className="w-3.5 h-3.5 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
                  <span className="font-semibold text-xs text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                    {lang === "ar" ? "FR" : "AR"}
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-9 h-9 rounded-xl bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-[0_2px_8px_rgba(82,3,113,0.04)]"
                >
                  {isOpen ? (
                    <X className="w-4 h-4 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]" />
                  ) : (
                    <Menu className="w-4 h-4 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]" />
                  )}
                </motion.button>
              </SheetTrigger>

              <SheetContent
                side={isRTL ? "right" : "left"}
                className="w-[85vw] max-w-sm border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8 bg-white/95 dark:bg-[#0f0a1a]/95 backdrop-blur-2xl p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Sheet Header */}
                  <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8">
                    <Link
                      href={`/${lang}#home`}
                      className="flex items-center gap-3"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
                        <Image
                          src={getLogo()}
                          alt={isRTL ? "نمسي ميديا" : "NemsiMedia"}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent tracking-tight">
                          {isRTL ? "نمسي ميديا" : "Nemsi Media"}
                        </span>
                        <span className="text-[10px] text-[var(--brand-light-text)]/40 dark:text-[var(--brand-dark-text)]/40 -mt-0.5 font-medium uppercase tracking-widest">
                          {isRTL ? "المغرب" : "Maroc"}
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex-1 p-5 sm:p-6 overflow-y-auto">
                    <div className="space-y-1.5">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.08 }}
                        >
                          <Link
                            href={item.href}
                            className="group flex items-center justify-between py-3 px-4 text-base sm:text-lg font-medium text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 hover:text-[var(--brand-light-text)] dark:hover:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/[0.04] dark:hover:bg-[var(--brand-dark-accent)]/[0.06] rounded-xl transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{item.label}</span>
                            <ArrowRight
                              className={`w-4 h-4 text-[var(--brand-primary)]/30 dark:text-[var(--brand-dark-accent)]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                                isRTL ? "rotate-180" : ""
                              }`}
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Sheet Footer */}
                  <div className="p-5 sm:p-6 border-t border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="space-y-3"
                    >
                      {/* Language for xs screens */}
                      <div className="xs:hidden">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl h-11 rounded-xl"
                        >
                          <Link href={lang === "ar" ? "/fr" : "/ar"} onClick={() => setIsOpen(false)}>
                            <Globe className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
                            <span className="font-medium text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                              {lang === "ar" ? "Passer au Français" : "التغيير إلى العربية"}
                            </span>
                          </Link>
                        </Button>
                      </div>

                      {/* Mobile CTA */}
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                        <Button
                          asChild
                          size="lg"
                          className="relative overflow-hidden group w-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-[0_8px_28px_rgba(82,3,113,0.25)] dark:shadow-[0_8px_28px_rgba(192,132,252,0.2)] h-12 text-base font-semibold rounded-xl border-0"
                        >
                          <Link href={`/${lang}#contact`} onClick={() => setIsOpen(false)}>
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <MessageCircle className="w-4 h-4 mr-2 relative z-10" />
                            <span className="relative z-10">
                              {t.nav.cta || (isRTL ? "ابدأ مشروعك" : "Démarrer Votre Projet")}
                            </span>
                          </Link>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>

      {/* ── Progress Bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--brand-primary)]/5 dark:bg-[var(--brand-dark-accent)]/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)]"
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </nav>
  )
}