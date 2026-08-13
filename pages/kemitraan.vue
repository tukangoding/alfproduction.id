<script setup lang="ts">
import { waLink } from '~/config/site'

useHead({
  title: 'Kemitraan | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Ajukan kemitraan dengan ALF Production untuk produksi Mars & Hymne sekolah dan lembaga — terbuka untuk jejaring pendidikan, organisasi, marketplace, dan mitra.'
    }
  ]
})

const partnerTypes = [
  'Jejaring Pendidikan',
  'Organisasi',
  'Marketplace',
  'Mitra Lainnya'
]

const benefits = [
  'Layanan yang terstruktur',
  'Pilihan paket yang jelas',
  'Portofolio yang dapat ditunjukkan'
]
</script>

<template>
  <section class="relative z-10">
    <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Kemitraan
        </p>

        <h1
          class="mt-5 text-4xl font-bold tracking-tight text-on-surface md:text-5xl"
        >
          Mitra Produksi Mars &amp; Hymne untuk Lembaga
        </h1>

        <p class="mt-6 text-lg leading-relaxed text-on-surface-variant">
          ALF Production terbuka untuk bekerja sama dengan jejaring pendidikan,
          organisasi, marketplace, dan mitra yang membutuhkan layanan produksi
          Mars &amp; Hymne bagi sekolah atau lembaga.
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <p class="mx-auto max-w-3xl text-center text-xl leading-relaxed text-on-surface">
      Kami dapat menjadi partner produksi ketika lembaga membutuhkan layanan
      yang terstruktur, pilihan paket yang jelas, dan portofolio yang dapat
      ditunjukkan.
    </p>

    <div class="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
      <div
        v-for="benefit in benefits"
        :key="benefit"
        class="md-elevated-1 flex flex-col items-start gap-3 rounded-md-large bg-surface-container p-6"
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
        <p class="font-medium text-on-surface">{{ benefit }}</p>
      </div>
    </div>

    <div class="mx-auto mt-12 max-w-4xl">
      <p class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">
        Terbuka untuk bekerja sama dengan
      </p>
      <ul class="mt-4 flex flex-wrap gap-3">
        <li
          v-for="type in partnerTypes"
          :key="type"
          class="rounded-full border border-outline bg-surface-container px-4 py-2 text-sm font-medium text-on-surface"
        >
          {{ type }}
        </li>
      </ul>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <SectionHeading
      eyebrow="Kemitraan"
      title="Ajukan Kemitraan"
      subtitle="Isi formulir di bawah ini, dan tim kami akan menghubungi Anda melalui WhatsApp untuk membahas kerja sama lebih lanjut."
    />

    <div class="mx-auto mt-12 max-w-2xl">
      <LeadForm mode="kemitraan" />
    </div>
  </section>

  <section class="bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-24 pt-24 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
      >
        Siap membangun kemitraan bersama ALF Production?
      </h2>

      <p
        class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant"
      >
        Ceritakan kebutuhan kerja sama Anda — kami siap membantu melalui
        WhatsApp.
      </p>

      <div class="mt-10">
        <a
          :href="waLink('Halo ALF Production, saya ingin mengajukan kemitraan.')"
          target="_blank"
          rel="noopener"
          class="md-elevated-1 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-on transition-transform hover:scale-105"
        >
          Ajukan Kemitraan
        </a>
      </div>
    </div>
  </section>
</template>
