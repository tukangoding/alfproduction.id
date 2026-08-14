<script setup lang="ts">
import { clientLogos } from '~/config/clients'

const marqueeLogos = [...clientLogos, ...clientLogos]
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <SectionHeading
      :title="'Dipercaya oleh Lembaga & Institusi di Indonesia'"
      subtitle="Sekolah, yayasan, dan lembaga di berbagai daerah telah mempercayakan karya Mars &amp; Hymne mereka kepada ALF Production."
    />

    <div
      class="relative mt-14 overflow-hidden"
      role="list"
      aria-label="Logo lembaga dan institusi klien ALF Production"
    >
      <div class="marquee-track flex w-max items-center gap-14">
        <div
          v-for="(logo, index) in marqueeLogos"
          :key="`${logo.src}-${index}`"
          role="listitem"
          class="flex h-14 shrink-0 items-center justify-center"
        >
          <img
            :src="logo.src"
            :alt="`Logo ${logo.name}`"
            loading="lazy"
            decoding="async"
            class="max-h-12 w-auto max-w-40 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </div>
      </div>

      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent"
        aria-hidden="true"
      />
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  animation: marquee-scroll 90s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
