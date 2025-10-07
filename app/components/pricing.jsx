"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Star, Zap, Crown, Sparkles, BadgeCheck } from "lucide-react"
import { useState } from "react"

export function Pricing({ lang, t }) {
  const isRTL = lang === "ar"
  const [billingPeriod, setBillingPeriod] = useState("monthly") // "monthly" or "yearly"

  // Animation variants
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

  // Calculate yearly prices with discount
  const getPrice = (plan) => {
    if (billingPeriod === "yearly") {
      const monthlyPrice = parseFloat(plan.price)
      const yearlyPrice = monthlyPrice * 12 * 0.8 // 20% discount
      return {
        price: Math.round(yearlyPrice),
        originalPrice: Math.round(monthlyPrice * 12),
        period: isRTL ? "سنوياً" : "/an"
      }
    }
    return {
      price: plan.price,
      originalPrice: null,
      period: isRTL ? "شهرياً" : "/mois"
    }
  }

  return (
    <section id="pricing" className={`relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}>
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
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 dark:text-cyan-400" />
            </motion.div>
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">
              {isRTL ? "الأسعار" : "Tarifs"}
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
            {t.pricing.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t.pricing.subtitle}
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <span className={`text-sm font-medium ${billingPeriod === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
              {isRTL ? "شهري" : "Mensuel"}
            </span>
            
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1 transition-all duration-300"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ x: billingPeriod === "monthly" ? 0 : 26 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${billingPeriod === "yearly" ? "text-foreground" : "text-muted-foreground"}`}>
                {isRTL ? "سنوي" : "Annuel"}
              </span>
              {billingPeriod === "yearly" && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold"
                >
                  {isRTL ? "٢٠٪ خصم" : "-20%"}
                </motion.span>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {t.pricing.plans.map((plan, index) => {
            const priceInfo = getPrice(plan)
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: plan.popular ? -12 : -8, 
                  scale: plan.popular ? 1.03 : 1.01,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="h-full"
              >
                <Card className={`relative h-full overflow-hidden backdrop-blur-sm border-2 transition-all duration-500 ${
                  plan.popular
                    ? "border-transparent bg-gradient-to-br from-purple-500/10 via-card/80 to-cyan-500/10 shadow-2xl shadow-purple-500/20"
                    : "border-border/60 bg-card/50 shadow-lg hover:shadow-xl"
                }`}>
                  
                  {/* Popular Badge */}
                  {plan.popular && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 text-white text-xs font-bold px-4 sm:px-6 py-2 rounded-bl-2xl flex items-center gap-2 shadow-lg"
                    >
                      <Crown className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      <span>{isRTL ? "الأكثر طلباً" : "Plus Populaire"}</span>
                    </motion.div>
                  )}

                  {/* Recommended Badge for Basic Plan */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4 bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-medium px-3 py-1 rounded-full border border-green-500/30">
                      {isRTL ? "مبتدئ" : "Débutant"}
                    </div>
                  )}

                  {/* Pro Badge for Pro Plan */}
                  {index === 2 && (
                    <div className="absolute top-4 left-4 bg-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
                      {isRTL ? "محترف" : "Professionnel"}
                    </div>
                  )}

                  <CardHeader className="pb-6 sm:pb-8 pt-8 sm:pt-12 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                      {plan.name}
                      {plan.popular && (
                        <BadgeCheck className="w-5 h-5 text-cyan-500" />
                      )}
                    </CardTitle>
                    
                    <div className="mt-4 sm:mt-6">
                      <div className="flex items-baseline gap-2">
                        <CardDescription className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                          {priceInfo.price}
                          <span className="text-lg sm:text-xl font-normal text-muted-foreground">
                            {plan.currency}{priceInfo.period}
                          </span>
                        </CardDescription>
                      </div>
                      
                      {priceInfo.originalPrice && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-muted-foreground line-through mt-1"
                        >
                          {priceInfo.originalPrice} {plan.currency}
                          {isRTL ? " بدلاً من " : " au lieu de "}
                          {Math.round(priceInfo.originalPrice / 12)} {plan.currency}
                          {isRTL ? " شهرياً" : "/mois"}
                        </motion.p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                            <Check className="w-3 h-3 text-green-500" />
                          </div>
                          <span className="text-foreground/80 leading-relaxed text-sm sm:text-base font-light">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        className={`w-full py-4 sm:py-6 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50"
                            : "bg-foreground hover:bg-foreground/90 text-background shadow-lg hover:shadow-xl"
                        }`}
                      >
                        <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer">
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                          
                          <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"} transition-transform group-hover:scale-110`} />
                          {t.pricing.cta}
                        </a>
                      </Button>
                    </motion.div>

                    {/* Additional Info */}
                    {plan.popular && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center text-xs text-muted-foreground mt-3"
                      >
                        {isRTL ? "⭐ الأكثر اختياراً من قبل العملاء" : "⭐ Choix préféré des clients"}
                      </motion.p>
                    )}
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            {isRTL ? "🔒 جميع الأسعار تشمل الضريبة والضمان" : "🔒 Tous les prix incluent taxes et garantie"}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{isRTL ? "استشارة مجانية" : "Consultation Gratuite"}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-background/80" />
    </section>
  )
}