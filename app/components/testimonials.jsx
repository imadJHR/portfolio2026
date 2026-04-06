"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Quote,
  Star,
  Sparkles,
  Heart,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  Zap,
} from "lucide-react"

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

  const whatsappInfo = {
    phone: "212645288216",
    messages: {
      fr: "Bonjour, j’ai consulté vos témoignages et je souhaite discuter de mon projet avec vous.",
      ar: "مرحبا، اطلعت على آراء العملاء وأود مناقشة مشروعي معكم.",
    },
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      whatsappInfo.messages[lang] || whatsappInfo.messages.fr
    )
    window.open(`https://wa.me/${whatsappInfo.phone}?text=${message}`, "_blank")
  }

  const particles = [
    { left: "10%", top: "18%" },
    { left: "22%", top: "70%" },
    { left: "35%", top: "28%" },
    { left: "48%", top: "82%" },
    { left: "62%", top: "22%" },
    { left: "76%", top: "64%" },
    { left: "88%", top: "30%" },
    { left: "92%", top: "76%" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  }

  const RatingStars = ({ rating = 5 }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-amber-400 fill-amber-400"
                : "text-[var(--brand-light-text)]/15 dark:text-[var(--brand-dark-text)]/15"
            }`}
          />
        ))}
      </div>
    )
  }

  const testimonials = t?.testimonials?.items || []

  return (
    <section
      id="testimonials"
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
            y: [0, -22, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)`,
          }}
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
          style={{
            background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)`,
          }}
        />

        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: particle.left, top: particle.top }}
            animate={{
              y: [0, -30, 0],
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
              <Heart className="w-4 h-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent uppercase tracking-wider">
                {isRTL ? "آراء العملاء" : "Avis Clients"}
              </span>
              <Sparkles className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            <span className="block text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
              {isRTL ? "ثقة العملاء" : "La confiance de nos clients"}
            </span>
            <span className="block mt-2 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent">
              {t?.testimonials?.title || (isRTL ? "هي أفضل دليل على جودة العمل" : "est notre meilleure preuve")}
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 max-w-3xl mx-auto leading-relaxed font-light">
            {t?.testimonials?.subtitle ||
              (isRTL
                ? "هذه بعض الآراء من عملاء اشتغلنا معهم في مشاريع رقمية مختلفة."
                : "Voici quelques retours de clients que nous avons accompagnés sur différents projets digitaux.")}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.015 }}
              className="h-full"
            >
              <Card className="h-full relative overflow-hidden border border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_2px_20px_rgba(82,3,113,0.04)] hover:shadow-[0_12px_40px_rgba(82,3,113,0.10)] transition-all duration-500 rounded-2xl group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] opacity-80" />

                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/[0.02] to-[var(--brand-light-accent)]/[0.02] dark:from-[var(--brand-dark-accent)]/[0.03] dark:to-[var(--brand-secondary)]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <CardContent className="p-5 sm:p-6 relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-light-accent)] mb-5 shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>

                  <RatingStars rating={testimonial.rating || 5} />

                  <p className="text-[var(--brand-light-text)]/68 dark:text-[var(--brand-dark-text)]/68 mb-6 leading-relaxed font-light text-sm sm:text-base italic">
                    “{testimonial.text}”
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] rounded-full flex items-center justify-center text-white font-bold shadow-lg shrink-0">
                      {testimonial.name?.charAt(0) || "C"}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-sm sm:text-base truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 text-xs sm:text-sm truncate">
                        {testimonial.role}
                      </p>
                    </div>

                    <div className="text-emerald-500" title={isRTL ? "عميل موثوق" : "Client vérifié"}>
                      <ThumbsUp className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust / reassurance stats */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 sm:mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                number: `${testimonials.length}+`,
                label: isRTL ? "توصيات عملاء" : "Retours clients",
              },
              {
                icon: Star,
                number: "4.9/5",
                label: isRTL ? "تقييم عام" : "Note moyenne",
              },
              {
                icon: Shield,
                number: isRTL ? "ثقة" : "Confiance",
                label: isRTL ? "تواصل واضح ومهني" : "Communication claire",
              },
              {
                icon: Zap,
                number: isRTL ? "سرعة" : "Rapidité",
                label: isRTL ? "استجابة ومتابعة" : "Réponse & suivi",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative text-center p-5 sm:p-6 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 rounded-2xl shadow-[0_2px_16px_rgba(82,3,113,0.04)] hover:shadow-[0_8px_32px_rgba(82,3,113,0.08)] transition-all duration-500 overflow-hidden"
              >
                <div className="inline-flex p-2 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-light-accent)] mb-3">
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent mb-1.5">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lead generation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 sm:mt-24 lg:mt-28"
        >
          <div className="max-w-5xl mx-auto rounded-3xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(82,3,113,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                  {isRTL
                    ? "هل تريد نفس التجربة مع مشروعك؟"
                    : "Vous voulez la même qualité pour votre projet ?"}
                </h3>

                <p className="mt-3 text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 max-w-2xl leading-relaxed">
                  {isRTL
                    ? "إذا كنت تبحث عن موقع احترافي، تجربة سلسة، وتواصل واضح من البداية حتى التسليم، يمكننا مساعدتك."
                    : "Si vous cherchez un site professionnel, une expérience fluide et un accompagnement sérieux du début à la livraison, nous pouvons vous aider."}
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    isRTL ? "موقع واضح واحترافي" : "Site clair & professionnel",
                    isRTL ? "تصميم متجاوب مع الهاتف" : "Responsive mobile",
                    isRTL ? "تركيز على النتيجة" : "Pensé pour la conversion",
                    isRTL ? "تواصل سريع ومتابعة" : "Réponse rapide & suivi",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-2xl px-4 py-3 bg-[var(--brand-primary)]/[0.04] dark:bg-[var(--brand-dark-accent)]/[0.06] border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-sm text-[var(--brand-light-text)]/75 dark:text-[var(--brand-dark-text)]/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  className="h-12 rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white border-0"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className={isRTL ? "mr-2.5" : "ml-2.5"}>
                    {isRTL ? "اطلب استشارة مجانية" : "Demander un audit gratuit"}
                  </span>
                </Button>

                <a
                  href={`/${lang}#contact`}
                  className="inline-flex h-12 items-center justify-center rounded-2xl border-2 border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 px-6 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] font-semibold hover:bg-[var(--brand-primary)]/[0.06] dark:hover:bg-[var(--brand-dark-accent)]/[0.06] transition-all"
                >
                  {isRTL ? "تحدث معنا عن مشروعك" : "Parler de votre projet"}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] to-transparent z-[5] pointer-events-none" />
    </section>
  )
}