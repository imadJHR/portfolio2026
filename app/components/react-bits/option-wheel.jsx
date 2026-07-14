"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const spring = { type: "spring", stiffness: 220, damping: 30, mass: 0.72 }

export function OptionWheel({ items, defaultSelected = 0, onChange, side = "left", className = "", ariaLabel = "Options" }) {
  const clamp = (value) => Math.max(0, Math.min(items.length - 1, value))
  const initial = clamp(defaultSelected)
  const rootRef = useRef(null)
  const selectedRef = useRef(Math.round(initial))
  const positionRef = useRef(initial)
  const onChangeRef = useRef(onChange)
  const dragRef = useRef(null)
  const ignoreClickRef = useRef(false)
  const lastWheelRef = useRef(0)
  const frameRef = useRef(0)
  const pendingPositionRef = useRef(initial)
  const [selected, setSelected] = useState(Math.round(initial))
  const [position, setPosition] = useState(initial)

  onChangeRef.current = onChange

  const notifySelection = (value) => {
    const next = Math.round(clamp(value))
    if (next === selectedRef.current) return
    selectedRef.current = next
    setSelected(next)
    onChangeRef.current?.(next, items[next])
  }

  const updatePosition = (value) => {
    const next = clamp(value)
    positionRef.current = next
    pendingPositionRef.current = next
    notifySelection(next)

    if (frameRef.current) return
    frameRef.current = requestAnimationFrame(() => {
      setPosition(pendingPositionRef.current)
      frameRef.current = 0
    })
  }

  const choose = (value) => {
    const next = Math.round(clamp(value))
    positionRef.current = next
    pendingPositionRef.current = next
    setPosition(next)
    notifySelection(next)
  }

  useEffect(() => {
    const next = Math.round(clamp(defaultSelected))
    positionRef.current = next
    pendingPositionRef.current = next
    selectedRef.current = next
    setPosition(next)
    setSelected(next)
  }, [defaultSelected, items.length])

  useEffect(() => () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const handleWheel = (event) => {
      if (document.activeElement !== root || Math.abs(event.deltaY) < 6) return
      event.preventDefault()
      const now = performance.now()
      if (now - lastWheelRef.current < 90) return
      lastWheelRef.current = now
      choose(selectedRef.current + (event.deltaY > 0 ? 1 : -1))
    }

    root.addEventListener("wheel", handleWheel, { passive: false })
    return () => root.removeEventListener("wheel", handleWheel)
  }, [items])

  const handlePointerDown = (event) => {
    rootRef.current?.focus({ preventScroll: true })
    dragRef.current = {
      y: event.clientY,
      position: positionRef.current,
      id: event.pointerId,
      captured: false,
    }
  }

  const handlePointerMove = (event) => {
    const drag = dragRef.current
    if (!drag) return
    const distance = event.clientY - drag.y

    if (!drag.captured && Math.abs(distance) > 5) {
      rootRef.current?.setPointerCapture(drag.id)
      drag.captured = true
      ignoreClickRef.current = true
    }

    if (drag.captured) updatePosition(drag.position - distance / 68)
  }

  const handlePointerEnd = () => {
    if (!dragRef.current) return
    choose(positionRef.current)
    dragRef.current = null
    setTimeout(() => { ignoreClickRef.current = false }, 0)
  }

  const handleKeyDown = (event) => {
    const delta = ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : ["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : 0
    if (!delta) return
    event.preventDefault()
    choose(selectedRef.current + delta)
  }

  return (
    <div
      ref={rootRef}
      role="listbox"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-activedescendant={`option-wheel-${selected}`}
      className={`option-wheel ${side === "right" ? "option-wheel--right" : ""} ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onKeyDown={handleKeyDown}
    >
      {items.map((item, index) => {
        const offset = index - position
        const angle = Math.max(-0.88, Math.min(0.88, offset * 0.175))
        const mirror = side === "right" ? -1 : 1
        const x = -mirror * 218 * (1 - Math.cos(angle))
        const y = 218 * Math.sin(angle)
        const distance = Math.abs(offset)
        const active = selected === index

        return (
          <motion.button
            id={`option-wheel-${index}`}
            type="button"
            role="option"
            aria-selected={active}
            key={item}
            initial={false}
            animate={{
              x,
              y,
              rotate: mirror * angle * (180 / Math.PI),
              scale: Math.max(0.88, 1 - distance * 0.035),
              opacity: Math.max(0.08, 1 - distance * 0.235),
            }}
            transition={{
              x: spring,
              y: spring,
              rotate: spring,
              scale: spring,
              opacity: { duration: 0.24, ease: "easeOut" },
            }}
            className={`option-wheel__item ${active ? "is-selected" : ""}`}
            style={{
              "--wheel-active": Math.max(0, 1 - Math.min(distance, 1)),
              zIndex: Math.max(1, items.length - Math.round(distance)),
            }}
            onClick={() => {
              if (ignoreClickRef.current) return
              choose(index)
            }}
          >
            {item}
          </motion.button>
        )
      })}
    </div>
  )
}
