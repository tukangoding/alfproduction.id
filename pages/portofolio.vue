<script setup lang="ts">
import { portfolioItems, portfolioFilters } from '~/config/portfolio'
import { waLink } from '~/config/site'

const activeFilter = ref(portfolioFilters[0] ?? 'Semua')

const filteredItems = computed(() =>
  portfolioItems.filter(
    (item) =>
      activeFilter.value === 'Semua' ||
      item.category === activeFilter.value ||
      item.type === activeFilter.value
  )
)

useHead({
  title: 'Portofolio | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Dengarkan portofolio Mars & Hymne karya ALF Production untuk sekolah dan yayasan. Setiap karya membantu lembaga memiliki identitas yang berkarakter.'
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
          Portofolio
        </p>

        <h1
          class="mt-5 text-4xl font-bold tracking-tight text-on-surface md:text-5xl"
        >
          Portofolio ALF Production
        </h1>

        <p class="mt-6 text-lg leading-relaxed text-on-surface-variant">
          Setiap lembaga memiliki identitas. Kami membantu menerjemahkannya
          menjadi karya Mars &amp; Hymne yang dapat menjadi bagian dari
          identitas lembaga.
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="flex justify-center">
      <FilterTabs v-model="activeFilter" :filters="portfolioFilters" />
    </div>

    <PortfolioGrid v-if="filteredItems.length" class="mt-14" :items="filteredItems" />

    <p
      v-else
      class="mt-14 text-center text-lg leading-relaxed text-on-surface-variant"
    >
      Belum ada karya pada kategori ini.
    </p>
  </section>

  <section class="bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-24 pt-24 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
      >
        Ingin membuat Mars &amp; Hymne seperti karya kami?
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
