<script setup lang="ts">
import { servicePackages, includedServices } from '~/config/services'
import { waLink } from '~/config/site'

useHead({
  title: 'Layanan & Paket | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Paket pembuatan Mars & Hymne sekolah dan yayasan — GOLD, SILVER, BRONZE. Konsultasi gratis untuk kebutuhan lembaga Anda.'
    }
  ]
})
</script>

<template>
  <section class="relative z-10">
    <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Layanan
        </p>

        <h1
          class="mt-5 text-4xl font-bold tracking-tight text-on-surface md:text-5xl"
        >
          Pilih Paket Sesuai Kebutuhan Lembaga Anda.
        </h1>

        <p class="mt-6 text-lg leading-relaxed text-on-surface-variant">
          Belum yakin paket mana yang sesuai? Konsultasikan kebutuhan lembaga
          Anda secara GRATIS.
        </p>
      </div>
    </div>
  </section>

  <section id="paket" class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <PricingCard
        v-for="pkg in servicePackages"
        :key="pkg.id"
        :pkg="pkg"
      />
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <SectionHeading title="Layanan yang Termasuk" />

    <div class="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-3">
      <div
        v-for="service in includedServices"
        :key="service"
        class="md-elevated-1 flex items-center gap-3 rounded-md-large bg-surface-container p-5"
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

  <section class="bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-24 pt-24 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
      >
        Belum yakin paket mana yang sesuai?
      </h2>

      <p
        class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant"
      >
        Konsultasikan kebutuhan lembaga Anda secara GRATIS.
      </p>

      <div class="mt-10">
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
