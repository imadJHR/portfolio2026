import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const serviceImages = [
  "/services/identity.webp",
  "/services/corporate-sites.webp",
  "/services/ecommerce.webp",
  "/services/web-apps.webp",
  "/services/ui-ux.webp",
  "/services/seo.webp",
  "/services/digital-content.webp",
  "/services/support.webp",
]

export function Services({ lang }) {
  const isRTL = lang === "ar"
  const services = isRTL ? [
    ["branding-identite-marque", "الهوية والعلامة", "شعار، نظام بصري ودليل هوية"], ["creation-site-web-maroc", "مواقع الشركات", "واجهات دقيقة وسريعة ومتجاوبة"], ["ecommerce-maroc", "التجارة الإلكترونية", "متاجر واضحة وسهلة الإدارة"], ["application-web-sur-mesure", "تطبيقات الويب", "منصات وأدوات مخصصة"], ["ui-ux-identite-visuelle", "UI/UX", "تجارب استخدام منطقية وجذابة"], ["seo-maroc", "SEO والظهور", "بنية قوية ونمو عضوي مستدام"], ["social-media-maroc", "المحتوى الرقمي", "محتوى متناسق مع هوية العلامة"], ["maintenance-site-web", "الدعم والتطوير", "متابعة، تحسين وتحديث مستمر"],
  ] : [
    ["branding-identite-marque", "Identité de marque", "Logo, système visuel et lignes directrices"], ["creation-site-web-maroc", "Sites corporate", "Interfaces précises, rapides et responsives"], ["ecommerce-maroc", "E-commerce", "Boutiques claires et simples à administrer"], ["application-web-sur-mesure", "Applications web", "Plateformes et outils métier sur mesure"], ["ui-ux-identite-visuelle", "UI/UX design", "Expériences logiques, utiles et désirables"], ["seo-maroc", "SEO & visibilité", "Fondations solides et croissance organique"], ["social-media-maroc", "Contenu digital", "Une présence cohérente avec votre identité"], ["maintenance-site-web", "Support & évolution", "Suivi, optimisation et amélioration continue"],
  ]

  return <section id="services" className="nm-services section" dir={isRTL ? "rtl" : "ltr"}><div className="container">
    <div className="nm-section-heading"><span className="nm-index">02</span><p className="nm-kicker">{isRTL ? "مجالات الخبرة" : "CHAMPS D’EXPERTISE"}</p><h2>{isRTL ? "من الفكرة إلى منتج رقمي متكامل." : "De l’idée au produit digital complet."}</h2><p>{isRTL ? "فريق واحد، رؤية واحدة، وتنفيذ بدون طبقات غير ضرورية." : "Une seule équipe, une vision cohérente et une exécution sans couches inutiles."}</p></div>
    <div className="nm-service-grid">{services.map(([slug, title, description], index) => <Link href={`/${lang}/services/${slug}`} className="nm-service-card" key={slug}><span className="nm-service-card__media"><Image src={serviceImages[index]} alt={isRTL ? `صورة توضيحية لخدمة ${title}` : `Illustration du service ${title}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" /></span><span className="nm-service-card__number">{String(index + 1).padStart(2, "0")}</span><div className="nm-service-card__content"><h3>{title}</h3><p>{description}</p></div><span className="nm-service-card__link">{isRTL ? "اكتشف" : "Découvrir"}<ArrowUpRight aria-hidden="true" /></span></Link>)}</div>
  </div></section>
}
