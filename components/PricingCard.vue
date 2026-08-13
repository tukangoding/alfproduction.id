<script setup lang="ts">
import { waLink } from '~/config/site'
import type { ServicePackage } from '~/config/services'

const props = defineProps<{
  pkg: ServicePackage
}>()

const ctaClasses = computed(() =>
  props.pkg.featured
    ? 'inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-on transition-transform hover:scale-105'
    : 'inline-flex items-center justify-center rounded-full border border-outline px-6 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-high'
)
</script>

<template>
  <article
    class="relative flex flex-col rounded-md-large bg-surface-container p-7"
    :class="pkg.featured ? 'ring-2 ring-primary md-elevated-2' : 'md-elevated-1'"
  >
    <span
      v-if="pkg.featured"
      class="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-on"
    >
      Populer
    </span>

    <p
      class="text-sm font-semibold uppercase tracking-widest"
      :class="pkg.featured ? 'text-primary' : 'text-on-surface-variant'"
    >
      {{ pkg.name }}
    </p>

    <p class="mt-3 text-3xl font-bold tracking-tight text-on-surface">
      {{ pkg.price }}
    </p>

    <p class="mt-3 text-sm leading-relaxed text-on-surface-variant">
      {{ pkg.description }}
    </p>

    <ul class="mt-6 flex flex-col gap-2.5">
      <li
        v-for="feature in pkg.features"
        :key="feature"
        class="flex items-start gap-2.5 text-sm text-on-surface"
      >
        <svg
          class="mt-0.5 h-4 w-4 shrink-0 text-primary"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        </svg>
        <span>{{ feature }}</span>
      </li>
    </ul>

    <p v-if="pkg.note" class="mt-4 text-xs italic text-on-surface-variant">
      {{ pkg.note }}
    </p>

    <div class="mt-7 flex flex-1 items-end">
      <a
        :href="waLink()"
        target="_blank"
        rel="noopener"
        class="w-full"
        :class="ctaClasses"
      >
        Konsultasikan Kebutuhan Anda
      </a>
    </div>
  </article>
</template>
