<script setup lang="ts">
import { onMounted, ref } from 'vue'

type ConsentStatus = 'unknown' | 'granted' | 'denied'

const CONSENT_KEY = 'alf_analytics_consent'
const CONSENT_EVENT = 'alf:analytics-consent-granted'

const config = useRuntimeConfig()
const enabled = Boolean(String(config.public.gaMeasurementId ?? '').trim())
const status = ref<ConsentStatus>('denied')

onMounted(() => {
  if (!enabled) return
  const stored = window.localStorage.getItem(CONSENT_KEY)
  status.value = stored === 'granted' || stored === 'denied' ? stored : 'unknown'
})

function acceptAnalytics(): void {
  window.localStorage.setItem(CONSENT_KEY, 'granted')
  status.value = 'granted'
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

function rejectAnalytics(): void {
  window.localStorage.setItem(CONSENT_KEY, 'denied')
  status.value = 'denied'
}
</script>

<template>
  <aside
    v-if="enabled && status === 'unknown'"
    class="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-3xl rounded-md-large border border-outline bg-surface-container p-5 shadow-xl"
    aria-label="Pilihan analitik situs"
  >
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p class="max-w-2xl text-sm leading-relaxed text-on-surface-variant">
        Kami menggunakan analitik anonim untuk memahami halaman dan tombol yang
        paling membantu pengunjung. Data formulir, nomor WhatsApp, dan isi pesan
        tidak dikirim ke layanan analitik.
        <NuxtLink
          to="/kebijakan-privasi"
          class="font-semibold text-primary-strong hover:underline"
        >
          Pelajari kebijakan privasi
        </NuxtLink>.
      </p>

      <div class="flex shrink-0 gap-2">
        <button
          type="button"
          class="rounded-full border border-outline px-4 py-2 text-sm font-semibold text-on-surface hover:bg-surface-container-high"
          @click="rejectAnalytics"
        >
          Tolak
        </button>
        <button
          type="button"
          class="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-on hover:brightness-95"
          @click="acceptAnalytics"
        >
          Izinkan
        </button>
      </div>
    </div>
  </aside>
</template>
