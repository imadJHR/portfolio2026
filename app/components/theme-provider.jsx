"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("nemsi-theme") || "dark"
    setTheme(saved)
    document.documentElement.classList.toggle("dark", saved === "dark")
    document.documentElement.classList.toggle("light", saved === "light")
    document.documentElement.classList.remove("light")
    if (saved === "light") document.documentElement.classList.add("light")
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("nemsi-theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
    document.documentElement.classList.toggle("light", next === "light")
    // force both
    if (next === "dark") document.documentElement.classList.remove("light")
    if (next === "light") document.documentElement.classList.add("light")
  }

  if (!mounted) return <>{children}</>

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}