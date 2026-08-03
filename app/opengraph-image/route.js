import { NextResponse } from "next/server"
import path from "path"
import fs from "fs"

export const contentType = "image/png"
export const size = { width: 1200, height: 630 }
export const alt = "Nemsi Media — Agence web à Casablanca"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "opengraph.png")
    const fileBuffer = fs.readFileSync(filePath)
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, immutable",
      },
    })
  } catch (error) {
    return new NextResponse("OG image not found", { status: 404 })
  }
}
