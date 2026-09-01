import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Navbar from "./navbar"
import Footer from "./footer"
import { PageHero } from "./page-hero"

export function StudioPage({ lang }) {
  const isRTL = lang === "ar"
  const values = isRTL ? [["01", "الوضوح", "نزيل الزائد حتى تصبح الرسالة والواجهة والقرار واضحة."], ["02", "الدقة", "نهتم بالنظام والتفاصيل الصغيرة لأنها تصنع تجربة موثوقة."], ["03", "الاستقلالية", "لا نكرر وصفة جاهزة. كل مشروع يبدأ من سياقه الحقيقي."], ["04", "الاستمرارية", "نبني أساساً قابلاً للتطوير بدل نتيجة مؤقتة جميلة فقط."]] : [["01", "Clarté", "Nous retirons le superflu pour rendre le message, l’interface et la décision évidents."], ["02", "Précision", "Nous soignons le système et les petits détails qui rendent une expérience crédible."], ["03", "Indépendance", "Pas de recette copiée. Chaque projet part de son contexte réel."], ["04", "Continuité", "Nous construisons une base capable d’évoluer, pas seulement une belle livraison ponctuelle."]]
  const steps = isRTL ? [["01", "فهم السياق"], ["02", "تحديد الاتجاه"], ["03", "التصميم والبناء"], ["04", "الإطلاق والتطوير"]] : [["01", "Comprendre le contexte"], ["02", "Définir la direction"], ["03", "Concevoir et construire"], ["04", "Lancer et faire évoluer"]]
  return <div dir={isRTL ? "rtl" : "ltr"}><Navbar lang={lang} /><main><PageHero lang={lang} index="01" eyebrow={isRTL ? "الاستوديو" : "LE STUDIO"} title={isRTL ? "فريق صغير. تفكير دقيق. تأثير حقيقي." : "Petite équipe. Pensée précise. Impact réel."} description={isRTL ? "Nemsi Media استوديو رقمي مستقل في الدار البيضاء، يجمع الاستراتيجية والتصميم والتطوير في مسار واحد واضح." : "Nemsi Media est un studio digital indépendant à Casablanca. Stratégie, design et développement réunis dans un même processus lisible."} />
    <section className="nm-studio section"><div className="container"><div className="nm-studio__statement"><span className="nm-index">02</span><h2>{isRTL ? "نصمم ما يحتاجه المشروع، لا ما يملأ الشاشة." : "Nous dessinons ce dont le projet a besoin, pas ce qui remplit l’écran."}</h2></div><div className="nm-studio__values">{values.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="nm-process section"><div className="container"><div className="nm-section-heading"><span className="nm-index">03</span><p className="nm-kicker">{isRTL ? "طريقة العمل" : "NOTRE MÉTHODE"}</p><h2>{isRTL ? "مسار مفهوم من البداية إلى الإطلاق." : "Un processus lisible, du cadrage au lancement."}</h2></div><div className="nm-process__list">{steps.map(([number, title]) => <div key={number}><span>{number}</span><h3>{title}</h3><i>↘</i></div>)}</div><Link href={`/${lang}/contact`} className="nm-button nm-button--primary">{isRTL ? "تعرف علينا" : "Faisons connaissance"}<ArrowUpRight /></Link></div></section>
  </main><Footer lang={lang} /></div>
}
