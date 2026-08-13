export type PortfolioCategory = 'Mars' | 'Hymne'

export type PortfolioType = 'SIT' | 'Yayasan' | 'Sekolah' | 'Pesantren'

export interface PortfolioItem {
  id: string
  youtubeId: string
  title: string
  category: PortfolioCategory
  type: PortfolioType
  client: string
  year: string
  description: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'hidayah-klaten',
    youtubeId: 'PLACEHOLDER_1',
    title: 'Mars Yayasan Hidayah',
    category: 'Mars',
    type: 'Yayasan',
    client: 'Hidayah Klaten',
    year: '2025',
    description: 'Mars Yayasan Hidayah Klaten — karya Mars yayasan oleh ALF Production.'
  },
  {
    id: 'sit-kota-wali-demak',
    youtubeId: 'PLACEHOLDER_2',
    title: 'Mars SIT Kota Wali',
    category: 'Mars',
    type: 'SIT',
    client: 'SIT Kota Wali Demak',
    year: '2025',
    description: 'Mars Sekolah Islam Terpadu Kota Wali Demak — karya Mars sekolah oleh ALF Production.'
  },
  {
    id: 'sit-al-furqon-slawi',
    youtubeId: 'PLACEHOLDER_3',
    title: 'Mars SIT Al Furqon',
    category: 'Mars',
    type: 'SIT',
    client: 'SIT Al Furqon Slawi Tegal',
    year: '2025',
    description: 'Mars Sekolah Islam Terpadu Al Furqon Slawi Tegal — karya Mars sekolah oleh ALF Production.'
  }
]

export const portfolioFilters: string[] = ['Semua', 'Mars', 'Hymne', 'SIT', 'Yayasan']
