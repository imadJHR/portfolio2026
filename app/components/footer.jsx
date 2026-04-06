"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
  Heart,
  Sparkles,
  ArrowUp,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

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

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/nemsi-media/?trk=similar-pages",
      label: "LinkedIn",
      gradient: "from-blue-500 to-blue-700",
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
    { href: `/${lang}#home`, label: t?.footer?.links?.home || (isRTL ? "الرئيسية" : "Accueil") },
    { href: `/${lang}#services`, label: t?.footer?.links?.services || (isRTL ? "الخدمات" : "Services") },
    { href: `/${lang}#portfolio`, label: t?.footer?.links?.portfolio || (isRTL ? "الأعمال" : "Portfolio") },
    { href: `/${lang}#testimonials`, label: isRTL ? "الآراء" : "Témoignages" },
    { href: `/${lang}#contact`, label: t?.footer?.links?.contact || (isRTL ? "التواصل" : "Contact") },
  ]

  const serviceLinks = [
    { href: `/${lang}#services`, label: isRTL ? "مواقع تعريفية" : "Sites vitrine" },
    { href: `/${lang}#services`, label: isRTL ? "إعادة تصميم المواقع" : "Refonte de site" },
    { href: `/${lang}#services`, label: isRTL ? "متاجر إلكترونية" : "E-commerce" },
    { href: `/${lang}#services`, label: isRTL ? "Landing pages" : "Landing pages" },
    { href: `/${lang}#services`, label: isRTL ? "تحسين SEO" : "SEO" },
    { href: `/${lang}#services`, label: isRTL ? "الصيانة والدعم" : "Maintenance" },
  ]

  const contactInfo = [
    {
      icon: Mail,
      value: "contact@nemsimedia.ma",
      href: "mailto:contact@nemsimedia.ma",
    },
    {
      icon: Phone,
      value: "+212 645 288 216",
      href: "tel:+212645288216",
    },
    {
      icon: MapPin,
      value: isRTL ? "الدار البيضاء، المغرب" : "Casablanca, Maroc",
      href: null,
    },
  ]

  return (
    <footer
      style={cssVariables}
      className={`relative overflow-hidden bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)] text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]" />

      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[380px] h-[380px] rounded-full"
          style={{
            background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)`,
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full"
          style={{
            background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--brand-primary)]/20 dark:via-[var(--brand-dark-accent)]/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA block */}
        <div className="pt-12 sm:pt-14 lg:pt-16">
          <div className="rounded-3xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(82,3,113,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                  {isRTL
                    ? "هل لديك مشروع جديد؟"
                    : "Vous avez un nouveau projet ?"}
                </h3>
                <p className="mt-3 text-[var(--brand-light-text)]/62 dark:text-[var(--brand-dark-text)]/62 leading-relaxed max-w-2xl">
                  {isRTL
                    ? "نساعدك على إنشاء موقع احترافي، واضح، ومتجاوب يساعدك على كسب ثقة العملاء وتحسين حضورك الرقمي."
                    : "Nous vous aidons à créer un site professionnel, clair et responsive pour renforcer votre image et générer plus de prises de contact."}
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    isRTL ? "استشارة مجانية" : "Audit gratuit",
                    isRTL ? "رد سريع خلال 24 ساعة" : "Réponse sous 24h",
                    isRTL ? "بدون التزام" : "Sans engagement",
                    isRTL ? "تواصل مباشر عبر واتساب" : "Contact direct sur WhatsApp",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-sm text-[var(--brand-light-text)]/72 dark:text-[var(--brand-dark-text)]/72"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center h-12 rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white font-semibold shadow-[0_6px_24px_rgba(82,3,113,0.22)] hover:shadow-[0_10px_32px_rgba(82,3,113,0.30)] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className={isRTL ? "mr-2.5" : "ml-2.5"}>
                    {isRTL ? "ابدأ مشروعك الآن" : "Parler de votre projet"}
                  </span>
                </button>

                <Link
                  href={`/${lang}#contact`}
                  className="inline-flex items-center justify-center h-12 rounded-2xl border border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/15 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] font-semibold hover:bg-[var(--brand-primary)]/[0.05] dark:hover:bg-[var(--brand-dark-accent)]/[0.06] transition-all"
                >
                  {isRTL ? "الانتقال إلى صفحة التواصل" : "Aller à la section contact"}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-12 py-14 sm:py-16 lg:py-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            <Link href={`/${lang}#home`} className="inline-block group">
              <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent tracking-tight group-hover:opacity-80 transition-opacity">
                {isRTL ? "نمسي ميديا" : "Nemsi Media"}
              </h3>
            </Link>

            <p className="text-sm sm:text-[15px] text-[var(--brand-light-text)]/58 dark:text-[var(--brand-dark-text)]/58 leading-relaxed font-light max-w-sm">
              {isRTL
                ? "نصمم ونطور مواقع ويب احترافية تساعد الشركات على تحسين صورتها وجذب عملاء أكثر."
                : "Nous concevons des sites web professionnels pour aider les entreprises à améliorer leur image et attirer plus de clients."}
            </p>

            <div className="space-y-3 pt-1">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="inline-flex p-1.5 rounded-lg bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-light-accent)]">
                    <item.icon className="w-3.5 h-3.5 text-white" />
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-[var(--brand-light-text)]/62 dark:text-[var(--brand-dark-text)]/62 hover:text-[var(--brand-primary)] dark:hover:text-[var(--brand-dark-accent)] transition-colors duration-300 font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-[var(--brand-light-text)]/62 dark:text-[var(--brand-dark-text)]/62 font-medium">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.55 }}
          >
            <h4 className="font-bold mb-6 text-base text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
              {isRTL ? "روابط سريعة" : "Liens rapides"}
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[var(--brand-light-text)]/58 dark:text-[var(--brand-dark-text)]/58 hover:text-[var(--brand-primary)] dark:hover:text-[var(--brand-dark-accent)] transition-all"
                  >
                    <div className="w-1 h-1 rounded-full bg-[var(--brand-primary)]/35 dark:bg-[var(--brand-dark-accent)]/35 group-hover:scale-150 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.55 }}
          >
            <h4 className="font-bold mb-6 text-base text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
              {isRTL ? "خدماتنا" : "Services"}
            </h4>

            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[var(--brand-light-text)]/58 dark:text-[var(--brand-dark-text)]/58 hover:text-[var(--brand-light-accent)] dark:hover:text-[var(--brand-dark-accent)] transition-all"
                  >
                    <div className="w-1 h-1 rounded-full bg-[var(--brand-light-accent)]/35 dark:bg-[var(--brand-dark-accent)]/35 group-hover:scale-150 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social + top */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.55 }}
            className="space-y-6"
          >
            <div>
              <h4 className="font-bold mb-6 text-base text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                {isRTL ? "تابعنا" : "Suivez-nous"}
              </h4>

              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className={`absolute inset-[-3px] rounded-xl bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-400`} />
                    <div className="relative w-10 h-10 rounded-xl bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 flex items-center justify-center overflow-hidden transition-all duration-400 group-hover:border-transparent">
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                      <social.icon className="w-4 h-4 text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 group-hover:text-white transition-all duration-300 relative z-10" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white py-3.5 px-5 shadow-[0_4px_20px_rgba(82,3,113,0.2)] hover:shadow-[0_8px_28px_rgba(82,3,113,0.28)] transition-all"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm font-semibold">
                {isRTL ? "العودة للأعلى" : "Retour en haut"}
              </span>
            </button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-start">
            <p className="text-[var(--brand-light-text)]/45 dark:text-[var(--brand-dark-text)]/45 text-sm flex flex-wrap items-center justify-center gap-2 font-medium">
              <span>© {currentYear}</span>
              <span className="font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent">
                Nemsi Media
              </span>
              <span>•</span>
              <span>{t?.footer?.copyright || (isRTL ? "جميع الحقوق محفوظة" : "Tous droits réservés")}</span>
            </p>

          

            <div className="flex flex-wrap justify-center gap-5 text-sm">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}