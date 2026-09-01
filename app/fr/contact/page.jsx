import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { PageHero } from "../../components/page-hero"
import { Contact } from "../../components/contact"
export const metadata = { title: "Contact — Nemsi Media", description: "Parlez-nous de votre projet digital. Nemsi Media vous répond avec une première direction claire sous 24h." }
export default function Page() { return <div dir="ltr"><Navbar lang="fr" /><main><PageHero lang="fr" eyebrow="CONTACT" title="Commençons par une conversation simple." description="Parlez-nous du contexte, de l’objectif et du moment où vous souhaitez avancer." /><Contact lang="fr" /></main><Footer lang="fr" /></div> }
