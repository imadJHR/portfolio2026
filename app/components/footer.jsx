"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Mail, MessageCircle, Heart, Sparkles, ArrowUp } from "lucide-react"

export default function Footer({ lang, t }) {
  const isRTL = lang === "ar"
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourprofile",
      label: "GitHub",
      color: "hover:bg-gray-700 hover:text-white"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
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
      href: "https://instagram.com/yourprofile",
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white"
    },
    {
      icon: Mail,
      href: "mailto:contact@example.com",
      label: "Email",
      color: "hover:bg-cyan-600 hover:text-white"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/212600000000",
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
    <footer className={`relative bg-card border-t border-border/50 text-foreground overflow-hidden ${isRTL ? "rtl" : "ltr"}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
      
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
        className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
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
        className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
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
              <h3 className="text-2xl sm:text-3xl font-bold font-serif bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {isRTL ? "مطور مواقع" : "DevWeb Maroc"}
              </h3>
            </motion.div>
            
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {isRTL
                ? "نصمم مواقع إلكترونية احترافية للشركات في المغرب بأسعار تنافسية وجودة عالية"
                : "Création de sites web professionnels pour entreprises au Maroc avec des prix compétitifs et une qualité supérieure"}
            </p>

            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-purple-500" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span>+212 600-000-000</span>
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
            <h4 className="font-bold mb-6 text-foreground text-lg flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
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
                    className="group flex items-center gap-2 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
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
            <h4 className="font-bold mb-6 text-foreground text-lg flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
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
                    className="group flex items-center gap-2 text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
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
              <h4 className="font-bold mb-6 text-foreground text-lg flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
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
                    className={`w-10 h-10 bg-muted/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-border/50 transition-all duration-300 ${social.color} group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-purple-500/30 group"
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
          className="border-t border-border/50 pt-8 pb-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm flex items-center gap-2"
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
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
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
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {isRTL ? "الخصوصية" : "Confidentialité"}
              </Link>
              <Link
                href={`/${lang}/terms`}
                className="text-muted-foreground hover:text-foreground transition-colors"
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