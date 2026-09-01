"use client"

import { ArrowUpRight } from "lucide-react"
import { openWhatsApp } from "../lib/leads"

export function Contact({ lang }) {
  const isRTL = lang === "ar"
  const submit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget).entries())
    const message = isRTL ? `مرحبا، أود مناقشة مشروع.\nالاسم: ${data.name}\nالهاتف: ${data.phone}\nالمشروع: ${data.message}` : `Bonjour, je souhaite discuter d’un projet.\nNom: ${data.name}\nTéléphone: ${data.phone}\nProjet: ${data.message}`
    openWhatsApp(message, "contact_form", { language: lang })
  }
  return <section id="contact" className="nm-contact section" dir={isRTL ? "rtl" : "ltr"}><div className="container nm-contact__grid"><div><span className="nm-index">07</span><p className="nm-kicker">{isRTL ? "مشروع جديد" : "NOUVEAU PROJET"}</p><h2>{isRTL ? "لنصنع شيئاً واضحاً ومفيداً." : "Construisons quelque chose de clair et d’utile."}</h2><p>{isRTL ? "شاركنا سياقك وأهدافك. سنجيبك باتجاه أولي واضح خلال 24 ساعة." : "Partagez votre contexte et vos objectifs. Nous vous répondons avec une première direction claire sous 24h."}</p><div className="nm-contact__details"><a href="mailto:contact@nemsimedia.ma">contact@nemsimedia.ma</a><a href="tel:+212645288216">+212 6 45 28 82 16</a><span>Casablanca, Maroc</span></div></div><form onSubmit={submit}><label>{isRTL ? "الاسم" : "Nom / entreprise"}<input required name="name" autoComplete="name" /></label><label>{isRTL ? "الهاتف" : "Téléphone"}<input required name="phone" autoComplete="tel" /></label><label>{isRTL ? "أخبرنا عن المشروع" : "Parlez-nous du projet"}<textarea required name="message" rows="5" /></label><button className="nm-button nm-button--primary" type="submit">{isRTL ? "إرسال عبر واتساب" : "Continuer sur WhatsApp"}<ArrowUpRight aria-hidden="true" /></button></form></div></section>
}
