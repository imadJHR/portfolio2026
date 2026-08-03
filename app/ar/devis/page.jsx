import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import QuoteForm from "../../components/quote-form"

export const metadata = {
  title: "اطلب عرض سعر مجاني — Nemsi Media | وكالة ويب كازا",
  description: "اطلب عرض سعر مجاني لمشروعك في المغرب: مواقع ويب، تجارة إلكترونية، سيو، براندينج، أتمتة. الرد خلال 24 ساعة.",
  alternates: {
    canonical: "https://www.nemsimedia.ma/ar/devis",
    languages: {
      fr: "https://www.nemsimedia.ma/fr/devis",
      ar: "https://www.nemsimedia.ma/ar/devis",
      "x-default": "https://www.nemsimedia.ma/fr/devis",
    },
  },
}

export default function DevisPage() {
  return (
    <div className="ltr" dir="rtl">
      <Navbar lang="ar" />
      <main>
        <section className="section" style={{ paddingTop: "120px" }}>
          <div className="container">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="badge mx-auto mb-4">
                <span className="badge-dot" aria-hidden="true" />
                استشارة مجانية
              </div>
              <div className="divider mb-6" />
              <h1>
                <span className="gradient-text">اطلب عرض سعر</span> مجاني
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg">
                صف احتياجك، وسنرد عليك بتوصية أولية مناسبة لسياقك خلال 24 ساعة.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="glass-card p-6 sm:p-8">
                <QuoteForm lang="ar" />
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-3xl text-center">
              <p className="text-sm text-[var(--text-secondary)]">
                يمكنك أيضاً التواصل معنا مباشرة عبر واتساب على رقم{" "}
                <a href="tel:+212709120432" className="font-semibold text-[var(--brand-hover)]">
                  +212 709-120-432
                </a>{" "}
                أو عبر البريد الإلكتروني{" "}
                <a href="mailto:contact@nemsimedia.ma" className="font-semibold text-[var(--brand-hover)]">
                  contact@nemsimedia.ma
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ar" />
    </div>
  )
}
