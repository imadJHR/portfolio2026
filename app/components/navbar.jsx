"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Globe, Sun, Moon, Sparkles } from "lucide-react"
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

  // Updated Color Definitions
  const colors = {
    primary: "#520371",      // Deep Plum
    lightBg: "#fdf7fd",      // Light Lavender
    darkBg: "#2a002d",       // Deep Dark Plum
    lightAccent: "#8a05c2",  // Lighter Plum for light mode
    darkAccent: "#a832e0",   // Brighter Plum for dark mode
    lightText: "#2a002d",    // Dark text for light mode
    darkText: "#fdf7fd",     // Light text for dark mode
  }

  // CSS Variables for dynamic styling
  const cssVariables = {
    '--brand-primary': colors.primary,
    '--brand-light-bg': colors.lightBg,
    '--brand-dark-bg': colors.darkBg,
    '--brand-light-accent': colors.lightAccent,
    '--brand-dark-accent': colors.darkAccent,
    '--brand-light-text': colors.lightText,
    '--brand-dark-text': colors.darkText,
  }

  // Handle mount and hydration
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle scroll effect
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

  // Handle theme
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
    { href: `/${lang}#contact`, label: t.nav.contact }
  ]

  // Get the appropriate logo based on theme
  const getLogo = () => {
    return theme === "light" ? logoLight : logoDark
  }

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--brand-light-bg)]/95 dark:bg-[var(--brand-dark-bg)]/95 backdrop-blur-md border-b border-[var(--brand-primary)]/20 h-16 sm:h-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo skeleton */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--brand-primary)]/20 rounded-xl animate-pulse" />
              <div className="flex flex-col">
                <div className="h-6 w-24 bg-[var(--brand-primary)]/20 rounded animate-pulse" />
                <div className="h-3 w-16 bg-[var(--brand-primary)]/20 rounded animate-pulse mt-1" />
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-[var(--brand-light-bg)]/95 dark:bg-[var(--brand-dark-bg)]/95 backdrop-blur-md border-b border-[var(--brand-primary)]/20 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            <Link
              href={`/${lang}#home`}
              className="flex items-center gap-2 sm:gap-3 group min-w-0"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                <Image
                  src={getLogo()}
                  alt={isRTL ? "تطوير المواقع" : "NemsiMedia"}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain transition-all duration-300"
                  priority
                />
              </div>

              <div className="flex flex-col min-w-0">
                {/* Logo Text: Gradient with new colors */}
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-serif bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent leading-tight whitespace-nowrap">
                  {isRTL ? "تطوير المواقع" : "Nemsi Media"}
                </span>
                <span className="text-xs text-[var(--brand-primary)]/70 dark:text-[var(--brand-dark-text)]/70 -mt-1 hidden xs:block whitespace-nowrap">
                  {isRTL ? "المغرب" : "Maroc"}
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-4"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative px-3 py-2 text-sm text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 hover:text-[var(--brand-light-text)] dark:hover:text-[var(--brand-dark-text)] transition-all duration-300 group font-medium whitespace-nowrap"
                >
                  {item.label}
                  {/* Hover underline effect with new gradient */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Actions */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center gap-2 flex-shrink-0"
          >
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[var(--brand-primary)]/10 backdrop-blur-sm border border-[var(--brand-primary)]/20 flex items-center justify-center hover:bg-[var(--brand-primary)]/20 transition-all duration-300 group"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-[var(--brand-primary)] group-hover:text-[var(--brand-light-accent)] transition-colors" />
              ) : (
                <Sun className="w-4 h-4 text-[var(--brand-dark-text)] group-hover:text-yellow-300 transition-colors" />
              )}
            </motion.button>

            {/* Language Switcher */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2 border-[var(--brand-primary)]/30 bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 backdrop-blur-sm hover:bg-[var(--brand-primary)]/10 transition-all duration-300 h-9 sm:h-10 px-3"
              >
                <Link href={lang === "ar" ? "/fr" : "/ar"}>
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--brand-primary)]" />
                  <span className="font-medium text-xs sm:text-sm text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                    {lang === "ar" ? "FR" : "AR"}
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* CTA Button - Updated gradient and shadow */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 text-white shadow-lg shadow-[var(--brand-primary)]/30 transition-all duration-300 h-9 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm"
              >
                <Link href={`/${lang}#contact`}>
                  {t.nav.cta || (isRTL ? "ابدأ مشروعك" : "Commencez")}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1 sm:gap-2 lg:hidden"
          >
            {/* Theme Toggle - Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--brand-primary)]/10 backdrop-blur-sm border border-[var(--brand-primary)]/20 flex items-center justify-center hover:bg-[var(--brand-primary)]/20 transition-all duration-300 flex-shrink-0"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <Moon className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--brand-primary)]" />
              ) : (
                <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--brand-dark-text)]" />
              )}
            </motion.button>

            {/* Language Switcher - Mobile */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden xs:block"
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-1 sm:gap-2 border-[var(--brand-primary)]/30 bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 backdrop-blur-sm h-8 sm:h-9 px-2 sm:px-3 flex-shrink-0"
              >
                <Link href={lang === "ar" ? "/fr" : "/ar"}>
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--brand-primary)]" />
                  <span className="font-medium text-xs sm:text-sm text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                    {lang === "ar" ? "FR" : "AR"}
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--brand-primary)]/10 backdrop-blur-sm border border-[var(--brand-primary)]/20 flex items-center justify-center hover:bg-[var(--brand-primary)]/20 transition-all duration-300 flex-shrink-0"
                >
                  {isOpen ? (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]" />
                  ) : (
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]" />
                  )}
                </motion.button>
              </SheetTrigger>
              <SheetContent
                side={isRTL ? "right" : "left"}
                className="w-[85vw] max-w-sm border-l border-[var(--brand-primary)]/20 bg-[var(--brand-light-bg)]/95 dark:bg-[var(--brand-dark-bg)]/95 backdrop-blur-md p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[var(--brand-primary)]/20">
                    <Link
                      href={`/${lang}#home`}
                      className="flex items-center gap-3"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex-shrink-0 overflow-hidden">
                        <Image
                          src={getLogo()}
                          alt={isRTL ? "تطوير المواقع" : "TechDev"}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        {/* Logo Text: Gradient with new colors */}
                        <span className="text-lg sm:text-xl font-bold font-serif bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent">
                          {isRTL ? "تطوير المواقع" : "TechDev"}
                        </span>
                        <span className="text-xs text-[var(--brand-primary)]/70 dark:text-[var(--brand-dark-text)]/70 -mt-1">
                          {isRTL ? "المغرب" : "Maroc"}
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                    <div className="space-y-2 sm:space-y-3">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="block py-2 sm:py-3 px-3 sm:px-4 text-base sm:text-lg font-medium text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 hover:text-[var(--brand-light-text)] dark:hover:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/10 rounded-lg sm:rounded-xl transition-all duration-300 border border-transparent hover:border-[var(--brand-primary)]/30"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Footer */}
                  <div className="p-4 sm:p-6 border-t border-[var(--brand-primary)]/20">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="space-y-3"
                    >
                      {/* Language switcher for very small screens */}
                      <div className="xs:hidden">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 border-[var(--brand-primary)]/30 bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 backdrop-blur-sm h-10"
                        >
                          <Link
                            href={lang === "ar" ? "/fr" : "/ar"}
                            onClick={() => setIsOpen(false)}
                          >
                            <Globe className="w-4 h-4 text-[var(--brand-primary)]" />
                            <span className="font-medium text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                              {lang === "ar" ? "Switch to French" : "التغيير إلى العربية"}
                            </span>
                          </Link>
                        </Button>
                      </div>

                      {/* CTA Button - Updated gradient and shadow */}
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 text-white shadow-lg shadow-[var(--brand-primary)]/30 h-11 sm:h-12 text-sm sm:text-base"
                      >
                        <Link
                          href={`/${lang}#contact`}
                          onClick={() => setIsOpen(false)}
                        >
                          {t.nav.cta || (isRTL ? "ابدأ مشروعك" : "Commencez")}
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>

      {/* Progress Bar - Updated gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--brand-primary)]/10">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)]"
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </nav>
  )
}