"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download, X, Eye, Filter, Sparkles, ArrowUpRight, Play, Calendar, Users, Target, TrendingUp, MessageCircle, BarChart, Instagram, Facebook } from "lucide-react"
import portfolioData from "../lib/portfolio-data.json"

export function Portfolio({ lang, t }) {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isFiltering, setIsFiltering] = useState(false)
  const isRTL = lang === "ar"

  // Couleurs d'origine conservées
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

  // Enhanced filter buttons with icons and counts
  const filterButtons = [
    {
      key: "all",
      label: t.portfolio.filter.all,
      count: portfolioData.length,
      icon: Target
    },
    {
      key: "vitrine",
      label: t.portfolio.filter.vitrine,
      count: portfolioData.filter(p => p.category === "vitrine").length,
      icon: Eye
    },
    {
      key: "ecommerce",
      label: t.portfolio.filter.ecommerce,
      count: portfolioData.filter(p => p.category === "ecommerce").length,
      icon: Users
    },
   
  ]

  // Filter projects with loading state
  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return portfolioData
    }
    return portfolioData.filter((p) => p.category === filter)
  }, [filter])

  // Handle filter change with loading state
  const handleFilterChange = (newFilter) => {
    setIsFiltering(true)
    setFilter(newFilter)
    setIsFilterOpen(false)

    // Simulate loading for better UX
    setTimeout(() => {
      setIsFiltering(false)
    }, 300)
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

  // Floating animation for background elements
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

  // Function to get platform icon
  const getPlatformIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case 'instagram': return Instagram
      case 'facebook': return Facebook
      case 'tiktok': return MessageCircle
      default: return TrendingUp
    }
  }

  // Function to render project metrics
  const renderMetrics = (project) => {
    if (!project.metrics) return null

    return (
      <div className="grid grid-cols-2 gap-2 mt-3">
        {Object.entries(project.metrics).map(([key, value]) => (
          <div key={key} className="text-center p-2 bg-[var(--brand-primary)]/5 rounded-lg">
            <div className="text-sm font-bold text-[var(--brand-primary)]">{value}</div>
            <div className="text-xs text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 capitalize">
              {key}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section
      id="portfolio"
      style={cssVariables}
      className={`relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-[var(--brand-light-bg)] to-[var(--brand-light-accent)]/5 dark:from-[var(--brand-primary)]/10 dark:via-[var(--brand-dark-bg)] dark:to-[var(--brand-dark-accent)]/10" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          {...floatingAnimation}
          className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-light-accent)]/10 dark:to-[var(--brand-dark-accent)]/10 rounded-full blur-3xl"
        />
        <motion.div
          {...floatingAnimation}
          transition={{ delay: 2, duration: 8 }}
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-light-accent)]/5 dark:to-[var(--brand-dark-accent)]/5 rounded-full blur-3xl"
        />

        {/* Additional floating elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[var(--brand-primary)]/10 rounded-full"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - SEO Optimized */}
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
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
            </motion.div>
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-primary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent uppercase tracking-wider">
              {isRTL ? "معرض أعمالنا" : "Notre Portfolio"}
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-primary)] dark:text-[var(--brand-primary)]" />
            </motion.div>
          </motion.div>

          {/* SEO Optimized Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-serif text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-balance"
          >
            {isRTL
              ? "مشاريعنا في تصميم المواقع والتسويق الرقمي بالمغرب"
              : "Nos Projets en Création de Sites Web & Marketing Digital au Maroc"
            }
          </motion.h1>

          {/* SEO Optimized Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light"
          >
            {isRTL
              ? "اكتشف مجموعة من مشاريعنا الناجحة في تصميم مواقع الويب، المتاجر الإلكترونية، التسويق الرقمي، وإدارة الحسابات الاجتماعية للشركات المغربية."
              : "Découvrez une sélection de nos projets réussis en création de sites web, boutiques e-commerce, marketing digital et gestion des réseaux sociaux pour entreprises marocaines."
            }
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Mobile Filter Toggle */}
          <div className="sm:hidden mb-4">
            <Button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              variant="outline"
              className="flex items-center gap-2 border-[var(--brand-primary)]/20 bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 backdrop-blur-sm text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]"
            >
              <Filter className="w-4 h-4" />
              {filterButtons.find(f => f.key === filter)?.label}
              <span className="bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] px-2 py-1 rounded-full text-xs">
                {filterButtons.find(f => f.key === filter)?.count}
              </span>
            </Button>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 ${isFilterOpen ? 'flex' : 'hidden sm:flex'}`}>
            {filterButtons.map((filterBtn) => {
              const Icon = filterBtn.icon
              return (
                <motion.div
                  key={filterBtn.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => handleFilterChange(filterBtn.key)}
                    variant={filter === filterBtn.key ? "default" : "outline"}
                    disabled={isFiltering}
                    className={`
                      relative overflow-hidden group font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 flex items-center gap-2
                      ${filter === filterBtn.key
                        ? "bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 text-white shadow-lg shadow-[var(--brand-primary)]/30"
                        : "border-[var(--brand-primary)]/20 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/10 hover:border-[var(--brand-primary)]/50 bg-[var(--brand-light-bg)]/30 dark:bg-[var(--brand-dark-bg)]/30 backdrop-blur-sm"
                      }
                      ${isFiltering ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                  >
                    {filter === filterBtn.key && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <Icon className={`w-3 h-3 sm:w-4 sm:h-4 relative z-10 ${filter === filterBtn.key ? 'text-white' : 'text-[var(--brand-primary)]'}`} />
                    <span className="relative z-10 text-sm sm:text-base">
                      {filterBtn.label}
                    </span>
                    <span className={`relative z-10 px-2 py-1 rounded-full text-xs ${filter === filterBtn.key
                        ? 'bg-white/20 text-white'
                        : 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]'
                      }`}>
                      {filterBtn.count}
                    </span>
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Loading State */}
        <AnimatePresence mode="wait">
          {isFiltering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-12 h-12 border-4 border-[var(--brand-primary)]/20 border-t-[var(--brand-primary)] rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {!isFiltering && (
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const PlatformIcon = project.platform ? getPlatformIcon(project.platform) : null

                  return (
                    <motion.div
                      key={project.id}
                      layout
                      variants={itemVariants}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      className="group cursor-pointer"
                    >
                      <Card
                        className="h-full bg-[var(--brand-light-bg)]/50 dark:bg-[var(--brand-dark-bg)]/50 backdrop-blur-sm border-[var(--brand-primary)]/20 overflow-hidden hover:border-[var(--brand-primary)]/50 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/10 transition-all duration-500 relative"
                        onClick={() => setSelectedProject(project)}
                      >
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-light-accent)]/5 dark:to-[var(--brand-dark-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                        {/* Image Container */}
                        <div className="relative h-60 sm:h-72 lg:h-80 overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title[lang] + " - " + (isRTL ? "مشروع تصميم موقع ويب" : "Projet création site web")}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-light-bg)]/90 dark:from-[var(--brand-dark-bg)]/90 via-[var(--brand-light-bg)]/50 dark:via-[var(--brand-dark-bg)]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                          {/* Category Badge */}
                          <div className="absolute top-4 right-4 bg-[var(--brand-light-bg)]/80 dark:bg-[var(--brand-dark-bg)]/80 backdrop-blur-sm text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] px-3 py-1 rounded-full text-xs font-semibold border border-[var(--brand-primary)]/20 shadow-lg">
                            {t.portfolio.filter[project.category]}
                          </div>

                          {/* Platform Badge for Social Media Projects */}
                          {project.platform && (
                            <div className="absolute top-4 left-4 bg-[var(--brand-light-bg)]/80 dark:bg-[var(--brand-dark-bg)]/80 backdrop-blur-sm text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] px-2 py-1 rounded-full text-xs border border-[var(--brand-primary)]/20 flex items-center gap-1">
                              <PlatformIcon className="w-3 h-3" />
                              {project.platform}
                            </div>
                          )}

                          {/* Project Duration */}
                          {project.duration && (
                            <div className={`absolute ${project.platform ? 'top-16' : 'top-4'} left-4 bg-[var(--brand-light-bg)]/80 dark:bg-[var(--brand-dark-bg)]/80 backdrop-blur-sm text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] px-2 py-1 rounded-full text-xs border border-[var(--brand-primary)]/20 flex items-center gap-1`}>
                              <Calendar className="w-3 h-3" />
                              {project.duration}
                            </div>
                          )}

                          {/* View Project Button */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="bg-[var(--brand-light-bg)]/80 dark:bg-[var(--brand-dark-bg)]/80 backdrop-blur-sm border border-[var(--brand-primary)]/20 rounded-full p-4 shadow-2xl"
                            >
                              <Eye className="w-6 h-6 text-[var(--brand-primary)] dark:text-[var(--brand-primary)]" />
                            </motion.div>
                          </div>
                        </div>

                        <CardContent className="p-4 sm:p-6 relative z-20">
                          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] group-hover:bg-gradient-to-r group-hover:from-[var(--brand-primary)] group-hover:to-[var(--brand-light-accent)] dark:group-hover:to-[var(--brand-dark-accent)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {project.title[lang]}
                          </h2>
                          <p className="text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed font-light">
                            {project.challenge[lang]}
                          </p>

                          {/* Technologies Used */}
                          {project.technologies && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="text-xs bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] px-2 py-1 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="text-xs bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] px-2 py-1 rounded-full">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Metrics for Marketing/Social Projects */}
                          {renderMetrics(project)}

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 text-white shadow-lg shadow-[var(--brand-primary)]/30 transition-all duration-300 group/btn"
                              asChild
                            >
                              <a
                                href={project.liveUrl || project.socialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`View ${project.category === 'social' ? 'social media' : 'live'} project: ${project.title[lang]}`}
                              >
                                {project.category === 'social' ? (
                                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-0.5" />
                                ) : (
                                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-0.5" />
                                )}
                                <span className="ml-2">
                                  {project.category === 'social' ? t.portfolio.cta.viewSocial : t.portfolio.cta.viewLive}
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

        {/* No Results Message */}
        {!isFiltering && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 text-lg mb-4">
              {isRTL ? "لا توجد مشاريع في هذا التصنيف" : "Aucun projet dans cette catégorie"}
            </div>
            <Button
              onClick={() => handleFilterChange("all")}
              variant="outline"
              className="border-[var(--brand-primary)]/20 text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10"
            >
              {isRTL ? "عرض جميع المشاريع" : "Voir tous les projets"}
            </Button>
          </motion.div>
        )}

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {[
              { number: portfolioData.length + "+", label: isRTL ? "مشروع مكتمل" : "Projets Réalisés" },
              { number: "100%", label: isRTL ? "عملاء راضون" : "Clients Satisfaits" },
              { number: "24/7", label: isRTL ? "دعم فني" : "Support Technique" },
              { number: "SEO", label: isRTL ? "محسن لمحركات البحث" : "Optimisé SEO" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
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
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--brand-light-bg)]/95 dark:bg-[var(--brand-dark-bg)]/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)] border border-[var(--brand-primary)]/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[var(--brand-light-bg)]/80 dark:bg-[var(--brand-dark-bg)]/80 hover:bg-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/20 rounded-full flex items-center justify-center text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:text-[var(--brand-primary)] transition-all duration-300 backdrop-blur-sm hover:scale-110"
                aria-label={isRTL ? "إغلاق" : "Fermer"}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Project Image */}
              <div className="relative h-64 sm:h-80 lg:h-96">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title[lang] + " - " + (isRTL ? "عرض مشروع" : "Aperçu du projet")}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] via-[var(--brand-light-bg)]/50 dark:via-[var(--brand-dark-bg)]/50 to-transparent rounded-t-2xl" />

                {/* Platform and Duration Info */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  {selectedProject.platform && (
                    <div className="bg-[var(--brand-light-bg)]/80 dark:bg-[var(--brand-dark-bg)]/80 backdrop-blur-sm text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] px-3 py-2 rounded-full text-sm border border-[var(--brand-primary)]/20 flex items-center gap-2">
                      {(() => {
                        const PlatformIcon = getPlatformIcon(selectedProject.platform)
                        return <PlatformIcon className="w-4 h-4" />
                      })()}
                      {selectedProject.platform}
                    </div>
                  )}
                  {selectedProject.duration && (
                    <div className="bg-[var(--brand-light-bg)]/80 dark:bg-[var(--brand-dark-bg)]/80 backdrop-blur-sm text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] px-3 py-2 rounded-full text-sm border border-[var(--brand-primary)]/20 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.duration}
                    </div>
                  )}
                </div>

                {/* Live Preview Button */}
                <div className="absolute bottom-6 left-6">
                  <Button
                    className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 text-white shadow-lg shadow-[var(--brand-primary)]/30 transition-all duration-300 group"
                    asChild
                  >
                    <a href={selectedProject.liveUrl || selectedProject.socialUrl} target="_blank" rel="noopener noreferrer">
                      {selectedProject.category === 'social' ? (
                        <MessageCircle className="w-4 h-4 mr-2" />
                      ) : (
                        <Play className="w-4 h-4 mr-2" />
                      )}
                      {selectedProject.category === 'social' ? t.portfolio.cta.viewSocial : t.portfolio.cta.viewLive}
                      <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-serif bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] dark:via-[var(--brand-dark-accent)] to-[var(--brand-primary)] bg-clip-text text-transparent bg-size-200 animate-gradient">
                  {selectedProject.title[lang]}
                </h1>

                {/* Metrics Display for Marketing/Social Projects */}
                {selectedProject.metrics && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-bold mb-4 text-[var(--brand-primary)] flex items-center gap-2">
                      <BarChart className="w-5 h-5" />
                      {isRTL ? "النتائج المحققة" : "Résultats Obtenus"}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {Object.entries(selectedProject.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-[var(--brand-primary)]/5 rounded-xl border border-[var(--brand-primary)]/20">
                          <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">{value}</div>
                          <div className="text-sm text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="space-y-4 sm:space-y-6 mb-8">
                  {[
                    { key: "challenge", color: "primary", icon: "⚡" },
                    { key: "solution", color: "light-accent", icon: "💡" },
                    { key: "results", color: "dark-accent", icon: "🎯" }
                  ].map((section, index) => (
                    <motion.div
                      key={section.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-[var(--brand-primary)]/5 rounded-xl p-4 sm:p-6 border border-[var(--brand-primary)]/20 hover:border-[var(--brand-primary)]/40 transition-all duration-300 hover:shadow-lg"
                    >
                      <h2 className="text-[var(--brand-primary)] dark:text-[var(--brand-primary)] font-bold mb-3 text-lg flex items-center gap-3">
                        <span className="text-xl">{section.icon}</span>
                        {isRTL
                          ? section.key === "challenge" ? "التحدي" : section.key === "solution" ? "الحل" : "النتائج"
                          : section.key === "challenge" ? "Défi" : section.key === "solution" ? "Solution" : "Résultats"
                        }
                      </h2>
                      <p className="text-[var(--brand-light-text)]/80 dark:text-[var(--brand-dark-text)]/80 leading-relaxed font-light">
                        {selectedProject[section.key][lang]}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies Used */}
                {selectedProject.technologies && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-bold mb-4 text-[var(--brand-primary)]">
                      {isRTL ? "التقنيات المستخدمة" : "Technologies Utilisées"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] px-3 py-2 rounded-full text-sm border border-[var(--brand-primary)]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:to-[var(--brand-dark-accent)] hover:from-[var(--brand-primary)] hover:to-[var(--brand-primary)]/90 text-white shadow-lg shadow-[var(--brand-primary)]/30 transition-all duration-300 flex-1 group"
                    asChild
                  >
                    <a href={selectedProject.liveUrl || selectedProject.socialUrl} target="_blank" rel="noopener noreferrer">
                      {selectedProject.category === 'social' ? (
                        <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-0.5" />
                      ) : (
                        <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-0.5" />
                      )}
                      {selectedProject.category === 'social' ? t.portfolio.cta.viewSocial : t.portfolio.cta.viewLive}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[var(--brand-primary)]/20 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] hover:bg-[var(--brand-primary)]/10 hover:border-[var(--brand-primary)]/50 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)] backdrop-blur-sm transition-all duration-300 flex-1"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t.portfolio.cta.downloadCase}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[var(--brand-light-bg)]/80 dark:to-[var(--brand-dark-bg)]/80 pointer-events-none" />
    </section>
  )
}