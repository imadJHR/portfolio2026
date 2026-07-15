"use client"

import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Code,
  Gauge,
  LayoutDashboard,
  MessageCircle,
  MousePointer2,
  Palette,
  Search,
  Server,
  ShieldCheck,
  ShoppingCart,
  Wrench,
} from "lucide-react"
import Navbar from "./navbar"
import Footer from "./footer"
import { AnimatedSection, StaggerSection } from "./gsap-animations"
import { Strands } from "./react-bits/strands"
import { SpecularButton, SpecularLink } from "./react-bits/specular-button"
import { openWhatsApp } from "../lib/leads"

const iconMap = { Code, Palette, MousePointer2, ShoppingCart, Search, Wrench, LayoutDashboard, Server }

const ui = {
  fr: {
    home: "Accueil",
    services: "Services",
    cta: "Parler de ce projet",
    discover: "Découvrir notre approche",
    signals: ["Sur mesure", "Mobile-first", "Orienté conversion"],
    module: "Système de service",
    moduleSteps: ["Comprendre", "Concevoir", "Déployer"],
    introEyebrow: "Pourquoi cette solution",
    benefitsEyebrow: "Impact concret",
    benefitsTitle: "Une solution pensée autour de vos priorités",
    deliverablesEyebrow: "Livrables",
    deliverablesTitle: "Ce que nous construisons avec vous",
    processEyebrow: "Méthode",
    processTitle: "Un processus lisible du cadrage au lancement",
    audience: "Cette solution est adaptée à",
    faqEyebrow: "FAQ",
    faqTitle: "Les questions à clarifier avant de commencer",
    relatedEyebrow: "Services associés",
    relatedTitle: "Construire un dispositif digital complet",
    relatedLink: "Découvrir le service",
    finalTitle: "Transformons votre besoin en plan d’action clair.",
    finalText: "Expliquez-nous votre objectif. Nous vous répondons avec une première direction adaptée à votre contexte.",
    finalCta: "Démarrer sur WhatsApp",
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    cta: "ناقش هذا المشروع",
    discover: "اكتشف طريقة عملنا",
    signals: ["حسب الطلب", "مصمم للهاتف", "موجه للتحويل"],
    module: "نظام الخدمة",
    moduleSteps: ["الفهم", "التصميم", "الإطلاق"],
    introEyebrow: "لماذا هذه الخدمة",
    benefitsEyebrow: "أثر واضح",
    benefitsTitle: "حل مبني حول أولويات مشروعك",
    deliverablesEyebrow: "المخرجات",
    deliverablesTitle: "ما الذي نبنيه معك",
    processEyebrow: "المنهجية",
    processTitle: "مسار واضح من تحديد المشروع إلى الإطلاق",
    audience: "هذه الخدمة مناسبة لـ",
    faqEyebrow: "أسئلة شائعة",
    faqTitle: "أسئلة مهمة قبل بداية المشروع",
    relatedEyebrow: "خدمات مرتبطة",
    relatedTitle: "ابنِ منظومة رقمية متكاملة",
    relatedLink: "اكتشف الخدمة",
    finalTitle: "لنحول حاجتك إلى خطة عمل واضحة.",
    finalText: "اشرح لنا هدفك وسنجيبك بتصور أولي مناسب لسياق مشروعك.",
    finalCta: "ابدأ عبر واتساب",
  },
}

export function ServiceDetailPage({ slug, icon, content, relatedServices, lang }) {
  const isRTL = lang === "ar"
  const copy = ui[lang]
  const ServiceIcon = iconMap[icon] || Code
  const BackIcon = isRTL ? ArrowRight : ArrowLeft
  const NextIcon = isRTL ? ArrowLeft : ArrowRight

  const handleLead = () => {
    openWhatsApp(
      isRTL
        ? `مرحبا Nemsi Media، أود مناقشة خدمة ${content.name} لمشروعي.`
        : `Bonjour Nemsi Media, je souhaite discuter du service ${content.name} pour mon projet.`,
      "service_detail_page",
      { service: slug, language: lang },
    )
  }

  return (
    <div className={isRTL ? "rtl" : "ltr"} dir={isRTL ? "rtl" : "ltr"}>
      <Navbar lang={lang} />
      <main>
        <section className="service-detail-hero">
          <Strands colors={["#24d9ff", "#7567ff", "#ff5bd7"]} count={4} speed={0.28} amplitude={0.9} opacity={0.52} className="z-[1]" />
          <div className="absolute inset-0 grid-pattern opacity-45" />
          <div className="orb orb-cyan -left-40 top-20 h-[30rem] w-[30rem]" />
          <div className="orb orb-violet -right-32 top-10 h-[34rem] w-[34rem]" />

          <div className="container service-detail-hero-grid relative z-10">
            <div className="service-detail-copy">
              <nav className="service-breadcrumb" aria-label={isRTL ? "مسار الصفحة" : "Fil d’Ariane"}>
                <Link href={`/${lang}`}>{copy.home}</Link>
                <span>/</span>
                <Link href={`/${lang}#services`}>{copy.services}</Link>
                <span>/</span>
                <span aria-current="page">{content.name}</span>
              </nav>

              <div className="badge mt-8"><span className="badge-dot" aria-hidden="true" />{content.eyebrow}</div>
              <h1 className="service-detail-title">{content.title}</h1>
              <p className="service-detail-highlight gradient-text">{content.highlight}</p>
              <p className="service-detail-description">{content.description}</p>

              <div className="service-detail-actions">
                <SpecularButton onClick={handleLead}>
                  <MessageCircle className="h-4 w-4" />{copy.cta}
                </SpecularButton>
                <SpecularLink href="#details" variant="ghost" className="px-6 py-4">{copy.discover}<NextIcon className="h-4 w-4" /></SpecularLink>
              </div>

              <div className="service-detail-signals" aria-label={isRTL ? "مميزات الخدمة" : "Points clés"}>
                {copy.signals.map((signal) => <span key={signal}><Check className="h-3.5 w-3.5" />{signal}</span>)}
              </div>
            </div>

            <div className="service-detail-module" aria-hidden="true">
              <div className="service-detail-module-bar"><div><span /><span /><span /></div><small>{slug}</small></div>
              <div className="service-detail-module-icon"><ServiceIcon className="h-8 w-8" /></div>
              <p>{copy.module}</p>
              <strong>{content.name}</strong>
              <div className="service-detail-module-flow">
                {copy.moduleSteps.map((step, index) => (
                  <div key={step}><span>0{index + 1}</span><b>{step}</b><Check className="h-4 w-4" /></div>
                ))}
              </div>
              <div className="service-detail-module-meter"><span /></div>
            </div>
          </div>
        </section>

        <section id="details" className="section service-detail-intro">
          <div className="container grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
            <AnimatedSection>
              <div className="badge mb-5"><Gauge className="h-3.5 w-3.5" />{copy.introEyebrow}</div>
              <h2 className="max-w-3xl text-3xl sm:text-5xl">{content.introTitle}</h2>
              <div className="service-rich-copy">
                {content.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.12} className="service-audience-card">
              <ShieldCheck className="h-7 w-7 text-[var(--brand-2)]" />
              <h3>{copy.audience}</h3>
              <ul>{content.audiences.map((audience) => <li key={audience}><Check className="h-4 w-4" />{audience}</li>)}</ul>
            </AnimatedSection>
          </div>
        </section>

        <section className="section service-detail-benefits">
          <div className="container">
            <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
              <div className="badge mx-auto mb-5"><span className="badge-dot" aria-hidden="true" />{copy.benefitsEyebrow}</div>
              <h2 className="text-3xl sm:text-5xl">{copy.benefitsTitle}</h2>
            </AnimatedSection>
            <StaggerSection staggerAmount={0.08}>
              <div className="service-benefit-grid">
                {content.benefits.map((benefit, index) => (
                  <article key={benefit.title} className="service-benefit-card">
                    <span>0{index + 1}</span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </article>
                ))}
              </div>
            </StaggerSection>
          </div>
        </section>

        <section className="section">
          <div className="container service-deliverables-shell">
            <AnimatedSection className="service-deliverables-heading">
              <div className="badge mb-5"><Code className="h-3.5 w-3.5" />{copy.deliverablesEyebrow}</div>
              <h2 className="text-3xl sm:text-5xl">{copy.deliverablesTitle}</h2>
            </AnimatedSection>
            <StaggerSection staggerAmount={0.06}>
              <div className="service-deliverables-grid">
                {content.deliverables.map((deliverable, index) => (
                  <div key={deliverable}><span>{String(index + 1).padStart(2, "0")}</span><strong>{deliverable}</strong><Check className="h-4 w-4" /></div>
                ))}
              </div>
            </StaggerSection>
          </div>
        </section>

        <section className="section service-process-section">
          <div className="container">
            <AnimatedSection className="mb-12 max-w-3xl">
              <div className="badge mb-5"><LayoutDashboard className="h-3.5 w-3.5" />{copy.processEyebrow}</div>
              <h2 className="text-3xl sm:text-5xl">{copy.processTitle}</h2>
            </AnimatedSection>
            <div className="service-process-grid">
              {content.process.map((step, index) => (
                <AnimatedSection key={step.title} delay={index * 0.07} className="service-process-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
            <AnimatedSection>
              <div className="badge mb-5"><MessageCircle className="h-3.5 w-3.5" />{copy.faqEyebrow}</div>
              <h2 className="text-3xl sm:text-5xl">{copy.faqTitle}</h2>
            </AnimatedSection>
            <div className="service-faq-list">
              {content.faq.map((item, index) => (
                <details key={item.q} className="group service-faq-item" open={index === 0}>
                  <summary><span>{item.q}</span><ChevronDown className="h-5 w-5" /></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section service-related-section">
          <div className="container">
            <AnimatedSection className="mb-10 max-w-3xl">
              <div className="badge mb-5"><span className="badge-dot" aria-hidden="true" />{copy.relatedEyebrow}</div>
              <h2 className="text-3xl sm:text-5xl">{copy.relatedTitle}</h2>
            </AnimatedSection>
            <div className="service-related-grid">
              {relatedServices.map((related) => {
                const RelatedIcon = iconMap[related.icon] || Code
                return (
                  <Link key={related.slug} href={`/${lang}/services/${related.slug}`} className="service-related-card">
                    <div><RelatedIcon className="h-5 w-5" /></div>
                    <h3>{related.name}</h3>
                    <p>{related.description}</p>
                    <span>{copy.relatedLink}<NextIcon className="h-4 w-4" /></span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container">
            <AnimatedSection className="service-final-cta">
              <div>
                <p>{content.eyebrow}</p>
                <h2>{copy.finalTitle}</h2>
                <span>{copy.finalText}</span>
              </div>
              <SpecularButton onClick={handleLead}><MessageCircle className="h-4 w-4" />{copy.finalCta}</SpecularButton>
            </AnimatedSection>
          </div>
        </section>

        <Link href={`/${lang}#services`} className="service-back-link"><BackIcon className="h-4 w-4" />{copy.services}</Link>
      </main>
      <Footer lang={lang} />
    </div>
  )
}
