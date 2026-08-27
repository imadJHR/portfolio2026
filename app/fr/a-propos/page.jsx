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
  ArrowRight, 
  Sparkles, 
  ChevronDown, 
  Star,
  Quote
} from "lucide-react"

export const metadata = {
  title: "À propos — Agence Web Premium Casablanca | Nemsi Media",
  description:
    "Découvrez Nemsi Media, agence web premium à Casablanca spécialisée dans la création de sites internet sur-mesure, le marketing digital et les expériences web d'exception.",
  openGraph: {
    title: "À propos — Nemsi Media | Agence Web Premium Maroc",
    description:
      "Agence web premium à Casablanca spécialisée en création de sites internet haut de gamme et sur-mesure.",
    url: `${SITE_URL}/fr/a-propos`,
    locale: "fr_MA",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "À propos de Nemsi Media" }],
  },
  alternates: {
    canonical: `${SITE_URL}/fr/a-propos`,
    languages: {
      ar: `${SITE_URL}/ar/a-propos`,
      fr: `${SITE_URL}/fr/a-propos`,
      "x-default": `${SITE_URL}/fr/a-propos`,
    },
  },
}

export default function AboutPage() {
  const dict = getTranslation("fr")

  const values = [
    {
      number: "01",
      title: "Excellence & Precision",
      desc: "Nous ne livrons que ce que nous serions fiers de signer. Chaque pixel est pensé, chaque animation apporte une réelle valeur à l'expérience utilisateur.",
      Icon: Award,
    },
    {
      number: "02",
      title: "Création Sur-mesure",
      desc: "Aucun template générique. Chaque projet bénéficie d'une architecture, d'une direction artistique et d'un code développés exclusivement pour sa marque.",
      Icon: Ruler,
    },
    {
      number: "03",
      title: "Haute Performance",
      desc: "Des sites ultra-rapides, parfaitement optimisés pour le SEO et l'accessibilité. La haute technologie au service direct de vos objectifs business.",
      Icon: Zap,
    },
    {
      number: "04",
      title: "Transparence Totale",
      desc: "Une communication fluide, des délais strictement respectés et un budget maîtrisé. Nous bâtissons des partenariats durables basés sur la confiance.",
      Icon: Eye,
    },
  ]

  const stats = [
    { value: "100%", label: "Architecture sur-mesure sans templates" },
    { value: "24h", label: "Délai maximum de première réponse" },
    { value: "100%", label: "Design aligné sur votre identité" },
    { value: "Maroc", label: "Accompagnement national & international" },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Découverte & Stratégie",
      text: "Nous analysons en profondeur vos objectifs, votre cible et vos enjeux pour définir un cahier des charges rigoureux et éviter tout dérive.",
    },
    {
      step: "02",
      title: "Design & UX/UI",
      text: "Nous concevons la direction visuelle, la hiérarchie du message et les maquettes interactives avant d'engager le moindre développement.",
    },
    {
      step: "03",
      title: "Développement Premium",
      text: "Nous construisons une base technique moderne, rapide, sécurisée et évolutive, prête à accompagner la croissance de votre entreprise.",
    },
    {
      step: "04",
      title: "Lancement & Suivi",
      text: "Nous effectuons des tests rigoureux (performance, SEO, conversion) puis nous vous accompagnons pas à pas lors de la mise en ligne.",
    },
  ]

  const faqs = [
    {
      q: "Quels sont les délais pour la réalisation d'un projet ?",
      a: "Les délais varient selon la complexité du projet. Une landing page sur-mesure peut être livrée plus rapidement qu'un site vitrine complet ou une plateforme e-commerce. Un planning précis est établi avant le démarrage avec toutes les étapes de validation.",
    },
    {
      q: "Quelles technologies utilisez-vous pour le développement ?",
      a: "Nous utilisons les technologies web les plus performantes du marché : Next.js, React, Node.js, MongoDB et Tailwind CSS. Cela garantit des sites ultra-rapides, sécurisés, fluides et faciles à faire évoluer.",
    },
    {
      q: "Intervenez-vous en dehors de Casablanca ?",
      a: "Absolument. Bien que notre siège soit situé à Casablanca, nous accompagnons des clients dans tout le Maroc et à l'international grâce à un suivi à distance fluide, structuré et réactif.",
    },
    {
      q: "Comment sont établis les budgets ?",
      a: "Le budget dépend du périmètre fonctionnel, du nombre de pages et du niveau de sur-mesure souhaité. Après un court échange pour comprendre vos besoins, nous vous fournissons un devis clair, transparent et sans frais cachés.",
    },
  ]

  const clients = [
    {
      name: "Chocochino Café",
      role: "Gérant",
      testimonial:
        "Nemsi Media a parfaitement capturé l'identité raffinée de notre enseigne. Le site est visuellement époustouflant et nos commandes en ligne ont augmenté de 35% dès le premier mois.",
    },
    {
      name: "Noble West Luxe Dates",
      role: "Fondateur",
      testimonial: "Un site d'exception à la hauteur de nos dattes premium. Le design est luxueux, la navigation d'une grande fluidité, et nous avons constaté une hausse nette du panier moyen.",
    },
    {
      name: "Fadlo Car",
      role: "Directeur Général",
      testimonial:
        "L'équipe a métamorphosé notre image de marque en une expérience digitale haut de gamme. Résultat au-delà de nos attentes en termes de crédibilité et de conversion.",
    },
  ]

  return (
    <div className="ltr font-sans text-[var(--text)] bg-[var(--bg)] min-h-screen selection:bg-[var(--brand)] selection:text-white" dir="ltr">
      <Navbar lang="fr" t={dict} />

      {/* Hero Section */}
      <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:pb-20 sm:pt-36">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[var(--brand)]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container relative z-10 text-center max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--brand)]/20 bg-[var(--brand-soft)]/30 text-[var(--brand)] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>Agence Web Premium à Casablanca</span>
            </div>

            <h1 className="mb-6 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              L&apos;agence qui fait rimer{" "}
              <span className="gradient-text block sm:inline mt-2 sm:mt-0">
                digital et luxe
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              Basée à Casablanca, <strong className="text-[var(--text)] font-semibold">Nemsi Media</strong> conçoit des expériences web sur-mesure et haut de gamme pour les marques qui souhaitent marquer leur époque.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Notre équipe maîtrise les meilleures technologies actuelles (Next.js, React, Node.js, MongoDB, Tailwind) pour façonner des interfaces rapides, sécurisées et évolutives, adaptées aux exigences des secteurs premium : restauration, immobilier, automobile, e-commerce et services de luxe.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/fr/contact"
                className="btn btn-primary text-base sm:text-lg w-full sm:w-auto px-8 py-3.5 shadow-lg shadow-[var(--brand)]/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <span>Discutons de votre projet</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/fr/services"
                className="btn btn-ghost text-base sm:text-lg w-full sm:w-auto px-8 py-3.5 border border-[var(--border)] hover:bg-[var(--bg-alt)]"
              >
                Découvrir nos services
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
              Nos piliers & <span className="gradient-text">valeurs</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base">
              Des principes fondamentaux qui guident chacune de nos réalisations.
            </p>
          </AnimatedSection>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-accent h-full p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--brand)]/40 transition-all duration-300 relative overflow-hidden group">
                  <span className="absolute top-4 right-6 text-4xl sm:text-5xl font-black text-[var(--brand)]/10 group-hover:text-[var(--brand)]/20 transition-colors">
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
              Notre <span className="gradient-text">méthodologie</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base">
              Un processus structuré pour concrétiser vos projets rapidement sans faire d'impasse sur l'exigence.
            </p>
          </AnimatedSection>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card h-full p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:shadow-lg transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                        Étape {step.step}
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

      {/* Credibility / Testimonials Section */}
      <section className="py-16 sm:py-24 bg-[var(--bg-alt)] border-y border-[var(--border)] relative overflow-hidden">
        <div className="container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              Ils nous font <span className="gradient-text">confiance</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base">
              Découvrez les retours de marques ambitieuses qui ont fait le choix de l'excellence.
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
                Questions <span className="gradient-text">fréquentes</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base">
                Toutes les réponses pour aborder votre projet sereinement.
              </p>
            </AnimatedSection>

            <div className="flex flex-col gap-4">
              {faqs.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <details className="group rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-base sm:text-lg text-[var(--text)]">
                      <span>{item.q}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-[var(--brand)]" />
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--brand)]/10 blur-[100px] rounded-full pointer-events-none" />

            <AnimatedSection>
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 leading-tight">
                Prêt à élever votre présence digitale au{" "}
                <span className="gradient-text block sm:inline mt-1 sm:mt-0">niveau supérieur ?</span>
              </h2>
              <p className="text-sm sm:text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed">
                Discutons de vos objectifs et découvrez comment nous pouvons propulser votre marque grâce à une expérience web remarquable.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/fr/contact"
                  className="btn btn-primary text-base sm:text-lg w-full sm:w-auto px-8 py-3.5 shadow-lg shadow-[var(--brand)]/20"
                >
                  Prenez rendez-vous
                </a>
                <a
                  href="/fr/services"
                  className="btn btn-ghost text-base sm:text-lg w-full sm:w-auto px-8 py-3.5 border border-[var(--border)]"
                >
                  En savoir plus
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer lang="fr" t={dict} />
    </div>
  )
}