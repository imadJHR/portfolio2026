"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, ShoppingCart, Search, Rocket, ArrowRight, Zap, Sparkles, Target, Smartphone, CreditCard, TrendingUp, Globe, Palette, BarChart3, MessageCircle } from "lucide-react"

export function Services({ lang, t }) {
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
    preMessage: {
      fr: "Bonjour ! Je souhaite en savoir plus sur votre service : ",
      ar: "مرحبا! أود معرفة المزيد عن خدمتكم: ",
    },
  }

  const handleWhatsAppClick = (serviceTitle) => {
    const message = encodeURIComponent(
      `${whatsappInfo.preMessage[lang]}${serviceTitle}. ${lang === "ar" ? "هل يمكنكم اقتراح موعد؟" : "Pouvez-vous me proposer un rendez-vous ?"}`
    )
    window.open(`https://wa.me/${whatsappInfo.phone}?text=${message}`, "_blank")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const servicesData = [
    {
      id: "web-design",
      title: isRTL ? "تصميم مواقع الويب" : "Création de Sites Web",
      description: isRTL
        ? "نبني مواقع ويب احترافية ومتجاوبة محسّنة لمحركات البحث، مصممة خصيصاً للشركات المغربية لتعزيز حضورها الرقمي واستقطاب عملاء جدد"
        : "Nous concevons des sites web professionnels et responsifs optimisés SEO, conçus sur mesure pour les entreprises marocaines afin de renforcer leur présence digitale",
      icon: Code,
      gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]",
      features: isRTL
        ? ["تصميم متجاوب", "تحسين SEO", "سرعة فائقة", "تجربة مستخدم مميزة"]
        : ["Design Responsive", "Optimisation SEO", "Ultra Rapide", "Expérience Utilisateur"],
    },
    {
      id: "digital-marketing",
      title: isRTL ? "التسويق الرقمي و SEO" : "Marketing Digital & SEO",
      description: isRTL
        ? "نضع استراتيجيات تسويق رقمي شاملة وتهيئة محركات البحث لضمان ظهور موقعك في الصفحة الأولى على جوجل بالمغرب"
        : "Nous élaborons des stratégies de marketing digital complètes et d'optimisation SEO pour garantir votre visibilité en première page Google au Maroc",
      icon: Search,
      gradient: "from-[var(--brand-light-accent)] to-[var(--brand-secondary)]",
      features: isRTL
        ? ["الصفحة الأولى جوجل", "زيارات مؤهلة", "تحليلات دقيقة", "كلمات مفتاحية"]
        : ["1ère Page Google", "Trafic Qualifié", "Analytics Précis", "Mots-clés Ciblés"],
    },
    {
      id: "ecommerce",
      title: isRTL ? "متاجر إلكترونية" : "Boutiques E-commerce",
      description: isRTL
        ? "ننشئ متاجر إلكترونية متكاملة بأنظمة دفع مغربية آمنة وإدارة مخزون ذكية لمضاعفة مبيعاتك عبر الإنترنت"
        : "Nous créons des boutiques en ligne complètes avec paiement marocain sécurisé et gestion de stock intelligente pour multiplier vos ventes en ligne",
      icon: ShoppingCart,
      gradient: "from-[var(--brand-secondary)] to-[var(--brand-primary)]",
      features: isRTL
        ? ["دفع مغربي آمن", "إدارة مخزون", "تحويل مرتفع", "تسويق مدمج"]
        : ["Paiement Sécurisé", "Gestion Stock", "Conversion Élevée", "Marketing Intégré"],
    },
    {
      id: "social-media",
      title: isRTL ? "إدارة وسائل التواصل" : "Gestion Réseaux Sociaux",
      description: isRTL
        ? "ندير حساباتك على وسائل التواصل الاجتماعي باحترافية مع محتوى مخصص للجمهور المغربي لزيادة التفاعل وتحقيق المبيعات"
        : "Nous gérons vos réseaux sociaux avec du contenu personnalisé pour le public marocain afin de maximiser l'engagement et générer des ventes",
      icon: TrendingUp,
      gradient: "from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)]",
      features: isRTL
        ? ["محتوى إبداعي", "تفاعل عالي", "تقارير أداء", "حملات إعلانية"]
        : ["Contenu Créatif", "Engagement Fort", "Rapports Détaillés", "Campagnes Ads"],
    },
    {
      id: "nfc-cards",
      title: isRTL ? "بطاقات NFC الذكية" : "Cartes NFC Intelligentes",
      description: isRTL
        ? "نصمم بطاقات أعمال NFC ذكية للمهنيين والشركات المغربية، قابلة للتحديث فوراً مع تجربة تفاعلية متقدمة"
        : "Nous concevons des cartes de visite NFC intelligentes pour les professionnels et entreprises marocaines, actualisables instantanément avec une expérience interactive",
      icon: CreditCard,
      gradient: "from-[var(--brand-light-accent)] to-[var(--brand-primary)]",
      features: isRTL
        ? ["تحديث فوري", "تفاعلية", "تتبع ذكي", "تقنية متطورة"]
        : ["Mise à Jour Instantanée", "Interactive", "Tracking Intelligent", "Tech Avancée"],
    },
  ]

  return (
    <section
      id="services"
      style={cssVariables}
      className={`relative py-20 sm:py-24 lg:py-32 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* ══════════════ BACKGROUND SYSTEM ══════════════ */}

      {/* Base */}
      <div className="absolute inset-0 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.14, 0.06],
            x: [0, -30, 0],
            y: [0, 35, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)` }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -(Math.random() * 80 + 20), 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, Math.random() * 360, 0],
              opacity: [0, 0.35, 0],
              scale: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 12 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 6,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--brand-primary)]/20 dark:bg-[var(--brand-dark-accent)]/15" />
            ) : i % 3 === 1 ? (
              <div className="w-3 h-3 rotate-45 bg-[var(--brand-light-accent)]/15 dark:bg-[var(--brand-dark-accent)]/10" />
            ) : (
              <div className="w-2.5 h-2.5 border border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/15 rounded-full" />
            )}
          </motion.div>
        ))}

        {/* Floating Decorative Icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[8%] hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.04] backdrop-blur-sm border border-[var(--brand-primary)]/10 shadow-lg">
            <Globe className="w-6 h-6 text-[var(--brand-primary)]/30 dark:text-[var(--brand-dark-accent)]/30" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, -6, 6, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[20%] left-[6%] hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.04] backdrop-blur-sm border border-[var(--brand-light-accent)]/10 shadow-lg">
            <BarChart3 className="w-6 h-6 text-[var(--brand-light-accent)]/30 dark:text-[var(--brand-dark-accent)]/30" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[55%] right-[5%] hidden xl:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.04] backdrop-blur-sm border border-[var(--brand-secondary)]/10 shadow-lg">
            <Palette className="w-6 h-6 text-[var(--brand-secondary)]/30 dark:text-[var(--brand-dark-accent)]/30" />
          </div>
        </motion.div>
      </div>

      {/* ══════════════ CONTENT ══════════════ */}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/20 rounded-full px-5 py-2.5 shadow-[0_4px_24px_rgba(82,3,113,0.08)] dark:shadow-[0_4px_24px_rgba(192,132,252,0.08)]">
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent uppercase tracking-wider">
                {isRTL ? "ما نقدّمه لك" : "Ce Que Nous Proposons"}
              </span>
              <Sparkles className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
          >
            <span className="block text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
              {isRTL ? "حلول رقمية" : "Des Solutions"}
            </span>
            <motion.span
              className="block mt-2 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% auto" }}
            >
              {isRTL ? "متكاملة لنجاحك" : "Digitales Sur Mesure"}
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {isRTL
              ? "نرافقك من الفكرة إلى النتيجة — تصميم مواقع، تسويق رقمي، تحسين محركات البحث وإدارة الشبكات الاجتماعية — كل ما تحتاجه لتنمية أعمالك في المغرب"
              : "Nous vous accompagnons de l'idée au résultat — création de sites, marketing digital, SEO et gestion des réseaux sociaux — tout ce qu'il faut pour développer votre activité au Maroc"}
          </motion.p>
        </motion.div>

        {/* ── Services Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.35, ease: "easeOut" } }}
                className="h-full"
              >
                <Card className="group h-full relative overflow-hidden border-0 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_2px_20px_rgba(82,3,113,0.04)] hover:shadow-[0_12px_40px_rgba(82,3,113,0.12)] dark:shadow-[0_2px_20px_rgba(192,132,252,0.03)] dark:hover:shadow-[0_12px_40px_rgba(192,132,252,0.1)] transition-all duration-500 rounded-2xl">
                  {/* Hover Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`}
                  />

                  {/* Top Accent Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardHeader className="relative z-10 pt-7 sm:pt-8 px-5 sm:px-7">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-5 shadow-lg`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <CardTitle className="text-lg sm:text-xl font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] group-hover:bg-gradient-to-r group-hover:from-[var(--brand-primary)] group-hover:to-[var(--brand-light-accent)] dark:group-hover:from-[var(--brand-dark-accent)] dark:group-hover:to-[var(--brand-secondary)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 pb-7 sm:pb-8 px-5 sm:px-7">
                    {/* Description */}
                    <CardDescription className="text-sm sm:text-[15px] text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 leading-relaxed mb-5 font-light">
                      {service.description}
                    </CardDescription>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, fi) => (
                        <motion.span
                          key={fi}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: fi * 0.08 }}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--brand-primary)]/[0.06] dark:bg-[var(--brand-dark-accent)]/[0.08] text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      whileHover={{ x: isRTL ? -6 : 6 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300"
                      onClick={() => handleWhatsAppClick(service.title)}
                    >
                      <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent">
                        {isRTL ? "اطلب هذه الخدمة" : "Demander Ce Service"}
                      </span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight
                          className={`w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] ${isRTL ? "rotate-180" : ""}`}
                        />
                      </motion.div>
                    </motion.div>
                  </CardContent>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Target className="w-8 h-8 text-[var(--brand-primary)]/10 dark:text-[var(--brand-dark-accent)]/10" />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-20 sm:mt-24 lg:mt-28"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 mb-8 sm:mb-10 font-light max-w-2xl mx-auto"
          >
            {isRTL
              ? "مستعد لتطوير أعمالك رقمياً؟ تواصل معنا اليوم وابدأ رحلة النمو"
              : "Prêt à développer votre activité en ligne ? Contactez-nous aujourd'hui et commencez votre croissance digitale"}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <button
                onClick={() =>
                  handleWhatsAppClick(isRTL ? "استشارة مجانية" : "Consultation Gratuite")
                }
                className="relative group inline-flex items-center gap-2.5 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-[0_8px_32px_rgba(82,3,113,0.25)] dark:shadow-[0_8px_32px_rgba(192,132,252,0.2)] hover:shadow-[0_12px_48px_rgba(82,3,113,0.35)] dark:hover:shadow-[0_12px_48px_rgba(192,132,252,0.3)] transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="text-base sm:text-lg relative z-10">
                  {isRTL ? "تواصل معنا الآن" : "Parlons de Votre Projet"}
                </span>
                <Rocket className="w-5 h-5 relative z-10" />
              </button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <a
                href={`/${lang}#portfolio`}
                className="group inline-flex items-center gap-2.5 border-2 border-[var(--brand-primary)]/25 dark:border-[var(--brand-dark-accent)]/25 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/[0.06] dark:hover:bg-[var(--brand-dark-accent)]/[0.08] hover:border-[var(--brand-primary)]/40 dark:hover:border-[var(--brand-dark-accent)]/40 font-semibold px-7 sm:px-9 py-3.5 sm:py-4.5 rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                <span className="text-sm sm:text-base">
                  {isRTL ? "اكتشف إنجازاتنا" : "Découvrir Nos Réalisations"}
                </span>
                <ArrowRight
                  className={`w-4 h-4 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300 ${isRTL ? "rotate-180" : ""}`}
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ══════════════ BOTTOM FADE ══════════════ */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] to-transparent z-[5]" />
    </section>
  )
}