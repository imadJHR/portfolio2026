import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import { SpecularLink } from "./react-bits/specular-button"

const content = {
  fr: {
    eyebrow: "Questions fréquentes",
    title: "Tout savoir avant de lancer votre site au Maroc",
    intro: "Des réponses concrètes pour cadrer votre projet, votre budget et vos objectifs de conversion.",
    cta: "Parler de mon projet",
    questions: [
      {
        q: "Combien coûte la création d’un site web au Maroc ?",
        a: "Le budget dépend du nombre de pages, des fonctionnalités, du contenu et du niveau de design. Après un court échange, nous préparons un périmètre clair et un devis adapté, sans frais cachés.",
      },
      {
        q: "Combien de temps faut-il pour mettre le site en ligne ?",
        a: "Une landing page peut être livrée plus rapidement qu’un site vitrine complet ou une boutique. Le calendrier est fixé avant le démarrage et inclut les étapes de design, développement, contenu et validation.",
      },
      {
        q: "Le référencement SEO est-il inclus ?",
        a: "Chaque projet inclut les bases techniques essentielles : structure sémantique, vitesse, mobile, métadonnées et indexation. Une stratégie SEO continue peut ensuite cibler les recherches les plus rentables pour votre activité.",
      },
      {
        q: "Pouvez-vous refaire un site existant ?",
        a: "Oui. Nous auditons l’existant, conservons les contenus et URLs utiles, puis améliorons le design, la vitesse et le parcours de conversion sans perdre les acquis SEO.",
      },
      {
        q: "Travaillez-vous uniquement à Casablanca ?",
        a: "Nous sommes basés à Casablanca et accompagnons des entreprises partout au Maroc, avec un suivi à distance simple par visioconférence, téléphone et WhatsApp.",
      },
    ],
  },
  ar: {
    eyebrow: "أسئلة شائعة",
    title: "كل ما تحتاج معرفته قبل إطلاق موقعك في المغرب",
    intro: "إجابات واضحة تساعدك على تحديد المشروع والميزانية وأهداف تحويل الزوار إلى عملاء.",
    cta: "ناقش مشروعي",
    questions: [
      {
        q: "كم تبلغ تكلفة إنشاء موقع إلكتروني في المغرب؟",
        a: "تختلف الميزانية حسب عدد الصفحات والوظائف والمحتوى ومستوى التصميم. بعد محادثة قصيرة نحدد نطاقاً واضحاً ونقدم عرضاً مناسباً من دون تكاليف مخفية.",
      },
      {
        q: "كم يستغرق إطلاق الموقع؟",
        a: "الصفحة التعريفية تُنجز أسرع من موقع شركة متكامل أو متجر إلكتروني. نحدد الجدول قبل البداية ويشمل التصميم والتطوير والمحتوى والمراجعة.",
      },
      {
        q: "هل تحسين محركات البحث مشمول؟",
        a: "نعم، تشمل المشاريع الأساسيات التقنية المهمة: بنية المحتوى، السرعة، الهاتف، البيانات الوصفية والفهرسة. ويمكن إضافة استراتيجية SEO مستمرة حسب أهداف نشاطك.",
      },
      {
        q: "هل يمكنكم إعادة تصميم موقع موجود؟",
        a: "نعم. نراجع الموقع الحالي ونحافظ على الصفحات والروابط المفيدة، ثم نحسن التصميم والسرعة ومسار التحويل مع حماية المكتسبات في محركات البحث.",
      },
      {
        q: "هل تعملون فقط في الدار البيضاء؟",
        a: "نحن في الدار البيضاء ونعمل مع الشركات في جميع مدن المغرب، مع متابعة سهلة عن بعد عبر مكالمات الفيديو والهاتف وواتساب.",
      },
    ],
  },
}

export function LeadFaq({ lang }) {
  const copy = content[lang] || content.fr
  const isRTL = lang === "ar"

  return (
    <section className="section relative overflow-hidden" aria-labelledby="faq-title" dir={isRTL ? "rtl" : "ltr"}>
      <div className="orb orb-blue -left-40 top-10 h-96 w-96 opacity-40" />
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="badge mb-5"><HelpCircle className="h-3.5 w-3.5" />{copy.eyebrow}</div>
            <h2 id="faq-title" className="text-3xl sm:text-5xl">{copy.title}</h2>
            <p className="mt-5 max-w-xl text-[var(--text-secondary)]">{copy.intro}</p>
            <SpecularLink href={`/${lang}#contact`} className="mt-7">
              <MessageCircle className="h-4 w-4" />{copy.cta}
            </SpecularLink>
          </div>

          <div className="space-y-3">
            {copy.questions.map((item, index) => (
              <details key={item.q} className="group glass-card p-5 sm:p-6" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-black sm:text-lg">
                  <span>{item.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-[var(--brand-hover)] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 border-t border-[var(--border)] pt-4 leading-7 text-[var(--text-secondary)]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
