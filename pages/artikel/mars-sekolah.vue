<script setup lang="ts">
import { SITE_URL } from '~/config/site'
import { pageKeywords } from '~/config/seo'

const ARTICLE_URL = `${SITE_URL}/artikel/mars-sekolah`

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline:
    'Panduan Menulis & Contoh Lirik Mars Sekolah yang Menggugah Semangat',
  description:
    'Panduan lengkap menulis lirik mars sekolah beserta contoh siap adaptasi untuk sekolah umum maupun Islam terpadu.',
  image: `${SITE_URL}/og-cover.jpg`,
  inLanguage: 'id-ID',
  author: { '@type': 'Organization', name: 'ALF Production', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'ALF Production',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` }
  },
  datePublished: '2026-08-20',
  dateModified: '2026-08-20',
  mainEntityOfPage: { '@type': 'WebPage', '@id': ARTICLE_URL }
}

useHead({
  title: 'Panduan Menulis & Contoh Lirik Mars Sekolah yang Menggugah Semangat | ALF Production',
  meta: [
    {
      name: 'description',
      content:
        'Panduan lengkap menulis lirik mars sekolah beserta contoh siap adaptasi. Pelajari struktur, rima, dan tips agar mars sekolah Anda mudah dihafal dan menggugah semangat.'
    },
    {
      name: 'keywords',
      content: pageKeywords['/artikel/mars-sekolah']?.join(', ') ?? 'cara menulis lirik mars sekolah, contoh lirik mars sekolah, panduan mars sekolah'
    },
    { property: 'og:title', content: 'Panduan Menulis & Contoh Lirik Mars Sekolah | ALF Production' },
    {
      property: 'og:description',
      content: 'Panduan lengkap menulis lirik mars sekolah beserta contoh siap adaptasi untuk sekolah umum maupun Islam terpadu.'
    },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: ARTICLE_URL },
    { property: 'article:published_time', content: '2026-08-20' }
  ],
  link: [{ rel: 'canonical', href: ARTICLE_URL }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(articleSchema)
    }
  ]
})
</script>

<template>
  <article class="relative z-10">
    <!-- Header -->
    <section class="border-b border-outline-soft bg-surface-dim">
      <div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
        >
          Artikel
        </p>
        <h1
          class="mt-4 text-3xl font-bold tracking-tight text-on-surface md:text-4xl"
        >
          Panduan Menulis &amp; Contoh Lirik Mars Sekolah yang Menggugah Semangat
        </h1>
        <p class="mt-4 text-base leading-normal text-on-surface-variant">
          Lagu Mars bukan sekadar pelengkap upacara bendera, melainkan instrumen
          pembentuk identitas, kebanggaan, dan penanaman visi lembaga kepada
          seluruh siswa dan guru.
        </p>
        <p
          class="mt-6 flex items-center gap-2 text-sm text-on-surface-variant"
        >
          <span>ALF Production</span>
          <span aria-hidden="true">·</span>
          <time datetime="2026-08-20">20 Agustus 2026</time>
        </p>
      </div>
    </section>

    <!-- Content -->
    <div class="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div class="prose-content space-y-8 text-on-surface">
        <p class="text-base leading-relaxed">
          Menulis lirik mars sekolah membutuhkan perpaduan antara pesan edukatif,
          rima yang berirama tegas, dan pilihan kata yang mudah dihafalkan. Bagi
          pihak sekolah atau panitia yayasan yang sedang merumuskan lagu identitas
          institusi, gunakan panduan anatomi serta contoh lirik mars berikut sebagai
          referensi perumusan naskah.
        </p>

        <!-- Anatomi & Struktur -->
        <section>
          <h2 class="text-2xl font-bold tracking-tight text-on-surface">
            Anatomi &amp; Struktur Standar Lirik Mars Sekolah
          </h2>
          <p class="mt-3 text-base leading-relaxed text-on-surface-variant">
            Mars yang ideal untuk upacara sekolah biasanya memiliki tempo ketukan
            tegas (birama 4/4 atau 2/4 dengan tempo 108–120 BPM) dan struktur
            penulisan sebagai berikut:
          </p>
          <ul class="mt-4 space-y-3 text-base leading-relaxed text-on-surface-variant">
            <li>
              <strong class="text-on-surface">Bait 1 (Visi &amp; Fondasi):</strong>
              Menceritakan komitmen, semangat belajar, dan fondasi moral atau
              keimanan lembaga.
            </li>
            <li>
              <strong class="text-on-surface">Bait 2 (Tantangan &amp; Masa Depan):</strong>
              Menyoroti tekad menyongsong perkembangan zaman, prestasi, dan
              pengabdian pada nusa dan bangsa.
            </li>
            <li>
              <strong class="text-on-surface">Refrain / Chorus (Puncak Semangat &amp; Identitas):</strong>
              Bagian klimaks yang wajib memuat
              <strong class="text-on-surface">Nama Resmi Sekolah</strong>, semboyan
              (tagline), serta visi tertinggi lembaga.
            </li>
            <li>
              <strong class="text-on-surface">Coda / Penutup:</strong>
              Kalimat penegas yang dinyanyikan dengan nada megah sebagai penutup
              langkah.
            </li>
          </ul>
        </section>

        <!-- Contoh 1 -->
        <section>
          <h2 class="text-2xl font-bold tracking-tight text-on-surface">
            2 Contoh Lirik Mars Sekolah Siap Adaptasi
          </h2>
          <p class="mt-3 text-base leading-relaxed text-on-surface-variant">
            Berikut adalah template lirik yang dapat disesuaikan dengan nilai serta
            nama instansi sekolah masing-masing:
          </p>

          <div class="mt-6 rounded-md-large border border-outline-soft bg-surface-container p-6">
            <h3 class="text-lg font-semibold text-on-surface">
              Contoh 1: Lirik Mars Sekolah Umum / Nasionalis
            </h3>
            <div class="mt-4 space-y-4 text-base leading-relaxed text-on-surface-variant">
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-primary">(Bait 1)</p>
                <p class="mt-1">
                  Di bawah naungan panji berilmu<br />
                  Kami melangkah teguh bersatu<br />
                  Menuntut ilmu mengasah akal<br />
                  Untuk negeri penuh bekal
                </p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-primary">(Bait 2)</p>
                <p class="mt-1">
                  Semangat berkarya pantang menyerah<br />
                  Cita luhur menyala cerah<br />
                  Jujur, disiplin, berbudi pekerti<br />
                  Ikhlas tulus mengabdi
                </p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-primary">(Chorus / Refrain)</p>
                <p class="mt-1">
                  Majulah wahai <strong class="text-on-surface">[Nama Sekolah Anda]</strong><br />
                  Pelopor generasi unggul nusantara<br />
                  Berprestasi tinggi, harumkan bangsa<br />
                  Jayalah selamanya!
                </p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-primary">(Coda)</p>
                <p class="mt-1">
                  Jayalah selalu, <strong class="text-on-surface">[Nama Sekolah Anda]</strong> tercinta!
                </p>
              </div>
            </div>
          </div>

          <!-- Contoh 2 -->
          <div class="mt-6 rounded-md-large border border-outline-soft bg-surface-container p-6">
            <h3 class="text-lg font-semibold text-on-surface">
              Contoh 2: Lirik Mars Sekolah Islam Terpadu (SIT) / Berkarakter
            </h3>
            <div class="mt-4 space-y-4 text-base leading-relaxed text-on-surface-variant">
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-primary">(Bait 1)</p>
                <p class="mt-1">
                  Bersujud syukur pada Ilahi<br />
                  Menuntut ilmu setulus hati<br />
                  Berakhlak mulia berjiwa Qur'ani<br />
                  Menggapai rida Sang Maha Suci
                </p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-primary">(Bait 2)</p>
                <p class="mt-1">
                  Mengukir asa menyongsong zaman<br />
                  Berbekal takwa dan keilmuan<br />
                  Cerdas, mandiri, peduli sesama<br />
                  Harapan umat dan bangsa
                </p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-primary">(Chorus / Refrain)</p>
                <p class="mt-1">
                  Bangkitlah santri <strong class="text-on-surface">[Nama Sekolah / Yayasan]</strong><br />
                  Kibarkan panji kejayaan<br />
                  Menjadi bintang pembina peradaban<br />
                  Menuju insan mulia
                </p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-primary">(Coda)</p>
                <p class="mt-1">
                  Allahu Akbar, majulah <strong class="text-on-surface">[Nama Sekolah / Yayasan]</strong>!
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Tips -->
        <section>
          <h2 class="text-2xl font-bold tracking-tight text-on-surface">
            Tips Menulis Lirik Mars agar Mudah Dinyanyikan
          </h2>
          <ul class="mt-4 space-y-3 text-base leading-relaxed text-on-surface-variant">
            <li>
              <strong class="text-on-surface">Gunakan Rima Akhir Berpola:</strong>
              Pola rima A-A-B-B atau A-B-A-B sangat membantu paduan suara sekolah
              dan siswa mengingat bait lagu dengan cepat.
            </li>
            <li>
              <strong class="text-on-surface">Hindari Kalimat Bertingkat Terlalu Panjang:</strong>
              Mars dinyanyikan dengan energi penuh; batasi setiap baris lirik antara
              7 hingga 10 suku kata agar pembagian nafas saat bernyanyi tetap stabil.
            </li>
            <li>
              <strong class="text-on-surface">Pilih Kosakata Bertenaga (Power Words):</strong>
              Gunakan kata kerja aktif dan visioner seperti <em>melangkah,
              berprestasi, panji, pelopor, unggul, integritas, peradaban</em>.
            </li>
          </ul>
        </section>

        <!-- Dari Konsep ke Audio -->
        <section>
          <h2 class="text-2xl font-bold tracking-tight text-on-surface">
            Dari Konsep Teks Menjadi Audio Mars Kualitas Studio
          </h2>
          <p class="mt-3 text-base leading-relaxed text-on-surface-variant">
            Lirik yang sudah tersusun rapi membutuhkan aransemen nada, orkestrasi
            alat musik (brass, marching snare, string), dan rekaman vokal profesional
            agar dapat digunakan secara resmi dalam kegiatan upacara maupun acara
            wisuda kelulusan.
          </p>
          <div
            class="mt-6 rounded-md-large border border-primary/20 bg-primary-container p-6"
          >
            <p class="text-base font-semibold text-on-primary-container">
              Ingin Lirik Sekolah Anda Diaransemen Menjadi Mars Resmi yang Megah?
            </p>
            <p class="mt-2 text-sm leading-relaxed text-on-primary-container">
              ALF Production membantu institusi pendidikan mentransformasi coretan
              lirik menjadi karya musik lengkap dengan audio master studio dan
              partitur not balok/angka.
            </p>
            <a
              href="https://wa.me/6285727956892?text=Halo%20ALF%20Production,%20saya%20sudah%20punya%20draf%20lirik%20dan%20ingin%20konsultasi%20pembuatan%20lagu%20Mars%20sekolah"
              target="_blank"
              rel="noopener"
              class="mt-4 inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-on transition-transform hover:scale-105"
            >
              Konsultasikan via WhatsApp
            </a>
          </div>
        </section>
      </div>

      <!-- Disqus Comments -->
      <section class="mt-12 border-t border-outline-soft pt-10">
        <DisqusComments
          page-id="mars-sekolah"
          :page-url="`${SITE_URL}/artikel/mars-sekolah`"
          page-title="Panduan Menulis & Contoh Lirik Mars Sekolah yang Menggugah Semangat"
        />
      </section>
    </div>
  </article>
</template>
