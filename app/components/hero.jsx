"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Star,
  Zap,
  Globe,
  TrendingUp,
  Search,
  Code,
  Palette,
  Rocket,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react"

export function Hero({ lang }) {
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
      fr: "Bonjour, je souhaite obtenir plus d'informations sur vos services web et discuter de mon projet.",
      ar: "مرحبا، أود الحصول على معلومات أكثر حول خدماتكم ومناقشة مشروعي.",
    },
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      whatsappInfo.messages[lang] || whatsappInfo.messages.fr
    )
    window.open(`https://wa.me/${whatsappInfo.phone}?text=${message}`, "_blank")
  }

  return (
    <section
      id="home"
      style={cssVariables}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]" />

      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)`,
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.08, 0.18, 0.08],
            x: [0, -30, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -right-24 w-[620px] h-[620px] rounded-full"
          style={{
            background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)`,
          }}
        />

        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] hidden md:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-[var(--brand-primary)]/10 shadow-lg">
            <Code className="w-6 h-6 text-[var(--brand-primary)]/40 dark:text-[var(--brand-dark-accent)]/40" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 16, 0], rotate: [0, -6, 6, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[25%] left-[12%] hidden md:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-[var(--brand-light-accent)]/10 shadow-lg">
            <Palette className="w-6 h-6 text-[var(--brand-light-accent)]/40 dark:text-[var(--brand-dark-accent)]/40" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-[60%] right-[10%] hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-[var(--brand-secondary)]/10 shadow-lg">
            <Rocket className="w-6 h-6 text-[var(--brand-secondary)]/40 dark:text-[var(--brand-dark-accent)]/40" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[15%] left-[18%] hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-[var(--brand-primary)]/10 shadow-lg">
            <Search className="w-6 h-6 text-[var(--brand-primary)]/40 dark:text-[var(--brand-dark-accent)]/40" />
          </div>
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div className="container relative z-[5] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="block text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                {isRTL
                  ? "نصمم مواقع ويب عصرية"
                  : "Nous créons des sites web modernes"}
              </span>
              <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent">
                {isRTL
                  ? "تجذب العملاء وتبني الثقة"
                  : "qui inspirent confiance et génèrent des clients"}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 max-w-3xl mx-auto mt-6 sm:mt-8 leading-relaxed"
          >
            {isRTL
              ? "نساعد الشركات وأصحاب المشاريع على إطلاق مواقع احترافية، سريعة، ومتوافقة مع الهاتف ومحركات البحث، بهدف تحويل الزوار إلى عملاء حقيقيين."
              : "Nous aidons les entreprises et les entrepreneurs à lancer des sites rapides, professionnels et optimisés pour le mobile, le SEO et la conversion."}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mt-10 sm:mt-12"
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="relative group bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white px-8 sm:px-10 py-5 sm:py-6 rounded-2xl text-base sm:text-lg font-semibold shadow-[0_8px_32px_rgba(82,3,113,0.25)] hover:shadow-[0_12px_48px_rgba(82,3,113,0.35)] transition-all duration-500 border-0 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <MessageCircle className={`w-5 h-5 ${isRTL ? "ml-2.5" : "mr-2.5"} relative z-10`} />
                <span className="relative z-10">
                  {isRTL ? "اطلب استشارة مجانية" : "Demander un audit gratuit"}
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-[var(--brand-primary)]/25 dark:border-[var(--brand-dark-accent)]/25 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/[0.06] dark:hover:bg-[var(--brand-dark-accent)]/[0.08] hover:border-[var(--brand-primary)]/40 dark:hover:border-[var(--brand-dark-accent)]/40 px-8 sm:px-10 py-5 sm:py-6 rounded-2xl backdrop-blur-sm text-base sm:text-lg font-semibold transition-all duration-300"
              >
                <a href={`/${lang}#portfolio`}>
                  {isRTL ? "شاهد نماذج الأعمال" : "Voir nos réalisations"}
                  <ArrowRight
                    className={`w-5 h-5 inline-block ${
                      isRTL ? "mr-2.5 rotate-180" : "ml-2.5"
                    } group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300`}
                  />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust bullets */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8"
          >
            {[
              isRTL ? "تصميم احترافي" : "Design professionnel",
              isRTL ? "موقع سريع ومتجاوب" : "Site rapide & responsive",
              isRTL ? "تحسين أساسي لـ SEO" : "Base SEO optimisée",
              isRTL ? "دعم ومواكبة" : "Accompagnement personnalisé",
            ].map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/70 dark:bg-white/[0.05] border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10"
              >
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-[var(--brand-light-text)]/75 dark:text-[var(--brand-dark-text)]/75">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto mt-16 sm:mt-20"
          >
            {[
              {
                icon: Globe,
                title: isRTL ? "موقع احترافي" : "Image professionnelle",
                desc: isRTL
                  ? "موقع يعكس جودة مشروعك ويمنح الزوار انطباعاً قوياً"
                  : "Un site qui renforce votre crédibilité dès la première visite",
                gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]",
              },
              {
                icon: Search,
                title: isRTL ? "مهيأ لمحركات البحث" : "Pensé pour le SEO",
                desc: isRTL
                  ? "بنية واضحة تساعد موقعك على الظهور بشكل أفضل في Google"
                  : "Une structure claire pour améliorer votre visibilité sur Google",
                gradient: "from-[var(--brand-light-accent)] to-[var(--brand-secondary)]",
              },
              {
                icon: TrendingUp,
                title: isRTL ? "تحويل الزوار إلى عملاء" : "Orienté conversion",
                desc: isRTL
                  ? "صفحات ورسائل واضحة تشجع الزائر على التواصل معك"
                  : "Des pages conçues pour transformer les visiteurs en demandes",
                gradient: "from-[var(--brand-secondary)] to-[var(--brand-primary)]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-6 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 rounded-2xl shadow-[0_2px_16px_rgba(82,3,113,0.04)] hover:shadow-[0_8px_32px_rgba(82,3,113,0.1)] transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`}
                />
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} mb-3`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-12 sm:mt-14"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                  4.9/5
                </span>
              </div>

              <span className="text-[var(--brand-light-text)]/20 dark:text-[var(--brand-dark-text)]/20">|</span>

              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
                <span className="text-sm font-medium text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70">
                  {isRTL ? "مشاريع لمجالات مختلفة" : "Des projets pour différents secteurs"}
                </span>
              </div>

              <span className="text-[var(--brand-light-text)]/20 dark:text-[var(--brand-dark-text)]/20 hidden sm:block">|</span>

              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70">
                  {isRTL ? "تواصل سريع ومتابعة مستمرة" : "Réponse rapide & accompagnement"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] to-transparent z-[10]" />

      
    </section>
  )
}