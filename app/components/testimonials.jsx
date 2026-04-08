
"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, animate } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Quote,
  Star,
  Sparkles,
  Heart,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  Zap,
} from "lucide-react"

// --- Expanded Professional Testimonials (10 total) ---
const proTestimonials = {
  fr: [
    {
      name: "Yassine Alaoui",
      role: "CEO, E-com Express",
      text: "Leur expertise en e-commerce a transformé notre boutique. Nous avons vu une augmentation de 40% des conversions en 3 mois. Une équipe qui comprend vraiment les enjeux business.",
      rating: 5,
    },
    {
      name: "Fatima Zahra",
      role: "Fondatrice, L'Artisanat Moderne",
      text: "Je suis absolument amoureuse du design. Ils ont su capturer l'essence de ma marque avec élégance et modernité. La communication a été fluide et transparente du début à la fin.",
      rating: 5,
    },
    {
      name: "Mehdi Benjelloun",
      role: "Directeur Technique, TechSolutions",
      text: "En tant que CTO, j'ai été impressionné par la qualité du code et la robustesse de l'architecture. Le site est non seulement beau mais aussi incroyablement rapide et sécurisé.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Marketing Manager, Global Tours",
      text: "Le système de réservation qu'ils ont développé est intuitif et a réduit notre charge de travail administratif de moitié. Ils ont respecté un délai très serré, ce qui était crucial pour nous.",
      rating: 5,
    },
    {
      name: "Karim El Fassi",
      role: "Gérant, Le Zellige d'Or",
      text: "Passer de 'pas de site' à une vitrine en ligne professionnelle a changé la donne. Je reçois maintenant des demandes de devis de clients internationaux. Un investissement qui vaut chaque centime.",
      rating: 5,
    },
    {
      name: "Lina Kettani",
      role: "Artiste Indépendante",
      text: "Ils ont créé un portfolio magnifique qui met vraiment en valeur mon travail. Le back-office est si simple à utiliser que je peux le mettre à jour moi-même sans aucune aide. Parfait !",
      rating: 5,
    },
    {
      name: "Omar Berrada",
      role: "Fondateur, Luxe Maroc",
      text: "Un site haut de gamme qui reflète parfaitement notre positionnement luxe. Le SEO a fait exploser notre visibilité sur Google. Excellent travail sur tous les plans.",
      rating: 5,
    },
    {
      name: "Nadia El Amrani",
      role: "Directrice, Restaurant La Perle",
      text: "Le site et le système de réservation en ligne ont augmenté nos réservations de 65% le premier mois. Les clients adorent l'expérience utilisateur. Très professionnel.",
      rating: 5,
    },
    {
      name: "Hamza Tazi",
      role: "CEO, Startup Innovate",
      text: "Ils ont compris notre vision et l'ont transformée en un produit digital performant. Le dashboard admin est un vrai plaisir à utiliser. Je les recommande sans hésiter.",
      rating: 5,
    },
    {
      name: "Amina Khalil",
      role: "Brand Director, Maison Élégance",
      text: "Un accompagnement exceptionnel du brief jusqu'au lancement. Le design est raffiné, les performances excellentes, et le retour sur investissement est déjà visible.",
      rating: 5,
    },
  ],
  ar: [
    {
      name: "ياسين علوي",
      role: "الرئيس التنفيذي، E-com Express",
      text: "خبرتهم في التجارة الإلكترونية غيرت متجرنا. شهدنا زيادة بنسبة 40% في التحويلات خلال 3 أشهر. فريق يفهم حقًا تحديات العمل التجاري.",
      rating: 5,
    },
    {
      name: "فاطمة الزهراء",
      role: "مؤسسة، الحرفية العصرية",
      text: "أنا معجبة جدًا بالتصميم. لقد تمكنوا من التقاط جوهر علامتي التجارية بأناقة وحداثة. كان التواصل سلسًا وشفافًا من البداية إلى النهاية.",
      rating: 5,
    },
    {
      name: "مهدي بنجلون",
      role: "المدير التقني، TechSolutions",
      text: "بصفتي مديرًا تقنيًا، أعجبت بجودة الكود وقوة البنية. الموقع ليس جميلًا فحسب، بل هو أيضًا سريع وآمن بشكل لا يصدق.",
      rating: 5,
    },
    {
      name: "سارة تشن",
      role: "مديرة التسويق، Global Tours",
      text: "نظام الحجز الذي طوروه سهل الاستخدام وقلل من عبء العمل الإداري لدينا إلى النصف. لقد احترموا موعدًا نهائيًا ضيقًا للغاية، وهو ما كان حاسمًا بالنسبة لنا.",
      rating: 5,
    },
    {
      name: "كريم الفاسي",
      role: "مسير، الزليج الذهبي",
      text: "الانتقال من 'لا يوجد موقع' إلى واجهة عرض إلكترونية احترافية غيّر قواعد اللعبة. أتلقى الآن طلبات عروض أسعار من عملاء دوليين. استثمار يستحق كل سنتيم.",
      rating: 5,
    },
    {
      name: "لينا كتاني",
      role: "فنانة مستقلة",
      text: "لقد أنشأوا لي معرض أعمال رائع يبرز أعمالي حقًا. لوحة التحكم سهلة الاستخدام لدرجة أنني أستطيع تحديثها بنفسي دون أي مساعدة. ممتاز!",
      rating: 5,
    },
    {
      name: "عمر برادة",
      role: "مؤسس، Luxe Maroc",
      text: "موقع فاخر يعكس تمامًا موقعنا في السوق الفاخر. تحسين محركات البحث رفع ظهورنا بشكل كبير على جوجل. عمل ممتاز بكل المقاييس.",
      rating: 5,
    },
    {
      name: "نادية العمراني",
      role: "مديرة، مطعم اللؤلؤة",
      text: "الموقع ونظام الحجز عبر الإنترنت زادا حجوزاتنا بنسبة 65% في الشهر الأول. العملاء يحبون تجربة المستخدم. احترافية عالية جدًا.",
      rating: 5,
    },
    {
      name: "حمزة التازي",
      role: "الرئيس التنفيذي، Startup Innovate",
      text: "فهموا رؤيتنا وحولوها إلى منتج رقمي قوي. لوحة التحكم ممتعة الاستخدام. أوصي بهم بشدة.",
      rating: 5,
    },
    {
      name: "أمينة خليل",
      role: "مديرة العلامة التجارية، Maison Élégance",
      text: "مرافقة استثنائية من الإحاطة حتى الإطلاق. التصميم راقٍ، الأداء ممتاز، والعائد على الاستثمار واضح بالفعل.",
      rating: 5,
    },
  ],
}

// --- AnimatedNumber Component ---
function AnimatedNumber({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString()
          }
        },
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return <span ref={ref}>0</span>
}

// --- Stat Item Component ---
function StatItem({ icon: Icon, number, label, isNumber = true }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      className="group relative text-center p-5 sm:p-6 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 rounded-2xl shadow-[0_2px_16px_rgba(82,3,113,0.04)] hover:shadow-[0_8px_32px_rgba(82,3,113,0.08)] transition-all duration-400 overflow-hidden"
    >
      <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-light-accent)] mb-3 shadow-md">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] bg-clip-text text-transparent mb-1.5">
        {isNumber ? (
          <>
            <AnimatedNumber value={parseInt(number)} />
            {number.replace(parseInt(number).toString(), "")}
          </>
        ) : (
          number
        )}
      </p>
      <p className="text-xs sm:text-sm text-[var(--brand-light-text)]/55 dark:text-[var(--brand-dark-text)]/55 font-medium">
        {label}
      </p>
    </motion.div>
  )
}

// --- Testimonial Card Component ---
function TestimonialCard({ testimonial, isRTL }) {
  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const contentItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
  }

  const RatingStars = ({ rating = 5 }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 transition-colors ${
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-[var(--brand-light-text)]/15 dark:text-[var(--brand-dark-text)]/15"
          }`}
        />
      ))}
    </div>
  )

  return (
    <Card className="h-full relative overflow-hidden border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_4px_24px_rgba(82,3,113,0.05)] hover:shadow-[0_12px_40px_rgba(82,3,113,0.12)] transition-all duration-400 rounded-2xl group">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--brand-light-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-[var(--brand-primary)]/[0.01] to-transparent dark:from-[var(--brand-dark-accent)]/[0.02] dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-6 sm:p-7 relative z-10 h-full flex flex-col">
        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full"
        >
          <motion.div variants={contentItemVariants}>
            <div className="inline-flex p-3.5 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-light-accent)] mb-5 shadow-lg shadow-[var(--brand-primary)]/20">
              <Quote className="w-5 h-5 text-white" />
            </div>
          </motion.div>

          <motion.div variants={contentItemVariants}>
            <RatingStars rating={testimonial.rating || 5} />
          </motion.div>

          <motion.p
            variants={contentItemVariants}
            className="text-[var(--brand-light-text)]/75 dark:text-[var(--brand-dark-text)]/75 mb-6 leading-relaxed font-light text-sm sm:text-base italic flex-grow"
          >
            “{testimonial.text}”
          </motion.p>

          <motion.div
            variants={contentItemVariants}
            className="flex items-center gap-4 pt-5 border-t border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/15 mt-auto"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">
              {testimonial.name?.charAt(0) || "C"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] text-sm sm:text-base truncate">
                {testimonial.name}
              </p>
              <p className="text-[var(--brand-light-text)]/60 dark:text-[var(--brand-dark-text)]/60 text-xs sm:text-sm truncate">
                {testimonial.role}
              </p>
            </div>
            <div className="text-emerald-500" title={isRTL ? "عميل موثوق" : "Client vérifié"}>
              <ThumbsUp className="w-5 h-5" />
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

// --- Main Testimonials Component ---
export function Testimonials({ lang, t }) {
  const isRTL = lang === "ar"

  const colors = {
    primary: "#520371",
    secondary: "#7c3aed",
    lightBg: "#fdfaff",
    darkBg: "#0f0a1a",
    lightAccent: "#9333ea",
    darkAccent: "#c084fc",
    lightText: "#1a0525",
    darkText: "#f5f0ff",
  }

  const cssVariables = {
    "--brand-primary": colors.primary,
    "--brand-secondary": colors.secondary,
    "--brand-light-bg": colors.lightBg,
    "--brand-dark-bg": colors.darkBg,
    "--brand-light-accent": colors.lightAccent,
    "--brand-dark-accent": colors.darkAccent,
    "--brand-light-text": colors.lightText,
    "--brand-dark-text": colors.darkText,
  }

  const whatsappInfo = {
    phone: "212645288216",
    messages: {
      fr: "Bonjour, j’ai consulté vos témoignages et je souhaite discuter de mon projet avec vous.",
      ar: "مرحبا، اطلعت على آراء العملاء وأود مناقشة مشروعي معكم.",
    },
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      whatsappInfo.messages[lang] || whatsappInfo.messages.fr
    )
    window.open(`https://wa.me/${whatsappInfo.phone}?text=${message}`, "_blank")
  }

  const particles = [
    { left: "10%", top: "18%" },
    { left: "22%", top: "70%" },
    { left: "35%", top: "28%" },
    { left: "48%", top: "82%" },
    { left: "62%", top: "22%" },
    { left: "76%", top: "64%" },
    { left: "88%", top: "30%" },
    { left: "92%", top: "76%" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  }

  const testimonials = t?.testimonials?.items?.length > 0 
    ? t.testimonials.items 
    : proTestimonials[lang]

  return (
    <section
      id="testimonials"
      style={cssVariables}
      className={`relative py-20 sm:py-24 lg:py-32 overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--brand-light-bg)] dark:bg-[var(--brand-dark-bg)]" />
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]" 
           style={{ 
             backgroundImage: `linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)`, 
             backgroundSize: "60px 60px" 
           }}/>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.18, 0.08], x: [0, 35, 0], y: [0, -22, 0] }} 
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full" 
          style={{ background: `radial-gradient(circle, var(--brand-light-accent) 0%, transparent 70%)` }} />
        
        <motion.div animate={{ scale: [1, 1.18, 1], opacity: [0.06, 0.14, 0.06], x: [0, -28, 0], y: [0, 30, 0] }} 
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }} 
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full" 
          style={{ background: `radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)` }} />

        {particles.map((particle, i) => (
          <motion.div key={i} className="absolute" style={{ left: particle.left, top: particle.top }}
            animate={{ y: [0, -30, 0], x: [0, i % 2 === 0 ? 10 : -10, 0], opacity: [0.1, 0.3, 0.1], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}>
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--brand-primary)]/15 dark:bg-[var(--brand-dark-accent)]/15" />
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 mb-8">
            <div className="flex items-center gap-2 bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl border border-[var(--brand-primary)]/15 dark:border-[var(--brand-dark-accent)]/20 rounded-full px-5 py-2.5 shadow-[0_4px_24px_rgba(82,3,113,0.08)]">
              <Heart className="w-4 h-4 text-[var(--brand-light-accent)] dark:text-[var(--brand-dark-accent)]" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-light-accent)] dark:from-[var(--brand-dark-accent)] dark:to-[var(--brand-secondary)] bg-clip-text text-transparent uppercase tracking-wider">
                {isRTL ? "آراء العملاء" : "Avis Clients"}
              </span>
              <Sparkles className="w-4 h-4 text-[var(--brand-primary)] dark:text-[var(--brand-dark-accent)]" />
            </div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            <span className="block text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
              {isRTL ? "ثقة العملاء" : "La confiance de nos clients"}
            </span>
            <span className="block mt-2 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] dark:from-[var(--brand-dark-accent)] dark:via-[var(--brand-secondary)] dark:to-[var(--brand-dark-accent)] bg-clip-text text-transparent">
              {t?.testimonials?.title || (isRTL ? "هي أفضل دليل" : "est notre meilleure preuve")}
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 max-w-3xl mx-auto leading-relaxed font-light">
            {t?.testimonials?.subtitle || (isRTL 
              ? "هذه بعض الآراء من عملاء اشتغلنا معهم في مشاريع رقمية مختلفة." 
              : "Voici quelques retours de clients que nous avons accompagnés sur différents projets digitaux.")}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <TestimonialCard testimonial={testimonial} isRTL={isRTL} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 sm:mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <StatItem icon={Users} number={`${testimonials.length}+`} label={isRTL ? "توصيات عملاء" : "Retours clients"} />
            <StatItem icon={Star} number="4.9/5" label={isRTL ? "تقييم عام" : "Note moyenne"} isNumber={false} />
            <StatItem icon={Shield} number={isRTL ? "ثقة" : "Confiance"} label={isRTL ? "تواصل واضح" : "Communication claire"} isNumber={false} />
            <StatItem icon={Zap} number={isRTL ? "سرعة" : "Rapidité"} label={isRTL ? "استجابة ومتابعة" : "Réponse & suivi"} isNumber={false} />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 sm:mt-24 lg:mt-28"
        >
          <div className="max-w-5xl mx-auto rounded-3xl border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(82,3,113,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)]">
                  {isRTL ? "هل تريد نفس الجودة لمشروعك؟" : "Vous voulez la même qualité pour votre projet ?"}
                </h3>
                <p className="mt-3 text-[var(--brand-light-text)]/65 dark:text-[var(--brand-dark-text)]/65 max-w-2xl leading-relaxed">
                  {isRTL 
                    ? "إذا كنت تبحث عن موقع احترافي، تجربة سلسة، وتواصل واضح من البداية حتى التسليم، يمكننا مساعدتك." 
                    : "Si vous cherchez un site professionnel, une expérience fluide et un accompagnement sérieux du début à la livraison, nous pouvons vous aider."}
                </p>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {[
                    isRTL ? "موقع واضح واحترافي" : "Site clair & professionnel",
                    isRTL ? "تصميم متجاوب مع الهاتف" : "Responsive mobile",
                    isRTL ? "تركيز على النتيجة" : "Pensé pour la conversion",
                    isRTL ? "تواصل سريع ومتابعة" : "Réponse rapide & suivi",
                  ].map((item, i) => (
                    <motion.div key={i} variants={itemVariants} 
                      className="flex items-center gap-2.5 rounded-2xl px-4 py-3 bg-[var(--brand-primary)]/[0.04] dark:bg-[var(--brand-dark-accent)]/[0.06] border border-[var(--brand-primary)]/10 dark:border-[var(--brand-dark-accent)]/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-sm text-[var(--brand-light-text)]/75 dark:text-[var(--brand-dark-text)]/75">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="flex flex-col gap-4">
                <Button 
                  onClick={handleWhatsAppClick} 
                  className="h-12 w-full group rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-light-accent)] to-[var(--brand-secondary)] text-white font-semibold text-base border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-[-15deg]" />
                  <span className={isRTL ? "mr-2.5" : "ml-2.5"}>
                    {isRTL ? "استشارة مجانية" : "Audit gratuit"}
                  </span>
                </Button>

                <a href={`/${lang}#contact`} 
                  className="inline-flex h-12 w-full group items-center justify-center rounded-2xl border-2 border-[var(--brand-primary)]/20 dark:border-[var(--brand-dark-accent)]/20 px-6 text-[var(--brand-light-text)] dark:text-[var(--brand-dark-text)] font-semibold hover:bg-[var(--brand-primary)]/[0.06] dark:hover:bg-[var(--brand-dark-accent)]/[0.06] transition-all transform hover:scale-105">
                  <span>{isRTL ? "تحدث عن مشروعك" : "Parler de votre projet"}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "mr-2 rotate-180 group-hover:-translate-x-1" : "ml-2"}`} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[var(--brand-light-bg)] dark:from-[var(--brand-dark-bg)] to-transparent z-[5] pointer-events-none" />
    </section>
  )
}
