<script setup lang="ts">
import { waLink, SITE_URL } from '~/config/site'
import { pageKeywords } from '~/config/seo'

useHead({
  title: 'Syarat & Ketentuan | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Syarat dan ketentuan layanan pembuatan Mars & Hymne oleh ALF Production — proses pemesanan, revisi, pembayaran, dan hak cipta karya.'
    },
    {
      name: 'keywords',
      content: pageKeywords['/syarat-ketentuan'].join(', ')
    }
  ],
  link: [{ rel: 'canonical', href: `${SITE_URL}/syarat-ketentuan/` }]
})
</script>

<template>
  <section class="relative z-10">
    <div class="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Syarat &amp; Ketentuan
        </p>

        <h1
          class="mt-5 text-4xl font-bold tracking-tight text-on-surface md:text-5xl"
        >
          Syarat &amp; Ketentuan ALF Production
        </h1>

        <p class="mt-6 text-base text-on-surface-variant">
          Terakhir diperbarui: 13 Agustus 2026
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="mx-auto max-w-3xl">
      <h2 class="text-2xl font-semibold text-on-surface">Layanan</h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        ALF Production menyediakan layanan pembuatan Mars &amp; Hymne sesuai
        paket GOLD, SILVER, dan BRONZE serta kesepakatan yang dibuat dalam
        proses konsultasi.
      </p>

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">
        Proses Pemesanan
      </h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Pemesanan dilakukan melalui alur berikut: mengirim pesan, mengisi
        brief/komunikasi via WhatsApp, konsultasi, memilih paket dan menerima
        penawaran, hingga tahap produksi.
      </p>

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">Revisi</h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Lingkup revisi mengikuti kesepakatan konsultasi; jumlah revisi
        disepakati sebelum proses produksi dimulai.
      </p>
      <!-- [REVISI] Detail jumlah revisi per paket di-finalisasi oleh pemilik. -->

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">
        Pembayaran
      </h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Ketentuan pembayaran dan jadwal pembayaran akan disepakati bersama
        pada proses konsultasi.
      </p>
      <!-- [PEMBAYARAN] Ketentuan pembayaran (DP/pelunasan, metode, jatuh tempo) di-finalisasi oleh pemilik. -->

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">Hak Cipta</h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Setelah pelunasan, hak penggunaan karya diberikan kepada lembaga
        pemesan sesuai kesepakatan. ALF Production dapat mencantumkan karya
        sebagai bagian dari portofolio.
      </p>

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">
        Batasan Tanggung Jawab
      </h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Layanan diberikan sesuai kemampuan terbaik kami. Kami tidak memberikan
        jaminan tertentu di luar kesepakatan yang telah dibuat.
      </p>

      <h2 class="mt-10 text-2xl font-semibold text-on-surface">
        Perubahan Ketentuan
      </h2>
      <p class="mt-3 text-on-surface-variant leading-relaxed">
        Ketentuan ini dapat diperbarui sewaktu-waktu; pembaruan berlaku saat
        ketentuan terbaru dipublikasikan di situs ini.
      </p>

      <p class="mt-12 border-t border-outline-soft pt-8 text-on-surface-variant leading-relaxed">
        Ada pertanyaan tentang ketentuan ini?
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="font-medium text-primary transition-colors hover:underline"
        >
          Hubungi kami
        </a>.
      </p>
    </div>
  </section>
</template>
