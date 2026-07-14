import { getTranslation } from "../../lib/i18n"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { AnimatedSection } from "../../components/gsap-animations"

export const metadata = {
  title: "À propos — Agence Web Premium Casablanca",
  description: "Découvrez Nemsi Media, agence web premium à Casablanca. Expertise en création de sites haut de gamme, marketing digital et solutions web sur-mesure pour entreprises exigeantes.",
  openGraph: {
    title: "À propos — Nemsi Media | Agence Web Premium Maroc",
    description: "Agence web premium à Casablanca spécialisée en création de sites internet haut de gamme.",
    url: "https://nemsimedia.ma/fr/a-propos",
    locale: "fr_MA",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "À propos de Nemsi Media" }],
  },
  alternates: {
    canonical: "https://nemsimedia.ma/fr/a-propos",
    languages: {
      ar: "https://nemsimedia.ma/ar/a-propos",
      fr: "https://nemsimedia.ma/fr/a-propos",
      "x-default": "https://nemsimedia.ma/fr/a-propos",
    },
  },
}

export default function AboutPage() {
  const t = getTranslation("fr")
  const isRTL = false

  const values = [
    {
      number: "01",
      title: "Excellence",
      desc: "Nous ne livrons que ce que nous serions fiers de montrer. Chaque pixel est pensé, chaque animation a du sens."
    },
    {
      number: "02",
      title: "Sur-mesure",
      desc: "Pas de templates. Chaque projet est unique et mérite une approche, une architecture et un design qui lui sont propres."
    },
    {
      number: "03",
      title: "Performance",
      desc: "Un site rapide, optimisé SEO, accessible. La technique au service de vos objectifs business, pas l'inverse."
    },
    {
      number: "04",
      title: "Transparence",
      desc: "Communication claire, livraisons respectées, budget maîtrisé. Nous construisons une relation de confiance durable."
    }
  ]

  const stats = [
    { value: "FR / AR", label: "Accompagnement bilingue" },
    { value: "24h", label: "Délai de première réponse" },
    { value: "100%", label: "Design adapté à la marque" },
    { value: "Maroc", label: "Accompagnement national" },
  ]

  return (
    <div className="ltr" dir="ltr">
      <Navbar lang="fr" t={t} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[var(--brand)]/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2] text-center">
          <div className="badge mx-auto mb-6">À PROPOS</div>
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              L&apos;agence qui fait rimer{" "}
              <span className="gradient-text">digital et luxe</span>
            </h1>
          </AnimatedSection>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Basée à Casablanca, Nemsi Media conçoit des expériences web haut de gamme 
            pour les marques qui veulent marquer leur époque. Nous ne faisons pas du web, 
            nous faisons du sur-mesure digital.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-accent p-8">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divider mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold font-serif gradient-text mb-2">{s.value}</div>
                  <div className="divider mx-auto mb-2" />
                  <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="divider mt-16" />
        </div>
      </section>

      <Footer lang="fr" t={t} />
    </div>
  )
}
