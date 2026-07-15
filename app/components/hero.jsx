"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MessageCircle, ChevronDown, Play, CheckCircle2, MousePointer2, Gauge, Layers3 } from "lucide-react"
import { Strands } from "./react-bits/strands"
import { SpecularButton, SpecularLink } from "./react-bits/specular-button"
import { openWhatsApp } from "../lib/leads"

const HERO_STRAND_COLORS = ["#24d9ff", "#7567ff", "#ff5bd7"]

export function Hero({ lang }) {
  const isRTL = lang === "ar"
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 72])
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0])
  const handleWhatsApp = () => {
    openWhatsApp(
      isRTL ? "مرحبا، أود الحصول على تصميم موقع حديث." : "Bonjour, je veux un site web moderne pour mon projet.",
      "hero_cta",
      { language: lang },
    )
  }

  const chips = isRTL ? ["تصميم واجهات", "تطوير Next.js", "Nemsi Media", "nemsimedia.ma"] : ["UI premium", "Next.js", "Nemsi Media", "nemsimedia.ma"]

  return (
    <section ref={sectionRef} id="home" className="hero-section relative min-h-screen overflow-hidden pt-24 sm:pt-28" dir={isRTL ? "rtl" : "ltr"}>
      <Strands
        colors={HERO_STRAND_COLORS}
        count={5}
        speed={0.52}
        amplitude={1.18}
        opacity={0.84}
        interactive
        interactionStrength={1.15}
        className="z-[2]"
      />
      <div className="aurora" />
      <div className="absolute inset-0 grid-pattern opacity-70" />
      <div className="orb orb-cyan -left-32 top-16 h-[28rem] w-[28rem]" />
      <div className="orb orb-violet right-[-10rem] top-28 h-[34rem] w-[34rem]" />
      <div className="orb orb-pink bottom-[-12rem] left-1/2 h-[24rem] w-[24rem]" />

      <motion.div style={{ y, opacity }} className="container hero-layout relative z-10 grid items-center">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="hero-badge badge mb-6 sm:mb-7">
            <span className="badge-dot" aria-hidden="true" />
            {isRTL ? "Nemsi Media — استوديو رقمي مغربي بنَفَس عالمي" : "Nemsi Media — studio digital marocain, rendu international"}
          </motion.div>

          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .78, delay: .08, ease: [0.22, 1, 0.36, 1] }}>
            {isRTL ? (
              <><span>مواقع ويب</span><span className="gradient-text">تتحرك، تبيع</span><span className="gradient-text">وتبهر</span></>
            ) : (
              <><span>Sites web</span><span className="gradient-text">qui bougent,</span><span className="gradient-text">vendent et</span><span className="gradient-text">marquent</span></>
            )}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .72, delay: .22 }} className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl">
            {isRTL ? "Nemsi Media (nemsimedia.ma) نحوّل فكرتك إلى تجربة رقمية فاخرة: واجهة واضحة، حركة ناعمة، أداء سريع، ورسالة تقنع زبائنك من أول زيارة." : "Nemsi Media (nemsimedia.ma) transforme votre marque en expérience digitale premium : interface élégante, interactions fluides, performance rapide et parcours pensé pour convertir dès la première visite."}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .72, delay: .34 }} className="hero-actions mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <SpecularButton onClick={handleWhatsApp}>
              <MessageCircle className="h-4 w-4" />
              {isRTL ? "ابدأ مشروعك عبر واتساب" : "Lancer mon projet WhatsApp"}
            </SpecularButton>
            <SpecularLink href="#portfolio" variant="ghost" className="px-7 py-4">
              <Play className="h-4 w-4" />
              {isRTL ? "شاهد التجربة" : "Voir l'expérience"}
            </SpecularLink>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .72, delay: .46 }} className="hero-chips mt-7 flex flex-wrap gap-2 sm:mt-9">
            {chips.map((chip) => <span key={chip} className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-3.5 py-2 text-xs font-semibold text-[var(--text-secondary)] backdrop-blur-xl">{chip}</span>)}
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .72, delay: .56 }} className="sr-only">
            {isRTL ? "NemsiMedia وnemsimedia هما تسميتان مرتبطتان بالموقع الرسمي nemsimedia.ma في المغرب." : "NemsiMedia et nemsimedia sont deux variantes associées au site officiel nemsimedia.ma au Maroc."}
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, scale: .96, y: 22 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .82, delay: .18, ease: [0.22, 1, 0.36, 1] }} className="hero-preview relative mx-auto w-full">
          <div className="glass-card p-2.5 sm:p-4">
            <div className="rounded-[18px] border border-[var(--border)] bg-[var(--bg)]/70 p-3 shadow-2xl sm:rounded-[20px] sm:p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" /></div>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em] text-[var(--text-muted)]">Aperçu</span>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--bg-surface)] to-transparent p-3.5 sm:p-6">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--cyan-soft)] blur-3xl" />
                <div className="absolute -bottom-12 left-10 h-44 w-44 rounded-full bg-[var(--pink-soft)] blur-3xl" />
                <div className="hero-showcase relative">
                  <div className="hero-showcase-heading">
                    <div>
                      <p>{isRTL ? "نظام رقمي متكامل" : "Expérience digitale"}</p>
                      <h3>{isRTL ? "علامتك، بتجربة أقوى." : "Votre marque, orchestrée."}</h3>
                    </div>
                    <span><span className="status-dot" aria-hidden="true" /> Live</span>
                  </div>

                  <div className="hero-showcase-metrics">
                    <div><span><Layers3 className="h-4 w-4" /></span><strong>{isRTL ? "واجهة" : "Interface"}</strong><small>{isRTL ? "واضحة" : "Lisible"}</small></div>
                    <div><span><Gauge className="h-4 w-4" /></span><strong>98/100</strong><small>Performance</small></div>
                  </div>

                  <div className="hero-showcase-flow" aria-label={isRTL ? "مراحل المشروع" : "Étapes du projet"}>
                    {(isRTL ? ["استراتيجية", "تصميم", "تطوير"] : ["Stratégie", "Design", "Mise en ligne"]).map((step, index) => (
                      <div key={step}><span>0{index + 1}</span><strong>{step}</strong><CheckCircle2 className="h-4 w-4" /></div>
                    ))}
                  </div>
                </div>
                <div className={`relative z-10 mt-4 flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 backdrop-blur-xl ${isRTL ? "text-right" : "text-left"}`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand-hover)]"><MousePointer2 className="h-4 w-4" /></div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[var(--brand-2)]">{isRTL ? "جاهز للتحويل" : "Pensé pour convertir"}</p>
                    <h3 className="mt-1 text-base sm:text-lg">{isRTL ? "تجربة سريعة وواضحة" : "Clair, rapide, mémorable"}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{isRTL ? "كل تفاعل يخدم رسالة علامتك وأهداف مشروعك." : "Chaque interaction sert votre message et vos objectifs commerciaux."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <SpecularButton onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} variant="quiet" size="scroll" className="hero-scroll-cue" aria-label={isRTL ? "انتقل إلى الخدمات" : "Aller aux services"}>
        <span className="hero-scroll-cue__text mb-1 block text-[10px] font-bold uppercase tracking-[.24em]">{isRTL ? "تابع" : "Scroll"}</span>
        <ChevronDown className="mx-auto h-5 w-5 animate-bounce" />
      </SpecularButton>
    </section>
  )
}
