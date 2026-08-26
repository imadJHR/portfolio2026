import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import QuoteForm from "../../components/quote-form"

export const metadata = {
  title: "Demande de devis gratuit — Nemsi Media | Agence web Casablanca",
  description: "Demandez votre devis gratuit pour votre projet web au Maroc : site vitrine, e-commerce, SEO, branding, automation. Réponse sous 24h.",
  alternates: {
    canonical: "https://www.nemsimedia.ma/fr/devis",
    languages: {
      fr: "https://www.nemsimedia.ma/fr/devis",
      ar: "https://www.nemsimedia.ma/ar/devis",
      "x-default": "https://www.nemsimedia.ma/fr/devis",
    },
  },
}

export default function DevisPage() {
  return (
    <div className="ltr" dir="ltr">
      <Navbar lang="fr" />
      <main>
        <section className="section" style={{ paddingTop: "120px" }}>
          <div className="container">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="divider mb-6" />
              <h1>
                Demandez votre <span className="gradient-text">devis gratuit</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg">
                Décrivez votre besoin, nous vous répondons avec une première direction adaptée à votre contexte, sous 24h.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="glass-card p-6 sm:p-8">
                <QuoteForm lang="fr" />
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-3xl text-center">
              <p className="text-sm text-[var(--text-secondary)]">
                Vous pouvez également nous contacter directement par WhatsApp au{" "}
                <a href="tel:+212709120432" className="font-semibold text-[var(--brand-hover)]">
                  +212 709-120-432
                </a>{" "}
                ou par email à{" "}
                <a href="mailto:contact@nemsimedia.ma" className="font-semibold text-[var(--brand-hover)]">
                  contact@nemsimedia.ma
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </div>
  )
}
