"use client"

import { ArrowUpRight } from "lucide-react"
import { openWhatsApp } from "../lib/leads"

export function Contact({ lang }) {
  const isEnglish = lang === "en"
  const submit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget).entries())
    const message = isEnglish ? `Hello, I’d like to discuss a project.\nName: ${data.name}\nPhone: ${data.phone}\nProject: ${data.message}` : `Bonjour, je souhaite discuter d’un projet.\nNom: ${data.name}\nTéléphone: ${data.phone}\nProjet: ${data.message}`
    openWhatsApp(message, "contact_form", { language: lang })
  }
  return <section id="contact" className="nm-contact section"><div className="container nm-contact__grid"><div><span className="nm-index">07</span><p className="nm-kicker">{isEnglish ? "NEW PROJECT" : "NOUVEAU PROJET"}</p><h2>{isEnglish ? "Let’s build something clear and useful." : "Construisons quelque chose de clair et d’utile."}</h2><p>{isEnglish ? "Share your context and goals. We’ll respond with a clear initial direction within 24 hours." : "Partagez votre contexte et vos objectifs. Nous vous répondons avec une première direction claire sous 24h."}</p><div className="nm-contact__details"><a href="mailto:contact@nemsimedia.ma">contact@nemsimedia.ma</a><a href="tel:+212645288216">+212 6 45 28 82 16</a><span>Casablanca, Maroc</span></div></div><form onSubmit={submit}><label>{isEnglish ? "Name / company" : "Nom / entreprise"}<input required name="name" autoComplete="name" /></label><label>{isEnglish ? "Phone" : "Téléphone"}<input required name="phone" autoComplete="tel" /></label><label>{isEnglish ? "Tell us about your project" : "Parlez-nous du projet"}<textarea required name="message" rows="5" /></label><button className="nm-button nm-button--primary" type="submit">{isEnglish ? "Continue on WhatsApp" : "Continuer sur WhatsApp"}<ArrowUpRight aria-hidden="true" /></button></form></div></section>
}
