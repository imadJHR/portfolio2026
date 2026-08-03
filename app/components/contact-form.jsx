"use client"

import { useState } from "react"
import { SpecularButton } from "./react-bits/specular-button"
import { MessageCircle } from "lucide-react"
import { openWhatsApp } from "../lib/leads"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Bonjour Nemsi Media, je souhaite discuter de mon projet.\n\nNom: ${form.name}\nEmail: ${form.email}\nTéléphone: ${form.phone}\nMessage: ${form.message}`
    openWhatsApp(text, "contact_page", { language: "fr" })
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-8 text-center">
        <p className="text-lg font-semibold">Message prêt à envoyer !</p>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">Vous allez être redirigé vers WhatsApp pour finaliser votre message.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-semibold">Nom complet</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-sm"
          placeholder="Ahmed Benali"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-sm"
          placeholder="ahmed@exemple.ma"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold">Téléphone</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-sm"
          placeholder="+212 6 00 00 00 00"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-sm"
          placeholder="Décrivez votre projet, vos objectifs et votre budget..."
        />
      </div>
      <SpecularButton type="submit" className="w-full">
        <MessageCircle className="h-4 w-4" />
        Envoyer via WhatsApp
      </SpecularButton>
    </form>
  )
}
