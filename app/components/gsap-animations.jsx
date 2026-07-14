"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/* ---------------------------------------------------------------
   useGsapAnimation – hook for scroll-triggered reveal animations
   --------------------------------------------------------------- */
export function useGsapReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) {
      gsap.set(el, { clearProps: "transform", opacity: 1 })
      return
    }

    const {
      from = {},
      to = {},
      trigger = el,
      start = "top 85%",
      end = "top 40%",
      scrub = false,
      markers = false,
      toggleActions = "play none none none",
      onComplete,
      delay = 0,
      duration = 1,
    } = options

    const defaults = {
      y: 40,
      opacity: 0,
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { ...defaults, ...from },
        {
          y: 0,
          opacity: 1,
          ...to,
          duration,
          delay,
          scrollTrigger: {
            trigger,
            start,
            end,
            scrub,
            markers,
            toggleActions,
          },
          onComplete,
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return ref
}

/* ---------------------------------------------------------------
   useGsapStagger – stagger children animation on scroll
   --------------------------------------------------------------- */
export function useGsapStagger(options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) {
      gsap.set(container.children, { clearProps: "transform", opacity: 1 })
      return
    }

    const {
      children = container.children,
      from = {},
      to = {},
      staggerAmount = 0.1,
      start = "top 85%",
      trigger = container,
      delay = 0,
      duration = 0.8,
    } = options

    const defaults = {
      y: 30,
      opacity: 0,
      scale: 0.95,
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { ...defaults, ...from },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          delay,
          stagger: staggerAmount,
          ease: "power3.out",
          ...to,
          scrollTrigger: {
            trigger,
            start,
            toggleActions: "play none none none",
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return containerRef
}

/* ---------------------------------------------------------------
   useMouseParallax – subtle parallax on mousemove
   --------------------------------------------------------------- */
export function useMouseParallax({ intensity = 0.02 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (reducedMotion.matches || !finePointer.matches) return

    const moveX = gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" })
    const moveY = gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" })

    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * intensity
      const y = (e.clientY / window.innerHeight - 0.5) * intensity
      moveX(x * 100)
      moveY(y * 100)
    }

    window.addEventListener("pointermove", handleMouse, { passive: true })
    return () => window.removeEventListener("pointermove", handleMouse)
  }, [intensity])

  return ref
}

/* ---------------------------------------------------------------
   useGsapCounter – animated number counter
   --------------------------------------------------------------- */
export function useGsapCounter({ value = 0, duration = 2, start = "top 90%" } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) {
      el.textContent = String(value)
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { textContent: 0 },
        {
          textContent: value,
          duration,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      )
    })

    return () => ctx.revert()
  }, [value, duration, start])

  return ref
}

/* ---------------------------------------------------------------
   AnimatedSection – wrapper for fade-up on scroll
   --------------------------------------------------------------- */
export function AnimatedSection({ children, className = "", delay = 0, ...props }) {
  const ref = useGsapReveal({ delay })

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}

/* ---------------------------------------------------------------
   StaggerSection – container that staggers its children
   --------------------------------------------------------------- */
export function StaggerSection({ children, className = "", staggerAmount = 0.1, ...props }) {
  const ref = useGsapStagger({ staggerAmount })

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}

/* ---------------------------------------------------------------
   ParallaxSection – mouse parallax wrapper
   --------------------------------------------------------------- */
export function ParallaxSection({ children, className = "", intensity = 0.02, ...props }) {
  const ref = useMouseParallax({ intensity })

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}

/* ---------------------------------------------------------------
   Counter – animated number
   --------------------------------------------------------------- */
export function AnimatedCounter({ value, duration = 2, className = "", ...props }) {
  const ref = useGsapCounter({ value, duration })

  return (
    <span ref={ref} className={className} {...props}>
      0
    </span>
  )
}
