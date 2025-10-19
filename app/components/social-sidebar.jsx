"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Github, Instagram, Linkedin, Twitter, Mail, MessageCircle, Sparkles } from "lucide-react"
import { useState } from "react"

export function SocialSidebar({ isRTL = false }) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState(null)

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

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/imadJHR",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800",
      bgColor: "bg-gray-700",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/nemsi-media/?trk=similar-pages",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
      bgColor: "bg-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/nemsimedia/",
      color: "from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)]",
      hoverColor: "hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90",
      bgColor: "bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)]",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:imadjohar4@gmail.com",
      color: "from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)]",
      hoverColor: "hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90",
      bgColor: "bg-[var(--brand-primary)]",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/212645288216",
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-400 hover:to-emerald-500",
      bgColor: "bg-green-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, x: isRTL ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0, x: isRTL ? 20 : -20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  }

  const hoverVariants = {
    hover: {
      scale: 1.15,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1
      }
    }
  }

  return (
    <>
      {/* Mobile Social Bar - Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
      >
        <div
          style={cssVariables}
          className="flex items-center gap-2 bg-[var(--brand-light-bg)]/80 dark:bg-[var(--brand-dark-bg)]/80 backdrop-blur-md border border-[var(--brand-primary)]/20 rounded-2xl px-4 py-3 shadow-2xl shadow-black/20"
        >
          {socials.slice(0, 4).map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: index * 0.1 }}
              className="relative p-2 rounded-xl group"
              aria-label={social.name}
            >
              {/* Background glow */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`} />

              {/* Icon container */}
              <div className={`relative w-10 h-10 rounded-xl bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)] border border-[var(--brand-primary)]/20 flex items-center justify-center transition-all duration-300 group-hover:border-transparent group-hover:shadow-lg ${social.hoverColor}`}>
                <social.icon className="w-4 h-4 text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 group-hover:text-white transition-colors duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Desktop Social Sidebar */}
      <motion.div
        style={cssVariables}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`fixed top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 ${isRTL ? "right-6" : "left-6"}`}
      >
        {/* Decorative header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isHovered ? 1 : 0.3, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 2, ease: "linear" }}
            className="w-6 h-6"
          >
            <Sparkles className="w-6 h-6 text-[var(--brand-primary)]" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            className="w-0.5 h-8 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] rounded-full"
          />
        </motion.div>

        {/* Social buttons */}
        <div className="flex flex-col gap-3">
          {socials.map((social, index) => (
            <motion.div
              key={social.name}
              variants={itemVariants}
              custom={index}
              onHoverStart={() => setActiveTooltip(social.name)}
              onHoverEnd={() => setActiveTooltip(null)}
              className="relative"
            >
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={hoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative block"
                aria-label={social.name}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                />

                {/* Main button */}
                <div className={`relative w-12 h-12 rounded-xl bg-[var(--brand-light-bg)]/80 dark:bg-[var(--brand-dark-bg)]/80 backdrop-blur-md border border-[var(--brand-primary)]/20 shadow-lg flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl ${social.hoverColor}`}>

                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  {/* Gradient fill on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Icon */}
                  <social.icon className="w-5 h-5 text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 group-hover:text-white transition-all duration-300 relative z-10 group-hover:scale-110" />
                </div>

                {/* Pulse animation ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5
                  }}
                />
              </motion.a>

              {/* Enhanced Tooltip */}
              <AnimatePresence>
                {activeTooltip === social.name && (
                  <motion.div
                    initial={{ opacity: 0, x: isRTL ? 20 : -20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: isRTL ? 20 : -20, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right-full mr-4" : "left-full ml-4"
                      } z-50`}
                  >
                    <div className="relative">
                      {/* Tooltip content */}
                      <div className="bg-[var(--brand-light-bg)]/90 dark:bg-[var(--brand-dark-bg)]/90 backdrop-blur-md border border-[var(--brand-primary)]/20 rounded-xl shadow-2xl shadow-black/30 px-4 py-2.5">
                        <span className="text-sm font-semibold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] whitespace-nowrap">
                          {social.name}
                        </span>
                      </div>

                      {/* Tooltip arrow */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "left-full" : "right-full"
                          } w-2 h-2 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)] border-t border-r border-[var(--brand-primary)]/20 rotate-45`}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Connection line */}
              <motion.div
                className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right-full mr-2" : "left-full ml-2"
                  } w-2 h-0.5 bg-gradient-to-r ${isRTL
                    ? "from-transparent to-[var(--brand-primary)]/20"
                    : "from-[var(--brand-primary)]/20 to-transparent"
                  }`}
                initial={{ width: 0 }}
                animate={{ width: 8 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0.3, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            className="w-0.5 h-8 bg-gradient-to-b from-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] to-[var(--brand-primary)] rounded-full"
          />
          <motion.div
            animate={{ rotate: isHovered ? -360 : 0 }}
            transition={{ duration: 2, ease: "linear" }}
            className="w-6 h-6"
          >
            <Sparkles className="w-6 h-6 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
          </motion.div>
        </motion.div>

        {/* Vertical connection line */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-[var(--brand-primary)]/30 to-transparent -z-10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </>
  )
}