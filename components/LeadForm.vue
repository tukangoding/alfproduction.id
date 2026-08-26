<script setup lang="ts">
import { ref } from 'vue'
import { waLink } from '~/config/site'
import { trackAnalyticsEvent } from '~/composables/useAnalytics'

const pesanOptions = [
  'Pembuatan Mars',
  'Pembuatan Hymne',
  'Pembuatan Mars dan Hymne',
  'Konsultasi',
  'Lainnya'
]

const form = ref({
  organization: '',
  picName: '',
  whatsapp: '',
  email: '',
  subject: '',
  estimate: '',
  message: ''
})

function composeMessage(): string {
  const intro = 'Halo ALF Production, saya ingin memesan pembuatan Mars/Hymne.'
  const lines = (Object.keys(form.value) as (keyof typeof form.value)[])
    .filter((key) => form.value[key].trim() !== '')
    .map((key) => {
      const label = key === 'subject' ? 'Bentuk Kebutuhan' : fieldLabels[key]
      return `${label}: ${form.value[key].trim()}`
    })
  return [intro, '', ...lines].join('\n')
}

const fieldLabels: Record<Exclude<keyof typeof form.value, 'subject'>, string> =
  {
    organization: 'Nama Lembaga',
    picName: 'Nama PIC',
    whatsapp: 'WhatsApp',
    email: 'Email',
    estimate: 'Perkiraan Kebutuhan',
    message: 'Pesan'
  }

function onSubmit(): void {
  trackAnalyticsEvent('generate_lead', {
    lead_source: 'contact_form',
    service_interest: form.value.subject
  })
  window.open(waLink(composeMessage()), '_blank', 'noopener')
}
</script>

<template>
  <form class="flex flex-col gap-5" @submit.prevent="onSubmit">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div class="flex flex-col gap-2">
        <label for="lead-organization" class="text-sm font-medium text-on-surface">
          Nama Lembaga
        </label>
        <input
          id="lead-organization"
          v-model="form.organization"
          type="text"
          name="organization"
          autocomplete="organization"
          required
          class="w-full rounded-md-medium border border-outline bg-surface-container px-4 py-3 text-base text-on-surface placeholder:text-on-surface-variant focus:border-alf-accent focus:outline-none focus:ring-2 focus:ring-alf-accent"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="lead-pic" class="text-sm font-medium text-on-surface">
          Nama PIC
        </label>
        <input
          id="lead-pic"
          v-model="form.picName"
          type="text"
          name="picName"
          autocomplete="name"
          required
          class="w-full rounded-md-medium border border-outline bg-surface-container px-4 py-3 text-base text-on-surface placeholder:text-on-surface-variant focus:border-alf-accent focus:outline-none focus:ring-2 focus:ring-alf-accent"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="lead-whatsapp" class="text-sm font-medium text-on-surface">
          WhatsApp
        </label>
        <input
          id="lead-whatsapp"
          v-model="form.whatsapp"
          type="tel"
          name="whatsapp"
          autocomplete="tel"
          placeholder="08xxxxxxxxxx"
          required
          class="w-full rounded-md-medium border border-outline bg-surface-container px-4 py-3 text-base text-on-surface placeholder:text-on-surface-variant focus:border-alf-accent focus:outline-none focus:ring-2 focus:ring-alf-accent"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="lead-email" class="text-sm font-medium text-on-surface">
          Email
        </label>
        <input
          id="lead-email"
          v-model="form.email"
          type="email"
          name="email"
          autocomplete="email"
          class="w-full rounded-md-medium border border-outline bg-surface-container px-4 py-3 text-base text-on-surface placeholder:text-on-surface-variant focus:border-alf-accent focus:outline-none focus:ring-2 focus:ring-alf-accent"
        />
      </div>

      <div class="flex flex-col gap-2 md:col-span-2">
        <label for="lead-subject" class="text-sm font-medium text-on-surface">
          Bentuk Kebutuhan
        </label>
        <select
          id="lead-subject"
          v-model="form.subject"
          name="subject"
          required
          class="w-full rounded-md-medium border border-outline bg-surface-container px-4 py-3 text-base text-on-surface focus:border-alf-accent focus:outline-none focus:ring-2 focus:ring-alf-accent"
        >
          <option value="" disabled>Pilih kebutuhan Anda</option>
          <option
            v-for="option in pesanOptions"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <div class="flex flex-col gap-2 md:col-span-2">
        <label for="lead-estimate" class="text-sm font-medium text-on-surface">
          Perkiraan Kebutuhan
        </label>
        <textarea
          id="lead-estimate"
          v-model="form.estimate"
          name="estimate"
          rows="3"
          autocomplete="off"
          placeholder="Misalnya: 1 lagu Mars untuk yayasan, selesai dalam 2 bulan"
          class="w-full rounded-md-medium border border-outline bg-surface-container px-4 py-3 text-base text-on-surface placeholder:text-on-surface-variant focus:border-alf-accent focus:outline-none focus:ring-2 focus:ring-alf-accent"
        ></textarea>
      </div>

      <div class="flex flex-col gap-2 md:col-span-2">
        <label for="lead-message" class="text-sm font-medium text-on-surface">
          Pesan
        </label>
        <textarea
          id="lead-message"
          v-model="form.message"
          name="message"
          rows="4"
          autocomplete="off"
          placeholder="Ceritakan kebutuhan Anda secara singkat"
          class="w-full rounded-md-medium border border-outline bg-surface-container px-4 py-3 text-base text-on-surface placeholder:text-on-surface-variant focus:border-alf-accent focus:outline-none focus:ring-2 focus:ring-alf-accent"
        ></textarea>
      </div>
    </div>

    <button
      type="submit"
      class="md-elevated-1 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-on transition-transform hover:scale-105"
    >
      Kirim melalui WhatsApp
    </button>

    <p class="text-sm leading-normal text-on-surface-variant">
      Tombol di atas akan membuka WhatsApp dengan pesan yang sudah terisi
      lengkap sesuai formulir ini.
    </p>
  </form>
</template>
