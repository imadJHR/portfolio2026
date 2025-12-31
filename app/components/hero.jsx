"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Sparkles, Star, Zap, Globe, TrendingUp, Search } from "lucide-react"

export function Hero({ lang, t }) {
  const isRTL = lang === "ar"

  // Updated Color Definitions (BG FIX)
  const colors = {
    primary: "#520371",       // Deep Plum
    lightBg: "#faf2fc",        // Improved light mode background (fix)
    darkBg: "#2a002d",         // Deep Dark Plum
    lightAccent: "#9a21d6",    // More vivid for light mode
    darkAccent: "#a832e0",     // Brighter plum for dark mode
    lightText: "#2a002d",
    darkText: "#fdf7fd",
  }

  const cssVariables = {
    "--brand-primary": colors.primary,
    "--brand-light-bg": colors.lightBg,
    "--brand-dark-bg": colors.darkBg,
    "--brand-light-accent": colors.lightAccent,
    "--brand-dark-accent": colors.darkAccent,
    "--brand-light-text": colors.lightText,
    "--brand-dark-text": colors.darkText,
  }

  // WhatsApp config
  const whatsappInfo = {
    phone: "212645288216",
    messages: {
      fr: "Bonjour ! Je suis intéressé(e) par une consultation gratuite pour mes projets digitaux. Pouvez-vous me donner plus d'informations ?",
      ar: "مرحبا! أنا مهتم باستشارة مجانية لمشاريعي الرقمية. هل يمكنكم إعطائي المزيد من المعلومات؟"
    }
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsappInfo.messages[lang])
    const whatsappUrl = `https://wa.me/${whatsappInfo.phone}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section
      id="home"
      style={cssVariables}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ${isRTL ? "rtl" : "ltr"}`}
    >

      {/* ------------------------ FIX: BACKGROUND LAYERS ORDER ------------------------ */}

      {/* 1️⃣ Solid Main Background */}
      <div className="absolute inset-0 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]" />

      {/* 2️⃣ Gradient Overlay (visible in light mode now) */}
      <div className="absolute inset-0 bg-gradient-to-br 
          from-[var(--brand-primary)]/15 
          via-transparent 
          to-[var(--brand-light-accent)]/15
          dark:from-[var(--brand-primary)]/30 
          dark:via-transparent 
          dark:to-[var(--brand-dark-accent)]/25
      " />

      {/* 3️⃣ Floating Shapes + Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-8 h-8 border-l-2 border-t-2 border-[var(--brand-primary)]/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-12 h-12 border-r-2 border-b-2 border-[var(--brand-light-accent)]/50 dark:border-[var(--brand-dark-accent)]/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 
              bg-gradient-to-br 
              from-[var(--brand-light-accent)]/40 
              via-[var(--brand-primary)]/40 
              to-[var(--brand-primary)]/40 
              dark:from-[var(--brand-dark-accent)]/30 
              dark:via-[var(--brand-primary)]/30 
              dark:to-[var(--brand-primary)]/30 
              rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] 
              bg-gradient-to-br 
              from-[var(--brand-primary)]/30 
              via-[var(--brand-light-accent)]/30 
              to-[var(--brand-dark-accent)]/30 
              dark:from-[var(--brand-primary)]/20 
              dark:via-[var(--brand-dark-accent)]/20 
              dark:to-[var(--brand-primary)]/20 
              rounded-full blur-3xl"
        />

        {/* SEO Icons */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/3 right-1/4"
        >
          <Search className="w-8 h-8 text-[var(--brand-primary)]/40 dark:text-[var(--brand-dark-accent)]/40" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 2 }}
          className="absolute bottom-1/3 left-1/4"
        >
          <TrendingUp className="w-10 h-10 text-[var(--brand-light-accent)]/40 dark:text-[var(--brand-dark-accent)]/40" />
        </motion.div>
      </div>

      {/* ------------------------ MAIN CONTENT ------------------------ */}

      <div className="container relative z-[5] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl lg:max-w-6xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 bg-white/60 dark:bg-[var(--brand-dark-bg)]/60 backdrop-blur-md border border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/30 rounded-full px-6 py-3 mb-10 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
            <span className="font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent">
              {isRTL ? "تسويق رقمي و تصميم مواقع" : "Marketing Digital & Création de Sites Web"}
            </span>
            <Zap className="w-5 h-5 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
          </motion.div>

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-[var(--brand-light-text)] font-serif dark:text-[var(--brand-dark-text)]">
                {isRTL ? "ارتقِ بأعمالك" : "Boostez Votre"}
              </span>

              <span className="block mt-3 bg-gradient-to-r font-serif
                  from-[var(--brand-primary)] 
                  via-[var(--brand-light-accent)] 
                  to-[var(--brand-primary)] 
                  dark:from-[var(--brand-primary)] 
                  dark:via-[var(--brand-dark-accent)] 
                  dark:to-[var(--brand-primary)] 
                  bg-clip-text text-transparent"
              >
                {isRTL ? "بالحلول الرقمية" : "Business Digital"}
              </span>
            </h1>
          </motion.div>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-2xl text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 max-w-3xl mx-auto mt-6"
          >
            {isRTL
              ? "نحن نخلق حضورًا رقميًا قويًا للشركات المغربية عبر تصميم مواقع ويب احترافية وتطبيق استراتيجيات تسويق رقمية فعالة لتحقيق النمو المستدام"
              : "Nous créons une présence digitale puissante pour les entreprises marocaines grâce à des sites web professionnels et des stratégies de marketing digital efficaces pour une croissance durable"}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          >

            {/* CONSULTATION BUTTON */}
            <Button
              size="lg"
              className="group bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] text-white px-10 py-6 rounded-xl shadow-xl"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
              {isRTL ? "استشارة مجانية" : "Consultation Gratuite"}
            </Button>

            {/* PORTFOLIO BUTTON */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-2 border-[var(--brand-primary)]/40 dark:border-[var(--brand-dark-accent)]/40 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/10 dark:hover:bg-[var(--brand-dark-accent)]/10 px-10 py-6 rounded-xl"
            >
              <a href={`/${lang}#portfolio`}>
                {isRTL ? "شاهد مشاريعنا" : "Voir Nos Projets"}
                <ArrowRight className={`w-5 h-5 inline-block ${isRTL ? "mr-2" : "ml-2"}`} />
              </a>
            </Button>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-16"
          >
            {[
              {
                icon: Globe,
                text: isRTL ? "تصميم مواقع ويب متجاوبة" : "Sites Web Responsives",
                description: isRTL ? "تعمل على جميع الأجهزة" : "Optimisés tous appareils",
              },
              {
                icon: Search,
                text: isRTL ? "تحسين محركات البحث SEO" : "Référencement SEO",
                description: isRTL ? "الظهور في الصفحة الأولى" : "1ère page Google",
              },
              {
                icon: TrendingUp,
                text: isRTL ? "استراتيجيات تسويق رقمي" : "Stratégies Marketing",
                description: isRTL ? "زيادة المبيعات" : "Augmentation des ventes",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...pulseAnimation}
                className="p-5 bg-white/50 dark:bg-[var(--brand-dark-bg)]/40 backdrop-blur-sm border border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 rounded-2xl shadow-sm"
              >
                <item.icon className="w-6 h-6 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] mx-auto" />
                <h3 className="mt-4 font-bold">{item.text}</h3>
                <p className="text-sm opacity-70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* TRUST BADGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-10 flex items-center justify-center gap-3 text-sm text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70"
          >
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>4.9/5</span>
            <span>•</span>
            <span>{isRTL ? "+50 عميل في المغرب" : "+50 Clients au Maroc"}</span>
            <span>•</span>
            <span>{isRTL ? "ضمان 100%" : "Garantie 100%"}</span>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM GRADIENT FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t 
          from-[var(--brand-light-bg)] 
          dark:from-[var(--brand-dark-bg)] 
          to-transparent"
      />

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-[var(--brand-primary)]/30 dark:border-[var(--brand-dark-accent)]/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-[var(--brand-primary)]/60 dark:bg-[var(--brand-dark-accent)]/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
