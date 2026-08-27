import Navbar from "../../components/navbar"
import { Services } from "../../components/services"
import Footer from "../../components/footer"
import { SocialSidebar } from "../../components/social-sidebar"
import { buildServicesIndexMetadata } from "../../lib/services-index-seo"

const title = "Nos services — Nemsi Media"
const description =
  "Découvrez l'ensemble des services Nemsi Media : branding, design, photo & vidéo, réseaux sociaux, publicité, emailing, sites web, UI/UX, landing pages, e-commerce, SEO, maintenance, apps web et backend."

export const metadata = {
  title,
  description,
  ...buildServicesIndexMetadata("fr"),
  openGraph: {
    title: `${title} | Nemsi Media`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Nemsi Media`,
    description,
  },
}

export default function FrenchServicesIndex() {
  return (
    <div className="ltr" dir="ltr">
      <SocialSidebar isRTL={false} />
      <Navbar lang="fr" t={undefined} />
      <main>
        <section className="section relative pt-28 sm:pt-32">
          <div className="container text-center">
            <div className="divider mb-6" />
            <h1 className="mb-4 text-[clamp(2rem,6vw,3.5rem)] font-bold">
              Nos <span className="gradient-text">services</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg">
              Un système complet pour votre présence digitale : design clair, développement rapide et parcours pensé pour convertir.
            </p>
          </div>
        </section>
        <Services lang="fr" />
      </main>
      <Footer lang="fr" t={undefined} />
    </div>
  )
}
