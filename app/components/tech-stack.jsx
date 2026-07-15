"use client"

import { Code, Server, Database, Terminal, Shield, GitBranch, Globe, Layers, Gauge, Smartphone } from "lucide-react"
import Marquee from "react-fast-marquee"
import { AnimatedSection } from "./gsap-animations"

export function TechStack({ lang }) {
  const isRTL = lang === "ar"
  const techs = [
    { name: "Next.js", icon: Code }, { name: "React", icon: Layers }, { name: "Node.js", icon: Terminal }, { name: "MongoDB", icon: Database }, { name: "TypeScript", icon: Shield }, { name: "Tailwind", icon: Gauge }, { name: "Three.js", icon: Globe }, { name: "Git", icon: GitBranch }, { name: "API", icon: Server }, { name: "Mobile-first", icon: Smartphone },
  ]

  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="container">
        <AnimatedSection className="glass-card min-w-0 overflow-hidden p-4 sm:p-7">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><p className="text-xs font-black uppercase tracking-[.2em] text-[var(--text-muted)]">{isRTL ? "تقنيات" : "Tech stack"}</p><h2 className="mt-2 text-3xl sm:text-4xl">{isRTL ? "أدوات حديثة" : "Stack moderne"} <span className="gradient-text">{isRTL ? "لأداء حقيقي" : "pour vraie performance"}</span></h2></div>
            <p className="max-w-sm text-sm md:text-end">{isRTL ? "نستخدم الأدوات المناسبة لبناء مواقع سريعة وقابلة للتطوير." : "Les bons outils pour livrer vite, propre et scalable."}</p>
          </div>
          <p className="sr-only">{`${isRTL ? "التقنيات المستخدمة" : "Technologies utilisées"}: ${techs.map((tech) => tech.name).join(", ")}`}</p>
          <div className="tech-marquee" aria-hidden="true">
            <Marquee
              autoFill
              pauseOnHover
              speed={38}
              direction={isRTL ? "right" : "left"}
              gradient={false}
              className="tech-marquee-runner"
            >
              {techs.map((tech) => (
                <div key={tech.name} className="tech-marquee-chip">
                  <tech.icon className="h-4 w-4 text-[var(--brand-hover)]" />
                  {tech.name}
                </div>
              ))}
            </Marquee>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
