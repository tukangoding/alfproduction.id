<script setup lang="ts">
import { servicePackages, includedServices } from '~/config/services'
import { waLink, SITE_URL } from '~/config/site'
import { pageKeywords } from '~/config/seo'

useHead({
  title: 'Layanan & Paket | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Paket pembuatan Mars & Hymne sekolah dan yayasan — GOLD, SILVER, BRONZE. Konsultasi gratis untuk kebutuhan lembaga Anda.'
    },
    {
      name: 'keywords',
      content: pageKeywords['/layanan'].join(', ')
    }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/layanan/` }]
})
</script>

<template>
  <section class="relative z-10 border-b border-outline-soft">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Layanan
        </p>

        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
        >
          Pilih Paket Sesuai Kebutuhan Lembaga Anda.
        </h1>

        <p class="mt-4 text-base leading-normal text-on-surface-variant">
          Belum yakin paket mana yang sesuai? Konsultasikan kebutuhan lembaga
          Anda secara GRATIS.
        </p>
      </div>
    </div>
  </section>

  <section id="paket" class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <PricingCard
        v-for="pkg in servicePackages"
        :key="pkg.id"
        :pkg="pkg"
      />
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <SectionHeading title="Layanan yang Termasuk" />

    <div class="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3">
      <div
        v-for="service in includedServices"
        :key="service"
        class="md-elevated-1 flex items-center gap-3 rounded-md-large bg-surface-container p-4"
      >
        <span
          class="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary"
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
        <p class="font-medium text-on-surface">{{ service }}</p>
      </div>
    </div>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-16 pt-16 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-2xl font-bold tracking-tight text-on-surface md:text-3xl"
      >
        Belum yakin paket mana yang sesuai?
      </h2>

      <p
        class="mx-auto mt-4 max-w-2xl text-base leading-normal text-on-surface-variant"
      >
        Konsultasikan kebutuhan lembaga Anda secara GRATIS.
      </p>

      <div class="mt-8">
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="md-elevated-1 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-on transition-transform hover:scale-105"
        >
          Konsultasi Gratis
        </a>
      </div>
    </div>
  </section>
</template>
