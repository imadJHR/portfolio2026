"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Eye, X, TrendingUp, MessageCircle, Briefcase, ArrowUpRight, Sparkles } from "lucide-react"
import portfolioData from "../lib/portfolio-data.json"
import { AnimatedSection, StaggerSection } from "./gsap-animations"
import { openWhatsApp } from "../lib/leads"
import { SpecularButton, SpecularLink } from "./react-bits/specular-button"

export function Portfolio({ lang }) {
  const isRTL = lang === "ar"
  const [filter, setFilter] = useState("all")
  const [selected, setSelected] = useState(null)
  const filters = [
    { id: "all", label: isRTL ? "الكل" : "Tous" },
    { id: "vitrine", label: isRTL ? "مواقع تعريفية" : "Sites vitrine" },
    { id: "ecommerce", label: isRTL ? "متاجر" : "E-commerce" },
    { id: "service", label: isRTL ? "خدمات" : "Services" },
  ]
  const filtered = useMemo(() => filter === "all" ? portfolioData : portfolioData.filter(p => p.category === filter), [filter])
  const handleWhatsApp = (title) => {
    const project = title[lang] || title.fr || title.ar
    openWhatsApp(
      `${isRTL ? "مرحبا، أود معرفة المزيد عن مشروع" : "Bonjour, je souhaite en savoir plus sur le projet"} : ${project}`,
      "portfolio_cta",
      { project, language: lang },
    )
  }
  return (
    <section id="portfolio" className="section overflow-hidden">
      <div className="orb orb-cyan -left-52 top-28 h-[30rem] w-[30rem]" />
      <div className="container">
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="badge mx-auto mb-4"><Briefcase className="h-3.5 w-3.5" />{isRTL ? "أعمالنا" : "Portfolio"}</div>
          <div className="divider mb-6" />
          <h2>{isRTL ? "مشاريع بواجهة" : "Des projets avec"} <span className="gradient-text">{isRTL ? "تبدو حيّة" : "une interface vivante"}</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg">{isRTL ? "عرض بصري غني، بطاقات تفاعلية، وتفاصيل واضحة لكل مشروع." : "Cartes interactives, profondeur visuelle et lecture rapide des résultats — une grille premium inspirée des meilleurs showcases."}</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map(f => <SpecularButton key={f.id} onClick={() => setFilter(f.id)} variant={filter === f.id ? "primary" : "ghost"} size="sm" aria-pressed={filter === f.id}>{f.label}</SpecularButton>)}
        </AnimatedSection>
        <StaggerSection staggerAmount={0.06}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.button key={project.id} layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} onClick={() => setSelected(project)} className={`card-accent group overflow-hidden text-left ${index === 0 ? "lg:col-span-2" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
                  <div className="relative h-64 overflow-hidden sm:h-72">
                    <Image src={project.image || "/placeholder.png"} alt={project.title.fr} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-bold text-white backdrop-blur-xl">{project.category === "ecommerce" ? (isRTL ? "متجر" : "E-commerce") : project.category === "service" ? (isRTL ? "خدمة" : "Service") : (isRTL ? "موقع" : "Vitrine")}</div>
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white opacity-0 backdrop-blur-xl transition group-hover:opacity-100"><ArrowUpRight className="h-4 w-4" /></div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-2xl text-white">{lang === "ar" && project.title.ar ? project.title.ar : project.title.fr}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-white/76">{lang === "ar" && project.challenge.ar ? project.challenge.ar : project.challenge.fr}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </StaggerSection>
      </div>
      <AnimatePresence>
        {selected && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" onClick={() => setSelected(null)}>
          <motion.div initial={{ opacity: 0, scale: .94, y: 22 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .94, y: 22 }} className="glass-card max-h-[88vh] w-full max-w-3xl overflow-y-auto" onClick={e => e.stopPropagation()}>
            <SpecularButton onClick={() => setSelected(null)} variant="ghost" size="icon" className="absolute right-4 top-4 z-10" aria-label={isRTL ? "إغلاق" : "Fermer"}><X className="h-4 w-4" /></SpecularButton>
            <div className="relative h-64 sm:h-80"><Image src={selected.image || "/placeholder.png"} alt="" fill className="object-cover" sizes="768px" /><div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent" /></div>
            <div className="space-y-5 p-6 sm:p-8">
              <div className="badge"><Sparkles className="h-3.5 w-3.5" />Case study</div>
              <h3 className="text-3xl sm:text-4xl">{selected.title.fr}</h3>
              {selected.challenge.fr && <div><p className="mb-2 text-xs font-black uppercase tracking-[.18em] text-[var(--text-muted)]">{isRTL ? "التحدي" : "Le défi"}</p><p>{selected.challenge.fr}</p></div>}
              {selected.solution.fr && <div><p className="mb-2 text-xs font-black uppercase tracking-[.18em] text-[var(--text-muted)]">{isRTL ? "الحل" : "Notre solution"}</p><p>{selected.solution.fr}</p></div>}
              {selected.results.fr && <div className="rounded-2xl border border-[rgba(6,182,122,0.25)] bg-[var(--success-soft)] p-4"><div className="flex items-start gap-3"><TrendingUp className="mt-1 h-5 w-5 text-[var(--success)]" /><div><p className="font-bold text-[var(--success)]">{isRTL ? "النتائج" : "Résultats"}</p><p className="text-sm">{selected.results.fr}</p></div></div></div>}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">{selected.liveUrl && <SpecularLink href={selected.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" />{isRTL ? "زيارة الموقع" : "Visiter le site"}</SpecularLink>}<SpecularButton onClick={() => handleWhatsApp(selected.title)} variant="ghost"><MessageCircle className="h-4 w-4" />{isRTL ? "استفسر" : "En savoir plus"}</SpecularButton></div>
            </div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  )
}
