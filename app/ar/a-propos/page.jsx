import { getTranslation } from "../../lib/i18n"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { AnimatedSection } from "../../components/gsap-animations"
import { SITE_URL } from "../../lib/seo"

export const metadata = {
  title: "من نحن — وكالة ويب راقية الدار البيضاء | نمسي ميديا",
  description: "تعرف على نمسي ميديا، وكالة ويب راقية في الدار البيضاء. خبرة في تصميم مواقع فاخرة، تسويق رقمي وحلول ويب مخصصة للشركات الطموحة.",
  openGraph: {
    title: "من نحن — نمسي ميديا | وكالة ويب راقية المغرب",
    description: "وكالة ويب راقية في الدار البيضاء متخصصة في تصميم مواقع إنترنت فاخرة.",
    url: `${SITE_URL}/ar/a-propos`,
    locale: "ar_MA",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "تعرف على Nemsi Media" }],
  },
  alternates: {
    canonical: `${SITE_URL}/ar/a-propos`,
    languages: {
      ar: `${SITE_URL}/ar/a-propos`,
      fr: `${SITE_URL}/fr/a-propos`,
      "x-default": `${SITE_URL}/fr/a-propos`,
    },
  },
}

export default function ArabicAboutPage() {
  const t = getTranslation("ar")
  const isRTL = true

  const values = [
    { number: "01", title: "التميز", desc: "نقدم فقط ما نفخر به. كل بكسل مدروس، كل حركة لها معنى." },
    { number: "02", title: "حسب الطلب", desc: "لا قوالب جاهزة. كل مشروع فريد ويستحق نهجاً وهندسة وتصميماً خاصاً به." },
    { number: "03", title: "الأداء", desc: "موقع سريع، محسن لمحركات البحث، سهل الوصول. التقنية في خدمة أهداف عملك." },
    { number: "04", title: "الشفافية", desc: "تواصل واضح، تسليم في الوقت المحدد، ميزانية مضبوطة. نبني علاقة ثقة دائمة." },
  ]

  const stats = [
    { value: "FR / AR", label: "مواكبة باللغتين" },
    { value: "24h", label: "مدة الرد الأول" },
    { value: "100%", label: "تصميم مناسب للعلامة" },
    { value: "المغرب", label: "مواكبة في جميع المدن" },
  ]

  return (
    <div className="rtl" dir="rtl">
      <Navbar lang="ar" t={t} />

      <section className="relative flex min-h-[50svh] items-center justify-center overflow-hidden px-0 pb-12 pt-24 sm:pb-16 sm:pt-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[var(--brand)]/5 blur-[120px] rounded-full" />
        <div className="container relative z-[2] text-center">
          <div className="badge mx-auto mb-6">من نحن</div>
          <AnimatedSection>
            <h1 className="mb-6 text-[clamp(2.35rem,11vw,3.75rem)] font-bold">
              الوكالة التي تجمع بين{" "}
              <span className="gradient-text">الرقمنة والرفاهية</span>
            </h1>
          </AnimatedSection>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            مقرها الدار البيضاء، نمسي ميديا تصنع تجارب ويب راقية للعلامات التجارية 
            التي تريد ترك بصمتها. لا نصنع مواقع فقط، بل نصنع راقياً رقمياً حسب الطلب.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium text-[var(--text-muted)]">
            تُكتب علامة نمسي ميديا أيضاً بالشكل NemsiMedia، وهو الاسم المطابق للنطاق nemsimedia.ma.
          </p>
        </div>
      </section>

      <section className="section relative">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-accent h-full p-5 sm:p-8">
                  <span className="text-4xl font-bold text-[var(--brand)]/20 font-serif">{v.number}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{v.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="divider mb-16" />
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mb-2 break-words font-serif text-3xl font-bold sm:text-5xl gradient-text">{s.value}</div>
                  <div className="divider mx-auto mb-2" />
                  <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="divider mt-16" />
        </div>
      </section>

      <Footer lang="ar" t={t} />
    </div>
  )
}
