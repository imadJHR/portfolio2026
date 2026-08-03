import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import ContactForm from "../../components/contact-form"

export const metadata = {
  title: "Contact — Nemsi Media | Agence web Casablanca",
  description: "Contactez Nemsi Media à Casablanca pour votre projet web : création de sites, SEO, e-commerce, UI/UX. Réponse sous 24h.",
  alternates: {
    canonical: "https://www.nemsimedia.ma/fr/contact",
    languages: {
      fr: "https://www.nemsimedia.ma/fr/contact",
      ar: "https://www.nemsimedia.ma/ar/contact",
      "x-default": "https://www.nemsimedia.ma/fr/contact",
    },
  },
}

const contactInfo = [
{ icon: "📍", title: "Adresse", text: "Casablanca, Maroc" },
{ icon: "📞", title: "Téléphone & WhatsApp", link: "tel:+212709120432", text: "+212 709-120-432" },
{ icon: "📞", title: "Téléphone & WhatsApp", link: "tel:+212645288216", text: "+212 6 45 28 82 16" },
{ icon: "✉️", title: "Email", link: "mailto:contact@nemsimedia.ma", text: "contact@nemsimedia.ma" },
]

export default function ContactPage() {
  return (
    <div className="ltr" dir="ltr">
      <Navbar lang="fr" />
      <main>
        <section className="section" style={{ paddingTop: "120px" }}>
          <div className="container">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="badge mx-auto mb-4">
                <span className="badge-dot" aria-hidden="true" />
                Contact
              </div>
              <div className="divider mb-6" />
              <h1>
                Parlons de votre <span className="gradient-text">projet</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg">
                Décrivez-nous votre besoin. Nous vous répondons avec une première direction adaptée à votre contexte, sous 24h.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="glass-card p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl">Envoyez-nous un message</h2>
                  <ContactForm />
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6 sm:p-8">
                  <h3 className="mb-4 text-xl">Informations de contact</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <span className="mt-0.5 text-xl">{item.icon}</span>
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          {item.link ? (
                            <a href={item.link} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)]">{item.text}</a>
                          ) : (
                            <p className="text-sm text-[var(--text-secondary)]">{item.text}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6 sm:p-8">
                  <h3 className="mb-3 text-xl">Délai de réponse</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Nous nous engageons à vous répondre sous <strong>24h</strong>. Pour une discussion plus directe, utilisez WhatsApp.
                  </p>
                </div>

                <div className="glass-card p-6 sm:p-8">
                  <h3 className="mb-3 text-xl">Zone de service</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Basés à Casablanca, nous accompagnons des clients dans <strong>tout le Maroc</strong> et à l'international.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </div>
  )
}
