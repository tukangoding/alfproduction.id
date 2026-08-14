<script setup lang="ts">
import { clientLogos } from '~/config/clients'
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <SectionHeading
      :title="'Dipercaya oleh Lembaga & Institusi di Indonesia'"
      subtitle="Sekolah, yayasan, dan lembaga di berbagai daerah telah mempercayakan karya Mars &amp; Hymne mereka kepada ALF Production."
    />

    <ul class="mt-14 grid grid-cols-3 items-center gap-x-6 gap-y-10 sm:grid-cols-4 md:grid-cols-6">
      <li
        v-for="logo in clientLogos"
        :key="logo.src"
        class="flex h-14 items-center justify-center"
      >
        <img
          :src="logo.src"
          :alt="`Logo ${logo.name}`"
          loading="lazy"
          decoding="async"
          class="max-h-12 w-auto max-w-full object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
        />
      </li>
    </ul>
  </section>
</template>
