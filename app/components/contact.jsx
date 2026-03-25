"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageCircle, Send, Mail, Phone, MapPin, Sparkles,
  CheckCircle, Zap, Rocket, ArrowRight, Globe, Clock
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

  const whatsappInfo = {
    phone: "212645288216",
    messages: {
      consultation: {
        fr: "Bonjour ! Je souhaite discuter de mon projet digital avec votre équipe. Pouvez-vous me proposer un rendez-vous ?",
        ar: "مرحبا! أود مناقشة مشروعي الرقمي مع فريقكم. هل يمكنكم اقتراح موعد؟",
      },
      general: {
        fr: "Bonjour ! J'aimerais en savoir plus sur vos services. Pouvez-vous me recontacter ?",
        ar: "مرحبا! أود معرفة المزيد عن خدماتكم. هل يمكنكم الاتصال بي؟",
      },
    },
  }

  const handleWhatsAppClick = (messageType = "general") => {
    const message = encodeURIComponent(whatsappInfo.messages[messageType][lang])
    window.open(`https://wa.me/${whatsappInfo.phone}?text=${message}`, "_blank")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setSubmitted(true)
    setIsLoading(false)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const contactMethods = [
    {
      icon: Phone,
      label: isRTL ? "الهاتف" : "Téléphone",
      value: "+212 645-288-216",
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
      gradient: "from-[var(--brand-secondary)] to-[var(--brand-primary)]",
    },
  ]

  return (
    <section
      id="contact"
      style={cssVariables}
      className={`relative py-20 sm:py-24 lg:py-32 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* ══════════════ BACKGROUND SYSTEM ══════════════ */}
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
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08], x: [0, 35, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.14, 0.06], x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)` }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -(Math.random() * 70 + 20), 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, Math.random() * 360, 0],
              opacity: [0, 0.3, 0],
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
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageCircle className="w-4 h-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent uppercase tracking-wider">
                {isRTL ? "تواصل معنا" : "Parlons Ensemble"}
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
              {isRTL ? "لديك مشروع؟" : "Vous Avez Un Projet ?"}
            </span>
            <motion.span
              className="block mt-2 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% auto" }}
            >
              {isRTL ? "دعنا نحققه معاً" : "Réalisons-Le Ensemble"}
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
            {t.contact.subtitle}
          </motion.p>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 max-w-7xl mx-auto">
          {/* ── Left: Contact Info ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-6"
            >
              {isRTL ? "كيف يمكننا مساعدتك؟" : "Comment pouvons-nous vous aider ?"}
            </motion.h3>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <Card className="relative overflow-hidden border-0 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_2px_16px_rgba(82,3,113,0.04)] hover:shadow-[0_8px_32px_rgba(82,3,113,0.1)] dark:hover:shadow-[0_8px_32px_rgba(192,132,252,0.08)] transition-all duration-500 rounded-2xl">
                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-[0.02] dark:group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`} />

                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-center gap-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.gradient} shadow-lg`}>
                          <method.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-[var(--brand-light-text)]/50 dark:text-[var(--brand-dark-text)]/50 uppercase tracking-wider mb-0.5">
                            {method.label}
                          </p>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-base sm:text-lg font-semibold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-gradient-to-r hover:from-[var(--brand-primary)] hover:to-[var(--brand-light-accent)] dark:hover:from-[var(--brand-dark-accent)] dark:hover:to-[var(--brand-secondary)] hover:bg-clip-text hover:text-transparent transition-all duration-300 block truncate"
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

            {/* Quick Action Buttons */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Consultation Button */}
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  className="relative overflow-hidden group w-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-[0_8px_28px_rgba(82,3,113,0.25)] dark:shadow-[0_8px_28px_rgba(192,132,252,0.2)] hover:shadow-[0_12px_40px_rgba(82,3,113,0.35)] transition-all duration-500 rounded-xl border-0"
                  size="lg"
                  onClick={() => handleWhatsAppClick("consultation")}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Rocket className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"} relative z-10`} />
                  <span className="relative z-10">
                    {isRTL ? "استشارة مجانية" : "Consultation Gratuite"}
                  </span>
                </Button>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  className="relative overflow-hidden group w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-[0_8px_28px_rgba(16,185,129,0.25)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.35)] transition-all duration-500 rounded-xl border-0"
                  size="lg"
                  onClick={() => handleWhatsAppClick("general")}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"} relative z-10`} />
                  <span className="relative z-10">{t.contact.whatsapp}</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Email Button */}
            <motion.div variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/[0.06] dark:hover:bg-[var(--brand-dark-accent)]/[0.06] hover:border-[var(--brand-primary)]/35 dark:hover:border-[var(--brand-dark-accent)]/35 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl rounded-xl transition-all duration-300 group"
                  size="lg"
                >
                  <a href="mailto:contact@nemsimedia.ma">
                    <Mail className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"} group-hover:text-[var(--brand-primary)] dark:group-hover:text-[var(--brand-dark-accent)] transition-colors`} />
                    {isRTL ? "إرسال بريد إلكتروني" : "Envoyer un Email"}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"} group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform`} />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 rounded-2xl"
            >
              <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 font-medium">
                {isRTL ? "نرد عليك في أقل من 24 ساعة" : "Réponse garantie en moins de 24h"}
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden border-0 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_4px_24px_rgba(82,3,113,0.06)] hover:shadow-[0_12px_48px_rgba(82,3,113,0.1)] dark:shadow-[0_4px_24px_rgba(192,132,252,0.04)] dark:hover:shadow-[0_12px_48px_rgba(192,132,252,0.08)] transition-all duration-500 rounded-2xl">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)]" />

              <CardContent className="p-6 sm:p-8 relative z-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      className="text-center py-10 sm:py-14"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      >
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl sm:text-3xl font-extrabold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-3"
                      >
                        {isRTL ? "تم الإرسال بنجاح!" : "Message Envoyé !"}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 mb-8 leading-relaxed font-light"
                      >
                        {t.contact.form.success}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-3 justify-center"
                      >
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                          <Button
                            onClick={() => setSubmitted(false)}
                            variant="outline"
                            className="border-2 border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/[0.06] rounded-xl"
                          >
                            {isRTL ? "إرسال رسالة أخرى" : "Nouveau Message"}
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                          <Button
                            onClick={() => handleWhatsAppClick("general")}
                            className="relative overflow-hidden group bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl border-0"
                          >
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"} relative z-10`} />
                            <span className="relative z-10">
                              {isRTL ? "محادثة فورية" : "Chat Instantané"}
                            </span>
                          </Button>
                        </motion.div>
                      </motion.div>
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
                      {/* Form Header */}
                      <div className="mb-2">
                        <h3 className="text-lg font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                          {isRTL ? "أرسل لنا رسالة" : "Envoyez-nous un message"}
                        </h3>
                        <p className="text-sm text-[var(--brand-light-text)]/50 dark:text-[var(--brand-dark-text)]/50 font-light mt-1">
                          {isRTL ? "جميع الحقول مطلوبة" : "Tous les champs sont requis"}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-semibold text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 mb-2">
                            {t.contact.form.name}
                          </label>
                          <Input
                            required
                            className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/15 focus:border-[var(--brand-primary)] dark:focus:border-[var(--brand-dark-accent)] transition-all duration-300 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] rounded-xl h-12 focus:shadow-[0_0_0_3px_rgba(82,3,113,0.08)] dark:focus:shadow-[0_0_0_3px_rgba(192,132,252,0.08)]"
                            placeholder={t.contact.form.name}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 mb-2">
                            {t.contact.form.email}
                          </label>
                          <Input
                            type="email"
                            required
                            className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/15 focus:border-[var(--brand-primary)] dark:focus:border-[var(--brand-dark-accent)] transition-all duration-300 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] rounded-xl h-12 focus:shadow-[0_0_0_3px_rgba(82,3,113,0.08)] dark:focus:shadow-[0_0_0_3px_rgba(192,132,252,0.08)]"
                            placeholder={t.contact.form.email}
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-semibold text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 mb-2">
                            {t.contact.form.message}
                          </label>
                          <Textarea
                            required
                            rows={5}
                            className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/15 focus:border-[var(--brand-primary)] dark:focus:border-[var(--brand-dark-accent)] transition-all duration-300 resize-none text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] rounded-xl focus:shadow-[0_0_0_3px_rgba(82,3,113,0.08)] dark:focus:shadow-[0_0_0_3px_rgba(192,132,252,0.08)]"
                            placeholder={t.contact.form.message}
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}>
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="relative overflow-hidden group w-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-[0_8px_32px_rgba(82,3,113,0.25)] dark:shadow-[0_8px_32px_rgba(192,132,252,0.2)] hover:shadow-[0_12px_48px_rgba(82,3,113,0.35)] transition-all duration-500 rounded-xl border-0 py-6 text-base font-semibold"
                          size="lg"
                        >
                          {/* Spinner */}
                          {isLoading && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute inset-0 flex items-center justify-center z-20"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                            </motion.div>
                          )}

                          {/* Shine Sweep */}
                          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 z-10" />

                          <Send className={`w-5 h-5 ${isLoading ? "opacity-0" : "opacity-100"} ${isRTL ? "ml-2" : "mr-2"} relative z-10 transition-opacity`} />
                          <span className={`${isLoading ? "opacity-0" : "opacity-100"} relative z-10 transition-opacity`}>
                            {t.contact.form.submit}
                          </span>
                        </Button>
                      </motion.div>

                      {/* Note */}
                      <div className="flex items-center justify-center gap-2 pt-1">
                        <div className="inline-flex p-1 rounded-md bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-light-accent)]">
                          <Zap className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-xs text-[var(--brand-light-text)]/50 dark:text-[var(--brand-dark-text)]/50 font-medium">
                          {isRTL ? "نرد عليك في أقل من 24 ساعة" : "Réponse garantie sous 24h"}
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* ══════════════ BOTTOM FADE ══════════════ */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] to-transparent z-[5] pointer-events-none" />
    </section>
  )
}