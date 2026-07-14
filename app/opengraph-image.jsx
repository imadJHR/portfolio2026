import { ImageResponse } from "next/og"

export const alt = "Nemsi Media — Agence web à Casablanca"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#f8fafc",
          background:
            "radial-gradient(circle at 12% 20%, rgba(34,211,238,.22), transparent 34%), radial-gradient(circle at 88% 12%, rgba(217,70,239,.27), transparent 38%), linear-gradient(135deg, #050814 0%, #0b1020 56%, #170b25 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 800 }}>
          <div style={{ width: 20, height: 20, borderRadius: 999, background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)" }} />
          Nemsi Media
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ fontSize: 76, lineHeight: 1.04, letterSpacing: "-4px", fontWeight: 900 }}>
            Des sites qui transforment les visites en clients.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#cbd5e1" }}>
            Création web · SEO · E-commerce — Casablanca, Maroc
          </div>
        </div>
      </div>
    ),
    size,
  )
}
