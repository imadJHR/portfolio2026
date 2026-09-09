import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { WHATSAPP_NUMBER } from "../lib/leads"

export function Hero({ lang }) {
  const isRTL = lang === "ar"
  const message = isRTL ? "مرحبا، أود مناقشة مشروعي الرقمي." : "Bonjour, je souhaite discuter de mon projet digital."
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <section id="home" className="nm-hero" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container nm-hero__grid">
        <div className="nm-hero__meta" aria-hidden="true">
          <span>NM® / 2026</span>
          <span>{isRTL ? "الدار البيضاء — المغرب" : "CASABLANCA — MAROC"}</span>
          <span>{isRTL ? "نعمل في المغرب وعن بُعد" : "MAROC + INTERNATIONAL"}</span>
        </div>
        <div className="nm-hero__stage">
          <div className="nm-hero__rail" aria-hidden="true">
            <span>01</span>
            <small>{isRTL ? "استوديو رقمي مستقل" : "STUDIO DIGITAL INDÉPENDANT"}</small>
          </div>
          <div className="nm-hero__headline">
            <p className="nm-kicker">{isRTL ? "استراتيجية · تصميم · تطوير" : "STRATÉGIE · DESIGN · DÉVELOPPEMENT"}</p>
            <h1>{isRTL ? <><span>رقمي</span><em>واضح ومفيد</em><span>ومتقن.</span></> : <><span>Du digital</span><em>clair, utile</em><span>et bien fait.</span></>}</h1>
          </div>
          <aside className="nm-hero__aside">
            <div className="nm-hero__availability"><span aria-hidden="true" />{isRTL ? "نستقبل مشاريع جديدة" : "Disponible pour de nouveaux projets"}</div>
            <p className="nm-hero__intro">
              {isRTL ? <>
                وكالة ويب في الدار البيضاء. نساعد الشركات في المغرب على <Link href="/ar/services/creation-site-web-maroc" className="underline underline-offset-4">تصميم مواقع احترافية</Link>، و<Link href="/ar/services/ecommerce-maroc" className="underline underline-offset-4">إنشاء متاجر إلكترونية</Link>، و<Link href="/ar/services/seo-maroc" className="underline underline-offset-4">تحسين الظهور في محركات البحث</Link>.
              </> : <>
                Agence web à Casablanca, nous accompagnons les entreprises au Maroc : <Link href="/fr/services/creation-site-web-maroc" className="underline underline-offset-4">création de sites web</Link>, <Link href="/fr/services/ecommerce-maroc" className="underline underline-offset-4">boutiques e-commerce</Link> et <Link href="/fr/services/seo-maroc" className="underline underline-offset-4">référencement naturel SEO</Link>.
              </>}
            </p>
            <div className="nm-hero__actions">
              <a className="nm-button nm-button--primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">{isRTL ? "ابدأ مشروعك" : "Démarrer un projet"}<ArrowUpRight aria-hidden="true" /></a>
              <Link className="nm-button nm-button--text" href="#portfolio">{isRTL ? "شاهد أعمالنا" : "Voir les projets"}<span aria-hidden="true">↘</span></Link>
            </div>
            <ul className="nm-hero__scope" aria-label={isRTL ? "مجالات العمل" : "Domaines d’intervention"}>
              <li>{isRTL ? "هوية بصرية" : "Identité"}</li>
              <li>{isRTL ? "مواقع رقمية" : "Sites web"}</li>
              <li>{isRTL ? "منتجات رقمية" : "Produits digitaux"}</li>
            </ul>
          </aside>
        </div>
        <div className="nm-hero__footer">
          <p>{isRTL ? "فكرة واحدة · فريق واحد · تنفيذ واضح" : "UNE IDÉE · UNE ÉQUIPE · UNE EXÉCUTION CLAIRE"}</p>
          <a className="nm-hero__scroll" href="#services"><span>{isRTL ? "اكتشف خبراتنا" : "Découvrir les expertises"}</span><ArrowDown aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
