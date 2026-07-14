"use client"

import { useEffect } from "react"

const AI_SOURCES = [
  { id: "chatgpt", matches: ["chatgpt.com", "chat.openai.com", "openai.com"] },
  { id: "perplexity", matches: ["perplexity.ai"] },
  { id: "copilot", matches: ["copilot.microsoft.com"] },
  { id: "gemini", matches: ["gemini.google.com"] },
  { id: "claude", matches: ["claude.ai"] },
  { id: "you", matches: ["you.com"] },
  { id: "poe", matches: ["poe.com"] },
  { id: "phind", matches: ["phind.com"] },
]

function identifyAiSource(value = "") {
  const normalized = value.toLowerCase()
  return AI_SOURCES.find((source) => source.matches.some((match) => normalized.includes(match)))?.id ?? null
}

export function AiReferralTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const campaignSource = [params.get("utm_source"), params.get("ref")].filter(Boolean).join(" ")
    let referrerHost = ""

    try {
      referrerHost = document.referrer ? new URL(document.referrer).hostname : ""
    } catch {
      referrerHost = ""
    }

    const source = identifyAiSource(`${campaignSource} ${referrerHost}`)
    if (!source) return

    const eventKey = `${source}:${window.location.pathname}`
    try {
      window.sessionStorage.setItem("nemsi_ai_source", source)
      if (window.sessionStorage.getItem("nemsi_ai_referral_tracked") === eventKey) return
      window.sessionStorage.setItem("nemsi_ai_referral_tracked", eventKey)
    } catch {
      // Analytics remains optional when browser storage is unavailable.
    }

    const payload = {
      ai_source: source,
      referral_host: referrerHost || "campaign_parameter",
      landing_path: window.location.pathname,
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "ai_referral", payload)
      return
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: "ai_referral", ...payload })
  }, [])

  return null
}
