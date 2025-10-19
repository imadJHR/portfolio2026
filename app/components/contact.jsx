"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send, Mail, Phone, MapPin, Sparkles, CheckCircle, Zap, Rocket } from "lucide-react"

export function Contact({ lang, t }) {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
      consultation: {
        fr: "Bonjour ! Je suis intéressé(e) par une consultation gratuite pour mes projets digitaux. Pouvez-vous me donner plus d'informations ?",
        ar: "مرحبا! أنا مهتم باستشارة مجانية لمشاريعي الرقمية. هل يمكنكم إعطائي المزيد من المعلومات؟"
      },
      general: {
        fr: "Bonjour ! J'aimerais avoir plus d'informations sur vos services. Pouvez-vous me recontacter ?",
        ar: "مرحبا! أود الحصول على مزيد من المعلومات حول خدماتكم. هل يمكنكم الاتصال بي؟"
      }
    }
  }

  // Function to handle WhatsApp redirection
  const handleWhatsAppClick = (messageType = "general") => {
    const message = encodeURIComponent(whatsappInfo.messages[messageType][lang])
    const whatsappUrl = `https://wa.me/${whatsappInfo.phone}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitted(true)
    setIsLoading(false)
    setTimeout(() => setSubmitted(false), 5000)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

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

  const contactMethods = [
    {
      icon: Phone,
      label: isRTL ? "الهاتف" : "Téléphone",
      value: "+212 645-288-216",
      href: "tel:+212645288216"
    },
    {
      icon: Mail,
      label: isRTL ? "البريد الإلكتروني" : "Email",
      value: "imadjohar4@gmail.com",
      href: "mailto:imadjohar4@gmail.com"
    },
    {
      icon: MapPin,
      label: isRTL ? "العنوان" : "Adresse",
      value: isRTL ? "الدار البيضاء، المغرب" : "Casablanca, Maroc"
    }
  ]

  return (
    <section 
      id="contact" 
      style={cssVariables}
      className={`relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-[var(--brand-light-bg)] to-[var(--brand-light-accent)]/5 dark:from-[var(--brand-primary)]/10 dark:via-[var(--brand-dark-bg)] dark:to-[var(--brand-dark-accent)]/10" />
      
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
          className="absolute top-1/3 right-5 sm:right-10 w-16 h-16 sm:w-28 sm:h-28 bg-gradient-to-br from-[var(--brand-light-accent)]/10 to-[var(--brand-primary)]/10 dark:to-[var(--brand-dark-accent)]/10 rounded-full blur-2xl"
        />
        <motion.div
          {...floatingAnimation}
          transition={{ delay: 1, duration: 7 }}
          className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-light-accent)]/10 dark:to-[var(--brand-dark-accent)]/10 rounded-full blur-2xl"
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
        {/* Header Section */}
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
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
            </motion.div>
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent uppercase tracking-wider">
              {isRTL ? "اتصل بنا" : "Contact"}
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-primary)] dark:text-[var(--brand-primary)]" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-4 sm:mb-6 font-serif text-balance"
          >
            {t.contact.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-6 sm:mb-8"
            >
              {isRTL ? "معلومات التواصل" : "Informations de Contact"}
            </motion.h3>

            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: isRTL ? -5 : 5 }}
                  className="group"
                >
                  <Card className="bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 backdrop-blur-sm border-[var(--brand-primary)]/20 hover:border-[var(--brand-primary)]/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-light-accent)]/20 dark:to-[var(--brand-dark-accent)]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-primary)] dark:text-[var(--brand-primary)]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80">{method.label}</p>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-base sm:text-lg font-semibold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:text-[var(--brand-primary)] transition-colors block truncate"
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
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Consultation Gratuite Button */}
              <Button
                className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 text-white shadow-lg shadow-[var(--brand-primary)]/30 transition-all duration-300 group relative overflow-hidden"
                size="lg"
                onClick={() => handleWhatsAppClick("consultation")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Rocket className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"} transition-transform group-hover:scale-110`} />
                {isRTL ? "استشارة مجانية" : "Consultation Gratuite"}
              </Button>

              {/* WhatsApp Button */}
              <Button
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30 transition-all duration-300 group relative overflow-hidden"
                size="lg"
                onClick={() => handleWhatsAppClick("general")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"} transition-transform group-hover:scale-110`} />
                {t.contact.whatsapp}
              </Button>
            </motion.div>

            {/* Additional Contact Options */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4">
              <Button
                asChild
                variant="outline"
                className="border-[var(--brand-primary)]/20 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/10 hover:border-[var(--brand-primary)]/50 bg-[var(--brand-light-bg)]/30 dark:bg-[var(--brand-dark-bg)]/30 backdrop-blur-sm transition-all duration-300 group"
                size="lg"
              >
                <a href="mailto:contact@example.com">
                  <Mail className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"} transition-transform group-hover:scale-110`} />
                  {isRTL ? "إرسال بريد إلكتروني" : "Envoyer un Email"}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Card className="border-[var(--brand-primary)]/20 bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute inset-[2px] bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)] rounded-lg z-0" />

              <CardContent className="p-6 sm:p-8 relative z-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      className="text-center py-8 sm:py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl sm:text-3xl font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-3"
                      >
                        {isRTL ? "تم الإرسال بنجاح!" : "Message envoyé !"}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 mb-6 leading-relaxed"
                      >
                        {t.contact.form.success}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-3 justify-center"
                      >
                        <Button
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          className="border-[var(--brand-primary)]/20 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/10 hover:border-[var(--brand-primary)]/50"
                        >
                          {isRTL ? "إرسال رسالة أخرى" : "Envoyer un autre message"}
                        </Button>
                        <Button
                          onClick={() => handleWhatsAppClick("general")}
                          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                        >
                          <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                          {isRTL ? "محادثة فورية" : "Chat Instantané"}
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-6"
                    >
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-2">
                            {t.contact.form.name}
                          </label>
                          <Input 
                            required 
                            className="bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 border-[var(--brand-primary)]/20 focus:border-[var(--brand-primary)] transition-colors duration-300 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]"
                            placeholder={t.contact.form.name}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-2">
                            {t.contact.form.email}
                          </label>
                          <Input
                            type="email"
                            required
                            className="bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 border-[var(--brand-primary)]/20 focus:border-[var(--brand-primary)] transition-colors duration-300 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]"
                            placeholder={t.contact.form.email}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] mb-2">
                            {t.contact.form.message}
                          </label>
                          <Textarea
                            required
                            rows={6}
                            className="bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 border-[var(--brand-primary)]/20 focus:border-[var(--brand-primary)] transition-colors duration-300 resize-none text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]"
                            placeholder={t.contact.form.message}
                          />
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 text-white shadow-lg shadow-[var(--brand-primary)]/30 hover:shadow-[var(--brand-primary)]/50 transition-all duration-300 group relative overflow-hidden py-6 text-base"
                          size="lg"
                        >
                          {/* Loading animation */}
                          {isLoading && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                            </motion.div>
                          )}

                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                          
                          <Send className={`w-5 h-5 ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity ${isRTL ? "ml-2" : "mr-2"} transition-transform group-hover:scale-110`} />
                          <span className={isLoading ? "opacity-0" : "opacity-100 transition-opacity"}>
                            {t.contact.form.submit}
                          </span>
                        </Button>
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-xs text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 mt-4"
                      >
                        {isRTL ? "⚡ سنرد عليك في غضون 24 ساعة" : "⚡ Nous vous répondons sous 24h"}
                      </motion.p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[var(--brand-light-bg)]/80 dark:to-[var(--brand-dark-bg)]/80" />
    </section>
  )
}