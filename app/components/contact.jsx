"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle,
  Zap,
  Rocket,
  ArrowRight,
  Globe,
  Clock,
  Shield,
  Briefcase,
} from "lucide-react"

export function Contact({ lang, t }) {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  const particles = [
    { left: "8%", top: "16%" },
    { left: "20%", top: "68%" },
    { left: "34%", top: "24%" },
    { left: "47%", top: "80%" },
    { left: "61%", top: "20%" },
    { left: "74%", top: "62%" },
    { left: "86%", top: "30%" },
    { left: "92%", top: "74%" },
  ]

  const whatsappInfo = {
    phone: "212645288216",
    messages: {
      consultation: {
        fr: "Bonjour, je souhaite discuter de mon projet digital et recevoir plus d'informations.",
        ar: "مرحبا، أود مناقشة مشروعي الرقمي والحصول على مزيد من المعلومات.",
      },
      general: {
        fr: "Bonjour, je souhaite en savoir plus sur vos services.",
        ar: "مرحبا، أود معرفة المزيد عن خدماتكم.",
      },
    },
  }

  const handleWhatsAppClick = (messageType = "general") => {
    const message = encodeURIComponent(
      whatsappInfo.messages[messageType]?.[lang] ||
        whatsappInfo.messages[messageType]?.fr
    )
    window.open(`https://wa.me/${whatsappInfo.phone}?text=${message}`, "_blank")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // هنا من بعد تقدر تربط API / email service / backend
    await new Promise((resolve) => setTimeout(resolve, 1800))

    setSubmitted(true)
    setIsLoading(false)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactMethods = [
    {
      icon: Phone,
      label: isRTL ? "الهاتف" : "Téléphone",
      value: "+212 645 288 216",
      href: "tel:+212645288216",
      gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]",
    },
    {
      icon: Mail,
      label: isRTL ? "البريد الإلكتروني" : "Email",
      value: "contact@nemsimedia.ma",
      href: "mailto:contact@nemsimedia.ma",
      gradient: "from-[var(--brand-light-accent)] to-[var(--brand-secondary)]",
    },
    {
      icon: MapPin,
      label: isRTL ? "الموقع" : "Localisation",
      value: isRTL ? "الدار البيضاء، المغرب" : "Casablanca, Maroc",
      href: null,
      gradient: "from-[var(--brand-secondary)] to-[var(--brand-primary)]",
    },
  ]

  const services = [
    isRTL ? "موقع تعريفي" : "Site vitrine",
    isRTL ? "متجر إلكتروني" : "E-commerce",
    isRTL ? "إعادة تصميم موقع" : "Refonte de site",
    isRTL ? "Landing page" : "Landing page",
    isRTL ? "SEO / Visibilité" : "SEO / Visibilité",
    isRTL ? "صيانة ودعم" : "Maintenance & support",
  ]

  return (
    <section
      id="contact"
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
            opacity: [0.08, 0.18, 0.08],
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)` }}
        />

        <motion.div
          animate={{
            scale: [1, 1.16, 1],
            opacity: [0.06, 0.14, 0.06],
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)` }}
        />

        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: particle.left, top: particle.top }}
            animate={{
              y: [0, -28, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.1, 0.3, 0.1],
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
          animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[6%] hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.04] backdrop-blur-sm border border-[var(--brand-primary)]/10 shadow-lg">
            <Globe className="w-6 h-6 text-[var(--brand-primary)]/30 dark:text-[var(--brand-dark-accent)]/30" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -6, 6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[20%] right-[5%] hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.04] backdrop-blur-sm border border-[var(--brand-light-accent)]/10 shadow-lg">
            <Clock className="w-6 h-6 text-[var(--brand-light-accent)]/30 dark:text-[var(--brand-dark-accent)]/30" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2.5 mb-8">
            <div className="flex items-center gap-2 bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/20 rounded-full px-5 py-2.5 shadow-[0_4px_24px_rgba(82,3,113,0.08)]">
              <MessageCircle className="w-4 h-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent uppercase tracking-wider">
                {isRTL ? "تواصل معنا" : "Contact"}
              </span>
              <Sparkles className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            <span className="block text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
              {isRTL ? "هل لديك مشروع؟" : "Vous avez un projet ?"}
            </span>
            <span className="block mt-2 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              {isRTL ? "دعنا نتحدث عنه" : "Parlons-en ensemble"}
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 max-w-3xl mx-auto leading-relaxed font-light">
            {t?.contact?.subtitle ||
              (isRTL
                ? "أخبرنا عن مشروعك وسنقترح عليك الحل المناسب حسب أهدافك وميزانيتك."
                : "Parlez-nous de votre besoin et nous vous proposerons une solution adaptée à vos objectifs et à votre budget.")}
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-8 sm:gap-10 lg:gap-14 max-w-7xl mx-auto">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                {isRTL ? "كيف يمكننا مساعدتك؟" : "Comment pouvons-nous vous aider ?"}
              </h3>
              <p className="mt-3 text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 leading-relaxed">
                {isRTL
                  ? "يمكنك التواصل معنا مباشرة عبر الهاتف أو البريد أو واتساب، أو ملء النموذج وسنعود إليك بسرعة."
                  : "Vous pouvez nous contacter directement par téléphone, email ou WhatsApp, ou remplir le formulaire et nous reviendrons vers vous rapidement."}
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden border border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl shadow-[0_2px_16px_rgba(82,3,113,0.04)] hover:shadow-[0_8px_28px_rgba(82,3,113,0.08)] transition-all duration-500">
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${method.gradient} opacity-80`} />

                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-center gap-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.gradient} shadow-lg shrink-0`}>
                          <method.icon className="w-5 h-5 text-white" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-[var(--brand-light-text)]/50 dark:text-[var(--brand-dark-text)]/50 uppercase tracking-wider mb-1">
                            {method.label}
                          </p>

                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-base sm:text-lg font-semibold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:text-[var(--brand-primary)] dark:hover:text-[var(--brand-dark-accent)] transition-colors truncate block"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-base sm:text-lg font-semibold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] truncate">
                              {method.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <Card className="border border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl shadow-[0_2px_16px_rgba(82,3,113,0.04)]">
              <CardContent className="p-5 sm:p-6">
                <h4 className="text-lg font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-4">
                  {isRTL ? "ما الذي ستحصل عليه؟" : "Ce que vous obtenez"}
                </h4>

                <div className="space-y-3">
                  {[
                    isRTL ? "رد سريع خلال أقل من 24 ساعة" : "Réponse rapide sous 24h",
                    isRTL ? "توجيه واضح حسب مشروعك" : "Conseils adaptés à votre besoin",
                    isRTL ? "عرض مناسب حسب الميزانية" : "Proposition adaptée à votre budget",
                    isRTL ? "بدون أي التزام في البداية" : "Sans engagement au départ",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="inline-flex p-1.5 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                className="relative overflow-hidden group w-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white rounded-xl border-0"
                size="lg"
                onClick={() => handleWhatsAppClick("consultation")}
              >
                <Rocket className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {isRTL ? "استشارة مجانية" : "Consultation gratuite"}
              </Button>

              <Button
                className="relative overflow-hidden group w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl border-0"
                size="lg"
                onClick={() => handleWhatsAppClick("general")}
              >
                <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {t?.contact?.whatsapp || "WhatsApp"}
              </Button>
            </div>
          </motion.div>

          {/* Right side / form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Card className="relative overflow-hidden border border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl shadow-[0_4px_24px_rgba(82,3,113,0.06)]">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)]" />

              <CardContent className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96, y: 18 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: -18 }}
                      className="text-center py-8 sm:py-12"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-3">
                        {isRTL ? "تم إرسال رسالتك!" : "Votre message a été envoyé !"}
                      </h3>

                      <p className="text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 mb-8 leading-relaxed font-light max-w-md mx-auto">
                        {t?.contact?.form?.success ||
                          (isRTL
                            ? "شكراً لتواصلك معنا. سنعود إليك في أقرب وقت ممكن."
                            : "Merci pour votre message. Nous reviendrons vers vous très rapidement.")}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          className="border-2 border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 rounded-xl"
                        >
                          {isRTL ? "إرسال رسالة أخرى" : "Envoyer un autre message"}
                        </Button>

                        <Button
                          onClick={() => handleWhatsAppClick("general")}
                          className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl border-0"
                        >
                          <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                          {isRTL ? "الانتقال إلى واتساب" : "Continuer sur WhatsApp"}
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                          {isRTL ? "أخبرنا عن مشروعك" : "Parlez-nous de votre projet"}
                        </h3>
                        <p className="text-sm text-[var(--brand-light-text)]/50 dark:text-[var(--brand-dark-text)]/50 mt-1">
                          {isRTL
                            ? "املأ النموذج وسنقترح عليك أفضل حل"
                            : "Remplissez ce formulaire et nous vous répondrons rapidement"}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 mb-2">
                            {t?.contact?.form?.name || (isRTL ? "الاسم" : "Nom")}
                          </label>
                          <Input
                            required
                            placeholder={t?.contact?.form?.name || (isRTL ? "الاسم" : "Nom")}
                            className="h-12 rounded-xl bg-white/60 dark:bg-white/[0.04] border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/15"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 mb-2">
                            {isRTL ? "الهاتف" : "Téléphone"}
                          </label>
                          <Input
                            type="tel"
                            required
                            placeholder={isRTL ? "رقم الهاتف" : "Votre téléphone"}
                            className="h-12 rounded-xl bg-white/60 dark:bg-white/[0.04] border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/15"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 mb-2">
                          {t?.contact?.form?.email || "Email"}
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder={t?.contact?.form?.email || "Email"}
                          className="h-12 rounded-xl bg-white/60 dark:bg-white/[0.04] border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/15"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 mb-2">
                          {isRTL ? "الخدمة المطلوبة" : "Service recherché"}
                        </label>
                        <select className="w-full h-12 rounded-xl bg-white/60 dark:bg-white/[0.04] border border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/15 px-3 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] outline-none focus:border-[var(--brand-primary)] dark:focus:border-[var(--brand-dark-accent)]">
                          <option value="">
                            {isRTL ? "اختر الخدمة" : "Choisir un service"}
                          </option>
                          {services.map((service, idx) => (
                            <option key={idx} value={service} className="dark:bg-white/[0.04] dark:text-black">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 mb-2">
                          {t?.contact?.form?.message || (isRTL ? "الرسالة" : "Message")}
                        </label>
                        <Textarea
                          required
                          rows={6}
                          placeholder={
                            t?.contact?.form?.message ||
                            (isRTL ? "أخبرنا عن مشروعك، أهدافك، وما تحتاجه" : "Décrivez votre projet, vos objectifs et vos besoins")
                          }
                          className="rounded-xl resize-none bg-white/60 dark:bg-white/[0.04] border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/15"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55">
                          <Clock className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
                          {isRTL ? "رد خلال 24 ساعة" : "Réponse sous 24h"}
                        </div>

                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55">
                          <Shield className="w-4 h-4 text-emerald-500" />
                          {isRTL ? "بدون التزام" : "Sans engagement"}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="relative overflow-hidden group w-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-[0_8px_32px_rgba(82,3,113,0.25)] hover:shadow-[0_12px_48px_rgba(82,3,113,0.35)] transition-all duration-500 rounded-xl border-0 py-6 text-base font-semibold"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                        ) : (
                          <>
                            <Send className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                            {t?.contact?.form?.submit || (isRTL ? "إرسال الرسالة" : "Envoyer le message")}
                          </>
                        )}
                      </Button>

                      <p className="text-center text-xs text-[var(--brand-light-text)]/50 dark:text-[var(--brand-dark-text)]/50">
                        {isRTL
                          ? "بإرسالك لهذا النموذج، فأنت توافق على أن نتواصل معك بخصوص مشروعك."
                          : "En envoyant ce formulaire, vous acceptez d’être recontacté au sujet de votre projet."}
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] to-transparent z-[5] pointer-events-none" />
    </section>
  )
}