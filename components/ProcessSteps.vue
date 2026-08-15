<script setup lang="ts">
interface ProcessStep {
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    title: 'Konsultasi kebutuhan lembaga',
    description:
      'Sampaikan konsep, tujuan, karakter lembaga, dan kebutuhan produksi.'
  },
  {
    title: 'Pilih paket produksi',
    description: 'ALF Production membantu mengarahkan paket yang paling sesuai.'
  },
  {
    title: 'Brief & materi',
    description: 'Lembaga menyerahkan materi sesuai paket.'
  },
  {
    title: 'Proses produksi',
    description:
      'Melodi/notasi, aransemen, recording vocal, vocalis, dan tahap produksi lain dikerjakan sesuai paket.'
  },
  {
    title: 'Mixing & mastering',
    description: 'Karya diproses menjadi audio final.'
  },
  {
    title: 'Finalisasi',
    description: 'Hasil akhir diserahkan kepada lembaga.'
  }
]
</script>

<template>
  <ol class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="(step, index) in steps"
      :key="step.title"
      class="md-elevated-1 flex flex-col gap-2 rounded-md-large bg-surface-container p-5"
    >
      <span
        class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-on"
        aria-hidden="true"
      >
        {{ index + 1 }}
      </span>
      <h3 class="text-base font-semibold text-on-surface">{{ step.title }}</h3>
      <p class="text-sm leading-normal text-on-surface-variant">
        {{ step.description }}
      </p>
    </li>
  </ol>
</template>
