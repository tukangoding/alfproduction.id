export interface ServicePackage {
  id: 'gold' | 'silver' | 'bronze'
  name: string
  price: string
  description: string
  features: string[]
  note?: string
  featured: boolean
}

export interface AfterSalesService {
  id: number
  title: string
  duration: string | null
  description: string
  note: string | null
}

export interface IncludedServiceDetail {
  title: string
  description: string
}

export const servicePackages: ServicePackage[] = [
  {
    id: 'gold',
    name: 'GOLD',
    price: 'Rp 6.500.000',
    description:
      'Cocok untuk lembaga yang membutuhkan layanan produksi secara lebih lengkap, dari penulisan lirik hingga audio akhir.',
    features: ['Lirik', 'Melodi', 'Aransemen', 'Recording Vocal', 'Vokalis', 'Mixing & Mastering'],
    featured: true
  },
  {
    id: 'silver',
    name: 'SILVER',
    price: 'Rp 5.500.000',
    description:
      'Untuk lembaga yang telah memiliki lirik dan membutuhkan produksi musik hingga audio akhir.',
    features: ['Melodi', 'Aransemen', 'Recording Vocal', 'Vokalis', 'Mixing & Mastering'],
    note: 'Lirik disiapkan klien.',
    featured: false
  },
  {
    id: 'bronze',
    name: 'BRONZE',
    price: 'Rp 3.500.000',
    description:
      'Untuk lembaga yang telah memiliki lirik serta melodi dan membutuhkan aransemen hingga audio akhir.',
    features: ['Aransemen', 'Recording Vocal', 'Vokalis', 'Mixing & Mastering'],
    note: 'Lirik & melodi disiapkan klien.',
    featured: false
  }
]

export const includedServices: string[] = [
  'Lirik',
  'Melodi',
  'Aransemen',
  'Recording Vocal',
  'Vokalis',
  'Mixing & Mastering'
]

export const includedServiceDetails: IncludedServiceDetail[] = [
  {
    title: 'Lirik',
    description:
      'Merangkai identitas, nilai, visi, dan semangat lembaga dalam lirik yang kuat dan mudah diingat.'
  },
  {
    title: 'Melodi',
    description:
      'Menciptakan melodi yang kuat dan berkarakter, sehingga Mars atau Hymne memiliki ciri khas dan mudah dikenali.'
  },
  {
    title: 'Aransemen',
    description:
      'Mengolah melodi menjadi musik yang utuh dengan karakter yang sesuai identitas lembaga.'
  },
  {
    title: 'Recording Vocal',
    description:
      'Merekam vokal secara profesional agar terdengar jelas, rapi, dan siap digunakan.'
  },
  {
    title: 'Vokalis',
    description:
      'Menyediakan vokal yang sesuai dengan karakter dan kebutuhan Mars atau Hymne lembaga.'
  },
  {
    title: 'Mixing & Mastering',
    description:
      'Menyeimbangkan dan menyempurnakan seluruh elemen audio agar terdengar jernih dan profesional.'
  }
]

export const afterSalesServices: AfterSalesService[] = [
  {
    id: 1,
    title: 'Panduan Pemakaian Mars',
    duration: null,
    description:
      'Klien mendapatkan panduan penggunaan Mars sebagai referensi dalam kegiatan dan kebutuhan lembaga.',
    note: null
  },
  {
    id: 2,
    title: 'Garansi Revisi Minor',
    duration: '30 Hari',
    description:
      'Kami memberikan garansi untuk perbaikan minor yang berkaitan dengan hasil produksi dalam waktu 30 hari setelah karya diserahterimakan.',
    note:
      'Garansi tidak mencakup perubahan konsep, lirik, melodi, aransemen, atau permintaan produksi baru.'
  },
  {
    id: 3,
    title: 'Pendampingan Pemakaian Mars',
    duration: '14 Hari',
    description:
      'Selama 14 hari setelah karya diserahterimakan, ALF Production siap membantu memberikan arahan dan menjawab pertanyaan terkait penggunaan Mars dalam kegiatan lembaga.',
    note: null
  }
]

export const afterSalesSummary: string =
  'After Sales: Garansi 30 Hari & Pendampingan 14 Hari'
