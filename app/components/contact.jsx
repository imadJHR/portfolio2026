"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send, Mail, Phone, MapPin, Sparkles, CheckCircle, Zap } from "lucide-react"

export function Contact({ lang, t }) {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const isRTL = lang === "ar"

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
      value: "+212 600-000-000",
      href: "tel:+212600000000"
    },
    {
      icon: Mail,
      label: isRTL ? "البريد الإلكتروني" : "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com"
    },
    {
      icon: MapPin,
      label: isRTL ? "العنوان" : "Adresse",
      value: isRTL ? "الدار البيضاء، المغرب" : "Casablanca, Maroc"
    }
  ]

  return (
    <section id="contact" className={`relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-background to-cyan-500/5 dark:from-purple-500/10 dark:via-background dark:to-cyan-500/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          {...floatingAnimation}
          className="absolute top-10 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        />
        <motion.div
          {...floatingAnimation}
          transition={{ delay: 2, duration: 8 }}
          className="absolute top-1/3 right-5 sm:right-10 w-16 h-16 sm:w-28 sm:h-28 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
        />
        <motion.div
          {...floatingAnimation}
          transition={{ delay: 1, duration: 7 }}
          className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-2xl"
        />

        {/* Geometric Patterns */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-40 h-40 border-2 border-purple-500/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-32 h-32 border-2 border-cyan-500/5 rounded-full"
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
            className="inline-flex items-center gap-2 bg-background/60 backdrop-blur-md border border-border/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 dark:text-cyan-400" />
            </motion.div>
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">
              {isRTL ? "اتصل بنا" : "Contact"}
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 dark:text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 font-serif text-balance"
          >
            {t.contact.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light"
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
              className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8"
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
                  <Card className="bg-card/50 backdrop-blur-sm border-border/60 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-muted-foreground">{method.label}</p>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-base sm:text-lg font-semibold text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors block truncate"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-base sm:text-lg font-semibold text-foreground truncate">
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
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30 transition-all duration-300 group"
                size="lg"
              >
                <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"} transition-transform group-hover:scale-110`} />
                  {t.contact.whatsapp}
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-muted/50 hover:border-purple-500/50 bg-card/30 backdrop-blur-sm transition-all duration-300 group"
                size="lg"
              >
                <a href="mailto:contact@example.com">
                  <Mail className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"} transition-transform group-hover:scale-110`} />
                  {isRTL ? "إرسال بريد" : "Envoyer Email"}
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
            <Card className="border-border/60 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute inset-[2px] bg-card rounded-lg z-0" />

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
                        className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
                      >
                        {isRTL ? "تم الإرسال بنجاح!" : "Message envoyé !"}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-muted-foreground mb-6 leading-relaxed"
                      >
                        {t.contact.form.success}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Button
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          className="border-border text-foreground hover:bg-muted/50 hover:border-purple-500/50"
                        >
                          {isRTL ? "إرسال رسالة أخرى" : "Envoyer un autre message"}
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
                          <label className="block text-sm font-medium text-foreground mb-2">
                            {t.contact.form.name}
                          </label>
                          <Input 
                            required 
                            className="bg-background/50 border-border/60 focus:border-purple-500 transition-colors duration-300"
                            placeholder={t.contact.form.name}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            {t.contact.form.email}
                          </label>
                          <Input
                            type="email"
                            required
                            className="bg-background/50 border-border/60 focus:border-purple-500 transition-colors duration-300"
                            placeholder={t.contact.form.email}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            {t.contact.form.message}
                          </label>
                          <Textarea
                            required
                            rows={6}
                            className="bg-background/50 border-border/60 focus:border-purple-500 transition-colors duration-300 resize-none"
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
                          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 group relative overflow-hidden py-6 text-base"
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
                        className="text-center text-xs text-muted-foreground mt-4"
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
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-background/80" />
    </section>
  )
}