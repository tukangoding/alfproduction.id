<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { clientLogos } from '~/config/clients'

const marqueeLogos = [...clientLogos, ...clientLogos]
const sectionRef = ref<HTMLElement | null>(null)
const shouldLoadLogos = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const section = sectionRef.value
  if (!section || !('IntersectionObserver' in window)) {
    shouldLoadLogos.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      shouldLoadLogos.value = true
      observer?.disconnect()
      observer = null
    },
    { rootMargin: '100px 0px' }
  )
  observer.observe(section)
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <section
    ref="sectionRef"
    class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6"
  >
    <SectionHeading
      eyebrow="Kepercayaan Klien"
      :title="'Dipercaya oleh Berbagai Lembaga di Indonesia'"
      subtitle="Sekolah, yayasan, pesantren, organisasi, perusahaan, dan instansi di berbagai daerah telah mempercayakan karya mereka kepada ALF Production."
    />

    <div
      class="relative mt-8 overflow-hidden"
      role="list"
      aria-label="Logo lembaga dan institusi klien ALF Production"
    >
      <div
        v-if="shouldLoadLogos"
        class="marquee-track flex w-max items-center gap-6 md:gap-12"
      >
        <div
          v-for="(logo, index) in marqueeLogos"
          :key="`${logo.src}-${index}`"
          role="listitem"
          class="flex h-[clamp(8rem,9vw,9.5rem)] shrink-0 items-center justify-center"
        >
          <img
            :src="logo.src"
            :alt="`Logo ${logo.name}`"
            loading="lazy"
            decoding="async"
            class="h-auto w-auto max-h-[clamp(7rem,8vw,9rem)] max-w-[clamp(17rem,22vw,22rem)] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </div>
      </div>

      <div
        v-else
        class="h-[clamp(8rem,9vw,9.5rem)]"
        aria-hidden="true"
      />

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
