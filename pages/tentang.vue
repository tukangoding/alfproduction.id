<script setup lang="ts">
import { waLink, SITE_URL } from '~/config/site'
import { pageKeywords } from '~/config/seo'

const highlights = [
  {
    title: '80+ Karya',
    description:
      'Telah memproduksi lebih dari 80 karya Mars dan Hymne untuk berbagai kebutuhan lembaga.'
  },
  {
    title: '10+ Tahun Pengalaman',
    description:
      'Berpengalaman lebih dari 10 tahun dalam mengembangkan dan memproduksi karya musik untuk lembaga.'
  },
  {
    title: 'Tim Musisi Profesional',
    description:
      'Dikerjakan oleh tim musisi aktif dan profesional yang memahami proses produksi musik secara menyeluruh.'
  }
]

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
    },
    { property: 'og:title', content: 'Tentang Kami | ALF Production' },
    {
      property: 'og:description',
      content:
        'Kenali ALF Production, layanan produksi yang berfokus pada pembuatan Mars & Hymne untuk sekolah dan lembaga, dari tahapan musikal hingga audio siap pakai.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${SITE_URL}/tentang` }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/tentang` }]
})
</script>

<template>
  <section class="relative z-10 border-b border-outline-soft">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Tentang
        </p>

        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
        >
          Tentang ALF Production
        </h1>

        <p class="mt-4 text-base leading-normal text-on-surface-variant">
          Kenali siapa kami dan bagaimana ALF Production membantu sekolah serta
          lembaga memiliki karya Mars &amp; Hymne yang berkarakter.
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <article
        v-for="highlight in highlights"
        :key="highlight.title"
        class="md-elevated-1 rounded-md-large bg-surface-container p-5"
      >
        <h2 class="text-lg font-semibold text-on-surface">
          {{ highlight.title }}
        </h2>
        <p class="mt-2 text-sm leading-normal text-on-surface-variant">
          {{ highlight.description }}
        </p>
      </article>
    </div>

    <div class="mx-auto max-w-3xl">
      <p class="mt-10 text-lg leading-normal text-on-surface">
        ALF Production adalah layanan produksi yang berfokus pada pembuatan
        Mars &amp; Hymne untuk sekolah dan lembaga. Kami membantu lembaga
        memilih kebutuhan produksi yang sesuai, kemudian mengolahnya melalui
        tahapan musikal dan produksi audio hingga menjadi karya yang siap
        digunakan.
      </p>
    </div>
  </section>

  <PersonalGuarantee :isJSITNetwork="true" />

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 pb-10 sm:px-6">
    <div
      class="md-elevated-2 mx-auto max-w-4xl rounded-md-large bg-surface-container p-6 md:p-10"
    >
      <span
        class="block text-5xl leading-none text-primary-strong"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote class="mt-3">
        <p
          class="text-xl font-medium leading-snug tracking-tight text-on-surface md:text-2xl"
        >
          Bagi kami, Mars &amp; Hymne bukan sekadar lagu. Karya tersebut dapat
          menjadi bagian dari identitas, semangat, dan karakter sebuah lembaga.
        </p>
      </blockquote>
    </div>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-16 pt-16 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-2xl font-bold tracking-tight text-on-surface md:text-3xl"
      >
        Ingin membuat Mars &amp; Hymne untuk lembaga Anda?
      </h2>

      <p
        class="mx-auto mt-4 max-w-2xl text-base leading-normal text-on-surface-variant"
      >
        Ceritakan kebutuhan lembaga Anda, dan kami akan membantu mengarahkan
        proses produksi yang sesuai.
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
