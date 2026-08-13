<script setup lang="ts">
import { heroStats, waLink } from '~/config/site'

useHead({
  title: 'ALF Production — Jasa Bikin Mars & Hymne Sekolah / Yayasan',
  meta: [
    {
      name: 'description',
      content:
        'Jasa profesional pembuatan lagu Mars & Hymne khusus Sekolah Islam Terpadu (SIT), Yayasan Pendidikan, & Perguruan Tinggi. Audio kualitas studio profesional.'
    }
  ]
})
</script>

<template>
  <section class="relative z-10">
    <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
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
    </div>
  </section>
</template>
