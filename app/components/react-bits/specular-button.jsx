"use client"

import { forwardRef } from "react"
import Link from "next/link"

const SpecularSurface = forwardRef(function SpecularSurface(
  { as: Component = "button", children, className = "", variant = "primary", size = "md", onPointerMove, ...props },
  ref,
) {
  const followPointer = (event) => {
    const surface = event.currentTarget
    const rect = surface.getBoundingClientRect()
    const angle = Math.atan2(event.clientY - (rect.top + rect.height / 2), event.clientX - (rect.left + rect.width / 2))
    surface.style.setProperty("--sb-angle", `${angle + Math.PI / 2}rad`)
    onPointerMove?.(event)
  }

  return (
    <Component
      ref={ref}
      onPointerMove={followPointer}
      className={`specular-button specular-button--${variant} specular-button--${size} ${className}`.trim()}
      {...props}
    >
      <span className="specular-button__rim" aria-hidden="true" />
      <span className="specular-button__glow" aria-hidden="true" />
      <span className="specular-button__label">{children}</span>
    </Component>
  )
})

export const SpecularButton = forwardRef(function SpecularButton({ type = "button", ...props }, ref) {
  return <SpecularSurface ref={ref} as="button" type={type} {...props} />
})

export const SpecularLink = forwardRef(function SpecularLink({ href, ...props }, ref) {
  const Component = typeof href === "string" && href.startsWith("/") ? Link : "a"
  return <SpecularSurface ref={ref} as={Component} href={href} {...props} />
})
