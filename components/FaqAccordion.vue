<script setup lang="ts">
import type { FaqItem } from '~/config/faq'

defineProps<{
  items: FaqItem[]
}>()

const openIndexes = ref<number[]>([])

function toggle(index: number) {
  const i = openIndexes.value.indexOf(index)
  if (i === -1) {
    openIndexes.value.push(index)
  } else {
    openIndexes.value.splice(i, 1)
  }
}

function isOpen(index: number): boolean {
  return openIndexes.value.includes(index)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="(item, index) in items"
      :key="item.question"
      class="rounded-md-large bg-surface-container md-elevated-1"
    >
      <h3>
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 rounded-md-large px-6 py-5 text-left transition-colors hover:bg-surface-container-high"
          :aria-expanded="isOpen(index)"
          :aria-controls="`faq-panel-${index}`"
          @click="toggle(index)"
        >
          <span class="font-semibold text-on-surface">{{ item.question }}</span>
          <svg
            class="h-5 w-5 shrink-0 text-on-surface-variant transition-transform duration-300"
            :class="isOpen(index) ? 'rotate-180' : ''"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div
        class="answer-wrap"
        :class="isOpen(index) ? 'open' : ''"
        :id="`faq-panel-${index}`"
      >
        <div v-show="isOpen(index)" class="overflow-hidden">
          <p class="px-6 pb-5 text-sm leading-relaxed text-on-surface-variant">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.answer-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.answer-wrap.open {
  grid-template-rows: 1fr;
}
</style>
