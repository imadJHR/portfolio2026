"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { AnimatedSection, StaggerSection } from "./gsap-animations"

export function Testimonials({ lang }) {
  const isRTL = lang === "ar"
  const items = [
    { name: isRTL ? "أحمد بنعلي" : "Ahmed Benali", role: isRTL ? "مدير شركة - الدار البيضاء" : "Directeur, Casablanca", text: isRTL ? "تصميم احترافي وتجربة سلسة. الموقع الجديد رفع ثقة العملاء." : "Un rendu très premium. Le site donne tout de suite confiance et convertit mieux.", avatar: "AB" },
    { name: isRTL ? "فاطمة الزهراء" : "Fatima Zahra", role: isRTL ? "صاحبة متجر - مراكش" : "Gérante e-commerce, Marrakech", text: isRTL ? "فريق سريع وذوق عالي. النتيجة أفضل مما تخيلت." : "Rapide, propre et très beau. Le niveau design est clairement au-dessus.", avatar: "FZ" },
    { name: isRTL ? "يوسف المرابط" : "Youssef Marabti", role: isRTL ? "مؤسس شركة - الرباط" : "Fondateur startup, Rabat", text: isRTL ? "فهموا احتياجنا وحولوه لمنصة واضحة وسريعة." : "Ils ont transformé notre idée en interface claire, rapide et crédible.", avatar: "YM" },
  ]
  return (
    <section id="testimonials" className="section overflow-hidden">
      <div className="container">
        <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="badge mx-auto mb-4"><Star className="h-3.5 w-3.5" />{isRTL ? "آراء العملاء" : "Témoignages"}</div>
          <div className="divider mb-6" />
          <h2>{isRTL ? "تجربة يثق بها" : "Une expérience"} <span className="gradient-text">{isRTL ? "عملاؤنا" : "qui inspire confiance"}</span></h2>
        </AnimatedSection>
        <StaggerSection staggerAmount={0.09}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((t, i) => <motion.div key={i} className="glass-card p-6 sm:p-7">
              <div className="mb-5 flex items-center justify-between"><Quote className="h-8 w-8 text-[var(--brand-hover)]" /><div className="flex gap-1">{[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-[var(--brand-2)] text-[var(--brand-2)]" />)}</div></div>
              <p className="text-base leading-relaxed">“{t.text}”</p>
              <div className="mt-7 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--brand-soft)] text-sm font-black text-[var(--brand-hover)]">{t.avatar}</div><div><p className="font-black text-[var(--text)]">{t.name}</p><p className="text-xs text-[var(--text-muted)]">{t.role}</p></div></div>
            </motion.div>)}
          </div>
        </StaggerSection>
      </div>
    </section>
  )
}
