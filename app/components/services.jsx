"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code,
  ShoppingCart,
  Search,
  Rocket,
  ArrowRight,
  Zap,
  Sparkles,
  Smartphone,
  TrendingUp,
  Globe,
  Palette,
  BarChart3,
  MessageCircle,
  Wrench,
  CheckCircle,
  LayoutDashboard,
} from "lucide-react"

export function Services({ lang }) {
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
      fr: "Bonjour, je souhaite en savoir plus sur votre service : ",
      ar: "مرحبا، أود معرفة المزيد حول خدمتكم: ",
    },
  }

  const handleWhatsAppClick = (serviceTitle) => {
    const message = encodeURIComponent(
      `${whatsappInfo.preMessage[lang] || whatsappInfo.preMessage.fr}${serviceTitle}. ${
        lang === "ar" ? "هل يمكننا مناقشة مشروعي؟" : "Pouvons-nous discuter de mon projet ?"
      }`
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
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  }

  const particles = [
    { left: "10%", top: "20%" },
    { left: "22%", top: "70%" },
    { left: "35%", top: "30%" },
    { left: "48%", top: "80%" },
    { left: "60%", top: "18%" },
    { left: "72%", top: "60%" },
    { left: "84%", top: "28%" },
    { left: "90%", top: "75%" },
  ]

  const servicesData = [
    {
      id: "website",
      title: isRTL ? "إنشاء مواقع احترافية" : "Création de Sites Web",
      description: isRTL
        ? "نصمم مواقع احترافية سريعة ومتجاوبة تساعدك على تقديم مشروعك بشكل قوي وكسب ثقة العملاء."
        : "Nous créons des sites web professionnels, rapides et responsifs pour valoriser votre activité et inspirer confiance à vos visiteurs.",
      icon: Code,
      gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]",
      features: isRTL
        ? ["تصميم احترافي", "متجاوب مع الهاتف", "سرعة جيدة", "هيكلة واضحة"]
        : ["Design professionnel", "Responsive mobile", "Performance optimisée", "Structure claire"],
    },
    {
      id: "redesign",
      title: isRTL ? "إعادة تصميم المواقع" : "Refonte de Site Web",
      description: isRTL
        ? "إذا كان موقعك الحالي قديمًا أو غير واضح، نعيد تصميمه ليصبح أكثر عصرية وفعالية في تحويل الزوار إلى عملاء."
        : "Nous modernisons votre site actuel pour améliorer son image, sa clarté et sa capacité à générer des demandes.",
      icon: Palette,
      gradient: "from-[var(--brand-light-accent)] to-[var(--brand-secondary)]",
      features: isRTL
        ? ["تصميم عصري", "تحسين الواجهة", "وضوح أفضل", "تجربة أقوى"]
        : ["Design moderne", "UX améliorée", "Message plus clair", "Meilleure crédibilité"],
    },
    {
      id: "landing-pages",
      title: isRTL ? "صفحات هبوط فعالة" : "Landing Pages",
      description: isRTL
        ? "ننشئ صفحات هبوط موجهة للحملات الإعلانية والخدمات بهدف دفع الزائر لاتخاذ إجراء واضح."
        : "Nous concevons des landing pages pensées pour vos campagnes, vos offres et la conversion de vos visiteurs.",
      icon: Rocket,
      gradient: "from-[var(--brand-secondary)] to-[var(--brand-primary)]",
      features: isRTL
        ? ["CTA واضح", "موجهة للإعلانات", "هيكلة تحويل", "رسالة مركزة"]
        : ["CTA clair", "Pensée pour les ads", "Structure conversion", "Message ciblé"],
    },
    {
      id: "ecommerce",
      title: isRTL ? "متاجر إلكترونية" : "Boutiques E-commerce",
      description: isRTL
        ? "نبني متاجر إلكترونية سهلة التصفح والإدارة تساعدك على عرض المنتجات وبيعها بشكل احترافي."
        : "Nous développons des boutiques en ligne modernes et faciles à gérer pour vendre vos produits dans de bonnes conditions.",
      icon: ShoppingCart,
      gradient: "from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)]",
      features: isRTL
        ? ["عرض المنتجات", "تجربة شراء سلسة", "تصميم موثوق", "إدارة بسيطة"]
        : ["Catalogue produits", "Parcours d’achat fluide", "Design rassurant", "Gestion simple"],
    },
    {
      id: "seo",
      title: isRTL ? "تحسين الظهور على Google" : "SEO & Visibilité Google",
      description: isRTL
        ? "نحسن البنية الأساسية للموقع والمحتوى التقني لمساعدتك على الظهور بشكل أفضل في نتائج البحث."
        : "Nous optimisons la structure de votre site et ses bases SEO pour améliorer votre visibilité sur Google.",
      icon: Search,
      gradient: "from-[var(--brand-light-accent)] to-[var(--brand-primary)]",
      features: isRTL
        ? ["SEO أساسي", "تحسين الصفحات", "بنية واضحة", "سرعة أفضل"]
        : ["Base SEO", "Pages optimisées", "Structure propre", "Meilleure performance"],
    },
    {
      id: "maintenance",
      title: isRTL ? "الصيانة والدعم" : "Maintenance & Support",
      description: isRTL
        ? "نوفر لك المتابعة التقنية والتحديثات والتحسينات لضمان استقرار موقعك واستمراره بشكل جيد."
        : "Nous assurons le suivi technique, les mises à jour et les améliorations continues pour garder votre site fiable et performant.",
      icon: Wrench,
      gradient: "from-[var(--brand-secondary)] to-[var(--brand-light-accent)]",
      features: isRTL
        ? ["تحديثات", "إصلاحات", "متابعة تقنية", "دعم مستمر"]
        : ["Mises à jour", "Corrections", "Suivi technique", "Support continu"],
    },
  ]

  return (
    <section
      id="services"
      style={cssVariables}
      className={`relative py-20 sm:py-24 lg:py-32 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]" />

      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.08, 0.16, 0.08],
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.06, 0.14, 0.06],
            x: [0, -28, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)` }}
        />

        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: particle.left, top: particle.top }}
            animate={{
              y: [0, -35, 0],
              x: [0, i % 2 === 0 ? 12 : -12, 0],
              opacity: [0.1, 0.35, 0.1],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--brand-primary)]/15 dark:bg-[var(--brand-dark-accent)]/15" />
          </motion.div>
        ))}

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
            <LayoutDashboard className="w-6 h-6 text-[var(--brand-secondary)]/30 dark:text-[var(--brand-dark-accent)]/30" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2.5 mb-8">
            <div className="flex items-center gap-2 bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/20 rounded-full px-5 py-2.5 shadow-[0_4px_24px_rgba(82,3,113,0.08)]">
              <Zap className="w-4 h-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent uppercase tracking-wider">
                {isRTL ? "خدماتنا" : "Nos Services"}
              </span>
              <Sparkles className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            <span className="block text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
              {isRTL ? "خدمات رقمية" : "Des services digitaux"}
            </span>
            <span className="block mt-2 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent">
              {isRTL ? "مصممة لتطوير مشروعك" : "pensés pour faire grandir votre activité"}
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 max-w-3xl mx-auto leading-relaxed font-light">
            {isRTL
              ? "نقدم حلولاً عملية لمساعدتك على بناء حضور رقمي احترافي، تحسين صورتك، وتسهيل تواصل العملاء معك."
              : "Nous proposons des solutions concrètes pour améliorer votre présence en ligne, renforcer votre image et faciliter la prise de contact avec vos futurs clients."}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
        >
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.015 }}
                className="h-full"
              >
                <Card className="group h-full relative overflow-hidden border border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_2px_20px_rgba(82,3,113,0.04)] hover:shadow-[0_12px_40px_rgba(82,3,113,0.10)] transition-all duration-500 rounded-2xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] dark:group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`}
                  />
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-80`}
                  />

                  <CardHeader className="relative z-10 pt-7 sm:pt-8 px-5 sm:px-7">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-5 shadow-lg`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    <CardTitle className="text-lg sm:text-xl font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 pb-7 sm:pb-8 px-5 sm:px-7">
                    <CardDescription className="text-sm sm:text-[15px] text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 leading-relaxed mb-5 font-light">
                      {service.description}
                    </CardDescription>

                    <div className="space-y-2.5 mb-6">
                      {service.features.map((feature, fi) => (
                        <div key={fi} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-sm text-[var(--brand-light-text)]/75 dark:text-[var(--brand-dark-text)]/75">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleWhatsAppClick(service.title)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] hover:gap-3 transition-all duration-300"
                    >
                      <span>{isRTL ? "طلب هذه الخدمة" : "Demander ce service"}</span>
                      <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-20 sm:mt-24 lg:mt-28"
        >
          <p className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 mb-8 sm:mb-10 font-light max-w-2xl mx-auto">
            {isRTL
              ? "هل تحتاج إلى موقع جديد أو تطوير موقعك الحالي؟ دعنا نناقش ما يناسب مشروعك."
              : "Besoin d’un nouveau site ou d’une amélioration de votre présence en ligne ? Parlons de votre projet."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={() =>
                  handleWhatsAppClick(isRTL ? "استشارة مجانية" : "Consultation gratuite")
                }
                className="relative group inline-flex items-center gap-2.5 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-[0_8px_32px_rgba(82,3,113,0.25)] hover:shadow-[0_12px_48px_rgba(82,3,113,0.35)] transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="text-base sm:text-lg relative z-10">
                  {isRTL ? "احجز استشارة مجانية" : "Demander un audit gratuit"}
                </span>
                <Rocket className="w-5 h-5 relative z-10" />
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <a
                href={`/${lang}#portfolio`}
                className="group inline-flex items-center gap-2.5 border-2 border-[var(--brand-primary)]/25 dark:border-[var(--brand-dark-accent)]/25 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/[0.06] dark:hover:bg-[var(--brand-dark-accent)]/[0.08] hover:border-[var(--brand-primary)]/40 dark:hover:border-[var(--brand-dark-accent)]/40 font-semibold px-7 sm:px-9 py-3.5 sm:py-4.5 rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                <span className="text-sm sm:text-base">
                  {isRTL ? "شاهد الأعمال" : "Voir les réalisations"}
                </span>
                <ArrowRight
                  className={`w-4 h-4 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300 ${
                    isRTL ? "rotate-180" : ""
                  }`}
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] to-transparent z-[5]" />
    </section>
  )
}