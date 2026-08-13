<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle?: string
    align?: 'left' | 'center'
  }>(),
  { align: 'center' }
)
</script>

<template>
  <div
    :class="
      align === 'center'
        ? 'flex flex-col items-center text-center'
        : 'text-left'
    "
  >
    <p
      v-if="eyebrow"
      class="text-sm font-semibold uppercase tracking-widest text-primary-strong"
    >
      {{ eyebrow }}
    </p>
    <h2 class="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface-variant"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
