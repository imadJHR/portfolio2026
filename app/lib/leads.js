export const WHATSAPP_NUMBER = "212645288216"

export function trackLead(source, details = {}) {
  if (typeof window === "undefined") return

  const payload = {
    lead_source: source,
    ...details,
  }

  try {
    const aiSource = window.sessionStorage.getItem("nemsi_ai_source")
    if (aiSource) {
      payload.traffic_channel = "ai_assistant"
      payload.ai_source = aiSource
    }
  } catch {
    // Lead tracking still works when browser storage is unavailable.
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", payload)
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: "generate_lead", ...payload })
}

export function openWhatsApp(message, source = "website", details = {}) {
  if (typeof window === "undefined") return

  trackLead(source, details)
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank", "noopener,noreferrer")
}
