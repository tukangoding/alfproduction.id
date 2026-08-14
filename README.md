# ALF Production — alfproduction.id

Website portofolio studio produksi **Mars & Hymne** sekolah/yayasan (Semarang, Indonesia). Dibangun dengan **Nuxt 3 (SSG)**, **Tailwind CSS**, kanvas **Three.js** (lazy-load), **sticky YouTube player**, dan alur kontak berbasis **WhatsApp**.

## Development

```bash
npm install        # install dependencies
npm run dev        # dev server (http://localhost:3000)
npm test           # vitest unit tests
npm run generate   # build static site ke dist/
```

## Build & Deploy ke Hostinger

1. Jalankan `npm run generate` — hasilnya di folder `dist/`.
2. Upload **seluruh isi** `dist/` ke folder `public_html/` di Hostinger (via FTP/File Manager atau SSH `rsync`/`scp`).
3. `.htaccess` (force HTTPS, GZIP, browser caching, security headers) sudah termasuk dalam `dist/` — tidak perlu dibuat manual.
4. Selesai. Situs dilayani langsung sebagai HTML statis; **tidak perlu Node.js di server**.

## Verifikasi Setelah Deploy

- Buka https://alfproduction.id/ — cek halaman dimuat.
- Cek redirect HTTP → HTTPS berfungsi (buka http://alfproduction.id, harus redirect 301).
- Cek `https://alfproduction.id/sitemap.xml` dan `https://alfproduction.id/robots.txt` dapat diakses.

## Google Search Console

1. Tambahkan properti **domain** `alfproduction.id`.
2. Verifikasi via **DNS TXT record** (di cPanel Hostinger → DNS Zone Editor).
3. Submit `sitemap.xml` di menu **Sitemaps**.
4. Minta indexing untuk 7 URL indexable: `/`, `/layanan`, `/portofolio`, `/tentang`, `/cara-pemesanan`, `/faq`, `/kontak` (`/kebijakan-privasi` & `/syarat-ketentuan` sengaja di-block di `robots.txt`).

## Google Business Profile

1. Buat/klaim profil bisnis (area Semarang) di Google Business Profile.
2. Tambahkan link website `https://alfproduction.id`.
3. Jaga NAP (Name, Address, Phone) konsisten dengan situs.

## Script Pengaturan Konten

- **Portofolio dari YouTube**: `node scripts/extract-youtube.mjs` — mengambil daftar video kanal `@alfproduction-id`, menyaring judul ber-"Mars" (mengabaikan yang ber-"Penjelasan"), lalu menulis `config/portfolio.ts`. Jalankan ulang setiap ada video baru (opsional: `--year 2026`, `--input <file HTML>` untuk offline).
- **Favicon**: `node scripts/generate-favicons.mjs` — membangkitkan set ikon (`favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-*`) + `site.webmanifest` dari `public/logo.png`.

## Catatan Tindak Lanjut Owner

- **Alamat**: isi `contact.address` di `config/site.ts` (saat ini kosong).
- **Hero & favicon**: `public/hero.jpg` dan set favicon diambil dari `IMG-20260813-WA0018.jpg`/`public/logo.png`; ganti sumber lalu jalankan ulang `scripts/generate-favicons.mjs` bila logo berubah.
- **Hymne**: semua item portofolio saat ini berjenis Mars; tambahkan entri `category: 'Hymne'` di `config/portfolio.ts` bila ada karya Hymne (atau perluas `scripts/extract-youtube.mjs`).
