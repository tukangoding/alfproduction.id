<script setup lang="ts">
interface ProcessStep {
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    title: 'Konsultasi kebutuhan lembaga',
    description:
      'Ceritakan kebutuhan dan karakter lembaga Anda melalui WhatsApp atau video call. Kami akan membantu memahami kebutuhan Anda sebelum menentukan layanan.'
  },
  {
    title: 'Pilih paket produksi',
    description:
      'Kami membantu mengarahkan paket yang paling sesuai dengan kebutuhan lembaga, sehingga Anda dapat memilih layanan dengan lebih yakin.'
  },
  {
    title: 'Brief & materi',
    description:
      'Sampaikan informasi, referensi, dan materi yang diperlukan. Kami akan membantu mengarahkan apa saja yang perlu disiapkan untuk proses produksi.'
  },
  {
    title: 'Proses produksi',
    description:
      'Lirik, melodi, aransemen, recording vocal, vokalis, dan tahap produksi lainnya dikerjakan sesuai paket dan kebutuhan lembaga.'
  },
  {
    title: 'Mixing & mastering',
    description:
      'Karya disempurnakan agar seluruh elemen musik dan vokal terdengar seimbang, jernih, dan siap digunakan.'
  },
  {
    title: 'Finalisasi',
    description:
      'Karya final diserahkan kepada lembaga setelah proses produksi selesai, disertai panduan dan pendampingan penggunaan.'
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
