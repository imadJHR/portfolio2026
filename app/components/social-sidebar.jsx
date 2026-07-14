"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"
import { openWhatsApp } from "../lib/leads"

export function SocialSidebar({ isRTL = false }) {
  const links = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/nemsi-media", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/nemsimedia/", label: "Instagram" },
    { icon: Mail, href: "mailto:contact@nemsimedia.ma", label: "Email" },
    { icon: MessageCircle, href: "https://wa.me/212645288216", label: "WhatsApp" },
  ]

  const handleClick = (event, link) => {
    if (link.label !== "WhatsApp") return
    event.preventDefault()
    openWhatsApp(
      isRTL ? "مرحبا، أود مناقشة مشروعي معكم." : "Bonjour, je souhaite discuter de mon projet avec vous.",
      "social_sidebar",
      { language: isRTL ? "ar" : "fr" },
    )
  }

  return (
    <div className={`fixed top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 xl:flex ${isRTL ? "left-6" : "right-6"}`}>
      <div className="w-px h-12 bg-gradient-to-b from-transparent via-[var(--border-strong)] to-transparent" />
      {links.map((link, i) => (
        <motion.a
          key={i}
          href={link.href}
          onClick={(event) => handleClick(event, link)}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className="group relative w-9 h-9 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-hover)] hover:border-[rgba(124,58,237,0.3)] transition-all duration-200"
          whileHover={{ scale: 1.1 }}
        >
          <link.icon className="w-3.5 h-3.5" />
          <span className="absolute right-full mr-3 px-2 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {link.label}
          </span>
        </motion.a>
      ))}
      <div className="w-px h-12 bg-gradient-to-b from-transparent via-[var(--border-strong)] to-transparent" />
    </div>
  )
}
