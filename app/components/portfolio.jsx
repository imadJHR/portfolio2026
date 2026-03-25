"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ExternalLink, Download, X, Eye, Filter, Sparkles, ArrowUpRight, Play,
  Calendar, Users, Target, TrendingUp, MessageCircle, BarChart, Instagram,
  Facebook, Zap, Globe, Palette, Code, ArrowRight, Shield, Star
} from "lucide-react"
import portfolioData from "../lib/portfolio-data.json"

export function Portfolio({ lang, t }) {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isFiltering, setIsFiltering] = useState(false)
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

  const filterButtons = [
    { key: "all", label: t.portfolio.filter.all, count: portfolioData.length, icon: Target },
    { key: "vitrine", label: t.portfolio.filter.vitrine, count: portfolioData.filter(p => p.category === "vitrine").length, icon: Eye },
    { key: "ecommerce", label: t.portfolio.filter.ecommerce, count: portfolioData.filter(p => p.category === "ecommerce").length, icon: Users },
  ]

  const filteredProjects = useMemo(() => {
    return filter === "all" ? portfolioData : portfolioData.filter((p) => p.category === filter)
  }, [filter])

  const handleFilterChange = (newFilter) => {
    setIsFiltering(true)
    setFilter(newFilter)
    setIsFilterOpen(false)
    setTimeout(() => setIsFiltering(false), 300)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const getPlatformIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case "instagram": return Instagram
      case "facebook": return Facebook
      case "tiktok": return MessageCircle
      default: return TrendingUp
    }
  }

  const renderMetrics = (project) => {
    if (!project.metrics) return null
    return (
      <div className="grid grid-cols-2 gap-2 mt-3">
        {Object.entries(project.metrics).map(([key, value]) => (
          <div key={key} className="text-center p-2 rounded-lg bg-[var(--brand-primary)]/[0.04] dark:bg-[var(--brand-dark-accent)]/[0.06] border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10">
            <div className="text-sm font-bold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent">{value}</div>
            <div className="text-xs text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 capitalize">{key}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section
      id="portfolio"
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
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08], x: [0, 35, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.14, 0.06], x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full"
          style={{ background: `radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)` }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -(Math.random() * 70 + 20), 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, Math.random() * 360, 0],
              opacity: [0, 0.3, 0],
              scale: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 12 + 10,
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

        {/* Floating Decorative Icons */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] left-[8%] hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.04] backdrop-blur-sm border border-[var(--brand-primary)]/10 shadow-lg">
            <Palette className="w-6 h-6 text-[var(--brand-primary)]/30 dark:text-[var(--brand-dark-accent)]/30" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -6, 6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[18%] right-[6%] hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.04] backdrop-blur-sm border border-[var(--brand-light-accent)]/10 shadow-lg">
            <Code className="w-6 h-6 text-[var(--brand-light-accent)]/30 dark:text-[var(--brand-dark-accent)]/30" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute top-[45%] right-[4%] hidden xl:block"
        >
          <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.04] backdrop-blur-sm border border-[var(--brand-secondary)]/10 shadow-lg">
            <Globe className="w-6 h-6 text-[var(--brand-secondary)]/30 dark:text-[var(--brand-dark-accent)]/30" />
          </div>
        </motion.div>
      </div>

      {/* ══════════════ CONTENT ══════════════ */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
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
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent uppercase tracking-wider">
                {isRTL ? "أعمالنا المنجزة" : "Nos Réalisations"}
              </span>
              <Eye className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
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
              {isRTL ? "مشاريع صنعت" : "Des Projets Qui"}
            </span>
            <motion.span
              className="block mt-2 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% auto" }}
            >
              {isRTL ? "الفارق الحقيقي" : "Font La Différence"}
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
            {isRTL
              ? "اكتشف مجموعة من المشاريع التي أنجزناها — مواقع ويب، متاجر إلكترونية واستراتيجيات تسويق رقمي حققت نتائج ملموسة لعملائنا في المغرب"
              : "Découvrez une sélection de projets que nous avons réalisés — sites web, boutiques en ligne et stratégies marketing qui ont généré des résultats concrets pour nos clients au Maroc"}
          </motion.p>
        </motion.div>

        {/* ── Filter Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Mobile Toggle */}
          <div className="sm:hidden mb-4">
            <Button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              variant="outline"
              className="flex items-center gap-2 border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] rounded-xl px-5 py-3"
            >
              <Filter className="w-4 h-4" />
              {filterButtons.find(f => f.key === filter)?.label}
              <span className="bg-[var(--brand-primary)]/[0.08] text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] px-2 py-0.5 rounded-full text-xs font-semibold">
                {filterButtons.find(f => f.key === filter)?.count}
              </span>
            </Button>
          </div>

          {/* Filter Pills */}
          <div className={`flex flex-wrap justify-center gap-3 ${isFilterOpen ? "flex" : "hidden sm:flex"}`}>
            {filterButtons.map((filterBtn) => {
              const Icon = filterBtn.icon
              const isActive = filter === filterBtn.key
              return (
                <motion.div key={filterBtn.key} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={() => handleFilterChange(filterBtn.key)}
                    disabled={isFiltering}
                    className={`
                      relative overflow-hidden group font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-2xl transition-all duration-400 flex items-center gap-2.5 border-0
                      ${isActive
                        ? "bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-[0_8px_28px_rgba(82,3,113,0.25)] dark:shadow-[0_8px_28px_rgba(192,132,252,0.2)]"
                        : "bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 hover:bg-[var(--brand-primary)]/[0.06] dark:hover:bg-[var(--brand-dark-accent)]/[0.06] shadow-[0_2px_12px_rgba(82,3,113,0.04)]"
                      }
                      ${isFiltering ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    )}
                    <Icon className={`w-4 h-4 relative z-10 ${isActive ? "text-white" : "text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]"}`} />
                    <span className="relative z-10 text-sm sm:text-base">{filterBtn.label}</span>
                    <span className={`relative z-10 px-2 py-0.5 rounded-full text-xs font-bold ${isActive ? "bg-white/20 text-white" : "bg-[var(--brand-primary)]/[0.06] text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]"}`}>
                      {filterBtn.count}
                    </span>
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── Loading State ── */}
        <AnimatePresence mode="wait">
          {isFiltering && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-center items-center py-24">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 border-3 border-[var(--brand-primary)]/20 border-t-[var(--brand-primary)] dark:border-[var(--brand-dark-accent)]/20 dark:border-t-[var(--brand-dark-accent)] rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Projects Grid ── */}
        <AnimatePresence mode="wait">
          {!isFiltering && (
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  const PlatformIcon = project.platform ? getPlatformIcon(project.platform) : null
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      variants={itemVariants}
                      whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.35, ease: "easeOut" } }}
                      className="group cursor-pointer"
                    >
                      <Card
                        className="h-full relative overflow-hidden border-0 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_2px_20px_rgba(82,3,113,0.04)] hover:shadow-[0_16px_48px_rgba(82,3,113,0.12)] dark:shadow-[0_2px_20px_rgba(192,132,252,0.03)] dark:hover:shadow-[0_16px_48px_rgba(192,132,252,0.1)] transition-all duration-500 rounded-2xl"
                        onClick={() => setSelectedProject(project)}
                      >
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/[0.02] to-[var(--brand-light-accent)]/[0.02] dark:from-[var(--brand-dark-accent)]/[0.03] dark:to-[var(--brand-secondary)]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                        {/* Image */}
                        <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-2xl">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title[lang] + " - " + (isRTL ? "مشروع رقمي" : "Projet digital")}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />

                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-white/95 dark:from-[#0f0a1a]/95 via-white/40 dark:via-[#0f0a1a]/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

                          {/* Badges */}
                          <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <div className="bg-white/80 dark:bg-white/[0.08] backdrop-blur-xl text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] px-3 py-1.5 rounded-xl text-xs font-semibold border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15 shadow-lg">
                              {t.portfolio.filter[project.category]}
                            </div>
                          </div>

                          {project.platform && (
                            <div className="absolute top-4 left-4 bg-white/80 dark:bg-white/[0.08] backdrop-blur-xl text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] px-2.5 py-1.5 rounded-xl text-xs border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15 flex items-center gap-1.5 shadow-lg">
                              <PlatformIcon className="w-3 h-3" />
                              {project.platform}
                            </div>
                          )}

                          {project.duration && (
                            <div className={`absolute ${project.platform ? "top-14" : "top-4"} left-4 bg-white/80 dark:bg-white/[0.08] backdrop-blur-xl text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] px-2.5 py-1.5 rounded-xl text-xs border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15 flex items-center gap-1.5 shadow-lg`}>
                              <Calendar className="w-3 h-3" />
                              {project.duration}
                            </div>
                          )}

                          {/* View Button */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="p-4 rounded-2xl bg-white/80 dark:bg-white/[0.1] backdrop-blur-xl border border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/20 shadow-[0_8px_32px_rgba(82,3,113,0.15)]"
                            >
                              <Eye className="w-6 h-6 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-5 sm:p-6 relative z-20">
                          <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] group-hover:bg-gradient-to-r group-hover:from-[var(--brand-primary)] group-hover:to-[var(--brand-light-accent)] dark:group-hover:from-[var(--brand-dark-accent)] dark:group-hover:to-[var(--brand-secondary)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {project.title[lang]}
                          </h3>

                          <p className="text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 text-sm sm:text-[15px] mb-4 line-clamp-2 leading-relaxed font-light">
                            {project.challenge[lang]}
                          </p>

                          {/* Technologies */}
                          {project.technologies && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {project.technologies.slice(0, 3).map((tech, i) => (
                                <span key={i} className="text-xs font-medium bg-[var(--brand-primary)]/[0.06] dark:bg-[var(--brand-dark-accent)]/[0.08] text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] px-2.5 py-1 rounded-lg border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15">
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="text-xs font-medium bg-[var(--brand-primary)]/[0.06] dark:bg-[var(--brand-dark-accent)]/[0.08] text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] px-2.5 py-1 rounded-lg border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                          )}

                          {renderMetrics(project)}

                          {/* CTA Button */}
                          <div className="mt-4">
                            <Button
                              size="sm"
                              className="relative overflow-hidden group/btn w-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-[0_4px_16px_rgba(82,3,113,0.2)] hover:shadow-[0_8px_24px_rgba(82,3,113,0.3)] transition-all duration-400 rounded-xl border-0"
                              asChild
                            >
                              <a
                                href={project.liveUrl || project.socialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                                {project.category === "social" ? (
                                  <MessageCircle className="w-4 h-4 relative z-10" />
                                ) : (
                                  <ExternalLink className="w-4 h-4 relative z-10" />
                                )}
                                <span className={`${isRTL ? "mr-2" : "ml-2"} relative z-10`}>
                                  {project.category === "social" ? t.portfolio.cta.viewSocial : t.portfolio.cta.viewLive}
                                </span>
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── No Results ── */}
        {!isFiltering && filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
            <div className="text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 text-lg mb-6 font-light">
              {isRTL ? "لا توجد مشاريع في هذا التصنيف" : "Aucun projet dans cette catégorie"}
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => handleFilterChange("all")}
                variant="outline"
                className="border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] hover:bg-[var(--brand-primary)]/[0.06] rounded-xl"
              >
                {isRTL ? "عرض جميع المشاريع" : "Voir tous les projets"}
              </Button>
            </motion.div>
          </motion.div>
        )}

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
              { number: portfolioData.length + "+", label: isRTL ? "مشروع منجز" : "Projets Livrés", icon: Target, gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]" },
              { number: "100%", label: isRTL ? "رضا العملاء" : "Clients Satisfaits", icon: Star, gradient: "from-[var(--brand-light-accent)] to-[var(--brand-secondary)]" },
              { number: "24/7", label: isRTL ? "متاحون دائماً" : "Toujours Disponibles", icon: Shield, gradient: "from-[var(--brand-secondary)] to-[var(--brand-primary)]" },
              { number: "SEO", label: isRTL ? "تحسين محركات البحث" : "Optimisation Incluse", icon: TrendingUp, gradient: "from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)]" },
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

                <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${stat.gradient} mb-3`}>
                  <stat.icon className="w-4 h-4 text-white" />
                </div>

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

      {/* ══════════════ PROJECT MODAL ══════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--brand-light-bg)]/90 dark:bg-[var(--brand-dark-bg)]/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-white dark:bg-[#110d1d] border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_24px_80px_rgba(82,3,113,0.15)] dark:shadow-[0_24px_80px_rgba(192,132,252,0.1)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 dark:bg-white/[0.08] hover:bg-[var(--brand-primary)]/10 dark:hover:bg-[var(--brand-dark-accent)]/10 border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15 rounded-xl flex items-center justify-center text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] transition-all duration-300 backdrop-blur-xl shadow-lg"
                aria-label={isRTL ? "إغلاق" : "Fermer"}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Modal Image */}
              <div className="relative h-64 sm:h-80 lg:h-96">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title[lang]}
                  fill
                  className="object-cover rounded-t-3xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#110d1d] via-white/40 dark:via-[#110d1d]/40 to-transparent rounded-t-3xl" />

                {/* Modal Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  {selectedProject.platform && (
                    <div className="bg-white/80 dark:bg-white/[0.08] backdrop-blur-xl text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] px-3 py-2 rounded-xl text-sm border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15 flex items-center gap-2 shadow-lg">
                      {(() => { const PI = getPlatformIcon(selectedProject.platform); return <PI className="w-4 h-4" /> })()}
                      {selectedProject.platform}
                    </div>
                  )}
                  {selectedProject.duration && (
                    <div className="bg-white/80 dark:bg-white/[0.08] backdrop-blur-xl text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] px-3 py-2 rounded-xl text-sm border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15 flex items-center gap-2 shadow-lg">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.duration}
                    </div>
                  )}
                </div>

                {/* Modal Live Button */}
                <div className="absolute bottom-6 left-6">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      className="relative overflow-hidden group bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-[0_8px_28px_rgba(82,3,113,0.3)] rounded-xl border-0"
                      asChild
                    >
                      <a href={selectedProject.liveUrl || selectedProject.socialUrl} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        {selectedProject.category === "social" ? <MessageCircle className="w-4 h-4 mr-2 relative z-10" /> : <Play className="w-4 h-4 mr-2 relative z-10" />}
                        <span className="relative z-10">{selectedProject.category === "social" ? t.portfolio.cta.viewSocial : t.portfolio.cta.viewLive}</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
                  <span className="bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent">
                    {selectedProject.title[lang]}
                  </span>
                </h2>

                {/* Metrics */}
                {selectedProject.metrics && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                    <h3 className="text-lg font-bold mb-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] flex items-center gap-2">
                      <BarChart className="w-5 h-5" />
                      {isRTL ? "النتائج المحققة" : "Résultats Obtenus"}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {Object.entries(selectedProject.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-[var(--brand-primary)]/[0.04] dark:bg-[var(--brand-dark-accent)]/[0.06] rounded-2xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10">
                          <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent mb-1">{value}</div>
                          <div className="text-xs text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 capitalize font-medium">{key}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Sections */}
                <div className="space-y-4 mb-8">
                  {[
                    { key: "challenge", label: isRTL ? "التحدي" : "Le Défi", icon: Zap, gradient: "from-[var(--brand-primary)] to-[var(--brand-light-accent)]" },
                    { key: "solution", label: isRTL ? "الحل" : "Notre Solution", icon: Sparkles, gradient: "from-[var(--brand-light-accent)] to-[var(--brand-secondary)]" },
                    { key: "results", label: isRTL ? "النتائج" : "Les Résultats", icon: TrendingUp, gradient: "from-[var(--brand-secondary)] to-[var(--brand-primary)]" },
                  ].map((section, index) => (
                    <motion.div
                      key={section.key}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.12 }}
                      className="group/section bg-[var(--brand-primary)]/[0.03] dark:bg-[var(--brand-dark-accent)]/[0.04] rounded-2xl p-5 sm:p-6 border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 hover:border-[var(--brand-primary)]/25 dark:hover:border-[var(--brand-dark-accent)]/25 hover:shadow-[0_4px_20px_rgba(82,3,113,0.06)] transition-all duration-400"
                    >
                      <h3 className="text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] font-bold mb-3 text-lg flex items-center gap-3">
                        <div className={`inline-flex p-1.5 rounded-lg bg-gradient-to-br ${section.gradient}`}>
                          <section.icon className="w-4 h-4 text-white" />
                        </div>
                        {section.label}
                      </h3>
                      <p className="text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 leading-relaxed font-light">
                        {selectedProject[section.key][lang]}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                {selectedProject.technologies && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                    <h3 className="text-lg font-bold mb-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]">
                      {isRTL ? "التقنيات المستخدمة" : "Technologies Utilisées"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="bg-[var(--brand-primary)]/[0.06] dark:bg-[var(--brand-dark-accent)]/[0.08] text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] px-3 py-2 rounded-xl text-sm font-medium border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1">
                    <Button
                      className="relative overflow-hidden group w-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-[0_8px_28px_rgba(82,3,113,0.25)] rounded-xl border-0 py-3"
                      asChild
                    >
                      <a href={selectedProject.liveUrl || selectedProject.socialUrl} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        {selectedProject.category === "social" ? <MessageCircle className="w-4 h-4 mr-2 relative z-10" /> : <ExternalLink className="w-4 h-4 mr-2 relative z-10" />}
                        <span className="relative z-10">{selectedProject.category === "social" ? t.portfolio.cta.viewSocial : t.portfolio.cta.viewLive}</span>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/[0.06] dark:hover:bg-[var(--brand-dark-accent)]/[0.06] hover:border-[var(--brand-primary)]/35 dark:hover:border-[var(--brand-dark-accent)]/35 bg-white dark:bg-transparent backdrop-blur-sm rounded-xl py-3 transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {t.portfolio.cta.downloadCase}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════ BOTTOM FADE ══════════════ */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] to-transparent z-[5] pointer-events-none" />
    </section>
  )
}