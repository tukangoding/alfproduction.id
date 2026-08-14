<script setup lang="ts">
import { heroStats, waLink, whyUs, SITE_URL } from '~/config/site'
import { servicePackages } from '~/config/services'
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
    <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div class="max-w-3xl">
          <p
            class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
          >
            Komposer Spesialis Mars &amp; Hymne
          </p>

          <h1
            class="mt-5 text-4xl font-bold tracking-tight text-on-surface md:text-6xl"
          >
            Wujudkan Mars &amp; Hymne Lembaga yang Berkarakter dan Berkesan.
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            ALF Production membantu sekolah dan lembaga menghadirkan karya Mars
            &amp; Hymne melalui proses produksi yang terarah, mulai dari melodi,
            aransemen, vokal, hingga mixing &amp; mastering.
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-4">
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
            class="mt-16 flex flex-wrap items-center gap-x-12 gap-y-4 border-t border-outline-soft pt-8 md:mt-20"
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
          <img
            src="/hero.png"
            alt="Peralatan studio produksi musik ALF Production"
            width="500"
            height="500"
            fetchpriority="high"
            decoding="async"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <SectionHeading title="Kenapa ALF Production?" />

    <div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div
        v-for="bullet in whyUs"
        :key="bullet"
        class="md-elevated-1 flex items-start gap-4 rounded-md-large bg-surface-container p-6"
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

  <ClientLogos />

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <SectionHeading
      eyebrow="Layanan"
      title="Pilih Paket Sesuai Kebutuhan Lembaga Anda."
      subtitle="Belum yakin paket mana yang sesuai? Konsultasikan kebutuhan lembaga Anda secara GRATIS."
    />

    <div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
      <PricingCard
        v-for="pkg in servicePackages.slice(0, 3)"
        :key="pkg.id"
        :pkg="pkg"
      />
    </div>

    <div class="mt-10 text-center">
      <NuxtLink to="/layanan" :class="textLinkClass">Lihat semua paket</NuxtLink>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <SectionHeading
      eyebrow="Portofolio"
      title="Dengarkan Karya yang Telah Kami Produksi"
      subtitle="Lihat dan dengarkan beberapa karya Mars &amp; Hymne yang telah diproduksi oleh ALF Production."
    />

    <PortfolioGrid class="mt-14" :items="portfolioItems.slice(0, 3)" />

    <div class="mt-10 text-center">
      <NuxtLink to="/portofolio" :class="textLinkClass">Lihat Portofolio</NuxtLink>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <SectionHeading eyebrow="Proses" title="Dari Ide Menjadi Karya Lembaga." />

    <ProcessSteps class="mt-14" />

    <div class="mt-10 text-center">
      <NuxtLink to="/cara-pemesanan" :class="textLinkClass">
        Lihat cara pemesanan
      </NuxtLink>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <SectionHeading eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" />

    <div class="mx-auto mt-14 max-w-3xl">
      <FaqAccordion :items="faqItems.slice(0, 3)" />
    </div>

    <div class="mt-10 text-center">
      <NuxtLink to="/faq" :class="textLinkClass">Lihat semua FAQ</NuxtLink>
    </div>
  </section>

  <section class="bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
      >
        Sudah Siap Punya Mars &amp; Hymne untuk Lembaga Anda?
      </h2>

      <p
        class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant"
      >
        Ceritakan kebutuhan lembaga Anda kepada kami. Kami akan membantu
        mengarahkan paket dan proses produksi yang sesuai.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
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
