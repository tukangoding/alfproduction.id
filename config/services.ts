export interface ServicePackage {
  id: 'gold' | 'silver' | 'bronze'
  name: string
  price: string
  description: string
  features: string[]
  note?: string
  featured: boolean
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
