<script setup lang="ts">
import { waLink, SITE_URL } from '~/config/site'
import { pageKeywords } from '~/config/seo'

const highlights = [
  {
    title: '80+ Karya',
    description:
      'Mars dan Hymne yang telah diproduksi untuk berbagai lembaga dengan karakter dan kebutuhan yang berbeda.'
  },
  {
    title: '10+ Tahun Pengalaman',
    description:
      'Pengalaman dalam penciptaan dan produksi musik menjadi bekal kami untuk menangani setiap karya dengan sungguh-sungguh.'
  },
  {
    title: 'Musisi Aktif & Profesional',
    description:
      'Setiap proses dikerjakan oleh tim yang memahami penciptaan musik, produksi audio, dan kebutuhan sebuah lembaga.'
  }
]

const approach = [
  {
    number: '01',
    title: 'Mendengarkan cerita Anda',
    description:
      'Kami memulai dengan memahami lembaga, nilai yang dijaga, serta pesan yang ingin disampaikan.'
  },
  {
    number: '02',
    title: 'Menerjemahkannya menjadi karya',
    description:
      'Cerita tersebut dikembangkan menjadi lirik, melodi, dan aransemen yang memiliki karakter.'
  },
  {
    number: '03',
    title: 'Mendampingi sampai siap digunakan',
    description:
      'Proses produksi dilakukan secara terarah hingga menghasilkan audio final yang siap menjadi bagian dari kegiatan lembaga.'
  }
]

useHead({
  title: 'Tentang Kami | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Kenali ALF Production dan cara kami menerjemahkan nilai, karakter, dan semangat lembaga menjadi karya Mars & Hymne profesional.'
    },
    { name: 'keywords', content: pageKeywords['/tentang'].join(', ') },
    { property: 'og:title', content: 'Tentang Kami | ALF Production' },
    {
      property: 'og:description',
      content:
        'ALF Production membantu berbagai lembaga mewujudkan identitas mereka melalui karya Mars & Hymne yang berkarakter.'
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
      <div class="mx-auto max-w-4xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">
          Tentang ALF Production
        </p>

        <h1 class="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
          Membantu Lembaga Menemukan Suara yang Mewakili Mereka
        </h1>

        <p class="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
          Kami membantu menerjemahkan nilai, karakter, dan semangat lembaga menjadi Mars
          atau Hymne yang dapat dinyanyikan, digunakan, dan dibanggakan bersama.
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
    <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
      <div>
        <p class="text-sm font-semibold uppercase tracking-widest text-primary-strong">
          Lebih dari sekadar lagu
        </p>
        <h2 class="mt-3 text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
          Setiap lembaga memiliki cerita yang layak disuarakan.
        </h2>
      </div>

      <div class="space-y-5 text-base leading-relaxed text-on-surface-variant">
        <p>
          Di ALF Production, kami percaya bahwa Mars dan Hymne bukan hanya pelengkap
          dalam sebuah acara. Karya tersebut dapat menjadi bagian dari identitas,
          kebanggaan, dan rasa memiliki orang-orang di dalam lembaga.
        </p>
        <p>
          Karena setiap lembaga berbeda, kami tidak menggunakan pendekatan yang sama
          untuk semua klien. Kami mendengarkan cerita dan kebutuhan Anda terlebih dahulu,
          lalu mengolahnya melalui proses kreatif dan produksi musik yang terarah.
        </p>
        <p>
          Hasil akhirnya bukan sekadar audio yang terdengar baik, tetapi karya yang terasa
          dekat dengan lembaga dan siap digunakan dalam berbagai momentum penting.
        </p>
      </div>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
      <article
        v-for="highlight in highlights"
        :key="highlight.title"
        class="md-elevated-1 rounded-md-large bg-surface-container p-6"
      >
        <h2 class="text-xl font-bold text-primary-strong">{{ highlight.title }}</h2>
        <p class="mt-2 text-base leading-relaxed text-on-surface-variant">
          {{ highlight.description }}
        </p>
      </article>
    </div>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Cara Kami Bekerja"
        title="Setiap karya dimulai dengan memahami lembaganya."
        subtitle="Kami menjaga proses tetap personal, terarah, dan mudah dipahami sejak percakapan pertama hingga karya selesai."
      />

      <ol class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <li
          v-for="item in approach"
          :key="item.number"
          class="md-elevated-1 rounded-md-large bg-surface-container p-6"
        >
          <span class="text-sm font-bold tracking-widest text-primary-strong">
            {{ item.number }}
          </span>
          <h3 class="mt-3 text-lg font-semibold text-on-surface">{{ item.title }}</h3>
          <p class="mt-2 text-base leading-relaxed text-on-surface-variant">
            {{ item.description }}
          </p>
        </li>
      </ol>
    </div>
  </section>

  <PersonalGuarantee :isJSITNetwork="true" />

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
      <p class="text-sm font-semibold uppercase tracking-widest text-primary-strong">
        Mari mulai dari cerita Anda
      </p>
      <h2 class="mx-auto mt-3 max-w-3xl text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
        Identitas seperti apa yang ingin lembaga Anda suarakan?
      </h2>

      <p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant">
        Ceritakan kebutuhan dan karakter lembaga Anda. Kami akan membantu mengarahkan
        proses produksi yang paling sesuai, tanpa kewajiban langsung memilih paket.
      </p>

      <div class="mt-8">
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="md-elevated-1 inline-flex min-h-11 items-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-on transition-transform hover:scale-105"
        >
          Konsultasi Gratis via WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
