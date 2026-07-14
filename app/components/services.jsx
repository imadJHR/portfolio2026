"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Code, ShoppingCart, Search, Rocket, ArrowRight, Sparkles, Palette, Wrench, CheckCircle, LayoutDashboard, Server, MessageCircle } from "lucide-react"
import { AnimatedSection, StaggerSection } from "./gsap-animations"
import { OptionWheel } from "./react-bits/option-wheel"
import { SpecularButton, SpecularLink } from "./react-bits/specular-button"
import { openWhatsApp } from "../lib/leads"

export function Services({ lang }) {
  const isRTL = lang === "ar"
  const handleWhatsApp = (title) => {
    openWhatsApp(
      `${isRTL ? "مرحبا، أود معرفة المزيد حول خدمتكم: " : "Bonjour, je souhaite en savoir plus sur votre service : "}${title}`,
      "service_cta",
      { service: title, language: lang },
    )
  }
  const services = [
    { slug: "creation-site-web-maroc", icon: Code, title: isRTL ? "تصميم وتطوير المواقع" : "Sites web premium", desc: isRTL ? "واجهات حديثة وسريعة ومتجاوبة" : "Interfaces rapides, éditables et responsive", features: ["Next.js", isRTL ? "تصميم زجاجي" : "Glass UI", isRTL ? "سرعة عالية" : "Core Web Vitals"] },
    { slug: "ui-ux-identite-visuelle", icon: Palette, title: isRTL ? "هوية وتجربة المستخدم" : "UI/UX & identité", desc: isRTL ? "نظام بصري يرفع الثقة" : "Design system clair pour crédibilité", features: [isRTL ? "ألوان" : "Palette", "Components", isRTL ? "حركة" : "Motion"] },
    { slug: "landing-page-maroc", icon: Rocket, title: isRTL ? "صفحات هبوط" : "Landing pages", desc: isRTL ? "صفحات مصممة للتحويل" : "Pages ads pensées pour convertir", features: ["CTA", "A/B ready", isRTL ? "نسخ إعلانية" : "Copywriting"] },
    { slug: "ecommerce-maroc", icon: ShoppingCart, title: isRTL ? "متاجر إلكترونية" : "E-commerce", desc: isRTL ? "كتالوج وطلب سلس" : "Parcours achat simple et premium", features: [isRTL ? "منتجات" : "Catalogue", isRTL ? "سلة" : "Cart", isRTL ? "إدارة" : "Admin"] },
    { slug: "seo-maroc", icon: Search, title: isRTL ? "SEO وظهور" : "SEO & visibilité", desc: isRTL ? "بنية تقنية لنتائج Google" : "Structure propre pour Google", features: ["Schema", "Speed", isRTL ? "محلي" : "Local SEO"] },
    { slug: "maintenance-site-web", icon: Wrench, title: isRTL ? "صيانة ودعم" : "Maintenance", desc: isRTL ? "متابعة وتحديثات مستمرة" : "Suivi, sécurité et évolutions", features: ["Updates", "Monitoring", "Support"] },
    { slug: "application-web-sur-mesure", icon: LayoutDashboard, title: isRTL ? "تطبيقات ويب" : "Apps web", desc: isRTL ? "Dashboards ومنصات مخصصة" : "Dashboards et plateformes métier", features: ["Auth", "API", "Admin"] },
    { slug: "backend-api", icon: Server, title: "Backend & API", desc: isRTL ? "واجهات آمنة وقابلة للتوسع" : "APIs robustes et scalables", features: ["REST", "MongoDB", "Node.js"] },
  ]
  const [selectedService, setSelectedService] = useState(0)
  const activeService = services[selectedService] ?? services[0]
  const ActiveIcon = activeService.icon

  return (
    <section id="services" className="services-section section overflow-hidden">
      <div className="orb orb-violet -right-48 top-10 h-96 w-96" />
      <div className="container">
        <AnimatedSection className="services-heading mx-auto mb-14 max-w-3xl text-center sm:mb-18">
          <div className="badge mx-auto mb-4"><Sparkles className="h-3.5 w-3.5" />{isRTL ? "خدماتنا" : "Services"}</div>
          <div className="divider mb-6" />
          <h2>{isRTL ? "كل ما تحتاجه" : "Un système complet"} <span className="gradient-text">{isRTL ? "لنموك الرقمي" : "pour votre présence digitale"}</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg">{isRTL ? "مكونات مثل ReactBits، عمق بصري مثل Dark.Design، وfooter غني مثل Footer.Design — لكن بهوية أصلية لعلامتك." : "Des composants vivants façon ReactBits, une profondeur visuelle dark.design et un footer éditorial riche façon footer.design — adaptés à votre marque."}</p>
        </AnimatedSection>

        <AnimatedSection className="service-wheel-showcase mb-14 sm:mb-18">
          <div className="service-wheel-aura" aria-hidden="true" />
          <div className="service-wheel-grid">
            <div className="service-wheel-picker">
              <div className="service-wheel-label">
                <span>01</span>
                <div><small>{isRTL ? "اختر مسارك" : "Choisissez votre direction"}</small><strong>{isRTL ? "اسحب، مرر أو استعمل الأسهم" : "Glissez, scrollez ou utilisez les flèches"}</strong></div>
              </div>
              <OptionWheel
                items={services.map((service) => service.title)}
                onChange={(index) => setSelectedService(index)}
                side={isRTL ? "right" : "left"}
                className="service-option-wheel"
                ariaLabel={isRTL ? "اختيار الخدمة" : "Choisir un service"}
              />
            </div>

            <div className="service-wheel-result" aria-live="polite" dir={isRTL ? "rtl" : "ltr"}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeService.title}
                  className="service-wheel-result-content"
                  initial={{ opacity: 0, y: 16, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="service-wheel-result-top">
                    <motion.div
                      className="service-wheel-icon"
                      initial={{ rotate: -8, scale: 0.82 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    >
                      <ActiveIcon className="h-6 w-6" />
                    </motion.div>
                    <span>{String(selectedService + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span>
                  </div>
                  <p className="service-wheel-kicker">{isRTL ? "حل مصمم حسب مشروعك" : "Une solution pensée pour votre projet"}</p>
                  <h3>{activeService.title}</h3>
                  <p className="service-wheel-description">{activeService.desc}</p>
                  <div className="service-wheel-features">
                    {activeService.features.map((feature) => <span key={feature}><CheckCircle className="h-3.5 w-3.5" />{feature}</span>)}
                  </div>
                  <div className="service-wheel-signals">
                    <div><strong>{isRTL ? "حسب الطلب" : "Sur mesure"}</strong><small>{isRTL ? "بدون قوالب عامة" : "Sans template générique"}</small></div>
                    <div><strong>Conversion</strong><small>{isRTL ? "هدف واضح" : "Objectif mesurable"}</small></div>
                  </div>
                  <SpecularLink href={`/${lang}/services/${activeService.slug}`} className="mt-6 w-full">
                    <Sparkles className="h-4 w-4" />
                    {isRTL ? "اكتشف تفاصيل الخدمة" : "Découvrir cette solution"}
                    <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
                  </SpecularLink>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>

        <StaggerSection staggerAmount={0.045}>
          <div className="bento-grid">
            {services.map((svc, i) => (
              <Link key={svc.title} href={`/${lang}/services/${svc.slug}`} className={`card-accent group p-5 text-left ${i === 0 || i === 3 ? "span-6" : "span-3"}`} dir={isRTL ? "rtl" : "ltr"}>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--brand-soft)] text-[var(--brand-hover)] transition group-hover:scale-110"><svc.icon className="h-5 w-5" /></div>
                  <ArrowRight className={`h-4 w-4 text-[var(--text-muted)] opacity-0 transition group-hover:opacity-100 ${isRTL ? "rotate-180" : ""}`} />
                </div>
                <h3 className="text-xl">{svc.title}</h3>
                <p className="mt-3 text-sm">{svc.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {svc.features.map((f) => <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-2.5 py-1 text-[11px] font-bold text-[var(--text-secondary)]"><CheckCircle className="h-3 w-3 text-[var(--brand-2)]" />{f}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </StaggerSection>
        <AnimatedSection className="mt-14 text-center" delay={0.2}>
          <div className="glass-card inline-flex w-full flex-col items-center gap-4 p-4 sm:w-auto sm:flex-row sm:px-6">
            <span className="text-sm font-semibold text-[var(--text-secondary)]">{isRTL ? "نختار لك أفضل باقة حسب مشروعك" : "On choisit la meilleure architecture pour votre projet"}</span>
            <SpecularButton onClick={() => handleWhatsApp("Conseil personnalisé")} size="sm" className="w-full sm:w-auto"><MessageCircle className="h-3.5 w-3.5" />{isRTL ? "استشارة مجانية" : "Conseil gratuit"}</SpecularButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
