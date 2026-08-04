"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HtmlLangUpdater({ defaultLang = "fr" }) {
  const pathname = usePathname()
  const lang = pathname.startsWith("/ar") ? "ar" : defaultLang

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    }
  }, [lang])

  return null
}
