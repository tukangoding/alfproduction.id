<script setup lang="ts">
import { waLink, SITE_URL } from '~/config/site'
import { pageKeywords } from '~/config/seo'

useHead({
  title: 'Tentang Kami | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Kenali ALF Production, layanan produksi yang berfokus pada pembuatan Mars & Hymne untuk sekolah dan lembaga, dari tahapan musikal hingga audio siap pakai.'
    },
    {
      name: 'keywords',
      content: pageKeywords['/tentang'].join(', ')
    }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/tentang/` }]
})
</script>

<template>
  <section class="relative z-10">
    <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Tentang
        </p>

        <h1
          class="mt-5 text-4xl font-bold tracking-tight text-on-surface md:text-5xl"
        >
          Tentang ALF Production
        </h1>

        <p class="mt-6 text-lg leading-relaxed text-on-surface-variant">
          Kenali siapa kami dan bagaimana ALF Production membantu sekolah serta
          lembaga memiliki karya Mars &amp; Hymne yang berkarakter.
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="mx-auto max-w-3xl">
      <p class="text-xl leading-relaxed text-on-surface">
        ALF Production adalah layanan produksi yang berfokus pada pembuatan
        Mars &amp; Hymne untuk sekolah dan lembaga. Kami membantu lembaga
        memilih kebutuhan produksi yang sesuai, kemudian mengolahnya melalui
        tahapan musikal dan produksi audio hingga menjadi karya yang siap
        digunakan.
      </p>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
    <div
      class="md-elevated-2 mx-auto max-w-4xl rounded-md-large bg-surface-container p-8 md:p-14"
    >
      <span
        class="block text-6xl leading-none text-primary"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote class="mt-4">
        <p
          class="text-2xl font-medium leading-snug tracking-tight text-on-surface md:text-3xl"
        >
          Bagi kami, Mars &amp; Hymne bukan sekadar lagu. Karya tersebut dapat
          menjadi bagian dari identitas, semangat, dan karakter sebuah lembaga.
        </p>
      </blockquote>
    </div>
  </section>

  <section class="bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-24 pt-24 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
      >
        Ingin membuat Mars &amp; Hymne untuk lembaga Anda?
      </h2>

      <p
        class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant"
      >
        Ceritakan kebutuhan lembaga Anda, dan kami akan membantu mengarahkan
        proses produksi yang sesuai.
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
