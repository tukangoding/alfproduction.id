# Lighthouse Audit

Audit lab dijalankan pada homepage dari static build lokal. Skor bisa berubah antar-run karena kondisi CPU, Chrome, dan lingkungan lokal; PageSpeed Insights pada domain produksi tetap menjadi acuan lapangan setelah deploy.

| Audit | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Transfer awal |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Baseline desktop | 66 | 96 | 100 | 100 | 0,8 dtk | 5,0 dtk | 250 md | 0 | 7.048 KiB |
| Final mobile | 85 | 100 | 100 | 100 | 2,0 dtk | 3,0 dtk | 310 md | 0 | 172 KiB |
| Final desktop | 99 | 100 | 100 | 100 | 0,5 dtk | 0,8 dtk | 30 md | 0 | 209 KiB |

Perubahan utama: hero responsif AVIF/WebP/JPEG, logo klien WebP dan lazy render, penghapusan kanvas animasi nonesensial, lazy hydration untuk bagian nonkritis, serta upgrade ke Nuxt 4.

## Menjalankan ulang

```bash
npm run generate
npx serve .output/public -l 3000
npm run audit:lighthouse
npm run audit:lighthouse:desktop
```

Laporan HTML/JSON mentah sengaja diabaikan Git karena berukuran besar. Simpan hanya hasil run yang dibutuhkan secara lokal dan perbarui tabel ini jika build berubah.
