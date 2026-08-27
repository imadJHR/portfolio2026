import { getTranslation } from "../../lib/i18n"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { AnimatedSection } from "../../components/gsap-animations"
import { SITE_URL } from "../../lib/seo"

export const metadata = {
  title: "من نحن — وكالة ويب راقية الدار البيضاء | نمسي ميديا",
  description:
    "تعرف على نيمسي ميديا، وكالة ويب راقية في الدار البيضاء. Expertise en création de sites haut de gamme, marketing digital et solutions web sur-mesure pour entreprises exigeantes.",
  openGraph: {
    title: "من نحن — نيمسي ميديا | وكالة ويب راقية المغرب",
    description:
      "Agence web premium à Casablanca spécialisée en création de sites internet haut de gamme.",
    url: `${SITE_URL}/ar/a-propos`,
    locale: "ar_MA",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "من نحن نيمسي ميديا" }],
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
  const isRTL = true

  const values = [
    {
      number: "01",
      title: "Excellence",
      desc:
        "Nous ne livrons que ce que nous serions fiers de montrer. Chaque pixel est pensé, chaque animation a du sens.",
    },
    {
      number: "02",
      title: "Sur-mesure",
      desc:
        "Pas de templates. Chaque projet est unique et mérite une approche, une architecture et un design qui lui sont propres.",
    },
    {
      number: "03",
      title: "Performance",
      desc:
        "Un site rapide, optimisé SEO, accessible. La technique au service de vos objectifs business, pas l'inverse.",
    },
    {
      number: "04",
      title: "Transparence",
      desc:
        "Communication claire, livraisons respectées, budget maîtrisé. Nous construisons une relation de confiance durable.",
    },
  ]

  const stats = [
    { value: "FR / AR", label: "Accompagnement bilingue" },
    { value: "24h", label: "Délai de première réponse" },
    { value: "100%", label: "Design adapté à la marque" },
    { value: "Maroc", label: "Accompagnement national" },
  ]

  const clients = [
    {
      name: "Chocochino Café",
      role: "Gérant",
      testimonial:
        "Nemsi Media a parfaitement capturé l'identité de notre café. Le site est visuellement époustouflant et nos commandes en ligne ont augmenté de 35% dès le lancement.",
    },
    {
      name: "Noble West Luxe Dates",
      role: "Propriétaire",
      testimonial:
        "Un site d'exception à la hauteur de nos dates premium. Le design est luxueux, la navigation fluide, et nous avons constaté une hausse significative du panier moyen.",
    },
    {
      name: "Fadlo Car",
      role: "Directeur",
      testimonial:
        "L'équipe a transformé notre concept automobile en une expérience digitale premium. Bien au-delà de nos attentes en termes de crédibilité et de conversion.",
    },
  ]

  return (
    <div className="rtl" dir="rtl">
      <Navbar lang="ar" t={dict} />

      {/* Hero */}
      <section className="relative flex min-h-[50svh] items-center justify-center overflow-hidden px-0 pb-12 pt-24 sm:pb-16 sm:pt-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[var(--brand)]/5 blur-[120px] rounded-full" />
        <div className="container relative z-[2] text-center">
          <AnimatedSection>
            <h1 className="mb-6 text-[clamp(2.35rem,11vw,3.75rem)] font-bold">
              الوكالة التي تجمع بين
              <span className="gradient-text">الرقمنة والرفاهية</span>
            </h1>
          </AnimatedSection>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Basée à Casablanca, Nemsi Media conçoit des expériences web haut de gamme
            pour les marques qui veulent marquer leur époque. Nous ne faisons pas du web,
            nous faisons du sur-mesure digital.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium text-[var(--text-muted)]">
            Nemsi Media est également identifiée sous l'écriture NemsiMedia, correspondant
            au domaine nemsimedia.ma.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ar/contact"
              className="btn btn-primary text-lg"
            >
              Discutons de votre projet
            </a>
            <a
              href="/ar/services"
              className="btn btn-ghost text-lg"
            >
              Voir nos services
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
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

      {/* Stats */}
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

      {/* Credibility Section */}
      <section className="pb-24 bg-[var(--bg-alt)]">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <AnimatedSection>
              <h2 className="mb-8 text-[clamp(2rem,5vw,3rem)] font-bold">
                {dict.credibility.trusted_by}
                <span className="gradient-text">{dict.credibility.clients}</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
              {clients.map((c, i) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <div className="glass-card p-6 sm:p-8 text-center border">
                    {/* Inline SVG brand mark using CSS variables */}
                    <div className="mx-auto mb-6 inline-block">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--brand)"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mx-auto"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-[var(--text)] mb-4">
                      {c.name}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mb-6">
                      {c.role}
                    </p>
                    <blockquote className="italic text-lg leading-relaxed text-[var(--text-secondary)]">
                      “{c.testimonial}”
                    </blockquote>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden">
        <div className="container relative z-10 py-24 sm:py-32 bg-gradient-to-b from-[var(--bg)] via-[var(--bg-alt)] to-[var(--bg)]">
          <div className="relative max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="mb-6 text-[clamp(2rem,5vw,3rem)] font-bold">
                Prêt à élever votre présence digitale ?
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                Discutons de votre projet et découvrez comment nous pouvons aider votre marque à se démarquer.
              </p>
            </AnimatedSection>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ar/contact"
                className="btn btn-primary text-lg"
              >
                Prenez rendez-vous
              </a>
              <a
                href="/ar/services"
                className="btn btn-ghost text-lg"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer lang="ar" t={dict} />
    </div>
  )
}