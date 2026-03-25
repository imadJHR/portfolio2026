"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Sparkles, Heart, ThumbsUp } from "lucide-react"

export function Testimonials({ lang, t }) {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
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

  const RatingStars = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4 drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]">
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
                  ? "text-amber-400 fill-amber-400" 
                  : "text-[var(--brand-light-text)]/15 dark:text-[var(--brand-dark-text)]/15"
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
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08], x: [0, 40, 0], y: [0, -25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.14, 0.06], x: [0, -30, 0], y: [0, 35, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)` }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -(Math.random() * 60 + 20), 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, Math.random() * 360, 0],
              opacity: [0, 0.3, 0],
              scale: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 14 + 10,
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
      </div>

      {/* ══════════════ CONTENT ══════════════ */}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header Section ── */}
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
                <Heart className="w-4 h-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent uppercase tracking-wider">
                {isRTL ? "آراء العملاء" : "Nos Clients Parlent"}
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
              {isRTL ? "هم يثقون بنا" : "Ils Nous Font Confiance"}
            </span>
            <motion.span
              className="block mt-2 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% auto" }}
            >
              {t.testimonials.title}
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
            {t.testimonials.subtitle}
          </motion.p>
        </motion.div>

        {/* ── Testimonials Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
        >
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.35, ease: "easeOut" }
              }}
              className="h-full"
            >
              <Card className="h-full relative overflow-hidden border-0 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_2px_20px_rgba(82,3,113,0.04)] hover:shadow-[0_12px_40px_rgba(82,3,113,0.12)] dark:shadow-[0_2px_20px_rgba(192,132,252,0.03)] dark:hover:shadow-[0_12px_40px_rgba(192,132,252,0.1)] transition-all duration-500 rounded-2xl group">
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/[0.02] to-[var(--brand-light-accent)]/[0.02] dark:from-[var(--brand-dark-accent)]/[0.03] dark:to-[var(--brand-secondary)]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <CardContent className="p-5 sm:p-6 relative z-10">
                  {/* Quote Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-light-accent)] mb-5 shadow-lg"
                  >
                    <Quote className="w-5 h-5 text-white" />
                  </motion.div>

                  {/* Rating Stars */}
                  <RatingStars rating={testimonial.rating || 5} />

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 mb-6 leading-relaxed font-light text-sm sm:text-base italic"
                  >
                    « {testimonial.text} »
                  </motion.p>

                  {/* Client Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 pt-4 border-t border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10"
                  >
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-sm sm:text-base truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 text-xs sm:text-sm truncate">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Verified Badge */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-emerald-500"
                      title={isRTL ? "عميل موثوق" : "Client vérifié"}
                    >
                      <ThumbsUp className="w-5 h-5" />
                    </motion.div>
                  </motion.div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-8 h-8 text-[var(--brand-primary)]/10 dark:text-[var(--brand-dark-accent)]/10" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Stats Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 sm:mt-24 lg:mt-28"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {[
              { number: "50+", label: isRTL ? "عملاء راضون" : "Clients Satisfaits", gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]" },
              { number: "4.9/5", label: isRTL ? "تقييم متوسط" : "Note Moyenne", gradient: "from-[var(--brand-light-accent)] to-[var(--brand-secondary)]" },
              { number: "100%", label: isRTL ? "مشاريع منجزة" : "Projets Livrés", gradient: "from-[var(--brand-secondary)] to-[var(--brand-primary)]" },
              { number: "24/7", label: isRTL ? "دعم مستمر" : "Support Continu", gradient: "from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)]" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative text-center p-5 sm:p-6 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 rounded-2xl shadow-[0_2px_16px_rgba(82,3,113,0.04)] hover:shadow-[0_8px_32px_rgba(82,3,113,0.1)] dark:hover:shadow-[0_8px_32px_rgba(192,132,252,0.1)] transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500 rounded-2xl`} />

                <motion.p
                  className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent mb-1.5"
                  whileHover={{ scale: 1.08 }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-xs sm:text-sm text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ══════════════ BOTTOM FADE ══════════════ */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] to-transparent z-[5] pointer-events-none" />
    </section>
  )
}