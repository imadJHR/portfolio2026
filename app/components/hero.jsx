"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Sparkles, Star, Zap, Globe } from "lucide-react"

export function Hero({ lang, t }) {
  const isRTL = lang === "ar"

  // Floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }
    }
  }

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-cyan-600/20 dark:from-purple-900/30 dark:via-blue-900/20 dark:to-cyan-900/30" />
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Triangles */}
        <motion.div
          className="absolute top-20 left-10 w-8 h-8 border-l-2 border-t-2 border-purple-400/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-12 h-12 border-r-2 border-b-2 border-cyan-400/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Enhanced Animated Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-cyan-500/40 via-purple-500/40 to-blue-500/40 dark:from-cyan-400/30 dark:via-purple-400/30 dark:to-blue-400/30 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-orange-500/30 via-pink-500/30 to-rose-500/30 dark:from-orange-400/20 dark:via-pink-400/20 dark:to-rose-400/20 rounded-full blur-3xl"
        />

        {/* Additional Small Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-3/4 left-1/3 w-40 h-40 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl lg:max-w-6xl mx-auto text-center">
          {/* Badge with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 bg-background/60 backdrop-blur-md border border-border/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 lg:mb-12 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 dark:text-cyan-400" />
            </motion.div>
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {isRTL ? "تصميم مواقع احترافية" : "Design Web Professionnel"}
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 dark:text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight font-serif text-balance">
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block text-foreground"
              >
                {t.hero.title}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block mt-2 sm:mt-4 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 dark:from-purple-400 dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent bg-size-200 animate-gradient"
              >
                {isRTL ? "للأعمال المغربية" : "Pour Entreprises Marocaines"}
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 lg:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 dark:from-purple-500 dark:to-cyan-500 dark:hover:from-purple-600 dark:hover:to-cyan-600 text-white text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl shadow-2xl shadow-purple-500/30 dark:shadow-purple-400/20 transition-all duration-300 overflow-hidden"
              >
                <a href="https://wa.me/212645288216" target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <MessageCircle className={`w-5 h-5 ${isRTL ? "ml-2 sm:ml-3" : "mr-2 sm:mr-3"}`} />
                  {t.hero.cta1}
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-border/80 text-foreground hover:bg-muted/50 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 bg-background/40 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-foreground/60"
              >
                <a href={`/${lang}#portfolio`}>
                  {t.hero.cta2}
                  <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "mr-2 sm:mr-3 group-hover:-translate-x-1" : "ml-2 sm:ml-3"}`} />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: Star, text: isRTL ? "50+ مشروع منجز" : "50+ Projets Réalisés" },
              { icon: Globe, text: isRTL ? "عملاء راضون 100%" : "100% Clients Satisfaits" },
              { icon: Zap, text: isRTL ? "دعم 24/7" : "Support 24/7" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 bg-background/40 backdrop-blur-sm border border-border/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <motion.div
                  {...pulseAnimation}
                  className="p-2 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 dark:text-cyan-400" />
                </motion.div>
                <span className="text-sm sm:text-base font-medium text-foreground/90 text-center">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-border rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-foreground/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Add this to your global CSS for the gradient animation
const globalStyles = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 6s ease infinite;
  }
  
  .bg-size-200 {
    background-size: 200% 200%;
  }
`