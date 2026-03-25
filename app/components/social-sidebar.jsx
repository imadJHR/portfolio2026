"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Github, Instagram, Linkedin, Twitter, Mail, MessageCircle, Sparkles } from "lucide-react"
import { useState } from "react"

export function SocialSidebar({ isRTL = false }) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState(null)

  const cssVariables = {
    "--brand-primary": "#520371",
    "--brand-secondary": "#7c3aed",
    "--brand-light-bg": "#fdfaff",
    "--brand-dark-bg": "#0f0a1a",
    "--brand-light-accent": "#9333ea",
    "--brand-dark-accent": "#c084fc",
    "--brand-light-text": "#1a0525",
    "--brand-dark-text": "#f5f0ff",
  }

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/imadJHR",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/nemsi-media/?trk=similar-pages",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/nemsimedia/",
      gradient: "from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)]",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:imadjohar4@gmail.com",
      gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/212645288216",
      gradient: "from-emerald-500 to-green-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, x: isRTL ? 40 : -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0, x: isRTL ? 15 : -15 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.4, ease: "backOut" },
    },
  }

  return (
    <>
      {/* ══════════════ MOBILE BOTTOM BAR ══════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
      >
        <div
          style={cssVariables}
          className="flex items-center gap-1.5 bg-white/80 dark:bg-[#0f0a1a]/80 backdrop-blur-2xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 rounded-2xl px-3 py-2.5 shadow-[0_8px_32px_rgba(82,3,113,0.12)] dark:shadow-[0_8px_32px_rgba(192,132,252,0.08)]"
        >
          {socials.slice(0, 4).map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="relative group p-1.5"
              aria-label={social.name}
            >
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-400`}
              />

              {/* Button */}
              <div className="relative w-10 h-10 rounded-xl bg-white/70 dark:bg-white/[0.06] backdrop-blur-sm border border-[var(--brand-primary)]/8 dark:border-[var(--brand-dark-accent)]/8 flex items-center justify-center overflow-hidden transition-all duration-400 group-hover:border-transparent group-hover:shadow-lg">
                {/* Gradient Fill */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                />
                {/* Shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                {/* Icon */}
                <social.icon className="w-4 h-4 text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 group-hover:text-white transition-all duration-300 relative z-10" />
              </div>
            </motion.a>
          ))}

          {/* WhatsApp special */}
          <motion.a
            href={socials[4].url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="relative group p-1.5"
            aria-label="WhatsApp"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center overflow-hidden shadow-[0_4px_12px_rgba(16,185,129,0.3)]">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <MessageCircle className="w-4 h-4 text-white relative z-10" />
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* ══════════════ DESKTOP SIDEBAR ══════════════ */}
      <motion.div
        style={cssVariables}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`fixed top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3 ${
          isRTL ? "right-5" : "left-5"
        }`}
      >
        {/* ── Top Decorator ── */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0.25 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0, scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 3, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
          </motion.div>
          <motion.div
            animate={{ scaleY: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-[2px] h-6 bg-gradient-to-b from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] rounded-full origin-top"
          />
        </motion.div>

        {/* ── Social Buttons ── */}
        <div className="flex flex-col gap-2.5">
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
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="group relative block"
                aria-label={social.name}
              >
                {/* Outer Glow */}
                <motion.div
                  className={`absolute inset-[-4px] rounded-2xl bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
                />

                {/* Button Container */}
                <div className="relative w-11 h-11 rounded-xl bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 shadow-[0_2px_8px_rgba(82,3,113,0.04)] dark:shadow-[0_2px_8px_rgba(192,132,252,0.03)] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_8px_24px_rgba(82,3,113,0.15)] dark:group-hover:shadow-[0_8px_24px_rgba(192,132,252,0.12)]">
                  {/* Gradient Fill */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                  />

                  {/* Shine Sweep */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                  {/* Icon */}
                  <social.icon className="w-[18px] h-[18px] text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 group-hover:text-white transition-all duration-300 relative z-10 group-hover:scale-110" />
                </div>
              </motion.a>

              {/* ── Tooltip ── */}
              <AnimatePresence>
                {activeTooltip === social.name && (
                  <motion.div
                    initial={{ opacity: 0, x: isRTL ? 12 : -12, scale: 0.85 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: isRTL ? 12 : -12, scale: 0.85 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute top-1/2 -translate-y-1/2 z-50 ${
                      isRTL ? "right-full mr-3.5" : "left-full ml-3.5"
                    }`}
                  >
                    <div className="relative">
                      <div className="bg-white/90 dark:bg-[#110d1d]/90 backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 rounded-xl shadow-[0_8px_24px_rgba(82,3,113,0.1)] dark:shadow-[0_8px_24px_rgba(192,132,252,0.08)] px-3.5 py-2">
                        <span className="text-xs font-semibold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] whitespace-nowrap">
                          {social.name}
                        </span>
                      </div>
                      {/* Arrow */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white/90 dark:bg-[#110d1d]/90 border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 rotate-45 ${
                          isRTL
                            ? "-left-1 border-b border-l"
                            : "-right-1 border-t border-r"
                        }`}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Decorator ── */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0.25 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ scaleY: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-[2px] h-6 bg-gradient-to-b from-[var(--brand-secondary)] via-[var(--brand-light-accent)] to-[var(--brand-primary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] rounded-full origin-top"
          />
          <motion.div
            animate={{ rotate: isHovered ? -360 : 0, scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 3, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
          </motion.div>
        </motion.div>

        {/* Vertical Connection Line */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--brand-primary)]/15 dark:via-[var(--brand-dark-accent)]/15 to-transparent -z-10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </>
  )
}