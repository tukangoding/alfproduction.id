<script setup lang="ts">
import { waLink, SITE_URL } from '~/config/site'
import { pageKeywords } from '~/config/seo'

useHead({
  title: 'Cara Pemesanan | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Simak cara pemesanan Mars & Hymne di ALF Production — dari konsultasi kebutuhan, pilih paket, brief, produksi, mixing & mastering, hingga finalisasi.'
    },
    {
      name: 'keywords',
      content: pageKeywords['/cara-pemesanan'].join(', ')
    }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/cara-pemesanan/` }]
})
</script>

<template>
  <section class="relative z-10 border-b border-outline-soft">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Cara Pemesanan
        </p>

        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
        >
          Dari Ide Menjadi Karya Lembaga.
        </h1>

        <p class="mt-4 text-base leading-normal text-on-surface-variant">
          Dari konsultasi kebutuhan hingga hasil akhir diserahkan, setiap
          proses produksi Mars &amp; Hymne dikerjakan secara terarah sesuai
          kebutuhan lembaga.
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <ProcessSteps class="mt-8" />

    <div class="mt-8 flex justify-center">
      <NuxtLink
        to="/kontak#pesan"
        class="md-elevated-1 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-on transition-transform hover:scale-105"
      >
        Pesan Sekarang
      </NuxtLink>
    </div>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-16 pt-16 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-2xl font-bold tracking-tight text-on-surface md:text-3xl"
      >
        Siap memulai proses produksi Mars &amp; Hymne lembaga Anda?
      </h2>

      <p
        class="mx-auto mt-4 max-w-2xl text-base leading-normal text-on-surface-variant"
      >
        Mulai dengan konsultasi gratis. Ceritakan kebutuhan lembaga Anda, dan
        kami akan membantu mengarahkan prosesnya.
      </p>

      <div class="mt-8">
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="md-elevated-1 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-on transition-transform hover:scale-105"
        >
          Mulai Konsultasi Gratis
        </a>
      </div>
    </div>
  </section>
</template>
