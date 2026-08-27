import { mkdir, readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const publicDir = path.join(root, 'public')
const imageDir = path.join(publicDir, 'images')
const clientSourceDir = path.join(publicDir, 'logo-klien')
const clientOutputDir = path.join(clientSourceDir, 'optimized')

await Promise.all([
  mkdir(imageDir, { recursive: true }),
  mkdir(clientOutputDir, { recursive: true })
])

const heroSource = path.join(root, 'assets', 'hero.png')
const heroWidths = [480, 800, 1200]

await Promise.all(
  heroWidths.flatMap((width) => [
    sharp(heroSource)
      .resize(width, width, { fit: 'cover', withoutEnlargement: true })
      .avif({ quality: 58, effort: 7 })
      .toFile(path.join(imageDir, `hero-${width}.avif`)),
    sharp(heroSource)
      .resize(width, width, { fit: 'cover', withoutEnlargement: true })
      .webp({ quality: 76, effort: 6, smartSubsample: true })
      .toFile(path.join(imageDir, `hero-${width}.webp`))
  ])
)

await sharp(heroSource)
  .resize(800, 800, { fit: 'cover', withoutEnlargement: true })
  .jpeg({ quality: 78, progressive: true, mozjpeg: true })
  .toFile(path.join(imageDir, 'hero-800.jpg'))

await Promise.all([
  sharp(path.join(publicDir, 'logo.png'))
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .resize({ width: 320, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 6, alphaQuality: 90 })
    .toFile(path.join(imageDir, 'brand-logo.webp')),
  sharp(path.join(publicDir, 'alief.png'))
    .resize(640, 640, { fit: 'cover', withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(path.join(imageDir, 'founder.webp'))
])

const clientFiles = (await readdir(clientSourceDir)).filter((file) =>
  file.toLowerCase().endsWith('.png')
)

await Promise.all(
  clientFiles.map((file) =>
    sharp(path.join(clientSourceDir, file))
      .resize(640, 288, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 76, effort: 6, alphaQuality: 90, smartSubsample: true })
      .toFile(path.join(clientOutputDir, file.replace(/\.png$/i, '.webp')))
  )
)

console.log(`Optimized hero, brand, founder, and ${clientFiles.length} client logos.`)
