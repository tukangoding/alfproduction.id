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

export const servicePackages: ServicePackage[] = [
  {
    id: 'gold',
    name: 'GOLD',
    price: 'Rp 6.500.000',
    description:
      'Cocok untuk lembaga yang membutuhkan layanan produksi secara lebih lengkap, dari penulisan lirik hingga audio akhir.',
    features: ['Lirik', 'Melodi/Notasi', 'Aransemen', 'Recording vocal', 'Vocalis', 'Mixing & mastering'],
    featured: true
  },
  {
    id: 'silver',
    name: 'SILVER',
    price: 'Rp 5.500.000',
    description:
      'Untuk lembaga yang telah memiliki lirik dan membutuhkan produksi musik hingga audio akhir.',
    features: ['Melodi/Notasi', 'Aransemen', 'Recording vocal', 'Vocalis', 'Mixing & mastering'],
    note: 'Lirik disiapkan klien.',
    featured: false
  },
  {
    id: 'bronze',
    name: 'BRONZE',
    price: 'Rp 3.500.000',
    description:
      'Untuk lembaga yang telah memiliki lirik serta melodi/notasi dan membutuhkan aransemen hingga audio akhir.',
    features: ['Aransemen', 'Recording vocal', 'Vocalis', 'Mixing & mastering'],
    note: 'Lirik & melodi/notasi disiapkan klien.',
    featured: false
  }
]

export const includedServices: string[] = [
  'Lirik',
  'Melodi/Notasi',
  'Aransemen',
  'Recording vocal',
  'Vocalis',
  'Mixing & mastering'
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
