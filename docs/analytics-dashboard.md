# Analytics & Conversion Dashboard

## Status

Instrumentasi GA4 sudah tersedia di kode, tetapi baru aktif setelah owner memasukkan Measurement ID dan pengunjung memberikan persetujuan. Dashboard eksternal belum dapat berisi data sebelum properti GA4 berjalan di domain produksi.

## Event dictionary

| Event | Tujuan | Parameter non-PII |
| --- | --- | --- |
| `page_view` | Mengukur kunjungan dan jalur halaman | `page_location`, `page_path`, `page_title` |
| `whatsapp_click` | Mengukur CTA yang mendorong percakapan | `cta_text`, `cta_path`, `package_id` bila ada |
| `generate_lead` | Mengukur formulir yang diteruskan ke WhatsApp | `lead_source`, `service_interest` |
| `portfolio_play` | Mengukur karya yang diminati | `item_id`, `item_name`, `client` |

Jangan menambahkan nama PIC, organisasi, nomor telepon, email, atau isi pesan sebagai parameter event.

## Konfigurasi GA4

1. Buat Web Data Stream untuk domain produksi dan pasang Measurement ID melalui environment variable.
2. Di GA4 Admin, tandai `generate_lead` sebagai key event/conversion.
3. Pertimbangkan `whatsapp_click` sebagai key event sekunder setelah kualitas datanya diperiksa.
4. Uji dari browser baru: tolak consent dan pastikan tidak ada request GA; izinkan consent lalu periksa `page_view`, `portfolio_play`, `whatsapp_click`, dan `generate_lead` di DebugView/Realtime.
5. Dokumentasikan tanggal aktivasi agar perbandingan tidak mencampur periode sebelum tracking.

## Dashboard minimum

Dashboard GA4 Exploration atau Looker Studio sebaiknya memuat:

- pengguna, sesi, engagement rate, dan tren harian;
- landing page dan source/medium;
- jumlah serta conversion rate `generate_lead`;
- jumlah dan CTR `whatsapp_click` per `cta_path`/`package_id`;
- portofolio teratas berdasarkan `portfolio_play`;
- funnel `page_view` → `portfolio_play` atau halaman layanan → `whatsapp_click` → `generate_lead`;
- filter rentang tanggal, device category, source/medium, dan landing page.

## Kriteria siap produksi

- Consent diterapkan sebelum script analytics dimuat.
- Tidak ada PII pada DebugView maupun laporan event.
- Internal traffic owner/tim difilter.
- UTM digunakan pada kampanye berbayar dan media sosial.
- Data dibandingkan dengan jumlah percakapan/lead nyata secara berkala karena klik WhatsApp tidak selalu menjadi prospek.

## Ketergantungan eksternal

Owner perlu menyediakan akses GA4 dan, jika ingin dashboard gabungan SEO, Google Search Console. Pembuatan dashboard visual dilakukan setelah data produksi terkumpul; pekerjaan ini tidak memerlukan CMS.
