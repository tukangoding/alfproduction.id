<script setup lang="ts">
import { waLink, SITE_URL } from '~/config/site'
import { pageKeywords } from '~/config/seo'

useHead({
  title: 'Kebijakan Privasi | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Kebijakan privasi ALF Production — bagaimana data Anda dikumpulkan, digunakan, dan dilindungi saat berkomunikasi melalui WhatsApp.'
    },
    {
      name: 'keywords',
      content: pageKeywords['/kebijakan-privasi'].join(', ')
    }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/kebijakan-privasi/` }]
})
</script>

<template>
  <section class="relative z-10">
    <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Kebijakan Privasi
        </p>

        <h1
          class="mt-5 text-4xl font-bold tracking-tight text-on-surface md:text-5xl"
        >
          Kebijakan Privasi ALF Production
        </h1>

        <p class="mt-6 text-base text-on-surface-variant">
          Terakhir diperbarui: 13 Agustus 2026
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="mx-auto max-w-3xl">
      <h2 class="text-2xl font-semibold text-on-surface">
        Data yang Kami Kumpulkan
      </h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Kami mengumpulkan data yang Anda berikan secara sukarela melalui
        formulir WhatsApp, seperti nama organisasi, nama PIC, nomor WhatsApp,
        dan alamat email, beserta isi percakapan WhatsApp dengan kami.
      </p>

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">
        Penggunaan Data
      </h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Data yang Anda berikan hanya digunakan untuk merespons konsultasi,
        memproses pemesanan, dan mengirimkan penawaran kepada Anda.
      </p>

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">
        Berbagi Data
      </h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Kami tidak menjual atau membagikan data Anda kepada pihak ketiga,
        kecuali diwajibkan oleh hukum yang berlaku.
      </p>

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">
        Layanan Pihak Ketiga
      </h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Komunikasi antara Anda dan kami terjadi melalui WhatsApp; kebijakan
        privasi WhatsApp berlaku untuk layanan tersebut. Konten portofolio
        di-hosting di YouTube dan tunduk pada kebijakan YouTube.
      </p>

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">
        Keamanan
      </h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Kami melakukan upaya wajar untuk menjaga kerahasiaan data Anda melalui
        platform yang digunakan dalam komunikasi dan penyimpanan.
      </p>

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">
        Hak Anda
      </h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Anda dapat meminta perbaikan atau penghapusan data dengan menghubungi
        kami melalui WhatsApp.
      </p>

      <p class="mt-12 border-t border-outline-soft pt-8 text-on-surface-variant leading-relaxed">
        Jika ada pertanyaan terkait kebijakan ini, hubungi kami melalui
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="font-medium text-primary transition-colors hover:underline"
        >
          WhatsApp
        </a>.
      </p>
    </div>
  </section>
</template>
