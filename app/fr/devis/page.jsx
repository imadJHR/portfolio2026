import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import QuoteForm from "../../components/quote-form"
import { PageHero } from "../../components/page-hero"
export const metadata = { title: "Demander un devis — Nemsi Media", description: "Décrivez votre projet et recevez une première direction claire et un devis adapté." }
export default function Page() { return <div dir="ltr"><Navbar lang="fr" /><main><PageHero lang="fr" eyebrow="NOUVEAU PROJET" title="Un périmètre clair avant de commencer." description="Quelques informations suffisent pour préparer une première estimation utile." /><section className="nm-form-page section"><div className="container"><div className="nm-form-page__box"><QuoteForm lang="fr" /></div></div></section></main><Footer lang="fr" /></div> }
