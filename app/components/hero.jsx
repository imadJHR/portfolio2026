"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Sparkles, Star, Zap, Globe, TrendingUp, Search } from "lucide-react"

export function Hero({ lang, t }) {
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

  // WhatsApp configuration
  const whatsappInfo = {
    phone: "212645288216",
    messages: {
      fr: "Bonjour ! Je suis intéressé(e) par une consultation gratuite pour mes projets digitaux. Pouvez-vous me donner plus d'informations ?",
      ar: "مرحبا! أنا مهتم باستشارة مجانية لمشاريعي الرقمية. هل يمكنكم إعطائي المزيد من المعلومات؟"
    }
  }

  // Function to handle WhatsApp redirection
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsappInfo.messages[lang])
    const whatsappUrl = `https://wa.me/${whatsappInfo.phone}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  // Floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }
    }
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
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/20 via-transparent to-[var(--brand-light-accent)]/10 dark:from-[var(--brand-primary)]/30 dark:via-transparent dark:to-[var(--brand-dark-accent)]/20" />
      
      {/* Main Background Colors */}
      <div className="absolute inset-0 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]" />
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Triangles */}
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

        {/* Enhanced Animated Blobs */}
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
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-[var(--brand-light-accent)]/40 via-[var(--brand-primary)]/40 to-[var(--brand-primary)]/40 dark:from-[var(--brand-dark-accent)]/30 dark:via-[var(--brand-primary)]/30 dark:to-[var(--brand-primary)]/30 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-[var(--brand-primary)]/30 via-[var(--brand-light-accent)]/30 to-[var(--brand-dark-accent)]/30 dark:from-[var(--brand-primary)]/20 dark:via-[var(--brand-dark-accent)]/20 dark:to-[var(--brand-primary)]/20 rounded-full blur-3xl"
        />

        {/* SEO & Marketing Icons */}
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

        {/* Additional Small Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-3/4 left-1/3 w-40 h-40 bg-gradient-to-r from-[var(--brand-light-accent)]/20 to-[var(--brand-dark-accent)]/20 rounded-full blur-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl lg:max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 bg-white/60 dark:bg-[var(--brand-dark-bg)]/60 backdrop-blur-md border border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 lg:mb-12 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
            </motion.div>
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent">
              {isRTL ? "تسويق رقمي و تصميم مواقع" : "Marketing Digital & Création de Sites Web"}
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight font-serif text-balance">
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]"
              >
                {isRTL ? "ارتقِ بأعمالك" : "Boostez Votre"}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block mt-2 sm:mt-4 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-primary)] dark:from-[var(--brand-primary)] dark:via-[var(--brand-dark-accent)] dark:to-[var(--brand-primary)] bg-clip-text text-transparent"
              >
                {isRTL ? "بالحلول الرقمية" : "Business Digital"}
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 mb-8 sm:mb-10 lg:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light"
          >
            {isRTL 
              ? "نحن نخلق حضورًا رقميًا قويًا للشركات المغربية عبر تصميم مواقع ويب احترافية وتطبيق استراتيجيات تسويق رقمية فعالة لتحقيق النمو المستدام"
              : "Nous créons une présence digitale puissante pour les entreprises marocaines grâce à des sites web professionnels et des stratégies de marketing digital efficaces pour une croissance durable"
            }
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 lg:mb-20"
          >
            {/* CTA 1: Primary Button - Consultation Gratuite */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 dark:from-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] dark:hover:from-[var(--brand-primary)] dark:hover:to-[var(--brand-dark-accent)]/90 text-white text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl shadow-2xl shadow-[var(--brand-primary)]/30 dark:shadow-[var(--brand-primary)]/20 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={handleWhatsAppClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <MessageCircle className={`w-5 h-5 ${isRTL ? "ml-2 sm:ml-3" : "mr-2 sm:mr-3"}`} />
                {isRTL ? "استشارة مجانية" : "Consultation Gratuite"}
              </Button>
            </motion.div>

            {/* CTA 2: Secondary Button - Voir Nos Projets */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-[var(--brand-primary)]/30 dark:border-[var(--brand-dark-accent)]/30 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/10 dark:hover:bg-[var(--brand-dark-accent)]/10 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 bg-white/40 dark:bg-[var(--brand-dark-bg)]/40 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-[var(--brand-primary)]/50 dark:hover:border-[var(--brand-dark-accent)]/50"
              >
                <a href={`/${lang}#portfolio`}>
                  {isRTL ? "شاهد مشاريعنا" : "Voir Nos Projets"}
                  <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "mr-2 sm:mr-3 group-hover:-translate-x-1" : "ml-2 sm:ml-3"}`} />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
          >
            {[
              { 
                icon: Globe, 
                text: isRTL ? "تصميم مواقع ويب متجاوبة" : "Sites Web Responsives",
                description: isRTL ? "تعمل على جميع الأجهزة" : "Optimisés tous appareils"
              },
              { 
                icon: Search, 
                text: isRTL ? "تحسين محركات البحث SEO" : "Référencement SEO",
                description: isRTL ? "الظهور في الصفحة الأولى" : "Première page Google"
              },
              { 
                icon: TrendingUp, 
                text: isRTL ? "استراتيجيات تسويق رقمي" : "Stratégies Marketing",
                description: isRTL ? "زيادة المبيعات والزبائن" : "Augmentation des ventes"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 bg-white/40 dark:bg-[var(--brand-dark-bg)]/40 backdrop-blur-sm border border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <motion.div
                  {...pulseAnimation}
                  className="p-3 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-light-accent)]/10 dark:from-[var(--brand-primary)]/10 dark:to-[var(--brand-dark-accent)]/10 rounded-full group-hover:scale-110 transition-transform duration-300"
                >
                  <item.icon className="w-6 h-6 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
                </motion.div>
                <span className="text-sm sm:text-base font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-center">
                  {item.text}
                </span>
                <span className="text-xs text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 text-center">
                  {item.description}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-4 text-sm text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>4.9/5</span>
              </div>
              <div className="w-1 h-1 bg-current rounded-full"></div>
              <span>{isRTL ? "+50 عميل في المغرب" : "+50 Clients au Maroc"}</span>
              <div className="w-1 h-1 bg-current rounded-full"></div>
              <span>{isRTL ? "ضمان 100%" : "Garantie 100%"}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--brand-light-bg)] via-[var(--brand-light-bg)]/80 to-transparent dark:from-[var(--brand-dark-bg)] dark:via-[var(--brand-dark-bg)]/80 to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
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