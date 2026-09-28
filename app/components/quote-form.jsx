"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"

const englishServices = ["Branding & identity", "Graphic design", "Photo & video", "Social media", "Influencer marketing", "Paid advertising", "Email marketing", "Premium website", "E-commerce", "SEO & visibility", "Web application", "Other"]

const services = [
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

const englishBudgets = ["Estimated budget", "< 10,000 MAD", "10,000 - 30,000 MAD", "30,000 - 60,000 MAD", "> 60,000 MAD"]

const budgets = [
  { value: "", label: "Budget estimé" },
  { value: "moins-10k", label: "< 10 000 MAD" },
  { value: "10k-30k", label: "10 000 - 30 000 MAD" },
  { value: "30k-60k", label: "30 000 - 60 000 MAD" },
  { value: "60k-plus", label: "> 60 000 MAD" },
]

export default function QuoteForm({ lang }) {
  const [loading, setLoading] = useState(false)
  const isEnglish = lang === "en"
  const localizedServices = isEnglish ? services.map((service, index) => ({ ...service, label: englishServices[index] })) : services
  const localizedBudgets = isEnglish ? budgets.map((budget, index) => ({ ...budget, label: englishBudgets[index] })) : budgets
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    budget: "",
    need: "",
  })

  const toggleService = (value) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(value) ? f.services.filter((s) => s !== value) : [...f.services, value],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const serviceLabels = form.services.map((val) => localizedServices.find((s) => s.value === val)?.label || val)
    const budgetLabel = localizedBudgets.find((b) => b.value === form.budget)?.label || form.budget

    const message =
      isEnglish ? `Hello, I would like to receive a quote.%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Services:* ${encodeURIComponent(serviceLabels.join(", "))}%0A*Budget:* ${encodeURIComponent(budgetLabel)}%0A*Needs:* ${encodeURIComponent(form.need)}` : `Bonjour, je souhaite recevoir un devis.%0A%0A*Nom:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Téléphone:* ${encodeURIComponent(form.phone)}%0A*Services:* ${encodeURIComponent(serviceLabels.join(", "))}%0A*Budget:* ${encodeURIComponent(budgetLabel)}%0A*Besoins:* ${encodeURIComponent(form.need)}`

    setTimeout(() => {
      window.open(`https://wa.me/212709120432?text=${message}`, "_blank")
      setLoading(false)
      setForm({ name: "", email: "", phone: "", services: [], budget: "", need: "" })
    }, 400)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
            {isEnglish ? "Full name" : "Nom complet"} *
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
            placeholder={isEnglish ? "Your full name" : "Votre nom complet"}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
            {isEnglish ? "Phone" : "Téléphone"} *
          </label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
            placeholder="+212 6XX-XXXXXX"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
          {isEnglish ? "Email" : "Email"}
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
          placeholder={isEnglish ? "contact@example.com" : "contact@exemple.ma"}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
          {isEnglish ? "Required services" : "Services souhaités"} *
        </label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {localizedServices.map((s) => {
            const checked = form.services.includes(s.value)
            return (
              <label
                key={s.value}
                className={`flex cursor-pointer items-center gap-2 rounded-2xl border px-4 py-3 text-sm transition ${
                  checked
                    ? "border-[var(--brand-hover)] bg-[var(--bg-card-hover)]"
                    : "border-[var(--border)] bg-[var(--bg)]"
                }`}
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[var(--border)]"
                  checked={checked}
                  onChange={() => toggleService(s.value)}
                />
                <span className="font-semibold">{s.label}</span>
              </label>
            )
          })}
        </div>
        <p className="text-xs text-[var(--text-muted)]">
          {isEnglish ? "You can select several services." : "Vous pouvez sélectionner plusieurs services."}
        </p>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
          {isEnglish ? "Estimated budget" : "Budget estimé"}
        </label>
        <select
          value={form.budget}
          onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
        >
          {localizedBudgets.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
          {isEnglish ? "Describe your needs" : "Décrivez votre besoin"} *
        </label>
        <textarea
          required
          rows="5"
          value={form.need}
          onChange={(e) => setForm((f) => ({ ...f, need: e.target.value }))}
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-hover)]"
          placeholder={isEnglish ? "Tell us about your project, goals and timeline..." : "Parlez-nous de votre projet, objectifs, délais..."}
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
        {isEnglish ? "Send via WhatsApp" : "Envoyer sur WhatsApp"}
      </button>
    </form>
  )
}
