"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, ShoppingCart, Search, Rocket, ArrowRight, Zap, Sparkles, Target, Smartphone, CreditCard, TrendingUp } from "lucide-react"

export function Services({ lang, t }) {
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

  // WhatsApp contact information
  const whatsappInfo = {
    phone: "+212645288216",
    preMessage: {
      fr: "Bonjour ! Je suis intéressé(e) par vos services de ",
      ar: "مرحبا! أنا مهتم بخدماتكم في "
    }
  }

  // Function to handle WhatsApp redirection
  const handleWhatsAppClick = (serviceTitle) => {
    const message = encodeURIComponent(
      `${whatsappInfo.preMessage[lang]}${serviceTitle}. Pouvez-vous me donner plus d'informations ?`
    )
    const whatsappUrl = `https://wa.me/${whatsappInfo.phone}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  // Floating animation for background elements
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }
    }
  }

  // Stagger animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // SEO-optimized services data for Morocco
  const servicesData = [
    {
      id: "web-design",
      title: isRTL ? "تصميم مواقع الويب" : "Création de Sites Web",
      description: isRTL 
        ? "تصميم مواقع ويب احترافية متجاوبة مع محركات البحث SEO، مخصصة للشركات المغربية لزيادة الظهور الرقمي وجذب العملاء"
        : "Conception de sites web professionnels responsifs optimisés SEO, spécialisés pour les entreprises marocaines pour augmenter la visibilité digitale et attirer des clients",
      icon: Code,
      features: isRTL ? ["تصميم متجاوب", "تحسين SEO", "سرعة التحميل", "تجربة مستخدم"] : ["Design Responsive", "Optimisation SEO", "Chargement Rapide", "UX Optimale"],
      keywords: isRTL ? ["موقع ويب المغرب", "تصميم مواقع الدار البيضاء", "شركة مواقع إنترنت المغرب"] : ["site web Maroc", "création site Casablanca", "entreprise site internet Maroc"]
    },
    {
      id: "digital-marketing",
      title: isRTL ? "التسويق الرقمي SEO" : "Marketing Digital & SEO",
      description: isRTL
        ? "استراتيجيات تسويق رقمي متكاملة وتهيئة محركات البحث SEO لزيادة ظهور موقعك في الصفحة الأولى على جوجل في المغرب"
        : "Stratégies de marketing digital intégrées et optimisation SEO pour augmenter la visibilité de votre site en première page sur Google au Maroc",
      icon: Search,
      features: isRTL ? ["الظهور الأولى", "زيادة الزوار", "تحليلات متقدمة", "كلمات مفتاحية"] : ["Première Page Google", "Trafic Qualifié", "Analytics Avancés", "Mots-clés Optimisés"],
      keywords: isRTL ? ["سيو المغرب", "تسويق رقمي الدار البيضاء", "تحسين محركات البحث المغرب"] : ["SEO Maroc", "marketing digital Casablanca", "référencement naturel Maroc"]
    },
    {
      id: "ecommerce",
      title: isRTL ? "متاجر إلكترونية" : "Boutiques E-commerce",
      description: isRTL
        ? "إنشاء متاجر إلكترونية متكاملة مع أنظمة دفع مغربية آمنة وإدارة المخزون وتحسين تجربة المستخدم لزيادة المبيعات"
        : "Création de boutiques en ligne complètes avec systèmes de paiement marocains sécurisés, gestion de stock et optimisation de l'expérience utilisateur pour augmenter les ventes",
      icon: ShoppingCart,
      features: isRTL ? ["دفع مغربي آمن", "إدارة المخزون", "تحويل عالي", "تسويق متكامل"] : ["Paiement Marocain Sécurisé", "Gestion Stock", "Taux Conversion Élevé", "Marketing Intégré"],
      keywords: isRTL ? ["متجر إلكتروني المغرب", "موقع بيع онлайн الدار البيضاء", "ecommerce المغرب"] : ["boutique en ligne Maroc", "site e-commerce Casablanca", "ecommerce Maroc"]
    },
    {
      id: "social-media",
      title: isRTL ? "إدارة وسائل التواصل" : "Gestion Réseaux Sociaux",
      description: isRTL
        ? "إدارة احترافية لحسابات وسائل التواصل الاجتماعي مع استراتيجيات محتوى مخصصة للجمهور المغربي لزيادة التفاعل والمبيعات"
        : "Gestion professionnelle des réseaux sociaux avec stratégies de contenu personnalisées pour le public marocain pour augmenter l'engagement et les ventes",
      icon: TrendingUp,
      features: isRTL ? ["إدارة محتوى", "تفاعل الجمهور", "تحليل أداء", "حملات إعلانية"] : ["Gestion Contenu", "Engagement Audience", "Analyse Performance", "Campagnes Publicitaires"],
      keywords: isRTL ? ["إدارة سوشيال ميديا المغرب", "تسويق إنستغرام الدار البيضاء", "إدارة فيسبوك المغرب"] : ["gestion réseaux sociaux Maroc", "marketing Instagram Casablanca", "gestion Facebook Maroc"]
    },
    {
      id: "nfc-cards",
      title: isRTL ? "بطاقات NFC الذكية" : "Cartes NFC Intelligentes",
      description: isRTL
        ? "تصميم بطاقات NFC ذكية مخصصة للشركات المغربية مع إمكانيات رقمية متقدمة لتحديث المعلومات بسهولة وتجارب تفاعلية"
        : "Conception de cartes NFC intelligentes personnalisées pour entreprises marocaines avec capacités digitales avancées pour mettre à jour les informations facilement",
      icon: CreditCard,
      features: isRTL ? ["قابلة للتحديث", "تفاعلية", "تتبع البيانات", "تكنولوجيا حديثة"] : ["Mise à Jour Facile", "Interactive", "Tracking Données", "Technologie Innovante"],
      keywords: isRTL ? ["بطاقات nfc المغرب", "كروت ذكية الدار البيضاء", "تكنولوجيا nfc المغرب"] : ["cartes NFC Maroc", "cartes intelligentes Casablanca", "technologie NFC Maroc"]
    }
  ]

  return (
    <section 
      id="services" 
      style={cssVariables}
      className={`relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-light-bg)] via-[var(--brand-primary)]/5 to-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] dark:via-[var(--brand-primary)]/10 dark:to-[var(--brand-dark-bg)]" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          {...floatingAnimation}
          className="absolute top-10 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-light-accent)]/10 dark:to-[var(--brand-dark-accent)]/10 rounded-full blur-2xl"
        />
        <motion.div
          {...floatingAnimation}
          transition={{ delay: 2, duration: 8 }}
          className="absolute top-1/3 right-5 sm:right-10 w-16 h-16 sm:w-28 sm:h-28 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-light-accent)]/15 dark:to-[var(--brand-dark-accent)]/15 rounded-full blur-2xl"
        />
        <motion.div
          {...floatingAnimation}
          transition={{ delay: 1, duration: 7 }}
          className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-[var(--brand-light-accent)]/10 to-[var(--brand-primary)]/10 dark:from-[var(--brand-dark-accent)]/10 dark:to-[var(--brand-primary)]/10 rounded-full blur-2xl"
        />

        {/* Geometric Patterns */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-40 h-40 border-2 border-[var(--brand-primary)]/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-32 h-32 border-2 border-[var(--brand-light-accent)]/5 dark:border-[var(--brand-dark-accent)]/5 rounded-full"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - SEO Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[var(--brand-light-bg)]/60 dark:bg-[var(--brand-dark-bg)]/60 backdrop-blur-md border border-[var(--brand-primary)]/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
            </motion.div>
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent uppercase tracking-wider">
              {isRTL ? "خدماتنا المتكاملة" : "Nos Services Intégrés"}
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-primary)] dark:text-[var(--brand-primary)]" />
            </motion.div>
          </motion.div>

          {/* SEO Optimized Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-4 sm:mb-6 font-serif text-balance"
          >
            {isRTL 
              ? "شركة تصميم مواقع وتسويق رقمي في المغرب" 
              : "Agence Création Sites Web & Marketing Digital au Maroc"
            }
          </motion.h1>

          {/* SEO Optimized Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-light"
          >
            {isRTL 
              ? "شركة متخصصة في تصميم مواقع الويب، التسويق الرقمي SEO، تطبيقات الجوال، وإدارة وسائل التواصل الاجتماعي للشركات في المغرب. نضمن ظهورك في الصفحة الأولى على جوجل."
              : "Agence spécialisée en création de sites web, marketing digital SEO, applications mobiles et gestion des réseaux sociaux pour entreprises au Maroc. Nous garantissons votre apparition en première page sur Google."
            }
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="h-full"
              >
                <Card className="group h-full border-[var(--brand-primary)]/20 bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 backdrop-blur-sm shadow-lg hover:shadow-2xl shadow-[var(--brand-primary)]/5 dark:shadow-[var(--brand-primary)]/10 transition-all duration-500 relative overflow-hidden">

                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-light-accent)]/5 dark:to-[var(--brand-dark-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <div className="absolute inset-[2px] bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)] rounded-lg z-0" />

                  <CardHeader className="relative z-10 pt-6 sm:pt-8 px-4 sm:px-6">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-light-accent)]/20 dark:from-[var(--brand-primary)]/15 dark:to-[var(--brand-dark-accent)]/15 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg group-hover:shadow-[var(--brand-primary)]/20 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-primary)] dark:text-[var(--brand-primary)] group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>

                    {/* Title */}
                    <CardTitle className="text-lg sm:text-xl font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-[var(--brand-primary)] group-hover:to-[var(--brand-light-accent)] dark:group-hover:from-[var(--brand-primary)] dark:group-hover:to-[var(--brand-dark-accent)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 pb-6 sm:pb-8 px-4 sm:px-6">
                    {/* Description */}
                    <CardDescription className="text-sm sm:text-base text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 leading-relaxed mb-4 sm:mb-6 font-light">
                      {service.description}
                    </CardDescription>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] dark:text-[var(--brand-primary)] border border-[var(--brand-primary)]/20"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA Link - Now with WhatsApp functionality */}
                    <motion.div
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: isRTL ? -5 : 5 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-[var(--brand-primary)] dark:text-[var(--brand-primary)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                      onClick={() => handleWhatsAppClick(service.title)}
                    >
                      <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent font-semibold">
                        {isRTL ? "اطلب الخدمة" : "Commander Maintenant"}
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                      </motion.div>
                    </motion.div>
                  </CardContent>

                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--brand-primary)]/20 dark:text-[var(--brand-primary)]/20" />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA - SEO Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 sm:mt-20 lg:mt-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg sm:text-xl text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 mb-8 font-light"
          >
            {isRTL 
              ? "🚀 احصل على موقع ويب محسن لتحسين محركات البحث SEO وارفع مبيعاتك في المغرب. تواصل معنا للحصول على استشارة مجانية."
              : "🚀 Obtenez un site web optimisé SEO et augmentez vos ventes au Maroc. Contactez-nous pour une consultation gratuite."
            }
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl shadow-[var(--brand-primary)]/30 transition-all duration-300 cursor-pointer"
              onClick={() => handleWhatsAppClick("Consultation Gratuite")}
            >
              <span className="text-base sm:text-lg">{isRTL ? "استشارة SEO مجانية" : "Consultation SEO Gratuite"}</span>
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>

            <a href={`/${lang}#portfolio`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-[var(--brand-primary)]/30 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/10 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm sm:text-base">{isRTL ? "شاهد أعمالنا السابقة" : "Voir Nos Réalisations"}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[var(--brand-light-bg)]/80 dark:to-[var(--brand-dark-bg)]/80" />
    </section>
  )
}