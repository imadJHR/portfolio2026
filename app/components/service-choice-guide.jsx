import Link from "next/link"

const guides = {
  fr: [
    ["creation-site-web-maroc", "Présenter votre entreprise et recevoir des demandes", "Un site vitrine convient si vos clients ont besoin de comprendre votre activité, de consulter vos réalisations et de vous contacter. Préparez vos services, les questions fréquentes de vos prospects et les contenus disponibles. La page de création de sites web détaille les étapes de conception et les éléments à prévoir avant le lancement.", "Création de sites web au Maroc"],
    ["ecommerce-maroc", "Vendre des produits en ligne", "Une boutique e-commerce ajoute un catalogue et un parcours de commande à votre présence en ligne. Le choix dépend du nombre de produits, des variantes, de la gestion des stocks et des modalités de livraison et de paiement à prévoir. Consultez notre offre pour identifier les fonctionnalités utiles à votre commerce avant de demander une estimation.", "Création de boutiques e-commerce"],
    ["seo-maroc", "Améliorer la visibilité d’un site existant", "Si vous avez déjà un site, commencez par identifier les pages et les recherches qui peuvent apporter des demandes pertinentes. Le référencement naturel, ou SEO, combine l’accès aux pages pour les moteurs de recherche, des contenus utiles et des liens entre les services. Notre page SEO présente cette démarche et les points à examiner pour votre site au Maroc.", "Référencement naturel au Maroc"],
  ],
  ar: [
    ["creation-site-web-maroc", "التعريف بشركتك واستقبال طلبات التواصل", "الموقع التعريفي مناسب عندما يحتاج عملاؤك إلى فهم نشاطك والاطلاع على أعمالك قبل التواصل معك. جهّز قائمة خدماتك والأسئلة التي يطرحها العملاء والصور والنصوص المتوفرة. تساعدك صفحة تصميم المواقع على فهم مراحل العمل والمعلومات المطلوبة قبل الإطلاق، حتى تختار ما يخدم نشاطك في المغرب.", "تصميم مواقع للشركات في المغرب"],
    ["ecommerce-maroc", "بيع المنتجات عبر الإنترنت", "المتجر الإلكتروني يضيف كتالوج المنتجات ومسار الطلب إلى حضورك الرقمي. اختيار الوظائف المناسبة يعتمد على عدد المنتجات وخياراتها وطريقة إدارة المخزون والتوصيل والدفع. راجع صفحة التجارة الإلكترونية لتحديد ما يحتاجه مشروعك، ثم شاركنا تفاصيل الكتالوج والطلبات المتوقعة لإعداد تقدير يتناسب مع نطاق العمل.", "إنشاء متجر إلكتروني في المغرب"],
    ["seo-maroc", "تحسين ظهور موقع موجود في البحث", "إذا كان لديك موقع، ابدأ بتحديد الصفحات وعمليات البحث التي يمكن أن تجلب طلبات مناسبة لنشاطك. تحسين محركات البحث، أو SEO، يشمل إتاحة الصفحات لمحركات البحث وتقديم محتوى مفيد وربط الخدمات ببعضها. صفحة الخدمة تشرح هذه الخطوات والنقاط التي تستحق المراجعة في موقعك الموجه للسوق المغربي.", "تحسين محركات البحث في المغرب"],
  ],
}

export function ServiceChoiceGuide({ lang }) {
  const isRTL = lang === "ar"
  return <section className="section" dir={isRTL ? "rtl" : "ltr"}>
    <div className="container">
      <div className="nm-section-heading">
        <span className="nm-index">03</span>
        <p className="nm-kicker">{isRTL ? "اختيار الخدمة" : "CHOISIR VOTRE SERVICE"}</p>
        <h2>{isRTL ? "ما الخدمة المناسبة لمشروعك؟" : "Quel service choisir pour votre projet ?"}</h2>
        <p>{isRTL ? "حدد أولاً ما تريد أن يفعله الزائر: يتعرف على شركتك، يطلب منتجاً أو يجد إجابة قبل التواصل معك." : "Partez de l’action attendue de vos visiteurs : découvrir votre entreprise, commander un produit ou trouver une réponse avant de vous contacter."}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {guides[lang].map(([slug, title, description, label]) => <article key={slug} className="space-y-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="leading-relaxed text-[var(--text-muted)]">{description}</p>
          <Link href={`/${lang}/services/${slug}`} className="underline underline-offset-4">{label}</Link>
        </article>)}
      </div>
      <p className="mt-8 max-w-3xl leading-relaxed">{isRTL ? "لإعداد طلب واضح، اذكر نشاطك والجمهور المستهدف واللغات المطلوبة ورابط موقعك إن وجد. أضف الوظائف الأساسية والميزانية التقريبية والموعد المرغوب، حتى يمكن مناقشة الأولويات." : "Pour préparer votre demande, indiquez votre activité, votre public, les langues souhaitées et l’adresse de votre site existant. Ajoutez les fonctionnalités indispensables, votre budget indicatif et le calendrier envisagé pour discuter des priorités."} {" "}<Link href={`/${lang}/devis`} className="underline underline-offset-4">{isRTL ? "طلب عرض سعر" : "Demander un devis"}</Link></p>
    </div>
  </section>
}
