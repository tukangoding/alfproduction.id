# ALF Production — alfproduction.id

Website portofolio studio produksi **Mars & Hymne** sekolah/yayasan. Dibangun dengan **Nuxt 4 (SSG)**, **Tailwind CSS**, pemutar YouTube, dan alur kontak berbasis **WhatsApp**.

## Development

```bash
npm install
npm run dev
npm run typecheck
npm test
npm run generate
```

Hasil static generation berada di `.output/public/`.

## Optimasi gambar

Gambar sumber disimpan di `assets/hero.png`, `public/alief.png`, dan `public/logo-klien/`. Bangkitkan ulang varian AVIF/WebP/JPEG setelah sumber berubah:

```bash
npm run optimize:images
```

Jalankan `npm run generate` setelahnya. Jangan menghapus gambar sumber karena script optimasi membutuhkannya.

## Google Analytics 4

1. Salin `.env.example` menjadi `.env`.
2. Buat GA4 Web Data Stream untuk `https://alfproduction.id`.
3. Isi `NUXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`.
4. Jalankan ulang build dan deploy.

Jika ID kosong, script Google Analytics tidak dimuat dan banner persetujuan tidak muncul. Jika ID terisi, analytics baru dimuat setelah pengunjung memilih **Izinkan**. Event yang tersedia:

- `page_view` — kunjungan halaman;
- `whatsapp_click` — klik CTA WhatsApp, termasuk lokasi CTA dan paket bila relevan;
- `generate_lead` — formulir pemesanan diteruskan ke WhatsApp;
- `portfolio_play` — pemutaran contoh portofolio.

Nama, nomor WhatsApp, email, dan isi formulir tidak dikirim ke analytics. Rancangan dashboard dan langkah validasinya ada di [docs/analytics-dashboard.md](docs/analytics-dashboard.md).

## Audit kualitas

```bash
npm run generate
npx serve .output/public -l 3000
npm run audit:lighthouse
npm run audit:lighthouse:desktop
```

Ringkasan hasil dan batasan pengujian tersedia di [reports/lighthouse/README.md](reports/lighthouse/README.md).

## Deploy ke Hostinger

1. Jalankan `npm run generate`.
2. Upload **seluruh isi** `.output/public/` ke `public_html/`.
3. Pastikan `.htaccess` ikut terunggah untuk HTTPS, kompresi, cache, dan security headers.
4. Situs bersifat statis; Node.js tidak dibutuhkan di server.

Sesudah deploy, periksa halaman utama, redirect HTTP ke HTTPS, `sitemap.xml`, `robots.txt`, formulir WhatsApp, dan event GA4 melalui Realtime/DebugView.

## Search Console

1. Tambahkan properti domain `alfproduction.id`.
2. Verifikasi melalui DNS TXT record.
3. Submit `https://alfproduction.id/sitemap.xml`.
4. Minta indexing untuk halaman utama, layanan, portofolio, tentang, cara pemesanan, FAQ, kontak, dan artikel.

## Pemeliharaan konten

- Portofolio YouTube: `node scripts/extract-youtube.mjs` (opsional `--year 2026` atau `--input <file HTML>`).
- Favicon: `node scripts/generate-favicons.mjs`.
- Alamat/studio: isi `contact.address` di `config/site.ts`.
- Portofolio Hymne: tambahkan item berkategori `Hymne` saat karya tersedia.

## Backlog CMS

CMS/dashboard admin sengaja ditempatkan sebagai **prioritas terakhir** karena belum diminta. Implementasikan ketika owner benar-benar membutuhkan edit mandiri dan setelah field, role, workflow publikasi, hosting, serta anggaran pemeliharaan disepakati. Sampai saat itu, perubahan konten dilakukan lewat file konfigurasi dan proses build agar ruang lingkup tetap terkendali.
