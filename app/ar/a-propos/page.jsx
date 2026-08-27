import { getTranslation } from "../../lib/i18n"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { AnimatedSection } from "../../components/gsap-animations"
import { SITE_URL } from "../../lib/seo"
import { 
  Award, 
  Ruler, 
  Zap, 
  Eye, 
  ArrowLeft, 
  Sparkles, 
  ChevronDown, 
  CheckCircle2, 
  Star,
  Quote
} from "lucide-react"

export const metadata = {
  title: "من نحن — وكالة ويب راقية بالدار البيضاء | نمسي ميديا",
  description:
    "تعرف على نمسي ميديا، وكالة ويب راقية بالدار البيضاء متخصصة في تصميم المواقع الإلكترونية الفاخرة، والتسويق الرقمي والحلول المخصصة للشركات.",
  openGraph: {
    title: "من نحن — نمسي ميديا | وكالة ويب راقية في المغرب",
    description:
      "وكالة ويب متخصصة في إنشاء وتطوير المواقع الإلكترونية الفاخرة والمخصصة بالدار البيضاء.",
    url: `${SITE_URL}/ar/a-propos`,
    locale: "ar_MA",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "من نحن - نمسي ميديا" }],
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
  const dict = getTranslation("ar")

  const values = [
    {
      number: "01",
      title: "التميز والإتقان",
      desc: "لا نقدم إلا ما نعتز به. كل بكسل مدروس بعناية، وكل حركة تفاعلية لها هدف واضح يخدم تجربة المستخدم وأهدافك.",
      Icon: Award,
    },
    {
      number: "02",
      title: "تصميم مخصص 100%",
      desc: "نبتعد تماماً عن القوالب الجاهزة. كل مشروع هو تحفة فريدة تستحق بنية برمجية وتصميماً يجسد هويتها الخاصة.",
      Icon: Ruler,
    },
    {
      number: "03",
      title: "الأداء والسرعة",
      desc: "مواقع فائقة السرعة، مهيأة لمحركات البحث (SEO)، وسهلة الوصول. نضع التكنولوجيا المتطورة في خدمة أهداف أعمالك.",
      Icon: Zap,
    },
    {
      number: "04",
      title: "الشفافية والالتزام",
      desc: "تواصل واضح، احترام دقيق للمواعيد، وميزانية محددة. نبني علاقات شراكة طويلة الأجل قائمة على الثقة المتبادلة.",
      Icon: Eye,
    },
  ]

  const stats = [
    { value: "100%", label: "تطوير مخصص بدون قوالب جاهزة" },
    { value: "24 ساعة", label: "أقصى أجل للاستجابة والرد" },
    { value: "100%", label: "تصميم مطابق مع الهوية التجارية" },
    { value: "المغرب", label: "مرافقة شاملة بكافة المدن" },
  ]

  const processSteps = [
    {
      step: "01",
      title: "الاستكشاف والتخطيط",
      text: "نحلل أهداف مشروعك، جمهورك المستهدف، ونحدد نطاق العمل بدقة لتفادي أي انحراف عن الأهداف المسطرة.",
    },
    {
      step: "02",
      title: "التصميم والتجربة",
      text: "نحدد التوجه البصري، تراتبية الرسالة، وتجربة المستخدم (UI/UX) بكل عناية قبل البدء في مرحلة التطوير.",
    },
    {
      step: "03",
      title: "التطوير البرمجي",
      text: "نبني بنية برمجية حديثة، فائقة السرعة، آمنة ومجهزة لتتطور وتتوسع باستمرار مع نمو نشاطك التجاري.",
    },
    {
      step: "04",
      title: "الإطلاق والمرافقة",
      text: "نفحص كفاءة الأداء، تحسين محركات البحث، ونرافقك خطوة بخطوة لضمان إطلاق موقعك بنجاح وبأعلى معايير الجودة.",
    },
  ]

  const faqs = [
    {
      q: "ما هي المدة الزمنية المتوقعة لإنجاز المشروع؟",
      a: "تختلف المدة حسب حجم المشروع؛ صفحة الهبوط تُنجز بسرعة أكبر مقارنة بالمواقع التعريفية الكاملة أو المتاجر الإلكترونية. نحدد جدولاً زمنياً دقيقاً يتضمن مرحلة التصميم، التطوير، والمراجعة قبل البدء.",
    },
    {
      q: "ما هي التقنيات البرمجية التي تعتمدون عليها؟",
      a: "نعتمد على التقنيات الحديثة والأكثر كفاءة عالمياً مثل Next.js و React و Node.js و MongoDB و Tailwind CSS لضمان تقديم واجهات فائقة السرعة، آمنة، وسهلة التطوير مستقبلاً.",
    },
    {
      q: "هل تقدمون خدماتكم للشركات خارج مدينة الدار البيضاء؟",
      a: "نعم بالتأكيد! رغم تواجد مقرنا الرئيسي بالدار البيضاء، إلا أننا نرافق عملاءنا في كافة أنحاء المغرب وخارجه عبر تواصل رقمي سلس وفعال.",
    },
    {
      q: "كيف يتم تحديد ميزانية وتكلفة المشروع؟",
      a: "تعتمد التكلفة على متطلبات المشروع، عدد الصفحات، الميزات الخاصة والمستوى الفني للتصميم. بعد جلسة استكشافية قصيرة، نقدم لك عرض سعر شفافاً ومفصلاً يناسب تطلعاتك.",
    },
  ]

  const clients = [
    {
      name: "شوكوتشينو كافيه",
      role: "المدير العام",
      testimonial:
        "نجحت نمسي ميديا في تجسيد هويتنا التجارية بشكل استثنائي. الموقع جذاب للغاية وسجلنا زيادة بنسبة 35% في الطلبات عبر الإنترنت فور الإطلاق.",
    },
    {
      name: "نوبل وست لتمور الفاخرة",
      role: "المالك",
      testimonial:
        "موقع إلكتروني فاخر يرتقي لمستوى منتجاتنا الراقية. التصميم راقٍ والتصفح سلس للغاية، مما انعكس إيجاباً على متوسط قيمة المبيعات.",
    },
    {
      name: "فادلو كار لتأجير السيارات",
      role: "المدير التنفيذي",
      testimonial:
        "حوّل الفريق رؤيتنا إلى تجربة رقمية فاخرة تجاوزت توقعاتنا، وساهت بشكل مباشر في تعزيز مصداقيتنا وجذب عملاء جدد.",
    },
  ]

  return (
    <div className="rtl font-sans text-[var(--text)] bg-[var(--bg)] min-h-screen selection:bg-[var(--brand)] selection:text-white" dir="rtl">
      <Navbar lang="ar" t={dict} />

      {/* Hero Section */}
      <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:pb-20 sm:pt-36">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 right-1/3 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[var(--brand)]/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--brand)]/20 bg-[var(--brand-soft)]/30 text-[var(--brand)] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>وكالة تصميم مواقع فاخرة بالدار البيضاء</span>
            </div>
            
            <h1 className="mb-6 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              الوكالة الرقمية التي تجمع بين{" "}
              <span className="gradient-text block sm:inline mt-2 sm:mt-0">
                الابتكار والرفاهية
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              انطلاقاً من الدار البيضاء، تبتكر <strong className="text-[var(--text)] font-semibold">نمسي ميديا</strong> تجارب ويب استثنائية وعالية الجودة للعلامات التجارية الطموحة. نحن لا نصمم مجرد مواقع، بل نصنع حضوراً رقمياً مخصصاً يترك انطباعاً يدوم.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              يعتمد فريقنا على أحدث التقنيات مثل Next.js و React و Node.js و Tailwind لبناء واجهات فائقة السرعة، مصممة خصيصاً للقطاعات الفاخرة: المطاعم، العقارات، السيارات، التجارة الإلكترونية والخدمات الراقية.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/ar/contact"
                className="btn btn-primary text-base sm:text-lg w-full sm:w-auto px-8 py-3.5 shadow-lg shadow-[var(--brand)]/20 hover:scale-[1.02] transition-transform"
              >
                <span>ابدأ مشروعك معنا</span>
                <ArrowLeft className="w-5 h-5 mr-2" />
              </a>
              <a
                href="/ar/services"
                className="btn btn-ghost text-base sm:text-lg w-full sm:w-auto px-8 py-3.5 border border-[var(--border)] hover:bg-[var(--bg-alt)]"
              >
                استكشف خدماتنا
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section relative py-16 sm:py-24">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              قيمنا التي تشكّل <span className="gradient-text">تميزنا</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base">
              مبادئ ثابتة نعتمد عليها في كل مشروع لضمان تقديم الأفضل لعملاءنا.
            </p>
          </AnimatedSection>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-accent h-full p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--brand)]/40 transition-all duration-300 relative overflow-hidden group">
                  <span className="absolute top-4 left-6 text-4xl sm:text-5xl font-black text-[var(--brand)]/10 group-hover:text-[var(--brand)]/20 transition-colors">
                    {v.number}
                  </span>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--brand)]/20 bg-[var(--brand-soft)] text-[var(--brand)]">
                    <v.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--text)]">{v.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-4">
                  <div className="mb-2 font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text">
                    {s.value}
                  </div>
                  <div className="h-0.5 w-8 bg-[var(--brand)]/30 mx-auto mb-3" />
                  <div className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] leading-tight">
                    {s.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section relative py-16 sm:py-24">
        <div className="container">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <h2 className="mb-4 text-2xl sm:text-4xl font-bold">
              منهجية العمل <span className="gradient-text">المحكمة</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base">
              مسار واضح ومدروس لضمان السرعة في التنفيذ بدون المساومة على الجودة.
            </p>
          </AnimatedSection>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card h-full p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:shadow-lg transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                        المرحلة {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[var(--text)]">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Credibility Section */}
      <section className="py-16 sm:py-24 bg-[var(--bg-alt)] border-y border-[var(--border)] relative overflow-hidden">
        <div className="container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              شركاء النجاح <span className="gradient-text">وثقتهم بنا</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base">
              نفخر بمرافقة أفضل العلامات التجارية وتطوير حضورها الرقمي.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {clients.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]/80 backdrop-blur-md flex flex-col justify-between h-full hover:border-[var(--brand)]/30 transition-all">
                  <div>
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <blockquote className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 italic">
                      “{c.testimonial}”
                    </blockquote>
                  </div>
                  <div className="pt-4 border-t border-[var(--border)]/60 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[var(--text)]">{c.name}</h4>
                      <p className="text-xs text-[var(--text-muted)]">{c.role}</p>
                    </div>
                    <Quote className="w-8 h-8 text-[var(--brand)]/20" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section relative py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection className="mb-12 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold mb-3">
                الأسئلة <span className="gradient-text">الشائعة</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base">
                إجابات عن أهم الاستفسارات لمساعدتك في اتخاذ القرار المناسب.
              </p>
            </AnimatedSection>

            <div className="flex flex-col gap-4">
              {faqs.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <details className="group rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-base sm:text-lg text-[var(--text)]">
                      <span>{item.q}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:-rotate-180 text-[var(--brand)]" />
                    </summary>
                    <p className="mt-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border)]/50 pt-4">
                      {item.a}
                    </p>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action (CTA) */}
      <section className="section relative overflow-hidden py-16 sm:py-24">
        <div className="container relative z-10">
          <div className="relative max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 text-center border border-[var(--border)] bg-gradient-to-b from-[var(--bg-card)] via-[var(--bg-alt)] to-[var(--bg-card)] shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-[var(--brand)]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <AnimatedSection>
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 leading-tight">
                جاهز للارتقاء بحضورك الرقمي إلى{" "}
                <span className="gradient-text block sm:inline mt-1 sm:mt-0">المستوى التالي؟</span>
              </h2>
              <p className="text-sm sm:text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed">
                دعنا نناقش تفاصيل مشروعك ونكتشف كيف يمكننا مساعدة علامتك التجارية على البروز والتميز في السوق.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/ar/contact"
                  className="btn btn-primary text-base sm:text-lg w-full sm:w-auto px-8 py-3.5 shadow-lg shadow-[var(--brand)]/20"
                >
                  احجز جلسة استشارية
                </a>
                <a
                  href="/ar/services"
                  className="btn btn-ghost text-base sm:text-lg w-full sm:w-auto px-8 py-3.5 border border-[var(--border)]"
                >
                  تعرف على خدماتنا
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer lang="ar" t={dict} />
    </div>
  )
}