<script setup lang="ts">
import { waLink, SITE_URL } from '~/config/site'
import { faqItems } from '~/config/faq'
import { buildFaqPageSchema, pageKeywords } from '~/config/seo'

useHead({
  title: 'FAQ | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Pertanyaan yang sering diajukan tentang jasa pembuatan Mars & Hymne sekolah, yayasan, dan lembaga oleh ALF Production — konsultasi gratis.'
    },
    {
      name: 'keywords',
      content: pageKeywords['/faq'].join(', ')
    }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/faq/` }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(buildFaqPageSchema())
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
          FAQ
        </p>

        <h1
          class="mt-5 text-4xl font-bold tracking-tight text-on-surface md:text-5xl"
        >
          Pertanyaan yang Sering Diajukan
        </h1>

        <p class="mt-6 text-lg leading-relaxed text-on-surface-variant">
          Temukan jawaban atas pertanyaan umum seputar layanan produksi Mars
          &amp; Hymne untuk lembaga Anda.
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="mx-auto max-w-3xl">
      <FaqAccordion :items="faqItems" />
    </div>
  </section>

  <section class="bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
      >
        Masih Ada Pertanyaan?
      </h2>

      <p
        class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant"
      >
        Konsultasikan kebutuhan lembaga Anda secara gratis melalui WhatsApp.
        Kami akan membantu mengarahkan paket dan proses produksi yang sesuai.
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
