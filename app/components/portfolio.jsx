"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Eye,
  Filter,
  X,
  Sparkles,
  Calendar,
  TrendingUp,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Globe,
  ShoppingCart,
  BarChart3,
} from "lucide-react"
import portfolioData from "../lib/portfolio-data.json"

export function Portfolio({ lang, t }) {
  const isRTL = lang === "ar"
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const colors = {
    primary: "#520371",
    secondary: "#7c3aed",
    lightBg: "#fcf8ff",
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
      fr: (title) =>
        `Bonjour, je suis intéressé par un projet similaire à "${title}". J’aimerais discuter de mon projet avec vous.`,
      ar: (title) =>
        `مرحبا، أنا مهتم بمشروع مشابه لـ "${title}". أود مناقشة مشروعي معكم.`,
    },
  }

  const handleWhatsAppLead = (title) => {
    const text = encodeURIComponent(
      (whatsappInfo.messages[lang] || whatsappInfo.messages.fr)(title)
    )
    window.open(`https://wa.me/${whatsappInfo.phone}?text=${text}`, "_blank")
  }

  const labels = {
    all: t?.portfolio?.filter?.all || (isRTL ? "الكل" : "Tous"),
    vitrine: t?.portfolio?.filter?.vitrine || (isRTL ? "مواقع تعريفية" : "Sites Vitrine"),
    ecommerce: t?.portfolio?.filter?.ecommerce || (isRTL ? "متاجر إلكترونية" : "E-commerce"),
    details: isRTL ? "عرض التفاصيل" : "Voir les détails",
    similar: isRTL ? "أريد مشروعًا مشابهًا" : "Je veux un projet similaire",
    live: t?.portfolio?.cta?.viewLive || (isRTL ? "زيارة المشروع" : "Voir le projet"),
    noResults: isRTL ? "لا توجد مشاريع في هذا التصنيف" : "Aucun projet dans cette catégorie",
    showAll: isRTL ? "عرض جميع المشاريع" : "Voir tous les projets",
    badge: isRTL ? "أحدث الأعمال" : "Réalisations récentes",
    title1: isRTL ? "أعمال احترافية" : "Des projets conçus",
    title2: isRTL ? "تُظهر جودة الخدمة" : "pour convaincre et convertir",
    subtitle: isRTL
      ? "اكتشف بعض المشاريع التي أنجزناها لعملاء في مجالات مختلفة، مع تركيز على الجودة، الوضوح، وتجربة المستخدم."
      : "Découvrez une sélection de projets réalisés pour différents secteurs, avec un accent sur la qualité, la clarté et l’expérience utilisateur.",
    resultTitle: isRTL ? "النتائج" : "Résultats",
    challengeTitle: isRTL ? "التحدي" : "Le besoin",
    solutionTitle: isRTL ? "الحل" : "La solution",
    ctaTitle: isRTL ? "هل تريد مشروعًا بنفس المستوى؟" : "Vous voulez un projet du même niveau ?",
    ctaText: isRTL
      ? "يمكننا إنشاء موقع احترافي يساعدك على تقديم خدماتك بشكل أفضل وتحويل الزوار إلى عملاء."
      : "Nous pouvons créer un site professionnel qui valorise votre activité et transforme vos visiteurs en prospects.",
    ctaPrimary: isRTL ? "اطلب استشارة مجانية" : "Demander un audit gratuit",
    ctaSecondary: isRTL ? "تحدث معنا" : "Parler de votre projet",
  }

  const filters = [
    {
      key: "all",
      label: labels.all,
      icon: Briefcase,
      count: portfolioData.length,
    },
    {
      key: "vitrine",
      label: labels.vitrine,
      icon: Globe,
      count: portfolioData.filter((p) => p.category === "vitrine").length,
    },
    {
      key: "ecommerce",
      label: labels.ecommerce,
      icon: ShoppingCart,
      count: portfolioData.filter((p) => p.category === "ecommerce").length,
    },
  ]

  const filteredProjects = useMemo(() => {
    if (filter === "all") return portfolioData
    return portfolioData.filter((project) => project.category === filter)
  }, [filter])

  const openProject = (project) => setSelectedProject(project)
  const closeProject = () => setSelectedProject(null)

  return (
    <section
      id="portfolio"
      style={cssVariables}
      className={`relative overflow-hidden py-16 sm:py-20 lg:py-28 ${
        isRTL ? "rtl" : "ltr"
      } bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-20 -right-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.18),transparent_70%)]" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 sm:h-[28rem] sm:w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.14),transparent_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/15 bg-white/70 px-4 py-2 text-sm shadow-sm backdrop-blur-xl dark:border-[var(--brand-dark-accent)]/20 dark:bg-white/[0.05]"
          >
            <Sparkles className="h-4 w-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
            <span className="font-semibold text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]">
              {labels.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold leading-tight text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {labels.title1}
            <span className="mt-2 block bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
              {labels.title2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 sm:text-base md:text-lg"
          >
            {labels.subtitle}
          </motion.p>
        </div>

        {/* Filters */}
        <div className="mt-10 sm:mt-12">
          <div className="sm:hidden">
            <Button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              variant="outline"
              className="w-full justify-between rounded-2xl border-[var(--brand-primary)]/15 bg-white/80 px-4 py-3 text-[var(--brand-light-text)] backdrop-blur-xl dark:border-[var(--brand-dark-accent)]/20 dark:bg-white/[0.05] dark:text-[var(--brand-dark-text)]"
            >
              <span className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {filters.find((f) => f.key === filter)?.label}
              </span>
              <span className="rounded-full bg-[var(--brand-primary)]/10 px-2 py-0.5 text-xs font-bold text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]">
                {filters.find((f) => f.key === filter)?.count}
              </span>
            </Button>

            <AnimatePresence>
              {isMobileFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-3 grid gap-2"
                >
                  {filters.map((item) => {
                    const Icon = item.icon
                    const active = item.key === filter
                    return (
                      <button
                        key={item.key}
                        onClick={() => {
                          setFilter(item.key)
                          setIsMobileFilterOpen(false)
                        }}
                        className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition-all ${
                          active
                            ? "border-transparent bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-lg"
                            : "border-[var(--brand-primary)]/10 bg-white/70 text-[var(--brand-light-text)] dark:border-[var(--brand-dark-accent)]/10 dark:bg-white/[0.04] dark:text-[var(--brand-dark-text)]"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </span>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${active ? "bg-white/20 text-white" : "bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]"}`}>
                          {item.count}
                        </span>
                      </button>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden flex-wrap justify-center gap-3 sm:flex">
            {filters.map((item) => {
              const Icon = item.icon
              const active = item.key === filter
              return (
                <button
                  key={item.key}
                  onClick={() => setFilter(item.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    active
                      ? "bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white shadow-[0_10px_30px_rgba(82,3,113,0.22)]"
                      : "border border-[var(--brand-primary)]/10 bg-white/70 text-[var(--brand-light-text)] backdrop-blur-xl hover:bg-[var(--brand-primary)]/[0.05] dark:border-[var(--brand-dark-accent)]/10 dark:bg-white/[0.04] dark:text-[var(--brand-dark-text)]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  <span className={`rounded-full px-2 py-0.5 text-xs ${active ? "bg-white/20" : "bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]"}`}>
                    {item.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          {filteredProjects.length === 0 ? (
            <div className="rounded-3xl border border-[var(--brand-primary)]/10 bg-white/70 p-10 text-center backdrop-blur-xl dark:border-[var(--brand-dark-accent)]/10 dark:bg-white/[0.04]">
              <p className="text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65">
                {labels.noResults}
              </p>
              <Button
                onClick={() => setFilter("all")}
                variant="outline"
                className="mt-4 rounded-xl border-[var(--brand-primary)]/20"
              >
                {labels.showAll}
              </Button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => {
                  const projectTitle =
                    project?.title?.[lang] || project?.title?.fr || "Projet"

                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 18 }}
                      whileHover={{ y: -6 }}
                      className="h-full"
                    >
                      <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--brand-primary)]/10 bg-white/75 shadow-[0_8px_30px_rgba(82,3,113,0.05)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_18px_45px_rgba(82,3,113,0.12)] dark:border-[var(--brand-dark-accent)]/10 dark:bg-white/[0.04]">
                        <div className="relative h-56 sm:h-60 lg:h-64 overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={projectTitle}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                          <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                            <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[var(--brand-light-text)] backdrop-blur-xl dark:bg-white/[0.08] dark:text-[var(--brand-dark-text)]">
                              {project.category === "ecommerce"
                                ? labels.ecommerce
                                : labels.vitrine}
                            </span>

                            {project.duration && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-[var(--brand-light-text)] backdrop-blur-xl dark:bg-white/[0.08] dark:text-[var(--brand-dark-text)]">
                                <Calendar className="h-3 w-3" />
                                {project.duration}
                              </span>
                            )}
                          </div>
                        </div>

                        <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
                          <h3 className="text-lg font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] sm:text-xl">
                            {projectTitle}
                          </h3>

                          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 sm:text-[15px]">
                            {project?.results?.[lang] ||
                              project?.challenge?.[lang] ||
                              project?.challenge?.fr}
                          </p>

                          {project.technologies?.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.technologies.slice(0, 3).map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="rounded-full bg-[var(--brand-primary)]/8 px-3 py-1 text-xs font-medium text-[var(--brand-primary)] dark:bg-[var(--brand-dark-accent)]/10 dark:text-[var(--brand-dark-accent)]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {project.metrics && (
                            <div className="mt-4 grid grid-cols-2 gap-2">
                              {Object.entries(project.metrics)
                                .slice(0, 2)
                                .map(([key, value]) => (
                                  <div
                                    key={key}
                                    className="rounded-2xl border border-[var(--brand-primary)]/10 bg-[var(--brand-primary)]/[0.04] p-3 text-center dark:border-[var(--brand-dark-accent)]/10 dark:bg-[var(--brand-dark-accent)]/[0.05]"
                                  >
                                    <div className="text-sm font-bold text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]">
                                      {value}
                                    </div>
                                    <div className="mt-1 text-[11px] text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55">
                                      {key}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          )}

                          <div className="mt-6 grid gap-3">
                            <Button
                              onClick={() => openProject(project)}
                              className="w-full rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white"
                            >
                              <Eye className="h-4 w-4" />
                              <span className={isRTL ? "mr-2" : "ml-2"}>
                                {labels.details}
                              </span>
                            </Button>

                            <Button
                              variant="outline"
                              onClick={() => handleWhatsAppLead(projectTitle)}
                              className="w-full rounded-2xl border-[var(--brand-primary)]/15 text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/[0.05] dark:border-[var(--brand-dark-accent)]/15 dark:text-[var(--brand-dark-accent)]"
                            >
                              <MessageCircle className="h-4 w-4" />
                              <span className={isRTL ? "mr-2" : "ml-2"}>
                                {labels.similar}
                              </span>
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
        </div>

        {/* CTA Block */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[var(--brand-primary)]/10 bg-white/75 p-6 shadow-[0_8px_30px_rgba(82,3,113,0.05)] backdrop-blur-xl dark:border-[var(--brand-dark-accent)]/10 dark:bg-white/[0.04] sm:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="text-2xl font-extrabold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] sm:text-3xl">
                  {labels.ctaTitle}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 sm:text-base">
                  {labels.ctaText}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    isRTL ? "تصميم احترافي" : "Design professionnel",
                    isRTL ? "سرعة وتجربة مستخدم أفضل" : "Performance & UX améliorées",
                    isRTL ? "متجاوب مع الهاتف" : "Responsive mobile",
                    isRTL ? "موجه نحو النتائج" : "Pensé pour la conversion",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[var(--brand-light-text)]/75 dark:text-[var(--brand-dark-text)]/75">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => handleWhatsAppLead(isRTL ? "مشروع جديد" : "nouveau projet")}
                  className="h-12 rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className={isRTL ? "mr-2.5" : "ml-2.5"}>
                    {labels.ctaPrimary}
                  </span>
                </Button>

                <a
                  href={`/${lang}#contact`}
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-[var(--brand-primary)]/15 bg-transparent px-5 font-semibold text-[var(--brand-light-text)] transition hover:bg-[var(--brand-primary)]/[0.05] dark:border-[var(--brand-dark-accent)]/15 dark:text-[var(--brand-dark-text)]"
                >
                  {labels.ctaSecondary}
                  <ArrowRight className={`h-4 w-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 lg:grid-cols-4">
          {[
            {
              icon: Briefcase,
              value: `${portfolioData.length}+`,
              label: isRTL ? "مشروع منجز" : "Projets réalisés",
            },
            {
              icon: BarChart3,
              value: isRTL ? "نتائج" : "Impact",
              label: isRTL ? "تركيز على الأداء" : "Pensé pour la performance",
            },
            {
              icon: Globe,
              value: isRTL ? "ويب" : "Web",
              label: isRTL ? "مواقع احترافية" : "Sites professionnels",
            },
            {
              icon: TrendingUp,
              value: "SEO",
              label: isRTL ? "تهيئة أساسية" : "Base optimisée",
            },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="rounded-3xl border border-[var(--brand-primary)]/10 bg-white/70 p-5 text-center shadow-sm backdrop-blur-xl dark:border-[var(--brand-dark-accent)]/10 dark:bg-white/[0.04]"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-light-accent)] text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-xl font-extrabold text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 sm:text-sm">
                  {item.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[28px] border border-[var(--brand-primary)]/10 bg-white shadow-[0_24px_80px_rgba(82,3,113,0.18)] dark:border-[var(--brand-dark-accent)]/10 dark:bg-[#120d1f]"
            >
              <button
                onClick={closeProject}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-[var(--brand-light-text)] shadow-md backdrop-blur-xl transition hover:scale-105 dark:bg-white/[0.08] dark:text-[var(--brand-dark-text)]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-60 sm:h-72 lg:h-96">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject?.title?.[lang] || selectedProject?.title?.fr}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/35 to-transparent dark:from-[#120d1f] dark:via-[#120d1f]/35" />
              </div>

              <div className="p-5 sm:p-7 lg:p-8">
                <h3 className="text-2xl font-extrabold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] sm:text-3xl">
                  {selectedProject?.title?.[lang] || selectedProject?.title?.fr}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject?.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-[var(--brand-primary)]/8 px-3 py-1 text-xs font-medium text-[var(--brand-primary)] dark:bg-[var(--brand-dark-accent)]/10 dark:text-[var(--brand-dark-accent)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {selectedProject?.metrics && (
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="rounded-2xl border border-[var(--brand-primary)]/10 bg-[var(--brand-primary)]/[0.04] p-4 text-center dark:border-[var(--brand-dark-accent)]/10 dark:bg-[var(--brand-dark-accent)]/[0.05]"
                      >
                        <div className="text-lg font-bold text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)] sm:text-xl">
                          {value}
                        </div>
                        <div className="mt-1 text-xs text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 grid gap-4">
                  <div className="rounded-3xl border border-[var(--brand-primary)]/10 bg-[var(--brand-primary)]/[0.03] p-5 dark:border-[var(--brand-dark-accent)]/10 dark:bg-[var(--brand-dark-accent)]/[0.04]">
                    <p className="mb-2 flex items-center gap-2 font-bold text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]">
                      <TrendingUp className="h-4 w-4" />
                      {labels.challengeTitle}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 sm:text-base">
                      {selectedProject?.challenge?.[lang] || selectedProject?.challenge?.fr}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-[var(--brand-primary)]/10 bg-[var(--brand-primary)]/[0.03] p-5 dark:border-[var(--brand-dark-accent)]/10 dark:bg-[var(--brand-dark-accent)]/[0.04]">
                    <p className="mb-2 flex items-center gap-2 font-bold text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]">
                      <Sparkles className="h-4 w-4" />
                      {labels.solutionTitle}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 sm:text-base">
                      {selectedProject?.solution?.[lang] || selectedProject?.solution?.fr}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-[var(--brand-primary)]/10 bg-[var(--brand-primary)]/[0.03] p-5 dark:border-[var(--brand-dark-accent)]/10 dark:bg-[var(--brand-dark-accent)]/[0.04]">
                    <p className="mb-2 flex items-center gap-2 font-bold text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]">
                      <CheckCircle2 className="h-4 w-4" />
                      {labels.resultTitle}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--brand-light-text)]/70 dark:text-[var(--brand-dark-text)]/70 sm:text-base">
                      {selectedProject?.results?.[lang] || selectedProject?.results?.fr}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Button
                    onClick={() =>
                      handleWhatsAppLead(
                        selectedProject?.title?.[lang] || selectedProject?.title?.fr || "Projet"
                      )
                    }
                    className="h-12 rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span className={isRTL ? "mr-2" : "ml-2"}>{labels.similar}</span>
                  </Button>

                  {(selectedProject?.liveUrl || selectedProject?.socialUrl) && (
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 rounded-2xl border-[var(--brand-primary)]/15 text-[var(--brand-light-text)] hover:bg-[var(--brand-primary)]/[0.05] dark:border-[var(--brand-dark-accent)]/15 dark:text-[var(--brand-dark-text)]"
                    >
                      <a
                        href={selectedProject.liveUrl || selectedProject.socialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className={isRTL ? "mr-2" : "ml-2"}>{labels.live}</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}