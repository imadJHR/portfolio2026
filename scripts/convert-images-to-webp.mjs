import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const publicDir = path.join(process.cwd(), 'public')
const images = [
  'burratina.png',
  'copine.png',
  'spa.png',
  'ironz.png',
  'tonka.png',
  'bianca.png',
  'sou9.png',
  'mj.png',
  'pat.png',
  'test.png',
  'dark.png',
  'light.png',
  'fadllocar.png',
]

async function convert() {
  let totalBefore = 0
  let totalAfter = 0
  const results = []

  for (const file of images) {
    const inputPath = path.join(publicDir, file)
    if (!fs.existsSync(inputPath)) {
      console.log(`SKIP missing: ${file}`)
      continue
    }

    const stats = fs.statSync(inputPath)
    const before = stats.size
    totalBefore += before

    const baseName = path.basename(file, path.extname(file))
    const outputPath = path.join(publicDir, `${baseName}.webp`)

    try {
      await sharp(inputPath)
        .webp({ quality: 82, effort: 4 })
        .toFile(outputPath)

      const afterStats = fs.statSync(outputPath)
      const after = afterStats.size
      totalAfter += after

      const savings = ((1 - after / before) * 100).toFixed(1)
      results.push({
        file,
        webp: `${baseName}.webp`,
        before,
        after,
        savings: `${savings}%`,
      })
      console.log(`OK ${file} -> ${baseName}.webp (${(before/1024).toFixed(1)}KB -> ${(after/1024).toFixed(1)}KB, -${savings}%)`)
    } catch (err) {
      console.error(`ERR ${file}:`, err.message)
    }
  }

  console.log('\n=== SUMMARY ===')
  for (const r of results) {
    console.log(`${r.file}: ${r.webp} (-${r.savings})`)
  }
  console.log(`Total before: ${(totalBefore/1024/1024).toFixed(2)}MB`)
  console.log(`Total after:  ${(totalAfter/1024/1024).toFixed(2)}MB`)
  console.log(`Global savings: ${((1 - totalAfter/totalBefore)*100).toFixed(1)}%`)
}

convert().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
