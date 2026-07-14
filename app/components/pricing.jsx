"use client"

import { motion } from "framer-motion"
import { Check, MessageCircle, Crown, BadgeCheck, Sparkles } from "lucide-react"
import { useState } from "react"
import { SpecularButton, SpecularLink } from "./react-bits/specular-button"

export function Pricing({ lang, t }) {
  const isRTL = lang === "ar"
  const [period, setPeriod] = useState("monthly")

  const getPrice = (plan) => {
    if (period === "yearly") {
      const monthly = parseFloat(plan.price.replace(/\s/g, ""))
      return { price: Math.round(monthly * 12 * 0.8).toLocaleString(), original: (monthly * 12).toLocaleString(), label: isRTL ? "سنوياً" : "/an" }
    }
    return { price: plan.price, original: null, label: isRTL ? "شهرياً" : "/mois" }
  }

  return (
    <section id="pricing" className={`section ${isRTL ? "rtl" : ""}`}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 sm:mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="badge mx-auto mb-6"><Sparkles className="w-3.5 h-3.5" />{isRTL ? "الأسعار" : "TARIFS"}</motion.div>
          <div className="divider mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">{t.pricing.title}</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">{t.pricing.subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className={`text-sm font-medium ${period === "monthly" ? "text-[var(--text)]" : "text-[var(--text-muted)]"}`}>{isRTL ? "شهري" : "Mensuel"}</span>
            <SpecularButton
              onClick={() => setPeriod(period === "monthly" ? "yearly" : "monthly")}
              variant="ghost"
              size="toggle"
              aria-label={isRTL ? "تغيير فترة الدفع" : "Changer la période de paiement"}
              aria-pressed={period === "yearly"}
            >
              <motion.div className="w-6 h-6 bg-[var(--text)] rounded-full shadow-sm" animate={{ x: period === "monthly" ? 0 : 26 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />
            </SpecularButton>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${period === "yearly" ? "text-[var(--text)]" : "text-[var(--text-muted)]"}`}>{isRTL ? "سنوي" : "Annuel"}</span>
              {period === "yearly" && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-[var(--brand-soft)] text-[var(--brand-hover)] text-xs px-2 py-1 rounded-full font-bold">{isRTL ? "٢٠٪ خصم" : "-20%"}</motion.span>}
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan, i) => {
            const p = getPrice(plan)
            return (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -4 }} className={`card-accent h-full flex flex-col p-5 sm:p-8 ${plan.popular ? "border-[rgba(124,58,237,0.2)] shadow-[var(--shadow-brand)]" : ""}`}>
                {plan.popular && <div className="absolute -top-3 right-6 bg-[var(--brand)] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-[var(--shadow-brand)]"><Crown className="w-3.5 h-3.5 fill-current" />{isRTL ? "الأكثر طلباً" : "Plus Populaire"}</div>}
                <h3 className="text-xl font-semibold flex items-center gap-2">{plan.name}{plan.popular && <BadgeCheck className="w-5 h-5 text-[var(--brand-hover)]" />}</h3>
                <div className="mt-4 mb-6 min-w-0"><span className="break-words text-4xl font-bold lg:text-5xl">{p.price}</span><span className="ms-2 text-base text-[var(--text-muted)] sm:text-lg">{plan.currency}{p.label}</span>{p.original && <p className="mt-1 text-sm text-[var(--text-muted)] line-through">{p.original} {plan.currency}</p>}</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--success-soft)] flex items-center justify-center mt-0.5 flex-shrink-0"><Check className="w-3 h-3 text-[var(--success)]" /></div>
                      <span className="text-sm text-[var(--text-secondary)]">{f}</span>
                    </li>
                  ))}
                </ul>
                <SpecularLink href="https://wa.me/212645288216" target="_blank" rel="noopener noreferrer" variant={plan.popular ? "primary" : "ghost"} className="w-full">
                  <MessageCircle className="w-4 h-4" />{t.pricing.cta}
                </SpecularLink>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-[var(--text-muted)] text-sm mb-6">{isRTL ? "جميع الأسعار تشمل الضريبة" : "Tous les prix incluent taxes et garantie"}</p>
          <SpecularLink href="https://wa.me/212645288216" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />{isRTL ? "استشارة مجانية" : "Consultation Gratuite"}
          </SpecularLink>
        </div>
      </div>
    </section>
  )
}
