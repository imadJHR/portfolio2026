"use client"

export function AnimatedSection({ children, className = "", ...props }) {
  const { delay: _delay, ...safeProps } = props
  void _delay
  return <div className={className} {...safeProps}>{children}</div>
}

export function StaggerSection({ children, className = "", ...props }) {
  const { staggerAmount: _staggerAmount, ...safeProps } = props
  void _staggerAmount
  return <div className={className} {...safeProps}>{children}</div>
}
