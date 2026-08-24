<script setup lang="ts">
import { portfolioItems, portfolioFilters } from '~/config/portfolio'
import { waLink, SITE_URL } from '~/config/site'
import { buildItemListSchema, pageKeywords } from '~/config/seo'

const itemListSchema = buildItemListSchema()

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
    },
    {
      name: 'keywords',
      content: pageKeywords['/portofolio'].join(', ')
    },
    { property: 'og:title', content: 'Portofolio | ALF Production' },
    {
      property: 'og:description',
      content:
        'Dengarkan portofolio Mars & Hymne karya ALF Production untuk sekolah dan yayasan. Setiap karya membantu lembaga memiliki identitas yang berkarakter.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${SITE_URL}/portofolio` }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/portofolio` }],
  script: itemListSchema
    ? [{ type: 'application/ld+json', children: JSON.stringify(itemListSchema) }]
    : []
})
</script>

<template>
  <section class="relative z-10 border-b border-outline-soft">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Portofolio
        </p>

        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
        >
          Portofolio ALF Production
        </h1>

        <p class="mt-4 text-base leading-normal text-on-surface-variant">
          Setiap lembaga memiliki identitas. Kami membantu menerjemahkannya
          menjadi karya Mars &amp; Hymne yang dapat menjadi bagian dari
          identitas lembaga.
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <div class="flex justify-center">
      <FilterTabs v-model="activeFilter" :filters="portfolioFilters" />
    </div>

    <PortfolioGrid v-if="filteredItems.length" class="mt-8" :items="filteredItems" />

    <p
      v-else
      class="mt-8 text-center text-base leading-normal text-on-surface-variant"
    >
      Belum ada karya pada kategori ini.
    </p>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-16 pt-16 text-center sm:px-6">
      <h2
        class="mx-auto max-w-3xl text-2xl font-bold tracking-tight text-on-surface md:text-3xl"
      >
        Ingin membuat Mars &amp; Hymne seperti karya kami?
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
