"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Sparkles, Star, Zap, Globe, TrendingUp, Search, Code, Palette, Rocket, ChevronDown, Shield, Award, Users } from "lucide-react"

export function Hero({ lang, t }) {
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
    messages: {
      fr: "Bonjour ! Je souhaite discuter de mon projet digital avec votre équipe. Pouvez-vous me proposer un rendez-vous ?",
      ar: "مرحبا! أود مناقشة مشروعي الرقمي مع فريقكم. هل يمكنكم اقتراح موعد؟"
    }
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsappInfo.messages[lang])
    window.open(`https://wa.me/${whatsappInfo.phone}?text=${message}`, "_blank")
  }

  return (
    <section
      id="home"
      style={cssVariables}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* ══════════════ BACKGROUND SYSTEM ══════════════ */}

      {/* Base Background */}
      <div className="absolute inset-0 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.25, 0.12],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)`,
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-48 -right-32 w-[700px] h-[700px] rounded-full"
          style={{
            background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)`,
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)`,
          }}
        />

        {/* Floating Geometric Elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -(Math.random() * 120 + 30), 0],
              x: [0, Math.random() * 60 - 30, 0],
              rotate: [0, Math.random() * 360, 0],
              opacity: [0, 0.4, 0],
              scale: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-3 h-3 rounded-full bg-[var(--brand-primary)]/20 dark:bg-[var(--brand-dark-accent)]/15" />
            ) : i % 3 === 1 ? (
              <div className="w-4 h-4 rotate-45 bg-[var(--brand-light-accent)]/15 dark:bg-[var(--brand-dark-accent)]/10" />
            ) : (
              <div className="w-3 h-3 border border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/15 rounded-full" />
            )}
          </motion.div>
        ))}

        {/* Floating Tech Icons */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] hidden md:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-[var(--brand-primary)]/10 shadow-lg">
            <Code className="w-7 h-7 text-[var(--brand-primary)]/40 dark:text-[var(--brand-dark-accent)]/40" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[25%] left-[12%] hidden md:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-[var(--brand-light-accent)]/10 shadow-lg">
            <Palette className="w-7 h-7 text-[var(--brand-light-accent)]/40 dark:text-[var(--brand-dark-accent)]/40" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[60%] right-[10%] hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-[var(--brand-secondary)]/10 shadow-lg">
            <Rocket className="w-7 h-7 text-[var(--brand-secondary)]/40 dark:text-[var(--brand-dark-accent)]/40" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[15%] left-[18%] hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-[var(--brand-primary)]/10 shadow-lg">
            <Search className="w-7 h-7 text-[var(--brand-primary)]/40 dark:text-[var(--brand-dark-accent)]/40" />
          </div>
        </motion.div>
      </div>

      {/* ══════════════ MAIN CONTENT ══════════════ */}

      <motion.div
        className="container relative z-[5] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
      >
        <div className="max-w-5xl mx-auto text-center">

          {/* ── Top Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -3 }}
              className="flex items-center gap-2 bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/20 rounded-full px-5 py-2.5 shadow-[0_4px_24px_rgba(82,3,113,0.08)] dark:shadow-[0_4px_24px_rgba(192,132,252,0.08)] cursor-default"
            >
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent">
                {isRTL ? "وكالة رقمية مبتكرة" : "Studio Créatif Digital"}
              </span>
              <Zap className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
            </motion.div>
          </motion.div>

          {/* ── Main Title ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight">
              <span className="block text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                {isRTL ? "نُحوِّل أفكارك إلى" : "On Transforme"}
              </span>
              <span className="block mt-2 sm:mt-3">
                <motion.span
                  className="inline-block bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  {isRTL ? "واقع رقمي مُبهر" : "Vos Idées en"}
                </motion.span>
              </span>
              <span className="block mt-2 sm:mt-3 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                {isRTL ? "" : "Succès Digital"}
              </span>
            </h1>
          </motion.div>

          {/* ── Subtitle ── */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 max-w-3xl mx-auto mt-6 sm:mt-8 leading-relaxed font-light"
          >
            {isRTL
              ? "فريق من المحترفين يرافقك في بناء حضور رقمي استثنائي — من تصميم المواقع إلى استراتيجيات التسويق الرقمي — لتحقيق نتائج ملموسة وقابلة للقياس"
              : "Une équipe de passionnés qui vous accompagne dans la création d'une présence en ligne exceptionnelle — du design web aux stratégies marketing — pour des résultats concrets et mesurables"}
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mt-10 sm:mt-12"
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="relative group bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white px-8 sm:px-10 py-5 sm:py-6 rounded-2xl text-base sm:text-lg font-semibold shadow-[0_8px_32px_rgba(82,3,113,0.25)] dark:shadow-[0_8px_32px_rgba(192,132,252,0.2)] hover:shadow-[0_12px_48px_rgba(82,3,113,0.35)] dark:hover:shadow-[0_12px_48px_rgba(192,132,252,0.3)] transition-all duration-500 border-0 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <MessageCircle className={`w-5 h-5 ${isRTL ? "ml-2.5" : "mr-2.5"} relative z-10`} />
                <span className="relative z-10">
                  {isRTL ? "تواصل معنا الآن" : "Discutons de Votre Projet"}
                </span>
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-[var(--brand-primary)]/25 dark:border-[var(--brand-dark-accent)]/25 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/[0.06] dark:hover:bg-[var(--brand-dark-accent)]/[0.08] hover:border-[var(--brand-primary)]/40 dark:hover:border-[var(--brand-dark-accent)]/40 px-8 sm:px-10 py-5 sm:py-6 rounded-2xl backdrop-blur-sm text-base sm:text-lg font-semibold transition-all duration-300"
              >
                <a href={`/${lang}#portfolio`}>
                  {isRTL ? "اكتشف إنجازاتنا" : "Découvrir Nos Réalisations"}
                  <ArrowRight className={`w-5 h-5 inline-block ${isRTL ? "mr-2.5 rotate-180" : "ml-2.5"} group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300`} />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Feature Cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto mt-16 sm:mt-20"
          >
            {[
              {
                icon: Globe,
                title: isRTL ? "مواقع ويب عصرية" : "Sites Web Modernes",
                desc: isRTL ? "تصاميم مبتكرة ومتجاوبة" : "Design innovant & responsive",
                gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]",
              },
              {
                icon: Search,
                title: isRTL ? "تحسين محركات البحث" : "Visibilité Google",
                desc: isRTL ? "تصدر نتائج البحث" : "Top résultats garantis",
                gradient: "from-[var(--brand-light-accent)] to-[var(--brand-secondary)]",
              },
              {
                icon: TrendingUp,
                title: isRTL ? "نمو مستدام" : "Croissance Durable",
                desc: isRTL ? "مضاعفة عائداتك" : "Multipliez vos revenus",
                gradient: "from-[var(--brand-secondary)] to-[var(--brand-primary)]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 rounded-2xl shadow-[0_2px_16px_rgba(82,3,113,0.04)] hover:shadow-[0_8px_32px_rgba(82,3,113,0.1)] dark:hover:shadow-[0_8px_32px_rgba(192,132,252,0.1)] transition-all duration-500 cursor-default overflow-hidden"
              >
                {/* Card Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.04] dark:group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`} />

                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} mb-3`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 mt-1.5">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Trust Section ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-12 sm:mt-14"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">4.9</span>
              </div>

              <span className="text-[var(--brand-light-text)]/20 dark:text-[var(--brand-dark-text)]/20">|</span>

              {/* Clients */}
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
                <span className="text-sm font-medium text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70">
                  {isRTL ? "+50 شركة تثق بنا" : "+50 entreprises nous font confiance"}
                </span>
              </div>

              <span className="text-[var(--brand-light-text)]/20 dark:text-[var(--brand-dark-text)]/20 hidden sm:block">|</span>

              {/* Guarantee */}
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70">
                  {isRTL ? "رضا مضمون" : "Satisfaction garantie"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ══════════════ BOTTOM FADE ══════════════ */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] to-transparent z-[10]" />

      {/* ══════════════ SCROLL INDICATOR ══════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[20]"
      >
        <motion.a
          href={`/${lang}#services`}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-xs font-medium text-[var(--brand-light-text)]/40 dark:text-[var(--brand-dark-text)]/40 group-hover:text-[var(--brand-primary)] dark:group-hover:text-[var(--brand-dark-accent)] transition-colors">
            {isRTL ? "اكتشف المزيد" : "Explorer"}
          </span>
          <div className="w-8 h-12 border-2 border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 rounded-full flex justify-center group-hover:border-[var(--brand-primary)]/40 dark:group-hover:border-[var(--brand-dark-accent)]/40 transition-colors">
            <motion.div
              animate={{ y: [2, 14, 2], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] rounded-full mt-2"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  )
}