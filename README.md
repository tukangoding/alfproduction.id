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
4. Minta indexing untuk 8 URL indexable: `/`, `/layanan`, `/portofolio`, `/tentang`, `/cara-pemesanan`, `/kemitraan`, `/faq`, `/kontak` (`/kebijakan-privasi` & `/syarat-ketentuan` sengaja di-block di `robots.txt`).

## Google Business Profile

1. Buat/klaim profil bisnis (area Semarang) di Google Business Profile.
2. Tambahkan link website `https://alfproduction.id`.
3. Jaga NAP (Name, Address, Phone) konsisten dengan situs.

## Catatan Tindak Lanjut Owner

- **Email & alamat**: isi `contact.email` dan `contact.address` di `config/site.ts` (saat ini placeholder kosong/"ISI").
- **Portofolio**: tambah entri di `config/portfolio.ts` untuk mencapai 10+ karya (sesuai referensi PRD).
- **Video YouTube**: ganti `PLACEHOLDER_1..3` di `config/portfolio.ts` dengan ID video YouTube asli — otomatis terpakai di kartu portofolio, sticky player, JSON-LD ItemList, dan gambar sitemap.
- **Logo**: dua file `IMG-*.jpg` sudah dikonversi ke `public/logo.png` + `public/og-cover.jpg`; sumber asli bisa diganti kapan saja.
