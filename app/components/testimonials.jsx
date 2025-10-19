"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Sparkles, Heart, ThumbsUp } from "lucide-react"

export function Testimonials({ lang, t }) {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  // Rating stars component
  const RatingStars = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Star
              className={`w-4 h-4 ${
                i < rating 
                  ? "text-yellow-500 fill-yellow-500" 
                  : "text-gray-300 dark:text-gray-600"
              }`}
            />
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section 
      id="testimonials" 
      style={cssVariables}
      className={`relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-[var(--brand-light-bg)] to-[var(--brand-light-accent)]/5 dark:from-[var(--brand-primary)]/10 dark:via-[var(--brand-dark-bg)] dark:to-[var(--brand-dark-accent)]/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes */}
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
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
            </motion.div>
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent uppercase tracking-wider">
              {isRTL ? "آراء العملاء" : "Témoignages"}
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
            {t.testimonials.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="h-full"
            >
              <Card className="h-full bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 backdrop-blur-sm border-[var(--brand-primary)]/20 shadow-lg hover:shadow-2xl hover:border-[var(--brand-primary)]/50 transition-all duration-500 group relative overflow-hidden">
                
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-light-accent)]/5 dark:to-[var(--brand-dark-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="absolute inset-[2px] bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)] rounded-lg z-0" />

                <CardContent className="p-4 sm:p-6 relative z-10">
                  {/* Quote Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-light-accent)]/20 dark:from-[var(--brand-primary)]/15 dark:to-[var(--brand-dark-accent)]/15 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[var(--brand-primary)]/20 transition-all duration-300"
                  >
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-primary)] dark:text-[var(--brand-primary)] group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>

                  {/* Rating Stars */}
                  <RatingStars rating={testimonial.rating || 5} />

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 mb-4 sm:mb-6 leading-relaxed font-light text-sm sm:text-base italic relative"
                  >
                    <span className="absolute -top-2 -left-2 text-2xl text-[var(--brand-primary)]/20">"</span>
                    {testimonial.text}
                    <span className="absolute -bottom-2 -right-2 text-2xl text-[var(--brand-light-accent)]/20 dark:text-[var(--brand-dark-accent)]/20">"</span>
                  </motion.p>

                  {/* Client Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 pt-4 border-t border-[var(--brand-primary)]/20"
                  >
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-sm sm:text-base truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 text-xs sm:text-sm truncate">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Verified Badge */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-green-500"
                      title={isRTL ? "عميل موثوق" : "Client vérifié"}
                    >
                      <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </motion.div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--brand-primary)]/20 dark:text-[var(--brand-primary)]/20" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: isRTL ? "عميل راض" : "Clients Satisfaits" },
              { number: "4.9/5", label: isRTL ? "تقييم متوسط" : "Note Moyenne" },
              { number: "100%", label: isRTL ? "مشروع مكتمل" : "Projets Terminés" },
              { number: "24/7", label: isRTL ? "دعم فني" : "Support Technique" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-4 bg-[var(--brand-light-bg)]/40 dark:bg-[var(--brand-dark-bg)]/40 backdrop-blur-sm border border-[var(--brand-primary)]/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <motion.p
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-xs sm:text-sm text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[var(--brand-light-bg)]/80 dark:to-[var(--brand-dark-bg)]/80" />
    </section>
  )
}