<script setup lang="ts">
import { waLink, socials, contact, SITE_URL } from '~/config/site'
import { pageKeywords } from '~/config/seo'

useHead({
  title: 'Kontak | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Hubungi ALF Production untuk pemesanan Mars & Hymne sekolah, yayasan, pesantren, dan lembaga — WhatsApp 0857-2795-6892 atau melalui formulir pemesanan.'
    },
    {
      name: 'keywords',
      content: pageKeywords['/kontak'].join(', ')
    }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/kontak/` }]
})

const orderSteps = [
  {
    title: 'Klik Pesan',
    description: 'Mulai dengan menekan tombol Pesan Sekarang untuk memulai.'
  },
  {
    title: 'Isi brief/WhatsApp',
    description:
      'Sampaikan kebutuhan lembaga Anda melalui formulir atau WhatsApp.'
  },
  {
    title: 'Konsultasi',
    description:
      'Konsultasi gratis untuk membantu mengarahkan kebutuhan lembaga dan pilihan paket.'
  },
  {
    title: 'Pilih paket & penawaran',
    description:
      'ALF Production membantu mengarahkan paket yang paling sesuai dengan kebutuhan lembaga.'
  },
  {
    title: 'Produksi dimulai setelah kesepakatan',
    description:
      'Setelah paket dan penawaran disepakati, produksi Mars & Hymne lembaga dimulai.'
  }
]

interface ContactRow {
  label: string
  value: string
  href?: string
}

const contactRows: ContactRow[] = [
  { label: 'WhatsApp', value: contact.whatsappDisplay, href: waLink() },
  ...socials.map((s) => ({ label: s.name, value: s.handle, href: s.url })),
  {
    label: 'Email',
    value: contact.email || 'Segera hadir',
    href: contact.email ? `mailto:${contact.email}` : undefined
  },
  {
    label: 'Alamat/Studio',
    value: contact.address || 'Segera hadir',
    href: undefined
  }
]
</script>

<template>
  <section class="relative z-10 border-b border-outline-soft">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Kontak
        </p>

        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
        >
          Pesan Mars &amp; Hymne untuk Lembaga Anda
        </h1>

        <p class="mt-4 text-base leading-normal text-on-surface-variant">
          Punya kebutuhan Mars atau Hymne untuk sekolah, yayasan, pesantren,
          atau lembaga? Ceritakan kebutuhan Anda kepada kami. ALF Production
          akan membantu mengarahkan proses dan paket produksi yang sesuai.
        </p>

        <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pesan"
            class="md-elevated-1 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-on transition-transform hover:scale-105"
          >
            Pesan Sekarang
          </a>
          <a
            :href="waLink()"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center rounded-full border border-outline bg-surface-container px-8 py-3.5 text-base font-semibold text-on-surface transition-transform hover:scale-105"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <SectionHeading eyebrow="Alur Pemesanan" title="Dari Pesan hingga Produksi" />

    <ol class="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(step, index) in orderSteps"
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
  </section>

  <section id="pesan" class="mx-auto max-w-6xl border-t border-outline-soft px-4 py-10 sm:px-6">
    <SectionHeading
      eyebrow="Pemesanan"
      title="Ajukan Pesanan Mars &amp; Hymne"
      subtitle="Isi formulir di bawah ini, dan tim kami akan menghubungi Anda melalui WhatsApp untuk mengarahkan proses dan paket produksi yang sesuai."
    />

    <div class="mx-auto mt-8 max-w-2xl">
      <LeadForm />
    </div>
  </section>

  <section class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6">
      <SectionHeading
        eyebrow="Kontak"
        title="Hubungi ALF Production"
        subtitle="WhatsApp adalah cara tercepat untuk menyampaikan kebutuhan lembaga Anda kepada kami."
      />

      <div
        class="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="row in contactRows"
          :key="row.label"
          class="md-elevated-1 flex flex-col gap-2 rounded-md-large bg-surface-container p-5"
        >
          <p class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">
            {{ row.label }}
          </p>
          <a
            v-if="row.href"
            :href="row.href"
            target="_blank"
            rel="noopener"
            class="font-medium text-on-surface underline-offset-4 hover:text-alf-accent hover:underline"
          >
            {{ row.value }}
          </a>
          <p v-else class="font-medium text-on-surface-variant">
            {{ row.value }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
