# Task 6 Report — Home page sections + shared components

## Status: DONE

## What was implemented

### New config
- `config/faq.ts` — `FaqItem` interface + `faqItems` (6 Q&As verbatim from content draft §8). Reused by FAQ teaser now; Task 12 (FAQ page) and SEO will reuse the same data.

### New shared components (8)
1. `components/SectionHeading.vue` — props `eyebrow?`, `title` (required), `subtitle?`, `align?` (default `center`). Uppercase tracking-widest primary eyebrow, `text-3xl`/`md:text-4xl` bold title, muted subtitle max-w-2xl. Center variant centers everything.
2. `components/StatBadge.vue` — props `value`, `label`. Rounded `md-large` pill, `bg-surface-container`, `border-outline-soft`, `md-elevated-1`, bold value + small label, centered.
3. `components/ProcessSteps.vue` — 6 steps as a local typed constant (Konsultasi → Pilih Paket → Brief & Materi → Proses Produksi → Mixing & Mastering → Finalisasi), rendered as numbered timeline cards in 1/2/3-col grid, lime circled numbers.
4. `components/PortfolioCard.vue` — prop `item: PortfolioItem`. `aspect-ratio: 4/3` cover (scoped CSS, CLS-safe) with ytimg `hqdefault` thumbnail, `loading="lazy"`, `@error` fallback to a music-note + client-initial placeholder (`bg-surface-container-high`). Client name, `category`/`type` chips, `AudioPlayButton` (48px) overlaid bottom-right. Card `bg-surface-container`, `md-elevated-1`, hover elevation via scoped CSS (see concerns).
5. `components/PortfolioGrid.vue` — prop `items: PortfolioItem[]`; 1/2/3-col responsive grid of `PortfolioCard`.
6. `components/FilterTabs.vue` — props `filters: string[]`, `modelValue: string`; emits `update:modelValue`. Horizontally scrollable segmented pill control, active `bg-primary` + `on-primary`, `aria-pressed`. (Not wired on home — reserved for Task 8.)
7. `components/PricingCard.vue` — prop `pkg: ServicePackage`. Name, price, description, lime-check feature list, optional italic note, WA CTA ("Konsultasikan Kebutuhan Anda"). Featured: `ring-2 ring-primary`, `md-elevated-2`, "Populer" badge, solid lime CTA; others outline pill CTA.
8. `components/FaqAccordion.vue` — prop `items: FaqItem[]`; independent multi-open accordion, rounded `md-large` cards, chevron rotates, `aria-expanded`/`aria-controls`, answer body via `v-show`, smooth open via `grid-template-rows` CSS transition.

### pages/index.vue
Kept the Task 5 hero untouched; added 6 sections after it (consistent `max-w-6xl mx-auto px-4 py-20 sm:px-6` wrapper):
1. **Kenapa ALF Production?** — 4 `whyUs` bullets as 2-col feature cards with lime check circles.
2. **Layanan teaser** — 3 `PricingCard` (1/3-col grid) + "Lihat semua paket" → `/layanan`.
3. **Portofolio teaser** — `PortfolioGrid :items="portfolioItems"` + "Lihat Portofolio" → `/portofolio`.
4. **Cara Pemesanan teaser** — `ProcessSteps` + "Lihat cara pemesanan" → `/cara-pemesanan`.
5. **FAQ teaser** — `FaqAccordion :items="faqItems.slice(0, 3)"` + "Lihat semua FAQ" → `/faq`.
6. **Closing CTA** — full-bleed `bg-surface-dim` section: "Sudah Siap Punya Mars & Hymne untuk Lembaga Anda?", subtitle, primary "Konsultasi Gratis" → `waLink()`, secondary "Lihat Paket" → `/layanan`.

## Verification

- `npm run generate` — zero errors, 4 routes + sitemap prerendered. ✅
- `dist/index.html` contains: all section titles ("Kenapa ALF Production?", "Pilih Paket Sesuai Kebutuhan Lembaga Anda.", "Dengarkan Karya yang Telah Kami Produksi", "Dari Ide Menjadi Karya Lembaga.", "Pertanyaan yang Sering Diajukan", closing CTA title), all 3 prices (Rp 6.500.000 / 5.500.000 / 3.500.000), all 3 hero stats, "Populer" badge, FAQ Q&A text, process steps. ✅
- `npx vitest run` — 16/16 tests pass. ✅
- Compiled CSS sanity: `aspect-ratio:4/3` (PortfolioCard cover) and `:hover{box-shadow:var(--md-hig-elevation-2)}` present in output; `md-elevated-1/2` present (inlined per-page). ✅

## Files changed (commit 8aa3878)

- `config/faq.ts` (new)
- `components/SectionHeading.vue`, `StatBadge.vue`, `ProcessSteps.vue`, `PortfolioCard.vue`, `PortfolioGrid.vue`, `FilterTabs.vue`, `PricingCard.vue`, `FaqAccordion.vue` (new)
- `pages/index.vue` (modified — hero kept, 6 sections added)

## Self-review

- Completeness: faq.ts + 8 components + 6 home sections with exact copy — all present.
- Quality: token-mapped classes only; no arbitrary-value classes (the one place the brief suggested `aspect-[4/3]` was implemented as scoped CSS because purgecss strips arbitrary values); no opacity modifiers on var colors; no `dark:` variants; a11y via `aria-expanded`, `aria-controls`, `aria-pressed`, `aria-label` (AudioPlayButton), alt text, placeholder `aria-hidden`; CLS-safe cover via aspect-ratio.
- Discipline: no extras beyond the brief (FilterTabs created but intentionally not wired on home; no TextLink component invented — shared class string instead).
- One naming note: the design token maps to `primary.on` → class `text-primary-on`, so components use `text-primary-on` (matches hero/AppHeader/AudioPlayButton) rather than the brief's "`on-primary`" phrasing. `text-primary-on` verified compiling in output.

## Concerns

1. **`hover:md-elevated-2` doesn't compile** — `md-elevated-*` are custom CSS utilities (not Tailwind plugin utilities), so `hover:md-elevated-2` produces no CSS. PortfolioCard uses scoped CSS `.card:hover { box-shadow: var(--md-hig-elevation-2) }` with a transition instead. Behavior matches the intent; if a shared "hover elevation" utility is ever needed site-wide, register it as a Tailwind plugin (or a `.hover-elevated` component class) rather than relying on variants of `md-` classes.
2. **FAQ accordion collapse is instant, expand is smooth** — `v-show` (per brief) sets `display:none` immediately, so only the open transition animates (grid-template-rows 0fr→1fr). Chevron rotation still animates both ways. Acceptable tradeoff to honor the `v-show` requirement.
3. **Portfolio thumbnails are 404s today** — `youtubeId` placeholders (`PLACEHOLDER_1..3`) make the `@error` placeholder show until Task 8 fills in real IDs. Expected.
4. **YAGNI kept**: no `StatBadge` usage on home yet (it's for later pages), `FilterTabs` reserved for Task 8 — both were specified in the brief as shared components to create now.

## Report file
`/home/yowimghufi/Documents/Project/alfproduction.id/.superpowers/sdd/2026-08-13-alfproduction-site/task-6-report.md`

## Fix report (post-review, commit df42041)

### Finding 1 — content gap: missing 5th "Kenapa ALF Production?" bullet
- Added the missing bullet verbatim to `config/site.ts` `whyUs` (now 5 items, ordered as the content draft): "Portofolio karya dapat didengarkan melalui kanal ALF Production."
- `pages/index.vue` renders all of `whyUs` via `v-for`, so the home "Why ALF" section picks up the 5th automatically.
- No test asserts `whyUs` length, so no test update was needed.

### Finding 2 — future-proofing: cap home teasers at 3
- `pages/index.vue` Layanan teaser: `<PricingCard v-for="pkg in servicePackages" ...>` → `servicePackages.slice(0, 3)` (matches brief's "3 PricingCards").
- `pages/index.vue` Portofolio teaser: `<PortfolioGrid :items="portfolioItems" />` → `:items="portfolioItems.slice(0, 3)"` (matches brief's "3 items"); protects the teaser when Task 8 grows `portfolioItems`.

### Verification
- `npx vitest run` — 2 test files, **16/16 tests pass**. ✅
- `npm run generate` — zero errors, 4 routes + sitemap prerendered. ✅
- `dist/index.html` contains the 5th bullet: `grep -o "didengarkan melalui kanal ALF Production" dist/index.html` → 1 match. ✅
- Sanity in `dist/index.html`: "Populer" badge ×1, "Rp 6.500.000" ×1, `hqdefault` thumbnails ×3 (PortfolioGrid teaser now exactly 3 items). ✅

### Files changed
- `config/site.ts` (whyUs → 5 bullets, draft order)
- `pages/index.vue` (servicePackages → `.slice(0, 3)`, portfolioItems → `.slice(0, 3)`)
- `.superpowers/sdd/2026-08-13-alfproduction-site/task-6-report.md` (this fix report)
