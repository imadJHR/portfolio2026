"use client"

import { useState } from "react"
import {
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle,
  Clock3,
  ArrowRight,
} from "lucide-react"
import { AnimatedSection, StaggerSection } from "./gsap-animations"
import { openWhatsApp } from "../lib/leads"
import { SpecularButton } from "./react-bits/specular-button"

export function Contact({ lang }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const isRTL = lang === "ar"

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    const form = new FormData(event.currentTarget)
    const data = Object.fromEntries(form.entries())
    const message = isRTL
      ? `مرحبا Nemsi Media، أود الحصول على عرض لمشروعي.\n\nالاسم: ${data.name}\nالبريد: ${data.email || "غير محدد"}\nالهاتف: ${data.phone || "غير محدد"}\nنوع المشروع: ${data.subject}\nالتفاصيل: ${data.message}`
      : `Bonjour Nemsi Media, je souhaite recevoir une proposition pour mon projet.\n\nNom : ${data.name}\nEmail : ${data.email || "Non renseigné"}\nTéléphone : ${data.phone || "Non renseigné"}\nProjet : ${data.subject}\nDétails : ${data.message}`

    openWhatsApp(message, "contact_form", { service: data.subject, language: lang })
    setLoading(false)
    setSubmitted(true)
  }

  const handleWhatsApp = () => {
    openWhatsApp(
      isRTL ? "مرحبا، أود مناقشة مشروعي معكم." : "Bonjour, j’aimerais discuter de mon projet web avec vous.",
      "contact_direct",
      { language: lang },
    )
  }

  const info = [
    { icon: Phone, label: isRTL ? "هاتف" : "Téléphone", value: "+212 6 45 28 82 16", href: "tel:+212645288216" },
    { icon: Mail, label: "Email", value: "contact@nemsimedia.ma", href: "mailto:contact@nemsimedia.ma" },
    { icon: MapPin, label: isRTL ? "الموقع" : "Adresse", value: isRTL ? "الدار البيضاء، المغرب" : "Casablanca, Maroc" },
    { icon: Clock3, label: isRTL ? "سرعة الرد" : "Réponse", value: isRTL ? "خلال 24 ساعة" : "Sous 24h" },
  ]

  if (submitted) {
    return (
      <section id="contact" className="section" dir={isRTL ? "rtl" : "ltr"}>
        <div className="container">
          <AnimatedSection className="glass-card mx-auto max-w-xl p-5 text-center sm:p-8">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--success-soft)] text-[var(--success)]">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h2 className="gradient-text">{isRTL ? "تم فتح واتساب" : "WhatsApp est prêt"}</h2>
            <p className="mt-4">
              {isRTL ? "أرسل الرسالة في واتساب وسنجيبك خلال 24 ساعة." : "Envoyez le message dans WhatsApp. Nous vous répondons sous 24h."}
            </p>
            <SpecularButton onClick={() => setSubmitted(false)} variant="ghost" className="mt-8">
              {isRTL ? "تعديل الطلب" : "Modifier ma demande"}
            </SpecularButton>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="orb orb-pink right-[-10rem] top-10 h-[28rem] w-[28rem]" />
      <div className="container">
        <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="badge mx-auto mb-4"><Sparkles className="h-3.5 w-3.5" />{isRTL ? "اتصل بنا" : "Contact"}</div>
          <div className="divider mb-6" />
          <h2>{isRTL ? "جاهز لبناء" : "Prêt à créer"} <span className="gradient-text">{isRTL ? "نسختك الرقمية؟" : "votre nouvelle vitrine ?"}</span></h2>
          <p className="mx-auto mt-6 max-w-2xl">{isRTL ? "أرسل لنا فكرة مشروعك وسنقترح عليك المسار الأفضل." : "Décrivez votre objectif et recevez une première direction claire, design et technique."}</p>
        </AnimatedSection>

        <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-8">
          <div className="min-w-0 space-y-5">
            <StaggerSection staggerAmount={0.08}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {info.map((item) => (
                  <div key={item.label} className="glass-card min-w-0 p-4 sm:p-5">
                    {item.href ? (
                      <a href={item.href} className="flex min-w-0 items-center gap-3 sm:gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-hover)] sm:h-12 sm:w-12"><item.icon className="h-5 w-5" /></div>
                        <div className="min-w-0"><p className="text-xs font-black uppercase tracking-[.18em] text-[var(--text-muted)]">{item.label}</p><p className="break-words text-sm font-bold text-[var(--text)]">{item.value}</p></div>
                      </a>
                    ) : (
                      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-hover)] sm:h-12 sm:w-12"><item.icon className="h-5 w-5" /></div>
                        <div className="min-w-0"><p className="text-xs font-black uppercase tracking-[.18em] text-[var(--text-muted)]">{item.label}</p><p className="break-words text-sm font-bold text-[var(--text)]">{item.value}</p></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </StaggerSection>
            <div className="glass-card p-6">
              <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--text-muted)]">{isRTL ? "أسرع طريق" : "Le chemin le plus rapide"}</p>
              <h3 className="mt-2 text-2xl">WhatsApp direct</h3>
              <p className="mt-3 text-sm">{isRTL ? "أرسل لنا رابطاً أو فكرة وسنجيبك مباشرة." : "Envoyez un lien, une idée ou une référence. On vous répond rapidement."}</p>
              <SpecularButton onClick={handleWhatsApp} className="mt-5 w-full"><MessageCircle className="h-4 w-4" />WhatsApp <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} /></SpecularButton>
            </div>
          </div>

          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="glass-card min-w-0 p-4 sm:p-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${lang}-lead-name`} className="mb-2 block text-xs font-black uppercase tracking-[.16em] text-[var(--text-muted)]">{isRTL ? "الاسم الكامل" : "Nom complet"}</label>
                  <input id={`${lang}-lead-name`} name="name" type="text" autoComplete="name" required placeholder={isRTL ? "اسمك" : "Votre nom"} className="input" />
                </div>
                <div>
                  <label htmlFor={`${lang}-lead-email`} className="mb-2 block text-xs font-black uppercase tracking-[.16em] text-[var(--text-muted)]">Email <span className="normal-case opacity-70">({isRTL ? "اختياري" : "optionnel"})</span></label>
                  <input id={`${lang}-lead-email`} name="email" type="email" autoComplete="email" placeholder="email@exemple.com" className="input" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${lang}-lead-phone`} className="mb-2 block text-xs font-black uppercase tracking-[.16em] text-[var(--text-muted)]">{isRTL ? "الهاتف" : "Téléphone"} <span className="normal-case opacity-70">({isRTL ? "اختياري" : "optionnel"})</span></label>
                  <input id={`${lang}-lead-phone`} name="phone" type="tel" autoComplete="tel" placeholder="+212 6XX XXX XXX" className="input" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${lang}-lead-subject`} className="mb-2 block text-xs font-black uppercase tracking-[.16em] text-[var(--text-muted)]">{isRTL ? "الموضوع" : "Sujet"}</label>
                  <select id={`${lang}-lead-subject`} name="subject" required className="input" defaultValue="">
                    <option value="" disabled>{isRTL ? "اختر الموضوع" : "Sélectionnez un sujet"}</option>
                    <option value={isRTL ? "تصميم موقع" : "Création de site web"}>{isRTL ? "تصميم موقع" : "Création de site web"}</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value={isRTL ? "إعادة تصميم" : "Refonte de site"}>{isRTL ? "إعادة تصميم" : "Refonte de site"}</option>
                    <option value="SEO">SEO</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${lang}-lead-message`} className="mb-2 block text-xs font-black uppercase tracking-[.16em] text-[var(--text-muted)]">{isRTL ? "رسالتك" : "Message"}</label>
                  <textarea id={`${lang}-lead-message`} name="message" rows={5} required placeholder={isRTL ? "صف مشروعك..." : "Décrivez votre projet et votre objectif..."} className="input resize-none" />
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-[var(--text-muted)]">{isRTL ? "بالضغط، سيتم إعداد طلبك في واتساب. لا يتم تخزين بياناتك في الموقع." : "En continuant, votre demande sera préparée dans WhatsApp. Ces informations ne sont pas stockées sur le site."}</p>
              <SpecularButton type="submit" disabled={loading} className="mt-5 w-full">
                {loading ? <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" /> : <><Send className="h-4 w-4" />{isRTL ? "المتابعة عبر واتساب" : "Continuer sur WhatsApp"}</>}
              </SpecularButton>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
