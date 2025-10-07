"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download, X, Eye, Filter, Sparkles, ArrowUpRight, Play } from "lucide-react"
import portfolioData from "../lib/portfolio-data.json"

export function Portfolio({ lang, t }) {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const isRTL = lang === "ar"

  const filteredProjects = filter === "all" ? portfolioData : portfolioData.filter((p) => p.category === filter)

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

  const filterButtons = ["all", "vitrine", "ecommerce", "landing"]

  return (
    <section id="portfolio" className={`relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-background to-cyan-500/5 dark:from-purple-500/10 dark:via-background dark:to-cyan-500/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-full blur-3xl"
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
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 dark:text-cyan-400" />
            </motion.div>
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">
              {isRTL ? "أعمالنا" : "Notre Portfolio"}
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 dark:text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-serif text-foreground text-balance"
          >
            {t.portfolio.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t.portfolio.subtitle}
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
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
              className="flex items-center gap-2 border-border bg-card/50 backdrop-blur-sm"
            >
              <Filter className="w-4 h-4" />
              {t.portfolio.filter[filter]}
            </Button>
          </div>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 ${isFilterOpen ? 'flex' : 'hidden sm:flex'}`}>
            {filterButtons.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => {
                    setFilter(category)
                    setIsFilterOpen(false)
                  }}
                  variant={filter === category ? "default" : "outline"}
                  className={`
                    relative overflow-hidden group font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300
                    ${filter === category
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg shadow-purple-500/30"
                      : "border-border/80 text-foreground hover:bg-muted/50 hover:border-purple-500/50 bg-card/30 backdrop-blur-sm"
                    }
                  `}
                >
                  {filter === category && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 text-sm sm:text-base">
                    {t.portfolio.filter[category]}
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
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
                  className="h-full bg-card/50 backdrop-blur-sm border-border/60 overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 relative"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  
                  {/* Image Container */}
                  <div className="relative h-60 sm:h-72 lg:h-80 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title[lang]}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-semibold border border-border/50 shadow-lg">
                      {t.portfolio.filter[project.category]}
                    </div>

                    {/* View Project Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-4 shadow-2xl"
                      >
                        <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6 relative z-20">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title[lang]}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed font-light">
                      {project.challenge[lang]}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 group/btn"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-0.5" />
                          <span className="ml-2">{t.portfolio.cta.viewLive}</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-muted-foreground text-lg">
              {isRTL ? "لا توجد مشاريع في هذا التصنيف" : "Aucun projet dans cette catégorie"}
            </div>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-card/80 hover:bg-primary/20 border border-border rounded-full flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 backdrop-blur-sm hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Project Image */}
              <div className="relative h-64 sm:h-80 lg:h-96">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title[lang]}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent rounded-t-2xl" />
                
                {/* Live Preview Button */}
                <div className="absolute bottom-6 left-6">
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 group"
                    asChild
                  >
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2" />
                      {t.portfolio.cta.viewLive}
                      <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 text-foreground">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-serif bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  {selectedProject.title[lang]}
                </h3>

                <div className="space-y-4 sm:space-y-6 mb-8">
                  {[
                    { key: "challenge", color: "purple", icon: "⚡" },
                    { key: "solution", color: "cyan", icon: "💡" },
                    { key: "results", color: "green", icon: "🎯" }
                  ].map((section, index) => (
                    <motion.div
                      key={section.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-${section.color}-500/5 rounded-xl p-4 sm:p-6 border border-${section.color}-500/20 hover:border-${section.color}-500/40 transition-all duration-300 hover:shadow-lg`}
                    >
                      <h4 className={`text-${section.color}-600 dark:text-${section.color}-400 font-bold mb-3 text-lg flex items-center gap-3`}>
                        <span className="text-xl">{section.icon}</span>
                        {isRTL 
                          ? section.key === "challenge" ? "التحدي" : section.key === "solution" ? "الحل" : "النتائج"
                          : section.key === "challenge" ? "Défi" : section.key === "solution" ? "Solution" : "Résultats"
                        }
                      </h4>
                      <p className="text-muted-foreground leading-relaxed font-light">
                        {selectedProject[section.key][lang]}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 flex-1 group"
                    asChild
                  >
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-0.5" />
                      {t.portfolio.cta.viewLive}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-muted/50 hover:border-purple-500/50 bg-card backdrop-blur-sm transition-all duration-300 flex-1"
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
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />
    </section>
  )
}

// Add to your global CSS
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