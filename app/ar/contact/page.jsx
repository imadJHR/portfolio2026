import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import ContactForm from "../../components/contact-form"

export const metadata = {
  title: "اتصل بنا — Nemsi Media | وكالة ويب الدار البيضاء",
  description: "تواصل مع Nemsi Media في الدار البيضاء لمشروعك: تصميم مواقع، سيو، تجارة إلكترونية، واجهات. رد خلال 24 ساعة.",
  alternates: {
    canonical: "https://www.nemsimedia.ma/ar/contact",
    languages: {
      fr: "https://www.nemsimedia.ma/fr/contact",
      ar: "https://www.nemsimedia.ma/ar/contact",
      "x-default": "https://www.nemsimedia.ma/fr/contact",
    },
  },
}

const contactInfo = [
{ icon: "📍", title: "العنوان", text: "الدار البيضاء، المغرب" },
{ icon: "📞", title: "الهاتف وواتساب", link: "tel:+212709120432", text: "+212 709-120-432" },
{ icon: "📞", title: "الهاتف وواتساب", link: "tel:+212645288216", text: "+212 6 45 28 82 16" },
{ icon: "✉️", title: "البريد الإلكتروني", link: "mailto:contact@nemsimedia.ma", text: "contact@nemsimedia.ma" },
]

export default function ContactPage() {
  return (
    <div className="rtl" dir="rtl">
      <Navbar lang="ar" />
      <main>
        <section className="section" style={{ paddingTop: "120px" }}>
          <div className="container">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <div className="divider mb-6" />
              <h1>
                لنتحدث عن <span className="gradient-text">مشروعك</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg">
                اشرح لنا حاجتك. سنرد عليك بتصور أولي مناسب لسياقك، خلال 24 ساعة.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="glass-card p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl">أرسل لنا رسالة</h2>
                  <ContactForm />
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6 sm:p-8">
                  <h3 className="mb-4 text-xl">معلومات الاتصال</h3>
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
                  <h3 className="mb-3 text-xl">مدة الرد</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    نلتزم بالرد خلال <strong>24 ساعة</strong>. لمناقشة أسرع، استخدم واتساب.
                  </p>
                </div>

                <div className="glass-card p-6 sm:p-8">
                  <h3 className="mb-3 text-xl">منطقة الخدمة</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    مقرنا في الدار البيضاء، ونرافق زبائن في <strong>جميع أنحاء المغرب</strong> وخارجه.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ar" />
    </div>
  )
}
