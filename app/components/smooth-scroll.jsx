"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) return

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      anchors: {
        offset: -88,
        duration: 0.9,
      },
      autoResize: true,
      autoToggle: true,
      stopInertiaOnNavigate: true,
    })

    const update = (time) => lenis.raf(time * 1000)
    const refresh = () => ScrollTrigger.refresh()

    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    window.addEventListener("load", refresh, { once: true })
    requestAnimationFrame(refresh)

    return () => {
      window.removeEventListener("load", refresh)
      lenis.off("scroll", ScrollTrigger.update)
      gsap.ticker.remove(update)
      gsap.ticker.lagSmoothing(500, 33)
      lenis.destroy()
    }
  }, [])

  return null
}
