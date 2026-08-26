"use client"

import Link from "next/link"
import { LogoMark } from "./logo/logo-mark"
import { Linkedin, Instagram, Mail, MessageCircle, Heart, ArrowUp, MapPin, Phone, ArrowRight } from "lucide-react"
import { openWhatsApp } from "../lib/leads"
import { SpecularButton, SpecularLink } from "./react-bits/specular-button"

export default function Footer({ lang }) {
  const isRTL = lang === "ar"
  const year = new Date().getFullYear()
  const social = [{ icon: Linkedin, href: "https://www.linkedin.com/company/nemsi-media", label: "LinkedIn" }, { icon: Instagram, href: "https://www.instagram.com/nemsimedia/", label: "Instagram" }, { icon: Mail, href: "mailto:contact@nemsimedia.ma", label: "Email" }]
  const quick = lang === "fr" ? [{ label: "Accueil", href: "/fr" }, { label: "Services", href: "/fr#services" }, { label: "Portfolio", href: "/fr#portfolio" }, { label: "À propos", href: "/fr/a-propos" }, { label: "Insights", href: "/fr/insights" }, { label: "Contact", href: "/fr#contact" }] : [{ label: "الرئيسية", href: "/ar" }, { label: "خدماتنا", href: "/ar#services" }, { label: "أعمالنا", href: "/ar#portfolio" }, { label: "من نحن", href: "/ar/a-propos" }, { label: "مقالات", href: "/ar/insights" }, { label: "اتصل بنا", href: "/ar#contact" }]
  const services = lang === "fr"
    ? [{ label: "Branding & identité", slug: "branding-identite-marque" }, { label: "Design graphique", slug: "design-graphique-maroc" }, { label: "Photo & vidéo", slug: "production-photo-video-maroc" }, { label: "Réseaux sociaux", slug: "social-media-maroc" }, { label: "Influence & créateurs", slug: "marketing-influence-maroc" }, { label: "Publicité payante", slug: "publicite-payante-maroc" }, { label: "Email marketing", slug: "email-marketing-maroc" }, { label: "Sites premium", slug: "creation-site-web-maroc" }, { label: "Landing pages", slug: "landing-page-maroc" }, { label: "E-commerce", slug: "ecommerce-maroc" }, { label: "SEO technique", slug: "seo-maroc" }, { label: "Apps web", slug: "application-web-sur-mesure" }]
    : [{ label: "الهوية والعلامة", slug: "branding-identite-marque" }, { label: "التصميم الجرافيكي", slug: "design-graphique-maroc" }, { label: "إنتاج الصور والفيديو", slug: "production-photo-video-maroc" }, { label: "إدارة التواصل", slug: "social-media-maroc" }, { label: "التسويق بالمؤثرين", slug: "marketing-influence-maroc" }, { label: "الإعلانات المدفوعة", slug: "publicite-payante-maroc" }, { label: "التسويق بالبريد", slug: "email-marketing-maroc" }, { label: "مواقع فاخرة", slug: "creation-site-web-maroc" }, { label: "صفحات هبوط", slug: "landing-page-maroc" }, { label: "متاجر", slug: "ecommerce-maroc" }, { label: "سيو تقني", slug: "seo-maroc" }, { label: "تطبيقات ويب", slug: "application-web-sur-mesure" }]
  const handleWhatsApp = () => openWhatsApp(
    isRTL ? "مرحبا، أود الحصول على عرض لمشروعي." : "Bonjour, je souhaite recevoir une proposition pour mon projet.",
    "footer_cta",
    { language: lang },
  )
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] py-8" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container relative z-10">
        <div className="glass-card overflow-hidden p-4 sm:p-8 lg:p-10">
          <div className="mb-10 grid gap-5 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
            <h2 className="max-w-3xl text-3xl sm:text-5xl">{isRTL ? "لنبنِ موقعاً" : "Construisons un site"} <span className="gradient-text">{isRTL ? "يُشبه طموحك" : "à la hauteur de votre ambition"}</span></h2>
            <div className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-surface)] p-4"><p className="text-sm">{isRTL ? "احصل على اقتراح واضح لتصميم موقعك، بدون تعقيد." : "Recevez une direction claire pour votre site, sans jargon."}</p><SpecularButton onClick={handleWhatsApp} className="mt-4 w-full"><MessageCircle className="h-4 w-4" />WhatsApp</SpecularButton></div>
          </div>
          <div className="grid grid-cols-1 gap-8 border-y border-[var(--border)] py-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="xl:col-span-1"><div className="flex items-start gap-3"><LogoMark className="h-12 w-12 shrink-0" /><div><p className="text-xl font-black tracking-tight leading-tight">Nemsi<span className="gradient-text ml-1">Media</span></p></div></div><p className="mt-3 text-sm">{isRTL ? "وكالة رقمية مغربية تبني مواقع حديثة، سريعة، وقابلة للتحويل." : "Agence digitale marocaine pour sites modernes, rapides et orientés conversion."}</p><div className="mt-5 flex gap-2">{social.map((s) => <SpecularLink key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" variant="ghost" size="icon" aria-label={s.label}><s.icon className="h-4 w-4" /></SpecularLink>)}</div></div>
            <div className="xl:col-span-1"><p className="mb-4 text-xs font-black uppercase tracking-[.2em] text-[var(--text-muted)]">{isRTL ? "روابط" : "Plan"}</p><ul className="space-y-3">{quick.map((l) => <li key={l.label}><Link href={l.href} className="group flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text)]"><ArrowRight className={`h-3 w-3 text-[var(--brand-hover)] ${isRTL ? "rotate-180" : ""}`} />{l.label}</Link></li>)}</ul></div>
            <div className="xl:col-span-1"><p className="mb-4 text-xs font-black uppercase tracking-[.2em] text-[var(--text-muted)]">{isRTL ? "خدمات" : "Services"}</p><div className="flex flex-wrap gap-2">{services.map((service) => <Link key={service.slug} href={`/${lang}/services/${service.slug}`} className="rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text)]">{service.label}</Link>)}</div></div>
            <div className="xl:col-span-1"><p className="mb-4 text-xs font-black uppercase tracking-[.2em] text-[var(--text-muted)]">Contact</p><div className="min-w-0 space-y-3"><a href="tel:+212709120432" className="flex min-w-0 items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text)]"><Phone className="h-4 w-4 shrink-0 text-[var(--brand-hover)]" /><span className="min-w-0 break-words">+212 709-120-432</span></a><a href="tel:+212645288216" className="flex min-w-0 items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text)]"><Phone className="h-4 w-4 shrink-0 text-[var(--brand-hover)]" /><span className="min-w-0 break-words">+212 6 45 28 82 16</span></a><a href="mailto:contact@nemsimedia.ma" className="flex min-w-0 items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text)]"><Mail className="h-4 w-4 shrink-0 text-[var(--brand-hover)]" /><span className="min-w-0 break-all">contact@nemsimedia.ma</span></a><div className="flex min-w-0 items-center gap-2 text-sm text-[var(--text-secondary)]"><MapPin className="h-4 w-4 shrink-0 text-[var(--brand-hover)]" /><span>{isRTL ? "الدار البيضاء، المغرب" : "Casablanca, Maroc"}</span></div></div><SpecularLink href="mailto:contact@nemsimedia.ma?subject=Demande%20de%20projet" variant="ghost" size="sm" className="mt-5 w-full"><Mail className="h-4 w-4" />{isRTL ? "راسلنا بالبريد" : "Écrire par email"}</SpecularLink></div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-start"><p className="text-xs text-[var(--text-muted)]">© {year} Nemsi Media. {isRTL ? "جميع الحقوق محفوظة." : "Tous droits réservés."}</p><div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[var(--text-muted)] sm:gap-4"><span className="flex items-center gap-1.5">{isRTL ? "صُنع بـ" : "Fait avec"} <Heart className="h-3 w-3 text-red-400" /> {isRTL ? "في المغرب" : "au Maroc"}</span><SpecularButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} variant="ghost" size="icon" aria-label={isRTL ? "العودة إلى الأعلى" : "Retour en haut"}><ArrowUp className="h-4 w-4" /></SpecularButton></div></div>
        </div>
      </div>
    </footer>
  )
}
