import { NextResponse } from "next/server"
import path from "path"
import fs from "fs"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

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