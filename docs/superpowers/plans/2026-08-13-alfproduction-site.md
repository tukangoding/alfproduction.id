# ALF Production Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and ship a multi-page Nuxt 3 SSG marketing site for `alfproduction.id` — a Mars/Hymne composition studio — with sticky YouTube audio player, lazy Three.js visuals, blended brand palette, hyper-local SEO, and <100KB initial bundle.

**Architecture:** Nuxt 3 static-site generation (`nuxt generate`) served from Hostinger `public_html/`. Content lives in typed `/config/*.ts` files; the sticky player is a Vue composable wrapping the YouTube IFrame API (loaded lazily via facade pattern); Three.js is dynamic-imported on desktop only. Forms submit via WhatsApp deep-link (no backend).

**Tech Stack:** Nuxt 3 (SSG), Vue 3 `<script setup lang="ts">`, Tailwind CSS 3 + PostCSS (`autoprefixer`, `purgecss`, `cssnano`), MD3 CSS tokens, Three.js (lazy), YouTube IFrame API, Vitest + @vue/test-utils, @nuxtjs/sitemap.

## Global Constraints
- **Brand palette (blend):** MD3 dark cinematic surfaces from PRD §5.2 + corporate **lime green `#ACCD21`** as `--md-sys-color-primary`; gold `#D4AF37` as secondary accent; `#4A90E2` tertiary.
- **WhatsApp:** use `0857-2795-6892` → `wa.me/6285727956892`, prefill `Halo ALF Production, saya ingin konsultasi pembuatan Mars/Hymne...`
- **YouTube IDs:** placeholders (`PLACEHOLDER_1`…) in `/config/portfolio.ts`, clearly marked for later fill-in.
- **Language:** all copy in Indonesian (from content draft). Copy voice: professional, simple, confident — not overly technical.
- **Performance:** initial bundle <100KB gzip; YouTube API + Three.js = 0KB on load; CLS = 0; LCP < 1.2s.
- **Structure:** multi-page per content-draft menu (anchor links cross-page where sensible).
- Every page: mobile-first, sticky WhatsApp float, persistent sticky audio player in layout.

## File Structure
```
alfproduction.id/
├── package.json, nuxt.config.ts, postcss.config.js, tailwind.config.ts,
├── tsconfig.json, .gitignore, README.md
├── app.vue
├── assets/css/main.css            # MD3 tokens (blended) + Tailwind layers
├── config/
│   ├── site.ts                    # brand, contact, WA, socials, nav
│   ├── services.ts                # GOLD/SILVER/BRONZE packages
│   ├── portfolio.ts               # portfolio items (YouTube placeholders)
│   └── seo.ts                     # keywords, JSON-LD schema builders
├── composables/useAudioPlayer.ts
├── layouts/default.vue            # header, footer, WA float, sticky player, canvas
├── components/
│   ├── AppHeader.vue, AppFooter.vue, WhatsAppFloat.vue
│   ├── StickyAudioPlayer.vue, AudioPlayButton.vue
│   ├── CinematicCanvas.client.vue
│   ├── PortfolioCard.vue, PortfolioGrid.vue, FilterTabs.vue
│   ├── PricingCard.vue, ProcessSteps.vue, FaqAccordion.vue
│   ├── LeadForm.vue, SectionHeading.vue, StatBadge.vue
├── pages/
│   ├── index.vue, tentang.vue, layanan.vue, portofolio.vue,
│   ├── cara-pemesanan.vue, kemitraan.vue, faq.vue, kontak.vue,
│   ├── kebijakan-privasi.vue, syarat-ketentuan.vue
├── plugins/seo.ts                 # injects JSON-LD via useHead
├── public/{logo.png, favicon.ico, og-cover.jpg, robots.txt, .htaccess}
├── tests/ (unit)
└── .htaccess                      # deployed copy (see Task 14)
```

---

### Task 1: Project scaffold, Nuxt SSG + PostCSS/MD3 foundation
**Files:** Create `package.json`, `nuxt.config.ts`, `postcss.config.js`, `tailwind.config.ts`, `tsconfig.json`, `.gitignore`, `app.vue`, `assets/css/main.css`
- Scaffold deps: `nuxt@^3`, `vue`, `typescript`, `@nuxtjs/sitemap`, `tailwindcss@^3.4`, `postcss`, `autoprefixer`, `@fullhuman/postcss-purgecss`, `cssnano`, `three@^0.16x`, `vitest`, `@vue/test-utils`, `jsdom`.
- `nuxt.config.ts`: `ssr: true`, `css: ['~/assets/css/main.css']`, `modules: ['@nuxtjs/sitemap']`, `app.head` per PRD §9.2 (real description/keywords/geo, `preconnect youtube.com`, canonical `https://alfproduction.id/`).
- `postcss.config.js`: exact copy of PRD §8.1.
- `main.css`: MD3 token block from Global Constraints + Tailwind `@layer` base utilities; set `font-family` system stack; define `.md-elevated-*` elevation utilities.
- Verify: `npm run generate` builds with zero errors; grep `dist/index.html` for meta description.

### Task 2: Typed content config + unit tests
**Files:** Create `config/site.ts`, `config/services.ts`, `config/portfolio.ts`, `tests/config.test.ts`; install Vitest
- `site.ts`: `WA_NUMBER = '6285727956892'`, `brand`, `nav` (10 items from content draft §11), socials (IG/YT), contact.
- `services.ts`: GOLD Rp 6.500.000 / SILVER Rp 5.500.000 / BRONZE Rp 3.500.000 with exact feature lists + notes from content draft §2.
- `portfolio.ts`: `PortfolioItem` interface + 3 seed items (Hidayah Klaten, SIT Kota Wali Demak, SIT Al Furqon Slawi Tegal) with `PLACEHOLDER_n` youtubeIds; category filter values `Mars|Hymne`, type `SIT|Yayasan|Sekolah|Pesantren`.
- Tests: TDD — assert all packages have price + features; portfolio ids unique; every item has non-empty `youtubeId`; `WA_NUMBER` matches `/^62\d{9,12}$/`.
- Verify: `npx vitest run` all green; `npm run generate` still passes.

### Task 3: Layout, header, footer, WhatsApp float
**Files:** Create `layouts/default.vue`, `components/AppHeader.vue`, `AppFooter.vue`, `components/WhatsAppFloat.vue`; Modify `app.vue`
- Sticky header (glass over surface), nav from `site.nav`, "Konsultasi Gratis" CTA button → `wa.me/6285727956892`.
- Footer: brand, contact, service list, package links, legal links (kebijakan-privasi, syarat-ketentuan), copyright.
- `WhatsAppFloat.vue`: fixed bottom-right circular lime button, appears after scroll >200px, uses prefilled text; hidden when sticky player is showing (bottom bar overlap).
- Layout includes `<StickyAudioPlayer/>` and `<CinematicCanvas.client/>` (added in Tasks 4–5; stub now).
- Verify: `npm run generate`, then `npx serve dist` and manually check nav + CTA links.

### Task 4: Sticky YouTube audio player (facade pattern)
**Files:** Create `composables/useAudioPlayer.ts`, `components/StickyAudioPlayer.vue`, `components/AudioPlayButton.vue`, `tests/useAudioPlayer.test.ts`
- `useAudioPlayer.ts`: implement PRD §6.2 exactly, plus `isOpen` ref and `closePlayer()`; YouTube API script injected **only on first play**; hidden 0×0 iframe target `#hidden-youtube-iframe`; `loadVideoById` on track switch; guard `playerInstance` reuse.
- TDD unit tests (mock `window.YT`): API script tag not in DOM before `playTrack`; injected exactly once; `playTrack` calls `loadVideoById` when player exists; `togglePlay` toggles `isPlaying`.
- `StickyAudioPlayer.vue`: bottom fixed bar (above WA float), shows track title/client, play/pause, close; contains the hidden iframe target div.
- `AudioPlayButton.vue`: round play button per track; emits/calls `playTrack(item)`; shows playing state when `currentTrack.id === item.id`.
- Verify: `npx vitest run`; manual: click play → bar appears and persists while navigating between pages; YouTube API network request appears only after first click.

### Task 5: Cinematic hero canvas (lazy Three.js)
**Files:** Create `components/CinematicCanvas.client.vue`; Modify `pages/index.vue`
- Port PRD §7.2: skip on `window.innerWidth < 768` or `prefers-reduced-motion`; dynamic `import('three')`; gold-lime particle field; `IntersectionObserver` trigger; cleanup on unmount.
- Mobile/reduced-motion fallback: pure CSS radial gradient mesh (`surface-container-high` + lime/gold glow) — no JS.
- `index.vue` hero: copy from content draft §1, H1 "Wujudkan Mars & Hymne Lembaga yang Berkarakter dan Berkesan.", CTAs "Konsultasi Gratis" + "Lihat Portofolio" (`/portofolio`), trust stats row ("10+ Lagu Ciptaan", "100% Studio Grade", "Partitur Balok/Angka").
- Verify: `npm run generate`; desktop shows particles, mobile shows gradient; devtools shows three chunk fetched lazily.

### Task 6: Home page sections
**Files:** Create `components/StatBadge.vue`, `components/SectionHeading.vue`, `ProcessSteps.vue`, `PortfolioCard.vue`, `PortfolioGrid.vue`, `FilterTabs.vue`, `PricingCard.vue`, `FaqAccordion.vue`; Modify `pages/index.vue`
- Build the shared components now (reused by later tasks):
  - `SectionHeading.vue` — eyebrow + title + subtitle (MD3 typography).
  - `ProcessSteps.vue` — 6 steps from content draft §3 (Konsultasi → Pilih Paket → Brief & Materi → Proses Produksi → Mixing & Mastering → Finalisasi).
  - `PortfolioCard.vue` — cover thumb (ytimg `hqdefault`), client, category/type chip, `AudioPlayButton`.
  - `PortfolioGrid.vue` + `FilterTabs.vue` — filter by `Mars|Hymne|SIT|Yayasan`.
  - `PricingCard.vue` — package card with price + features + WA CTA.
  - `FaqAccordion.vue` — MD3 accordion from content draft §8.
- Home assembles: Why ALF (4 bullets), Layanan teaser (3 PricingCards), Portofolio teaser (3 items), Cara Pemesanan teaser, FAQ teaser (top 3), closing CTA ("Sudah Siap Punya Mars & Hymne…?").
- Verify: `npm run generate`; `npx serve dist` — all sections render, anchors scroll correctly, no hydration warnings in console.

### Task 7: Layanan & Paket page
**Files:** Create `pages/layanan.vue`
- Title/subtitle from content draft §2; 3 `PricingCard`s (GOLD/SILVER/BRONZE); "Konsultasikan Kebutuhan Anda" CTA; included-services strip (lirik, melodi/notasi, aransemen, recording vocal, vocalis, mixing & mastering).
- Verify: generate + serve; check pricing exactness and WA prefill per package.

### Task 8: Portofolio page
**Files:** Create `pages/portofolio.vue`
- Title + intro from content draft §4; `FilterTabs` + `PortfolioGrid`; each card links track to YouTube channel; sticky player integration.
- Verify: filters work; play → sticky player switches tracks; keyboard navigable.

### Task 9: Tentang + Cara Pemesanan pages
**Files:** Create `pages/tentang.vue`, `pages/cara-pemesanan.vue`
- Tentang: both paragraphs from content draft §5 (mission + "Mars & Hymne bukan sekadar lagu…" quote).
- Cara Pemesanan: `ProcessSteps` full + timeline + CTA "Mulai Konsultasi Gratis".
- Verify: generate; content matches draft verbatim (minor polish allowed).

### Task 10: Kemitraan page
**Files:** Create `pages/kemitraan.vue`, `components/LeadForm.vue`
- Copy from content draft §6; `LeadForm.vue` fields: Nama Organisasi/Perusahaan, Nama PIC, WhatsApp, Email, Bentuk Kemitraan, Perkiraan Kebutuhan, Pesan.
- `LeadForm.vue` is form-agnostic: takes a `mode` prop (`kemitraan`|`pesan`); on submit composes all fields into a `wa.me` deep link message (no backend), validates required fields natively.
- Verify: submitting opens WhatsApp with full prefilled message.

### Task 11: Kontak / Pemesanan page
**Files:** Create `pages/kontak.vue`
- Order flow copy from content draft §7 (klik Pesan → isi brief/WhatsApp → konsultasi → pilih paket & penawaran → produksi); CTA "Pesan Sekarang" + "Konsultasi Gratis"; `LeadForm` in `pesan` mode; contact block (WA, IG, YouTube, email/alamat placeholder rows from draft §10).
- Verify: form → WhatsApp flow works; contact links correct.

### Task 12: FAQ page
**Files:** Create `pages/faq.vue`; Modify `config/seo.ts`
- All 6 Q&As from content draft §8 in `FaqAccordion`; add FAQ items to `config/seo.ts` for schema.
- Verify: accordion toggles; FAQPage JSON-LD present in rendered HTML.

### Task 13: Legal pages
**Files:** Create `pages/kebijakan-privasi.vue`, `pages/syarat-ketentuan.vue`
- Static, concise Indonesian legal copy: data collected via WhatsApp/forms, no third-party tracking beyond YT embed; terms of service outline (proses, paket, revisi, pembayaran placeholder for owner to finalize).
- Verify: linked from footer; generate passes.

### Task 14: SEO, structured data, sitemap
**Files:** Modify `config/seo.ts`, `plugins/seo.ts`, `nuxt.config.ts`; Create `public/robots.txt`
- `seo.ts`: all keywords (PRD §9.1); schema builders — ProfessionalService (real phone, Semarang geo), Service catalog (3 packages), ItemList VideoObject (from `config/portfolio.ts`), FAQPage, WebSite+Organization.
- `plugins/seo.ts`: inject schemas via `useHead({ script: [{ type: 'application/ld+json', children: ... }] })` globally + per-page title/description (one-pager keywords mapped per page).
- `@nuxtjs/sitemap`: auto-generate `sitemap.xml` (exclude legal pages from index), `robots.txt` referencing it.
- Verify: after `generate`, `dist/sitemap.xml` lists all 8 indexable routes; `grep -c application/ld+json` on each page HTML ≥1; Google Rich Results validation of schema JSON (lint manually).

### Task 15: Performance & Lighthouse hardening
**Files:** Modify as needed; convert brand assets
- Convert `IMG-*.jpg` → `public/logo.png` (via PNG optimizer) + `public/og-cover.jpg` (resize ≤1200px) — reuse existing files, no new design needed.
- Verify budgets: gzip `dist/` and sum initial JS/CSS <100KB; `npx lighthouse` on `npx serve dist` — targets 98+ perf/a11y/best-practices/SEO; fix CLS (reserve card aspect-ratios `aspect-[4/3]`, font swap, no layout shift on player open).
- **Commit per task** throughout: `git add` task files + `git commit -m "feat: <summary>"`.

### Task 16: Deployment artifacts (Hostinger)
**Files:** Create `.htaccess`
- `.htaccess` from PRD §11.2 verbatim (HTTPS force, gzip, caching, security headers).
- Docs in `README.md`: `npm install` → `npm run generate` → upload `dist/` to `public_html/` (FTP/SSH), verify GSC + Business Profile submission steps.
- Final gate: `npm run generate` clean; `npx serve dist` smoke test all routes; verify `.htaccess` copied into `dist/` root.

## Open items / notes
- **Email & address** left as "ISI" placeholders per content draft §10 — flagged for the owner.
- **Portfolio** seeded with 3 items; PRD references "10+" — scaling to 10+ is just adding entries to `config/portfolio.ts`.
- The two logo JPEGs could not be inspected (no image input); they will be used as-is and can be replaced later.
