# PRODUCT REQUIREMENT DOCUMENT (PRD)

**Project Name:** alfproduction.id — Web Portofolio Komposer Mars & Hymne  
**Version:** 1.0.0  
**Target Domain:** `alfproduction.id`  
**Author:** Senior Technical Web Architect & Lead Engineer  
**Date:** August 13, 2026  
**Status:** Approved for Development  

---

## 1. Executive Summary & Business Objectives

### 1.1 Summary
`alfproduction.id` adalah platform portofolio digital interaktif dan profesional untuk studio komposer musik yang mengagregasi layanan pembuatan **Mars** dan **Hymne** khusus untuk Sekolah Islam Terpadu (SIT), Yayasan Pendidikan, Perguruan Tinggi, dan Organisasi di Indonesia.

Website ini didesain dengan pendekatan **Dark Cinematic Aesthetics** yang digabungkan dengan token **Material Design 3 (Google MD3)**. Dibangun menggunakan **Nuxt 3 (Static Site Generation - SSG)**, **PostCSS/Tailwind CSS Pipeline**, **Three.js**, dan **YouTube Persistent Player API**, website ini menembus batasan performa dengan target **Core Web Vitals (LCP < 1.2s, CLS = 0, Bundle < 100KB)** serta dioptimalkan secara teknis untuk meraih **SEO Page 1 Google** pada kata kunci lokal Semarang dan Jakarta.

### 1.2 Key Performance Indicators (KPIs) & Targets
- **Primary Conversion:** Direct WhatsApp Chat Conversion Rate (Target: > 8% dari total pengunjung unik).
- **SEO Rank:** Rank #1 - #3 Google Search untuk target keywords lokal (Semarang & Jakarta) dalam 60–90 hari pasca rilis.
- **Performance Target:** Lighthouse Score 98–100 (Performance, Accessibility, Best Practices, SEO).
- **Core Web Vitals:** LCP < 1.2s, FID/INP < 50ms, CLS = 0.
- **Resource Footprint:** Total Initial JS/CSS Bundle size < 100KB (Gzipped).

---

## 2. Target Audience & Conversion Strategy

### 2.1 Target Audience Profiles
1. **Pengurus Yayasan & Kepala Sekolah Islam Terpadu (SIT):**
   - *Needs:* Lagu Mars/Hymne bernuansa Islami, megah, edukatif, dan berwibawa yang meningkatkan *branding* dan kebanggaan institusi.
   - *Pain Points:* Kesulitan menemukan komposer profesional yang berpengalaman memahami karakter musik institusi pendidikan; proses kerja transparan & cepat.
2. **Panitia Pembuatan Lagu Institusi / Perguruan Tinggi / Instansi:**
   - *Needs:* Hasil akhir standar audio *mastering* studio, ketersediaan partitur/partitur not angka & balok, serta video klip/demo audio yang mudah diakses.

### 2.2 Conversion & Call-to-Action (CTA) Strategy
- **Primary CTA:** Float / Sticky WhatsApp Button (`https://wa.me/62xxxxxxxxxxx?text=Halo%20ALF%20Production,%20saya%20ingin%20konsultasi%20pembuatan%20Mars/Hymne...`)
- **Micro-Conversions:**
  - Pemutaran lagu di Sticky Persistent Audio Player.
  - Peninjauan daftar klien / portofolio karya.
  - Pengunduhan PDF katalog penawaran / struktur paket.

---

## 3. Competitor Analysis & Benchmarking

| Parameter | Kukuh Aldy (`kukuhaldy.com`) | Dewa Musik (`dewamusik.com`) | Target: `alfproduction.id` |
| :--- | :--- | :--- | :--- |
| **Fokus Layanan** | Komposer & Scoring Film | Production House & Jasa Musik | **Spesialis Mars & Hymne Sekolah/Yayasan** |
| **Desain Visual** | Minimalist Modern | Standard Commercial | **Dark Cinematic + Google Material Design 3** |
| **Audio Player** | Standard Embed Player | Static Embed Audio | **Sticky Persistent YouTube Audio Player (No-Interruption)** |
| **3D / Interaktivitas** | Tidak ada | Tidak ada | **Three.js Dynamic Audio-Visual Accent (Lazy-Loaded)** |
| **Lighthouse Score** | ~75 - 85 | ~60 - 75 | **98 - 100 (Resource-Budgeted)** |
| **SEO Strategy** | Personal Branding | General Commercial | **Hyper-Targeted Local SEO (Semarang & Jakarta)** |

---

## 4. Technical Architecture & Tech Stack

```
+-----------------------------------------------------------------------+
|                            HOSTINGER HOSTING                          |
|                       (Static Nginx Web Server)                       |
+-----------------------------------------------------------------------+
                                    |
                                    v
+-----------------------------------------------------------------------+
|                         NUXT 3 FRAMEWORK (SSG)                        |
|                                                                       |
|  +--------------------+  +--------------------+  +-----------------+  |
|  |  Nuxt Content /    |  |  PostCSS Pipeline  |  |  Three.js WebGL |  |
|  |  Hardcoded TS Config| |  + PurgeCSS + Nano |  |  (Lazy-loaded)  |  |
|  +--------------------+  +--------------------+  +-----------------+  |
|                                                                       |
|  +-----------------------------------------------------------------+  |
|  |           Custom Persistent YouTube Audio Composables               |  |
|  +-----------------------------------------------------------------+  |
+-----------------------------------------------------------------------+
```

### 4.1 Tech Stack Breakdown
- **Framework:** **Nuxt 3** in SSG Mode (`ssr: true`, `target: 'static'`, `builder: 'vite'`).
- **Styling Engine:** **PostCSS** + **Tailwind CSS** (atau **UnoCSS**) + **Google Material Design 3 CSS Tokens**.
- **CSS Optimizers:** `cssnano`, `@fullhuman/postcss-purgecss`, `autoprefixer`.
- **3D Graphics Engine:** **Three.js** (dikompresi via Tree-shaking & Lazy Dynamic Import saat user scroll/interaksi).
- **Audio Engine:** Custom Vue 3 Composable wrapping **YouTube Iframe Player API** (Sticky Player).
- **Content Management:** Hardcoded Typed TypeScript Config (`/config/portfolio.ts` & `/config/services.ts`).
- **Hosting Platform:** **Hostinger Business Web Hosting** (Static Output Build `dist/` served via Nginx with HTTP/2, Brotli compression, & aggressive browser caching).

---

## 5. UI/UX Design System: Material Design 3 x Dark Cinematic

### 5.1 Concept Integration
Jawaban atas pertanyaan penggunaan **Material Design 3 (MD3)**: **SANGAT BISA DAN DIREKOMENDASIKAN.**
MD3 dari Google menyediakan sistem *Design Tokens*, *Surface Tonal Elevations*, *Dynamic Color Roles*, dan *State Layers* yang tangguh. Kita menggabungkan M3 dengan estetika *Dark Cinematic*:

```
         MATERIAL DESIGN 3 TOKENS              DARK CINEMATIC AESTHETICS
  +-----------------------------------+    +----------------------------------+
  |  - Surface Container Levels       | +  |  - Deep Charcoal (#0B0C0E)       |
  |  - Primary & Accent Color Roles   |    |  - Gold & Amber (#D4AF37)        |
  |  - Dynamic State Layers           |    |  - High Contrast Typography      |
  |  - Material Symbols & Curves      |    |  - Dramatic Lighting Glow        |
  +-----------------------------------+    +----------------------------------+
                                    ||
                                    \/
              DESIGN SYSTEM: DARK CINEMATIC MATERIAL (MD3)
```

### 5.2 Color Palette Tokens (CSS Custom Properties)
```css
:root {
  /* M3 Dark Cinematic Surfaces */
  --md-sys-color-surface: #0b0c0e;
  --md-sys-color-surface-dim: #070809;
  --md-sys-color-surface-container: #13151a;
  --md-sys-color-surface-container-high: #1c1f26;

  /* Accent Colors (Gold & Warm Cinematic Amber) */
  --md-sys-color-primary: #d4af37;
  --md-sys-color-on-primary: #000000;
  --md-sys-color-primary-container: #2b2308;
  --md-sys-color-on-primary-container: #f3e5ab;
  
  --md-sys-color-secondary: #e2b857;
  --md-sys-color-tertiary: #4a90e2; /* Subtle Studio Neon Blue Accent */

  /* Text & States */
  --md-sys-color-on-surface: #f0f1f5;
  --md-sys-color-on-surface-variant: #a0a5b5;
  --md-sys-color-outline: #2d323e;

  /* Radii & Elevation */
  --md-sys-shape-corner-medium: 12px;
  --md-sys-shape-corner-large: 24px;
}
```

---

## 6. Audio Architecture: YouTube Persistent Sticky Player

### 6.1 Requirements
- Audio bersumber dari **Embed YouTube** untuk meminimalkan beban bandwidth & storage hosting Hostinger.
- **Sticky Persistent Bottom Bar:** Player tetap berada di bagian bawah layar tanpa terputus ketika user menelusuri halaman web.
- **FACADE PATTERN (Mandatory for Performance):** YouTube Iframe API **TIDAK BOHLEH** di-load saat initial page load. Load player JavaScript hanya ketika pengguna pertama kali mengklik tombol "Play" pada portofolio.

### 6.2 Composable Implementation (`/composables/useAudioPlayer.ts`)
```typescript
import { reactive, ref } from 'vue'

interface Track {
  id: string
  youtubeId: string
  title: string
  category: 'SIT' | 'Yayasan' | 'Hymne' | 'Mars'
  client: string
}

const currentTrack = ref<Track | null>(null)
const isPlaying = ref<boolean>(false)
const playerInstance = ref<any>(null)
const isApiLoaded = ref<boolean>(false)

export const useAudioPlayer = () => {
  const loadYoutubeApi = (): Promise<void> => {
    return new Promise((resolve) => {
      if (isApiLoaded.value) return resolve()
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
      ;(window as any).onYouTubeIframeAPIReady = () => {
        isApiLoaded.value = true
        resolve()
      }
    })
  }

  const playTrack = async (track: Track) => {
    currentTrack.value = track
    if (!isApiLoaded.value) {
      await loadYoutubeApi()
    }
    
    if (!playerInstance.value) {
      playerInstance.value = new (window as any).YT.Player('hidden-youtube-iframe', {
        height: '0',
        width: '0',
        videoId: track.youtubeId,
        playerVars: { autoplay: 1, controls: 0 },
        events: {
          onStateChange: (event: any) => {
            isPlaying.value = event.data === (window as any).YT.PlayerState.PLAYING
          }
        }
      })
    } else {
      playerInstance.value.loadVideoById(track.youtubeId)
      playerInstance.value.playVideo()
    }
  }

  const togglePlay = () => {
    if (!playerInstance.value) return
    if (isPlaying.value) {
      playerInstance.value.pauseVideo()
    } else {
      playerInstance.value.playVideo()
    }
  }

  return { currentTrack, isPlaying, playTrack, togglePlay }
}
```

---

## 7. 3D Graphics & Animation Strategy (Three.js Optimization)

### 7.1 Performance Rules for Three.js
- **Dynamic Lazy Loading:** Three.js disuntikkan secara dinamis menggunakan `import('three')` di dalam hook `onMounted` dan di-trigger oleh `IntersectionObserver` saat elemen visual masuk *viewport*.
- **Low Polygon Audio Wave Visualizer:** Menggunakan mesh pita/gelombang audio sederhana berbasis `PlaneGeometry` dan custom fragment shader ringan.
- **Fallback Mobile:** Matikan render 3D pada perangkat mobile / `prefers-reduced-motion` dan ganti dengan CSS gradient mesh murni.

### 7.2 Lazy Three.js Component Structure (`/components/CinematicCanvas.client.vue`)
```vue
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let renderer: any, scene: any, camera: any, animationFrameId: number

onMounted(async () => {
  // Check low power mode / mobile
  if (window.innerWidth < 768) return

  // Lazy import Three.js to keep main bundle tiny
  const THREE = await import('three')

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value!, alpha: true, antialias: false })
  
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

  // Ambient Particles / Subtle Audio Waves
  const geometry = new THREE.BufferGeometry()
  const count = 200
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    size: 0.03,
    color: 0xd4af37,
    transparent: true,
    opacity: 0.6
  })

  const points = new THREE.Points(geometry, material)
  scene.add(points)
  camera.position.z = 5

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    points.rotation.y += 0.001
    renderer.render(scene, camera)
  }
  animate()
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (renderer) renderer.dispose()
})
</script>

<template>
  <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none z-0 opacity-40"></canvas>
</template>
```

---

## 8. PostCSS & Resource Optimization Pipeline

### 8.1 PostCSS Configuration (`postcss.config.js`)
```javascript
module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './components/**/*.{vue,js,ts}',
              './layouts/**/*.vue',
              './pages/**/*.vue',
              './composables/**/*.{js,ts}',
              './plugins/**/*.{js,ts}',
              './App.{vue,js,ts}',
              './app.{vue,js,ts}'
            ],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: [/^md-/, /^yt-/],
              deep: [/ytplayer/]
            }
          },
          cssnano: {
            preset: ['default', { discardComments: { removeAll: true } }]
          }
        }
      : {})
  }
}
```

### 8.2 Resource Budget Allocations
- **HTML Document:** < 15 KB (SSG Pre-rendered).
- **Critical CSS (PostCSS Minified & Purged):** < 12 KB.
- **Initial Core JS (Nuxt Engine):** < 65 KB.
- **Deferred Third-Party Scripts (YouTube API, Three.js):** 0 KB on Initial Load (Loaded dynamically on user interaction).
- **Total Initial Page Weight:** **~92 KB (Gzipped)** — Meeting the < 100KB Target!

---

## 9. Comprehensive SEO Strategy (Targeting Page 1)

### 9.1 Targeted Keywords Hierarchy
1. **Primary Keywords:**
   - `"jasa bikin mars hymne semarang"`
   - `"jasa bikin lagu mars jakarta"`
   - `"jasa bikin lagu hymne jakarta"`
2. **Secondary Keywords:**
   - `"jasa pembuatan mars sekolah islam terpadu"`
   - `"komposer lagu mars yayasan pendidikan"`
   - `"biaya pembuatan hymne sekolah semarang jakarta"`

### 9.2 On-Page Meta Tag Architecture (`nuxt.config.ts`)
```typescript
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Jasa Bikin Mars & Hymne Sekolah / Yayasan | ALF Production',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Jasa profesional pembuatan lagu Mars & Hymne khusus Sekolah Islam Terpadu (SIT), Yayasan Pendidikan, & Perguruan Tinggi di Semarang & Jakarta. Audio kualitas studio profesional.'
        },
        { name: 'keywords', content: 'jasa bikin mars hymne semarang, jasa bikin lagu mars jakarta, jasa bikin lagu hymne jakarta, komposer mars sekolah islam' },
        { property: 'og:title', content: 'ALF Production — Komposer Spesialis Mars & Hymne Institusi' },
        { property: 'og:description', content: 'Ciptakan identitas dan kebanggaan institusi Anda dengan lagu Mars & Hymne aransemen studio profesional.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://alfproduction.id/' },
        { property: 'og:image', content: 'https://alfproduction.id/og-cover.jpg' },
        { name: 'geo.region', content: 'ID-JT' },
        { name: 'geo.placename', content: 'Semarang' }
      ],
      link: [
        { rel: 'canonical', href: 'https://alfproduction.id/' },
        { rel: 'preconnect', href: 'https://www.youtube.com' }
      ]
    }
  }
})
```

### 9.3 Structured Data (JSON-LD Schemas)
Terdapat 3 schema khusus yang disuntikkan ke dalam Head Document untuk memperkuat sinyal entitas di Google:

#### Schema 1: `ProfessionalService` (Local Business SEO)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://alfproduction.id/#service",
  "name": "ALF Production - Jasa Pembuatan Mars & Hymne",
  "url": "https://alfproduction.id",
  "image": "https://alfproduction.id/logo.png",
  "telephone": "+6281234567890",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Semarang",
    "addressRegion": "Jawa Tengah",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.966667,
    "longitude": 110.416664
  },
  "areaServed": [
    { "@type": "City", "name": "Semarang" },
    { "@type": "City", "name": "Jakarta" },
    { "@type": "Country", "name": "Indonesia" }
  ],
  "knowsAbout": [
    "Pembuatan Mars Sekolah Islam Terpadu",
    "Aransemen Hymne Yayasan",
    "Orkestrasi Musik Institusi",
    "Komposer Musik Video"
  ]
}
```

#### Schema 2: `Service` Catalog
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Jasa Pembuatan Lagu Mars dan Hymne",
  "provider": {
    "@id": "https://alfproduction.id/#service"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paket Produksi Mars & Hymne",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paket Mars Sekolah Islam Terpadu (SIT)",
          "description": "Termasuk komposisi lirik, aransemen musik vokal & orkestra, mixing & mastering studio, serta file partitur."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paket Hymne Yayasan & Perguruan Tinggi",
          "description": "Komposisi lagu khidmat dan megah untuk upacara dan identitas resmi yayasan."
        }
      }
    ]
  }
}
```

#### Schema 3: `ItemList` Portofolio Video Audio (`AudioObject` / `VideoObject`)
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "VideoObject",
        "name": "Mars Sekolah Islam Terpadu Al-Azhar Contoh",
        "description": "Karya Mars SIT buatan ALF Production.",
        "thumbnailUrl": "https://img.youtube.com/vi/SAMPLE_ID_1/hqdefault.jpg",
        "embedUrl": "https://www.youtube.com/embed/SAMPLE_ID_1"
      }
    }
  ]
}
```

---

## 10. Page Structure & Wireframe Specifications

### 10.1 Single Page Scrollable Architecture (Optimized for High Conversion)
Website menggunakan tata letak *High-Impact One-Pager* dengan *Sub-Route Modals* jika diperlukan:

```
+-----------------------------------------------------------------------+
|  HEADER / NAVBAR (Logo, Service Links, Target Cities Badge, WA CTA)   |
+-----------------------------------------------------------------------+
|  HERO SECTION                                                         |
|  - Title: "Jasa Pembuatan Lagu Mars & Hymne Kebanggaan Institusi"     |
|  - Subtitle: "Spesialis Sekolah Islam Terpadu & Yayasan Pendidikan"   |
|  - Direct CTAs: [Dengar Portofolio] [Konsultasi WhatsApp]             |
|  - Background: Three.js Subtle Audio Particle Canvas                  |
+-----------------------------------------------------------------------+
|  TRUST BADGES / STATS                                                 |
|  - "10+ Lagu Ciptaan" | "100% Studio Grade" | "Partitur Balok/Angka"   |
+-----------------------------------------------------------------------+
|  PORTOFOLIO SECTION (10 Items Filterable by Mars / Hymne / SIT)       |
|  - Grid Cards with Custom Play Button (Triggers Sticky YouTube Player)|
+-----------------------------------------------------------------------+
|  WHY CHOOSE US (Material Design 3 Surface Cards)                      |
|  - Lirik Edukatif & Syar'i | Orkestrasi Megah | Garansi Revisi        |
+-----------------------------------------------------------------------+
|  WORKFLOW PROCESS (Step-by-Step 1 to 4)                               |
|  1. Diskusi Visi & Lirik -> 2. Demo Melodi -> 3. Rekaman & Mixing     |
|  -> 4. Penyerahan File Master & Partitur                              |
+-----------------------------------------------------------------------+
|  LOCAL SEO CONTENT SECTION (Semarang & Jakarta Context)               |
|  - Artikel Terstruktur seputar pentingnya Mars bagi Sekolah Islam     |
+-----------------------------------------------------------------------+
|  FAQ SECTION (Accordion MD3 Style with Schema FAQPage)                |
+-----------------------------------------------------------------------+
|  FOOTER & STICKY AUDIO PLAYER BAR (Fixed Bottom)                      |
+-----------------------------------------------------------------------+
```

---

## 11. Deployment, Server & Hosting Configuration (Hostinger)

### 11.1 Build Command & Deployment
Situs di-generate secara statis melalui Nuxt SSG:
```bash
# Build Command
npm run generate
```
Hasil folder `dist/` diunggah ke folder `public_html/` di Hostinger via Git Deployment Integration atau FTP/SSH.

### 11.2 Hostinger `.htaccess` Optimization File
Tambahkan berkas `.htaccess` di direktori `public_html` Hostinger untuk memaksa caching agresif, kompresi Gzip/Brotli, dan keamanan:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Enable GZIP Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json image/svg+xml
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Security Headers
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set Referrer-Policy "strict-origin-when-cross-origin"
```

---

## 12. Implementation Roadmap & Action Plan

```
[Phase 1: Setup] -------------> [Phase 2: Core Dev] -------------> [Phase 3: SEO & Testing] ----> [Phase 4: Deploy]
Nuxt 3 + PostCSS +             Sticky Player, Portfolio           JSON-LD Injection,                Hostinger SSG Deploy,
Material Design 3 Tokens       Cards, Three.js Lazy Load          Lighthouse Audit (100)            Google Search Console
(Day 1 - 2)                    (Day 3 - 5)                        (Day 6 - 7)                       (Day 8)
```

1. **Hari 1–2:** Inisialisasi Nuxt 3, konfigurasi `postcss.config.js`, Tailwind CSS, dan Material Design 3 Design Tokens CSS.
2. **Hari 3–5:** Pembangunan komponen UI (Hero, Portfolio Grid, Composable Sticky YouTube Player, dan Three.js Canvas).
3. **Hari 6–7:** Injeksi JSON-LD Schema (ProfessionalService, Service, ItemList), audit Core Web Vitals, dan kompresi aset gambar ke Format WebP.
4. **Hari 8:** Eksekusi `npm run generate`, deploy ke Hostinger, submit Sitemap XML & Google Business Profile ke Google Search Console.

---
*End of PRD.md — Document generated for alfproduction.id*
