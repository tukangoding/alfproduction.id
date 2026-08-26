<script setup lang="ts">
import { heroStats, waLink, whyUs, SITE_URL } from '~/config/site'
import { portfolioItems } from '~/config/portfolio'
import { faqItems } from '~/config/faq'
import { pageKeywords } from '~/config/seo'

const textLinkClass =
  'inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong transition-colors hover:underline hover:decoration-primary-strong hover:underline-offset-4'

useHead({
  title: 'ALF Production — Jasa Bikin Mars & Hymne Sekolah / Yayasan',
  meta: [
    {
      name: 'description',
      content:
        'Jasa profesional pembuatan lagu Mars & Hymne khusus Sekolah Islam Terpadu (SIT), Yayasan Pendidikan, & Perguruan Tinggi. Audio kualitas studio profesional.'
    },
    {
      name: 'keywords',
      content: pageKeywords['/'].join(', ')
    }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/` }]
})
</script>

<template>
  <section class="relative z-10">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div class="max-w-3xl">
          <p
            class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
          >
            Komposer Spesialis Mars &amp; Hymne
          </p>

          <h1
            class="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-5xl"
          >
            Wujudkan Mars &amp; Hymne Lembaga yang Berkarakter dan Berkesan.
          </h1>

          <p class="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            ALF Production membantu sekolah dan lembaga menghadirkan karya Mars
            &amp; Hymne melalui proses produksi yang terarah, mulai dari melodi,
            aransemen, vokal, hingga mixing &amp; mastering.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a
              :href="waLink()"
              target="_blank"
              rel="noopener"
              class="md-elevated-1 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-on transition-transform hover:scale-105"
            >
              Konsultasi Gratis
            </a>
            <NuxtLink
              to="/portofolio"
              class="inline-flex items-center rounded-full border border-outline px-8 py-3.5 text-base font-semibold text-on-surface transition-colors hover:bg-surface-container-high"
            >
              Lihat Portofolio
            </NuxtLink>
          </div>

          <ul
            class="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-outline-soft pt-6 md:mt-14"
          >
            <li
              v-for="stat in heroStats"
              :key="stat"
              class="text-sm font-medium text-on-surface-variant"
            >
              {{ stat }}
            </li>
          </ul>
        </div>

        <div
          class="order-first mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl lg:order-none lg:max-w-none"
        >
          <picture>
            <source
              type="image/avif"
              srcset="/images/hero-480.avif 480w, /images/hero-800.avif 800w, /images/hero-1200.avif 1200w"
              sizes="(min-width: 1024px) 548px, (min-width: 640px) 384px, calc(100vw - 2rem)"
            />
            <source
              type="image/webp"
              srcset="/images/hero-480.webp 480w, /images/hero-800.webp 800w, /images/hero-1200.webp 1200w"
              sizes="(min-width: 1024px) 548px, (min-width: 640px) 384px, calc(100vw - 2rem)"
            />
            <img
              src="/images/hero-800.jpg"
              alt="Peralatan studio produksi musik ALF Production"
              width="800"
              height="800"
              fetchpriority="high"
              decoding="sync"
              class="h-full w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <SectionHeading title="Kenapa ALF Production?" />

    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="bullet in whyUs"
        :key="bullet"
        class="md-elevated-1 flex items-start gap-4 rounded-md-large bg-surface-container p-5"
      >
        <span
          class="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary"
          aria-hidden="true"
        >
          <svg
            class="h-4 w-4 text-primary-on"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </span>
        <p class="font-medium text-on-surface">{{ bullet }}</p>
      </div>
    </div>
  </section>

  <LazyClientLogos hydrate-on-visible />

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <SectionHeading
      eyebrow="Portofolio"
      title="Dengarkan Karya yang Telah Kami Produksi"
      subtitle="Lihat dan dengarkan beberapa karya Mars &amp; Hymne yang telah diproduksi oleh ALF Production."
    />

    <LazyPortfolioGrid
      hydrate-on-visible
      class="mt-8"
      :items="portfolioItems.slice(0, 3)"
    />

    <div class="mt-6 text-center">
      <NuxtLink to="/portofolio" :class="textLinkClass">Lihat Portofolio</NuxtLink>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <SectionHeading eyebrow="Proses" title="Dari Ide Menjadi Karya Lembaga." />

    <LazyProcessSteps hydrate-never class="mt-8" />

    <div class="mt-6 text-center">
      <NuxtLink to="/cara-pemesanan" :class="textLinkClass">
        Lihat cara pemesanan
      </NuxtLink>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <SectionHeading eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" />

    <div class="mx-auto mt-8 max-w-3xl">
      <LazyFaqAccordion hydrate-on-visible :items="faqItems.slice(0, 3)" />
    </div>

    <div class="mt-6 text-center">
      <NuxtLink to="/faq" :class="textLinkClass">Lihat semua FAQ</NuxtLink>
    </div>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-2xl font-bold tracking-tight text-on-surface md:text-3xl"
      >
        Sudah Siap Punya Mars &amp; Hymne untuk Lembaga Anda?
      </h2>

      <p
        class="mx-auto mt-4 max-w-2xl text-base leading-normal text-on-surface-variant"
      >
        Ceritakan kebutuhan lembaga Anda kepada kami. Kami akan membantu
        mengarahkan paket dan proses produksi yang sesuai.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="md-elevated-1 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-on transition-transform hover:scale-105"
        >
          Konsultasi Gratis
        </a>
        <NuxtLink
          to="/layanan"
          class="inline-flex items-center rounded-full border border-outline px-8 py-3.5 text-base font-semibold text-on-surface transition-colors hover:bg-surface-container-high"
        >
          Lihat Paket
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
