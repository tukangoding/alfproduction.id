<script setup lang="ts">
import type { PortfolioItem } from '~/config/portfolio'

const props = defineProps<{
  item: PortfolioItem
}>()

const imageFailed = ref(false)

const isPlaceholder = computed(() =>
  props.item.youtubeId.startsWith('PLACEHOLDER')
)

const coverSrc = computed(
  () => `https://img.youtube.com/vi/${props.item.youtubeId}/hqdefault.jpg`
)
</script>

<template>
  <article class="card overflow-hidden rounded-md-large bg-surface-container">
    <div
      class="cover relative overflow-hidden rounded-t-md-large bg-surface-container-high"
    >
      <img
        v-if="!isPlaceholder && !imageFailed"
        :src="coverSrc"
        :alt="item.title"
        loading="lazy"
        class="h-full w-full object-cover"
        @error="imageFailed = true"
      />
      <div
        v-else
        class="flex h-full w-full flex-col items-center justify-center gap-2 text-on-surface-variant"
        aria-hidden="true"
      >
        <svg
          class="h-9 w-9"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
        <span class="text-sm font-semibold">{{ item.client }}</span>
      </div>
      <AudioPlayButton
        :track="item"
        :size="48"
        class="absolute bottom-3 right-3"
      />
    </div>

    <div class="p-4">
      <h3 class="text-base font-semibold text-on-surface">{{ item.client }}</h3>
      <div class="mt-2 flex flex-wrap gap-2">
        <span
          class="rounded-full bg-surface-container-high px-2.5 py-0.5 text-xs font-medium text-on-surface-variant"
        >
          {{ item.category }}
        </span>
        <span
          class="rounded-full bg-surface-container-high px-2.5 py-0.5 text-xs font-medium text-on-surface-variant"
        >
          {{ item.type }}
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.cover {
  aspect-ratio: 4 / 3;
}

.card {
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: var(--md-hig-elevation-2);
}
</style>
