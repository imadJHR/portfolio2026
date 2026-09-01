import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const content = {
  fr: { title: "Avant de commencer.", intro: "Des réponses simples aux questions qui reviennent au début d’un projet.", cta: "Poser une autre question", questions: [
    ["Quel budget prévoir pour un site ?", "Le budget dépend du périmètre, des contenus et des fonctions attendues. Nous commençons par cadrer le besoin, puis proposons un devis clair et détaillé."],
    ["Combien de temps faut-il ?", "Une landing page demande généralement moins de temps qu’un site corporate ou une boutique. Le calendrier est validé avant le démarrage et suivi étape par étape."],
    ["Le SEO est-il inclus ?", "Oui, les fondations techniques sont intégrées : structure, vitesse, mobile, métadonnées et indexation. Une stratégie éditoriale continue peut être ajoutée."],
    ["Pouvez-vous reprendre un site existant ?", "Oui. Nous auditons l’existant, conservons ce qui fonctionne et reconstruisons le design, la technique et le parcours sans perdre les acquis utiles."],
    ["Travaillez-vous hors Casablanca ?", "Oui. Nous collaborons avec des équipes partout au Maroc et à l’international avec un suivi simple et régulier."],
  ]},
  ar: { title: "قبل أن نبدأ.", intro: "إجابات مباشرة على أكثر الأسئلة تكراراً في بداية المشروع.", cta: "اطرح سؤالاً آخر", questions: [
    ["ما الميزانية المناسبة للموقع؟", "تعتمد الميزانية على حجم المشروع والمحتوى والوظائف. نحدد الاحتياج أولاً ثم نقدم عرضاً واضحاً ومفصلاً."],
    ["كم يستغرق إنجاز المشروع؟", "الصفحة الواحدة أسرع من موقع شركة أو متجر. نحدد الجدول قبل الانطلاق ونتابع كل مرحلة بوضوح."],
    ["هل SEO مشمول؟", "نعم، ندمج الأساسيات التقنية مثل البنية والسرعة والهاتف والبيانات الوصفية والفهرسة."],
    ["هل يمكن إعادة تصميم موقع موجود؟", "نعم. نراجع الموقع ونحافظ على نقاط القوة ثم نعيد بناء التصميم والتقنية ومسار الاستخدام."],
    ["هل تعملون خارج الدار البيضاء؟", "نعم. نعمل مع فرق في كل المغرب وخارجه بمتابعة منتظمة وبسيطة."],
  ]},
}
export function LeadFaq({ lang }) {
  const copy = content[lang] || content.fr
  const isRTL = lang === "ar"
  return <section className="nm-faq section" dir={isRTL ? "rtl" : "ltr"}><div className="container nm-faq__grid"><div><span className="nm-index">06</span><p className="nm-kicker">FAQ</p><h2>{copy.title}</h2><p>{copy.intro}</p><Link href={`/${lang}/contact`} className="nm-button nm-button--text">{copy.cta}<ArrowUpRight aria-hidden="true" /></Link></div><div>{copy.questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>0{index + 1}</span>{question}<i>+</i></summary><p>{answer}</p></details>)}</div></div></section>
}
