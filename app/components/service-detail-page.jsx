import Link from "next/link"
import { ArrowUpRight, Check, ChevronDown } from "lucide-react"
import Navbar from "./navbar"
import Footer from "./footer"
import { WHATSAPP_NUMBER } from "../lib/leads"

const labels = {
  fr: { back: "Expertises", project: "Parler de ce projet", intro: "POURQUOI", audience: "Cette expertise est adaptée à", impact: "IMPACT", impactTitle: "Ce que cette solution change concrètement.", deliverables: "LIVRABLES", deliverablesTitle: "Ce que nous construisons avec vous.", method: "MÉTHODE", methodTitle: "Un processus lisible, du cadrage au lancement.", faq: "QUESTIONS", related: "EXPERTISES ASSOCIÉES", final: "Transformons votre besoin en plan d’action clair.", finalText: "Expliquez-nous l’objectif. Nous revenons avec une première direction adaptée à votre contexte." },
  ar: { back: "الخبرات", project: "ناقش هذا المشروع", intro: "لماذا", audience: "هذه الخبرة مناسبة لـ", impact: "الأثر", impactTitle: "ما الذي يتغير فعلياً مع هذه الخدمة.", deliverables: "المخرجات", deliverablesTitle: "ما الذي نبنيه معك.", method: "المنهج", methodTitle: "مسار واضح من تحديد المشروع إلى الإطلاق.", faq: "الأسئلة", related: "خبرات مرتبطة", final: "لنحول حاجتك إلى خطة عمل واضحة.", finalText: "اشرح لنا الهدف وسنعود إليك باتجاه أولي يناسب سياق مشروعك." },
}

export function ServiceDetailPage({ slug, content, relatedServices, lang }) {
  const isRTL = lang === "ar"
  const copy = labels[lang]
  const message = isRTL ? `مرحبا، أود مناقشة خدمة ${content.name}.` : `Bonjour, je souhaite discuter du service ${content.name}.`
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return <div dir={isRTL ? "rtl" : "ltr"}><Navbar lang={lang} /><main>
    <section id="home" className="nm-service-hero"><div className="container"><nav><Link href={`/${lang}/services`}>{copy.back}</Link><span>/</span><span>{content.name}</span></nav><div className="nm-service-hero__grid"><div><p className="nm-kicker">{content.name}</p><h1>{content.title}</h1></div><div><strong>{content.highlight}</strong><p>{content.description}</p><a className="nm-button nm-button--primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">{copy.project}<ArrowUpRight /></a></div></div></div></section>
    <section className="nm-service-intro section"><div className="container"><div className="nm-section-heading"><span className="nm-index">01</span><p className="nm-kicker">{copy.intro}</p><h2>{content.introTitle}</h2></div><div className="nm-service-intro__grid"><div>{content.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><aside><p className="nm-kicker">{copy.audience}</p>{content.audiences.map((audience) => <span key={audience}><Check />{audience}</span>)}</aside></div></div></section>
    <section className="nm-service-block section"><div className="container"><div className="nm-section-heading"><span className="nm-index">02</span><p className="nm-kicker">{copy.impact}</p><h2>{copy.impactTitle}</h2></div><div className="nm-service-benefits">{content.benefits.map((benefit, index) => <article key={benefit.title}><span>0{index + 1}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div></div></section>
    <section className="nm-service-deliverables section"><div className="container"><div className="nm-section-heading"><span className="nm-index">03</span><p className="nm-kicker">{copy.deliverables}</p><h2>{copy.deliverablesTitle}</h2></div><div>{content.deliverables.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><Check /></p>)}</div></div></section>
    <section className="nm-process section"><div className="container"><div className="nm-section-heading"><span className="nm-index">04</span><p className="nm-kicker">{copy.method}</p><h2>{copy.methodTitle}</h2></div><div className="nm-service-process">{content.process.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
    <section className="nm-service-faq section"><div className="container"><div className="nm-service-faq__heading"><span className="nm-index">05</span><p className="nm-kicker">{copy.faq}</p></div><div>{content.faq.map((item, index) => <details key={item.q} open={index === 0}><summary><span>0{index + 1}</span>{item.q}<ChevronDown /></summary><p>{item.a}</p></details>)}</div></div></section>
    <section className="nm-related section"><div className="container"><p className="nm-kicker">{copy.related}</p><div>{relatedServices.map((service, index) => <Link key={service.slug} href={`/${lang}/services/${service.slug}`}><span>0{index + 1}</span><h3>{service.name}</h3><p>{service.description}</p><ArrowUpRight /></Link>)}</div></div></section>
    <section className="nm-service-cta"><div className="container"><div><h2>{copy.final}</h2><p>{copy.finalText}</p></div><a className="nm-button nm-button--primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">{copy.project}<ArrowUpRight /></a></div></section>
  </main><Footer lang={lang} /></div>
}
