"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Mail, MessageCircle, Heart, Sparkles, ArrowUp } from "lucide-react"

export default function Footer({ lang, t }) {
  const isRTL = lang === "ar"
  const currentYear = new Date().getFullYear()

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/imadJHR",
      label: "GitHub",
      color: "hover:bg-gray-700 hover:text-white"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/nemsi-media/?trk=similar-pages",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourprofile",
      label: "Twitter",
      color: "hover:bg-sky-500 hover:text-white"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/nemsimedia/",
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-[var(--brand-primary)] hover:to-[var(--brand-light-accent)] dark:hover:to-[var(--brand-dark-accent)] hover:text-white"
    },
    {
      icon: Mail,
      href: "mailto:imadjohar4@gmail.com",
      label: "Email",
      color: "hover:bg-[var(--brand-primary)] hover:text-white"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/212645288216",
      label: "WhatsApp",
      color: "hover:bg-green-500 hover:text-white"
    }
  ]

  const quickLinks = [
    { href: `/${lang}#home`, label: t.footer.links.home || "Home" },
    { href: `/${lang}#portfolio`, label: t.footer.links.portfolio },
    { href: `/${lang}#services`, label: t.footer.links.services },
    { href: `/${lang}#contact`, label: t.footer.links.contact }
  ]

  const serviceLinks = [
    { href: `/${lang}#services`, label: isRTL ? "تصميم مواقع" : "Sites Web" },
    { href: `/${lang}#services`, label: isRTL ? "متاجر إلكترونية" : "E-commerce" },
    { href: `/${lang}#services`, label: isRTL ? "تحسين SEO" : "SEO" },
    { href: `/${lang}#services`, label: isRTL ? "صيانة مواقع" : "Maintenance" }
  ]

  return (
    <footer 
      style={cssVariables}
      className={`relative bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)] border-t border-[var(--brand-primary)]/20 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-light-accent)]/5 dark:to-[var(--brand-dark-accent)]/5" />
      
      {/* Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-light-accent)]/10 dark:to-[var(--brand-dark-accent)]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br from-[var(--brand-light-accent)]/10 to-[var(--brand-primary)]/10 dark:to-[var(--brand-dark-accent)]/10 rounded-full blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 py-12 sm:py-16">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <h3 className="text-2xl sm:text-3xl font-bold font-serif bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent">
                {isRTL ? "مطور مواقع" : "DevWeb Maroc"}
              </h3>
            </motion.div>
            
            <p className="text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 leading-relaxed text-sm sm:text-base">
              {isRTL
                ? "نصمم مواقع إلكترونية احترافية للشركات في المغرب بأسعار تنافسية وجودة عالية"
                : "Création de sites web professionnels pour entreprises au Maroc avec des prix compétitifs et une qualité supérieure"}
            </p>

            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-3 text-sm text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80">
                <Mail className="w-4 h-4 text-[var(--brand-primary)]" />
                <span>imadjohar4@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span>+212 645-288-216</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-6 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-lg flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] rounded-full" />
              {isRTL ? "روابط سريعة" : "Liens rapides"}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 hover:text-[var(--brand-primary)] transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm sm:text-base">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-6 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-lg flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-[var(--brand-light-accent)] to-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] rounded-full" />
              {isRTL ? "خدماتنا" : "Nos Services"}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 hover:text-[var(--brand-light-accent)] dark:hover:text-[var(--brand-dark-accent)] transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm sm:text-base">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h4 className="font-bold mb-6 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-lg flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] rounded-full" />
                {isRTL ? "تابعنا" : "Suivez-nous"}
              </h4>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[var(--brand-primary)]/20 transition-all duration-300 ${social.color} group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[var(--brand-primary)]/30 group"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span className="text-sm font-medium">
                {isRTL ? "العودة للأعلى" : "Back to Top"}
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[var(--brand-primary)]/20 pt-8 pb-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 text-sm flex items-center gap-2"
            >
              <span>© {currentYear} {isRTL ? "مطور مواقع المغرب" : "DevWeb Maroc"}</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              <span>{t.footer.copyright}</span>
            </motion.p>

            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-sm text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80"
            >
              <Sparkles className="w-4 h-4 text-[var(--brand-primary)]" />
              <span>
                {isRTL ? "مصنوع بحب في المغرب" : "Fabriqué avec amour au Maroc"}
              </span>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-6 text-sm"
            >
              <Link
                href={`/${lang}/privacy`}
                className="text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 hover:text-[var(--brand-light-text)] dark:hover:text-[var(--brand-dark-text)] transition-colors"
              >
                {isRTL ? "الخصوصية" : "Confidentialité"}
              </Link>
              <Link
                href={`/${lang}/terms`}
                className="text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 hover:text-[var(--brand-light-text)] dark:hover:text-[var(--brand-dark-text)] transition-colors"
              >
                {isRTL ? "الشروط" : "Conditions"}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}