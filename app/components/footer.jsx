"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Mail, MessageCircle, Heart, Sparkles, ArrowUp, MapPin, Phone } from "lucide-react"

export default function Footer({ lang, t }) {
  const isRTL = lang === "ar"
  const currentYear = new Date().getFullYear()

  const cssVariables = {
    "--brand-primary": "#520371",
    "--brand-secondary": "#7c3aed",
    "--brand-light-bg": "#fdfaff",
    "--brand-dark-bg": "#0f0a1a",
    "--brand-light-accent": "#9333ea",
    "--brand-dark-accent": "#c084fc",
    "--brand-light-text": "#1a0525",
    "--brand-dark-text": "#f5f0ff",
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/imadJHR",
      label: "GitHub",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/nemsi-media/?trk=similar-pages",
      label: "LinkedIn",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourprofile",
      label: "Twitter",
      gradient: "from-sky-400 to-sky-600",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/nemsimedia/",
      label: "Instagram",
      gradient: "from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)]",
    },
    {
      icon: Mail,
      href: "mailto:contact@nemsimedia.ma",
      label: "Email",
      gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/212645288216",
      label: "WhatsApp",
      gradient: "from-emerald-500 to-green-600",
    },
  ]

  const quickLinks = [
    { href: `/${lang}#home`, label: t.footer.links.home || "Home" },
    { href: `/${lang}#portfolio`, label: t.footer.links.portfolio },
    { href: `/${lang}#services`, label: t.footer.links.services },
    { href: `/${lang}#contact`, label: t.footer.links.contact },
  ]

  const serviceLinks = [
    { href: `/${lang}#services`, label: isRTL ? "تصميم مواقع" : "Sites Web" },
    { href: `/${lang}#services`, label: isRTL ? "متاجر إلكترونية" : "E-commerce" },
    { href: `/${lang}#services`, label: isRTL ? "تحسين SEO" : "SEO" },
    { href: `/${lang}#services`, label: isRTL ? "إدارة الشبكات" : "Réseaux Sociaux" },
  ]

  const contactInfo = [
    {
      icon: Mail,
      value: "contact@nemsimedia.ma",
      href: "mailto:contact@nemsimedia.ma",
      gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]",
    },
    {
      icon: Phone,
      value: "+212 645 288 216",
      href: "tel:+212645288216",
      gradient: "from-[var(--brand-light-accent)] to-[var(--brand-secondary)]",
    },
    {
      icon: MapPin,
      value: isRTL ? "الدار البيضاء، المغرب" : "Casablanca, Maroc",
      gradient: "from-[var(--brand-secondary)] to-[var(--brand-primary)]",
    },
  ]

  return (
    <footer
      style={cssVariables}
      className={`relative bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)] text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* ══════════════ BACKGROUND SYSTEM ══════════════ */}
      <div className="absolute inset-0 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)` }}
        />
      </div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--brand-primary)]/20 dark:via-[var(--brand-dark-accent)]/20 to-transparent" />

      {/* ══════════════ CONTENT ══════════════ */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 py-14 sm:py-18 lg:py-20">
          {/* ── Brand Section ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 lg:col-span-1"
          >
            <Link href={`/${lang}#home`} className="inline-block group">
              <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent tracking-tight group-hover:opacity-80 transition-opacity">
                {isRTL ? "نمسي ميديا" : "Nemsi Media"}
              </h3>
            </Link>

            <p className="text-sm sm:text-[15px] text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 leading-relaxed font-light">
              {isRTL
                ? "نرافقك في بناء حضور رقمي استثنائي — تصميم مواقع احترافية واستراتيجيات تسويق فعالة للشركات المغربية"
                : "Nous vous accompagnons dans la création d'une présence digitale exceptionnelle — sites web professionnels et stratégies marketing pour les entreprises marocaines"}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 15 : -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3 group"
                >
                  <div className={`inline-flex p-1.5 rounded-lg bg-gradient-to-br ${item.gradient}`}>
                    <item.icon className="w-3 h-3 text-white" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 hover:text-[var(--brand-primary)] dark:hover:text-[var(--brand-dark-accent)] transition-colors duration-300 font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 font-medium">
                      {item.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-bold mb-6 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-base flex items-center gap-2.5">
              <div className="w-[3px] h-4 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] rounded-full" />
              {isRTL ? "روابط سريعة" : "Liens Rapides"}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: isRTL ? 15 : -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 hover:text-[var(--brand-primary)] dark:hover:text-[var(--brand-dark-accent)] transition-all duration-300 py-0.5"
                  >
                    <div className="w-1 h-1 rounded-full bg-[var(--brand-primary)]/30 dark:bg-[var(--brand-dark-accent)]/30 group-hover:bg-[var(--brand-primary)] dark:group-hover:bg-[var(--brand-dark-accent)] group-hover:scale-150 transition-all duration-300" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Services ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-bold mb-6 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-base flex items-center gap-2.5">
              <div className="w-[3px] h-4 bg-gradient-to-b from-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] rounded-full" />
              {isRTL ? "خدماتنا" : "Nos Services"}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: isRTL ? 15 : -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 hover:text-[var(--brand-light-accent)] dark:hover:text-[var(--brand-dark-accent)] transition-all duration-300 py-0.5"
                  >
                    <div className="w-1 h-1 rounded-full bg-[var(--brand-light-accent)]/30 dark:bg-[var(--brand-dark-accent)]/30 group-hover:bg-[var(--brand-light-accent)] dark:group-hover:bg-[var(--brand-dark-accent)] group-hover:scale-150 transition-all duration-300" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Social & CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h4 className="font-bold mb-6 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-base flex items-center gap-2.5">
                <div className="w-[3px] h-4 bg-gradient-to-b from-[var(--brand-secondary)] to-[var(--brand-primary)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] rounded-full" />
                {isRTL ? "تابعنا" : "Suivez-nous"}
              </h4>

              {/* Social Grid */}
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative"
                    aria-label={social.label}
                  >
                    {/* Glow */}
                    <div className={`absolute inset-[-3px] rounded-xl bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-400`} />

                    {/* Button */}
                    <div className="relative w-10 h-10 rounded-xl bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 flex items-center justify-center overflow-hidden transition-all duration-400 group-hover:border-transparent group-hover:shadow-lg">
                      {/* Gradient Fill */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                      {/* Shine */}
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      {/* Icon */}
                      <social.icon className="w-4 h-4 text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 group-hover:text-white transition-all duration-300 relative z-10" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group w-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white py-3.5 px-5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-500 shadow-[0_4px_20px_rgba(82,3,113,0.2)] dark:shadow-[0_4px_20px_rgba(192,132,252,0.15)] hover:shadow-[0_8px_28px_rgba(82,3,113,0.3)] border-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <ArrowUp className="w-4 h-4 relative z-10 transition-transform group-hover:-translate-y-0.5" />
              <span className="text-sm font-semibold relative z-10">
                {isRTL ? "العودة للأعلى" : "Retour en Haut"}
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* ── Bottom Bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8 py-6 sm:py-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-[var(--brand-light-text)]/45 dark:text-[var(--brand-dark-text)]/45 text-sm flex items-center gap-2 font-medium"
            >
              <span>© {currentYear}</span>
              <span className="font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Nemsi Media
              </span>
              <span>•</span>
              <span>{t.footer.copyright}</span>
            </motion.p>

            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-2 text-sm text-[var(--brand-light-text)]/40 dark:text-[var(--brand-dark-text)]/40 font-medium"
            >
              <span>{isRTL ? "صُنع بـ" : "Fait avec"}</span>
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
              </motion.span>
              <span>{isRTL ? "في المغرب" : "au Maroc"}</span>
              <Sparkles className="w-3.5 h-3.5 text-[var(--brand-primary)]/40 dark:text-[var(--brand-dark-accent)]/40" />
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex gap-5 text-sm"
            >
              <Link
                href={`/${lang}/privacy`}
                className="text-[var(--brand-light-text)]/40 dark:text-[var(--brand-dark-text)]/40 hover:text-[var(--brand-primary)] dark:hover:text-[var(--brand-dark-accent)] transition-colors duration-300 font-medium"
              >
                {isRTL ? "الخصوصية" : "Confidentialité"}
              </Link>
              <Link
                href={`/${lang}/terms`}
                className="text-[var(--brand-light-text)]/40 dark:text-[var(--brand-dark-text)]/40 hover:text-[var(--brand-primary)] dark:hover:text-[var(--brand-dark-accent)] transition-colors duration-300 font-medium"
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