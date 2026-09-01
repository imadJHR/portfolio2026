export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="38" height="38" rx="10" fill="#111113" />
      <path
        d="M10.5 29V11h5.2l8.6 10.6V11h5.2v18h-5.2l-8.6-10.6V29h-5.2Z"
        fill="white"
      />
      <circle cx="31.5" cy="8.5" r="3.5" fill="var(--brand)" />
    </svg>
  )
}
