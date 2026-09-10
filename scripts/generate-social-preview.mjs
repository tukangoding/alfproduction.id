import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const width = 1200
const height = 630
const logoWidth = 430
const outputPath = path.join(root, 'public', 'alf-production-social-v1.jpg')

const logo = await sharp(path.join(root, 'public', 'logo.png'))
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .resize({ width: logoWidth, fit: 'inside' })
  .png()
  .toBuffer()

const logoMetadata = await sharp(logo).metadata()

const background = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff"/>
        <stop offset="1" stop-color="#f0f4e5"/>
      </linearGradient>
      <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#20242b"/>
        <stop offset="1" stop-color="#101318"/>
      </linearGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#background)"/>
    <rect x="765" y="0" width="435" height="630" fill="url(#panel)"/>
    <circle cx="1115" cy="80" r="225" fill="#accd21" opacity="0.10"/>
    <circle cx="1175" cy="605" r="245" fill="#accd21" opacity="0.08"/>

    <rect x="80" y="286" width="76" height="7" rx="3.5" fill="#accd21"/>
    <text x="80" y="348" fill="#1a1d23" font-family="Arial, Helvetica, sans-serif" font-size="39" font-weight="700">
      Spesialis Produksi
    </text>
    <text x="80" y="397" fill="#1a1d23" font-family="Arial, Helvetica, sans-serif" font-size="39" font-weight="700">
      Mars &amp; Hymne Lembaga
    </text>
    <text x="80" y="456" fill="#4f5a68" font-family="Arial, Helvetica, sans-serif" font-size="23">
      Karya musik profesional untuk identitas institusi
    </text>
    <text x="80" y="548" fill="#466000" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="1.5">
      ALFPRODUCTION.ID
    </text>

    <g fill="#accd21">
      <rect x="836" y="274" width="19" height="82" rx="9.5"/>
      <rect x="876" y="234" width="19" height="162" rx="9.5"/>
      <rect x="916" y="194" width="19" height="242" rx="9.5"/>
      <rect x="956" y="249" width="19" height="132" rx="9.5"/>
      <rect x="996" y="219" width="19" height="192" rx="9.5"/>
      <rect x="1036" y="164" width="19" height="302" rx="9.5"/>
      <rect x="1076" y="239" width="19" height="152" rx="9.5"/>
      <rect x="1116" y="284" width="19" height="62" rx="9.5"/>
    </g>
    <text x="985" y="530" fill="#ffffff" opacity="0.78" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" letter-spacing="2">
      MUSIC • IDENTITY • PRIDE
    </text>
  </svg>
`)

await sharp(background)
  .composite([
    {
      input: logo,
      left: 80,
      top: 74 + Math.round((172 - (logoMetadata.height ?? 0)) / 2)
    }
  ])
  .jpeg({ quality: 88, progressive: true, mozjpeg: true })
  .toFile(outputPath)

console.log(`Generated ${path.relative(root, outputPath)} (${width}x${height})`)
