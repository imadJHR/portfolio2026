"use client"

import { useState } from "react"
import { X, Send, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  { value: "", label: "Sélectionnez un service" },
  { value: "branding", label: "Branding & identité" },
  { value: "design-graphique", label: "Design graphique" },
  { value: "photo-video", label: "Photo & vidéo" },
  { value: "social-media", label: "Réseaux sociaux" },
  { value: "influence", label: "Marketing influence" },
  { value: "publicite-payante", label: "Publicité payante" },
  { value: "email-marketing", label: "Email marketing" },
  { value: "site-web", label: "Site web premium" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "seo", label: "SEO & visibilité" },
  { value: "app", label: "Application web" },
  { value: "autre", label: "Autre" },
]

const budgets = [
  { value: "", label: "Budget estimé" },
  { value: "moins-10k", label: "< 10 000 MAD" },
  { value: "10k-30k", label: "10 000 - 30 000 MAD" },
  { value: "30k-60k", label: "30 000 - 60 000 MAD" },
  { value: "60k-plus", label: "> 60 000 MAD" },
]

export default function QuoteFormModal({ isOpen, onClose, lang }) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    need: "",
  })

  const isRTL = lang === "ar"

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const serviceLabel = services.find((s) => s.value === form.service)?.label || form.service
    const budgetLabel = budgets.find((b) => b.value === form.budget)?.label || form.budget

    const message = lang === "ar"
      ? `مرحباً، أود طلب عرض سعر.%0A%0A*الاسم:* ${encodeURIComponent(form.name)}%0A*البريد:* ${encodeURIComponent(form.email)}%0A*الهاتف:* ${encodeURIComponent(form.phone)}%0A*الخدمة:* ${encodeURIComponent(serviceLabel)}%0A*الميزانية:* ${encodeURIComponent(budgetLabel)}%0A*الاحتياج:* ${encodeURIComponent(form.need)}`
      : `Bonjour, je souhaite recevoir un devis.%0A%0A*Nom:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Téléphone:* ${encodeURIComponent(form.phone)}%0A*Service:* ${encodeURIComponent(serviceLabel)}%0A*Budget:* ${encodeURIComponent(budgetLabel)}%0A*Besoins:* ${encodeURIComponent(form.need)}`

    setTimeout(() => {
      window.open(`https://wa.me/212709120432?text=${message}`, "_blank")
      setLoading(false)
      setForm({ name: "", email: "", phone: "", service: "", budget: "", need: "" })
      onClose?.()
    }, 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            dir={isRTL ? "rtl" : "ltr"}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-2xl sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition hover:text-[var(--text)] sm:right-4 sm:top-4"
              aria-label={lang === "fr" ? "Fermer" : "إغلاق"}
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-black sm:text-3xl">
                {lang === "fr" ? "Demandez votre devis gratuit" : "اطلب عرض سعر مجاني"}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {lang === "fr"
                  ? "Décrivez votre besoin, nous vous répondons sur WhatsApp sous 24h."
                  : "صف احتياجك، وسنرد عليك عبر واتساب خلال 24 ساعة."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    {lang === "fr" ? "Nom complet" : "الاسم الكامل"} *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
                    placeholder={lang === "fr" ? "Jean Dupont" : "محمد أحمد"}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    {lang === "fr" ? "Téléphone" : "الهاتف"} *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
                    placeholder="+212 6XX-XXXXXX"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  {lang === "fr" ? "Email" : "البريد الإلكتروني"}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
                  placeholder={lang === "fr" ? "contact@exemple.ma" : "contact@example.ma"}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    {lang === "fr" ? "Service souhaité" : "الخدمة المطلوبة"}
                  </label>
                  <select
                    value={form.service}
                    onChange={handleChange("service")}
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
                  >
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    {lang === "fr" ? "Budget estimé" : "الميزانية المتوقعة"}
                  </label>
                  <select
                    value={form.budget}
                    onChange={handleChange("budget")}
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
                  >
                    {budgets.map((b) => (
                      <option key={b.value} value={b.value}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  {lang === "fr" ? "Décrivez votre besoin" : "صف احتياجك"} *
                </label>
                <textarea
                  required
                  rows="4"
                  value={form.need}
                  onChange={handleChange("need")}
                  className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
                  placeholder={lang === "fr" ? "Parlez-nous de votre projet, objectifs, délais..." : "تحدث إلينا عن مشروعك، أهدافك، المواعيد..."}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {lang === "fr" ? "Envoyer sur WhatsApp" : "إرسال عبر واتساب"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
