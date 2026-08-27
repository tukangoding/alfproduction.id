<script setup lang="ts">
import { heroStats, waLink, whyUs, SITE_URL } from '~/config/site'
import { portfolioItems } from '~/config/portfolio'
import { faqItems } from '~/config/faq'
import {
  afterSalesServices,
  afterSalesSummary,
  includedServiceDetails,
  servicePackages
} from '~/config/services'
import { pageKeywords } from '~/config/seo'

const textLinkClass =
  'inline-flex min-h-11 items-center gap-1.5 px-2 text-sm font-semibold text-primary-strong transition-colors hover:underline hover:decoration-primary-strong hover:underline-offset-4'

const institutionNeeds = [
  {
    title: 'Belum memiliki Mars?',
    description:
      'Hadirkan karya yang dapat menyuarakan identitas lembaga serta dinyanyikan dan dibanggakan bersama.'
  },
  {
    title: 'Mars yang ada kurang sesuai?',
    description:
      'Kembangkan kembali karya agar lebih kuat secara musikal dan lebih relevan dengan karakter lembaga.'
  },
  {
    title: 'Ingin terdengar lebih profesional?',
    description:
      'Produksi yang tepat membuat Mars nyaman dinyanyikan, berkualitas, dan siap digunakan dalam berbagai kegiatan.'
  }
]

const marsBenefits = [
  { title: 'Identitas', description: 'Merepresentasikan nilai, karakter, dan semangat lembaga.' },
  {
    title: 'Kebersamaan',
    description: 'Membangun rasa memiliki dan semangat yang dapat dinyanyikan bersama.'
  },
  {
    title: 'Momentum',
    description: 'Dapat digunakan dalam upacara, wisuda, acara resmi, gathering, dan video profil.'
  },
  {
    title: 'Warisan',
    description: 'Menjadi aset identitas yang dapat digunakan dan dikenang lintas generasi.'
  }
]

const institutionTypes = [
  {
    icon: '🏫',
    title: 'Sekolah & Pendidikan',
    description: 'Mars yang membangun identitas dan semangat kebersamaan warga pendidikan.',
    to: '/portofolio?tipe=Sekolah'
  },
  {
    icon: '🏢',
    title: 'Perusahaan',
    description: 'Karya untuk memperkuat nilai, budaya, dan semangat dalam organisasi.',
    to: '/portofolio?tipe=Perusahaan'
  },
  {
    icon: '🏛️',
    title: 'Yayasan & Organisasi',
    description: 'Mars atau Hymne yang merepresentasikan visi dan karakter lembaga.',
    to: '/portofolio'
  }
]

useHead({
  title: 'ALF Production — Spesialis Produksi Mars & Hymne Lembaga',
  meta: [
    {
      name: 'description',
      content:
        'Produksi Mars & Hymne profesional untuk sekolah, yayasan, pesantren, organisasi, perusahaan, dan instansi. Wujudkan identitas lembaga melalui karya musik.'
    },
    { name: 'keywords', content: pageKeywords['/'].join(', ') }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/` }]
})
</script>

<template>
  <section class="relative z-10">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">
            Spesialis Produksi Mars &amp; Hymne Lembaga
          </p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-5xl">
            Mars &amp; Hymne Profesional untuk Identitas Lembaga Anda
          </h1>
          <p class="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Wujudkan Mars atau Hymne yang mencerminkan nilai, karakter, dan semangat lembaga
            melalui proses produksi yang ditangani oleh tim musisi profesional.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-4">
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
              Dengarkan Portofolio
            </NuxtLink>
          </div>

          <ul class="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-outline-soft pt-6 md:mt-14">
            <li v-for="stat in heroStats" :key="stat" class="text-sm font-medium text-on-surface-variant">
              {{ stat }}
            </li>
          </ul>
        </div>

        <div class="order-first mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl lg:order-none lg:max-w-none">
          <picture>
            <source
              type="image/avif"
              srcset="/images/hero-480.avif 480w, /images/hero-800.avif 800w, /images/hero-1200.avif 1200w"
              sizes="(min-width: 1024px) 548px, (min-width: 640px) 384px, calc(100vw - 2rem)"
            />
            <source
              type="image/webp"
              srcset="/images/hero-480.webp 480w, /images/hero-800.webp 800w, /images/hero-1200.webp 1200w"
              sizes="(min-width: 1024px) 548px, (min-width: 640px) 384px, calc(100vw - 2rem)"
            />
            <img
              src="/images/hero-800.jpg"
              alt="Peralatan studio produksi musik ALF Production"
              width="800"
              height="800"
              fetchpriority="high"
              decoding="sync"
              class="h-full w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Kebutuhan Lembaga"
        title="Mars lembaga bukan sekadar lagu."
        subtitle="Mars menjadi bagian dari identitas dan kebanggaan lembaga. Karya yang tepat perlu menerjemahkan visi, nilai, karakter, dan semangat lembaga secara musikal."
      />
      <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <article v-for="need in institutionNeeds" :key="need.title" class="md-elevated-1 rounded-md-large bg-surface-container p-6">
          <h3 class="text-lg font-semibold text-on-surface">{{ need.title }}</h3>
          <p class="mt-2 text-base leading-relaxed text-on-surface-variant">{{ need.description }}</p>
        </article>
      </div>
      <div class="mt-7 text-center">
        <a :href="waLink()" target="_blank" rel="noopener" :class="textLinkClass">
          Ceritakan kebutuhan lembaga Anda →
        </a>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-14 sm:px-6">
    <SectionHeading
      eyebrow="Nilai Sebuah Mars"
      title="Mengapa Mars penting bagi sebuah lembaga?"
      subtitle="Mars adalah aset identitas yang dapat digunakan berulang kali dalam berbagai momentum kelembagaan."
    />
    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article v-for="benefit in marsBenefits" :key="benefit.title" class="rounded-md-large border border-outline-soft p-5">
        <h3 class="text-sm font-bold uppercase tracking-wider text-primary-strong">{{ benefit.title }}</h3>
        <p class="mt-2 text-base leading-relaxed text-on-surface-variant">{{ benefit.description }}</p>
      </article>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-14 sm:px-6">
    <SectionHeading
      eyebrow="Solusi ALF Production"
      title="Dari ide hingga menjadi karya siap digunakan."
      subtitle="Kami memahami karakter lembaga, mengembangkan gagasan menjadi karya musik, lalu menghasilkan audio final yang siap digunakan dalam berbagai kegiatan."
    />
    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="service in includedServiceDetails" :key="service.title" class="md-elevated-1 rounded-md-large bg-surface-container p-5">
        <h3 class="font-semibold text-on-surface">{{ service.title }}</h3>
        <p class="mt-1.5 text-base leading-relaxed text-on-surface-variant">{{ service.description }}</p>
      </article>
    </div>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Kenapa ALF Production"
        title="Dipercayakan kepada tim yang berpengalaman."
        subtitle="Kami tidak sekadar membuat lagu, tetapi membantu menerjemahkan identitas setiap lembaga ke dalam sebuah karya musik."
      />
      <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="bullet in whyUs" :key="bullet" class="md-elevated-1 flex items-start gap-3 rounded-md-large bg-surface-container p-5">
          <span class="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary" aria-hidden="true">
            <svg class="h-4 w-4 text-primary-on" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </span>
          <p class="text-base font-medium leading-relaxed text-on-surface">{{ bullet }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-14 sm:px-6">
    <SectionHeading
      eyebrow="Portofolio"
      title="Dengarkan identitas lembaga yang kami terjemahkan menjadi karya."
      subtitle="Bukan sekadar melihat portofolio. Dengarkan langsung beberapa Mars &amp; Hymne yang telah diproduksi oleh ALF Production."
    />
    <LazyPortfolioGrid hydrate-on-visible class="mt-8" :items="portfolioItems.slice(0, 3)" />
    <div class="mt-7 text-center">
      <NuxtLink to="/portofolio" :class="textLinkClass">Dengarkan Semua Karya →</NuxtLink>
    </div>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Untuk Berbagai Kebutuhan"
        title="Mars &amp; Hymne untuk berbagai jenis lembaga"
        subtitle="Pendekatan kreatif dan karakter musik disesuaikan dengan identitas setiap lembaga."
      />
      <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <NuxtLink v-for="type in institutionTypes" :key="type.title" :to="type.to" class="md-elevated-1 group rounded-md-large bg-surface-container p-6 transition-transform hover:-translate-y-1">
          <span class="text-2xl" aria-hidden="true">{{ type.icon }}</span>
          <h3 class="mt-3 text-lg font-semibold text-on-surface">{{ type.title }}</h3>
          <p class="mt-2 text-base leading-relaxed text-on-surface-variant">{{ type.description }}</p>
          <span class="mt-4 inline-block text-sm font-semibold text-primary-strong">Lihat contoh karya →</span>
        </NuxtLink>
      </div>
    </div>
  </section>

  <LazyClientLogos hydrate-on-visible />

  <section id="paket" class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-14 sm:px-6">
    <SectionHeading
      eyebrow="Paket Produksi"
      title="Pilih paket sesuai kebutuhan lembaga Anda."
      subtitle="Setiap lembaga memiliki kebutuhan berbeda. Pilihan paket hadir setelah Anda memahami nilai, hasil, dan proses produksi yang kami berikan."
    />
    <div class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
      <PricingCard
        v-for="pkg in servicePackages"
        :key="pkg.id"
        :pkg="pkg"
        :after-sales-summary="afterSalesSummary"
      />
    </div>
    <p class="mx-auto mt-7 max-w-2xl text-center text-sm leading-relaxed text-on-surface-variant">
      <strong class="text-on-surface">Belum yakin memilih paket? Tidak masalah.</strong>
      Konsultasikan kebutuhan lembaga Anda terlebih dahulu. Kami akan membantu mengarahkan pilihan yang sesuai.
    </p>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Proses Produksi"
        title="Bagaimana proses produksinya?"
        subtitle="Alur yang terarah membantu Anda memahami proses sejak konsultasi hingga karya diserahkan."
      />
      <LazyProcessSteps hydrate-never class="mt-8" />
      <div class="mt-7 text-center">
        <NuxtLink to="/cara-pemesanan" :class="textLinkClass">Lihat cara pemesanan →</NuxtLink>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-14 sm:px-6">
    <SectionHeading
      eyebrow="After Sales"
      title="Karya selesai bukan berarti pendampingan berakhir."
      subtitle="Kami tetap mendampingi agar lembaga dapat menggunakan Mars dengan lebih percaya diri."
    />
    <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <article v-for="service in afterSalesServices" :key="service.id" class="md-elevated-1 rounded-md-large bg-surface-container p-5">
        <div class="flex items-start justify-between gap-3">
          <h3 class="font-semibold text-on-surface">{{ service.title }}</h3>
          <span v-if="service.duration" class="shrink-0 rounded-full bg-primary-container px-2.5 py-0.5 text-xs font-semibold text-on-primary-container">
            {{ service.duration }}
          </span>
        </div>
        <p class="mt-2 text-base leading-relaxed text-on-surface-variant">{{ service.description }}</p>
      </article>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-14 sm:px-6">
    <SectionHeading eyebrow="FAQ" title="Pertanyaan yang sering diajukan" />
    <div class="mx-auto mt-8 max-w-3xl">
      <LazyFaqAccordion hydrate-on-visible :items="faqItems" />
    </div>
    <div class="mt-7 text-center">
      <NuxtLink to="/faq" :class="textLinkClass">Lihat semua FAQ →</NuxtLink>
    </div>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
      <h2 class="mx-auto max-w-3xl text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
        Belum yakin lembaga Anda membutuhkan Mars?
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant">
        Ceritakan kebutuhan lembaga Anda. Konsultasi gratis dan tanpa kewajiban memesan—Anda tidak perlu langsung menentukan paket.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="md-elevated-1 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-on transition-transform hover:scale-105"
        >
          Konsultasi Gratis via WhatsApp
        </a>
        <NuxtLink
          to="/portofolio"
          class="inline-flex items-center rounded-full border border-outline px-8 py-3.5 text-base font-semibold text-on-surface transition-colors hover:bg-surface-container-high"
        >
          Dengarkan Portofolio
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
