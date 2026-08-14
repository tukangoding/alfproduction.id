import sharp from 'sharp'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'

const src = path.resolve(process.argv[2] ?? 'public/logo.png')
const outDir = path.resolve('public')

const transparent = { r: 0, g: 0, b: 0, alpha: 0 }
const white = { r: 255, g: 255, b: 255, alpha: 1 }

const icons = [
  { file: 'favicon-16x16.png', size: 16, background: transparent },
  { file: 'favicon-32x32.png', size: 32, background: transparent },
  { file: 'android-chrome-192x192.png', size: 192, background: transparent },
  { file: 'android-chrome-512x512.png', size: 512, background: transparent },
  { file: 'apple-touch-icon.png', size: 180, background: white }
]

for (const { file, size, background } of icons) {
  await sharp(src)
    .resize(size, size, { fit: 'contain', background })
    .png()
    .toFile(path.join(outDir, file))
  console.log('generated', file)
}

const manifest = {
  name: 'ALF Production',
  short_name: 'ALF',
  description: 'Spesialis Produksi Mars & Hymne Sekolah',
  start_url: '/',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#ACCD21',
  icons: [
    { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
  ]
}

await writeFile(
  path.join(outDir, 'site.webmanifest'),
  JSON.stringify(manifest, null, 2) + '\n'
)
console.log('generated site.webmanifest')
