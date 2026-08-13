import { faqItems } from '~/config/faq'
import { servicePackages } from '~/config/services'
import { portfolioItems } from '~/config/portfolio'
import { SITE_URL, brand, socials } from '~/config/site'

export interface FaqSchemaItem {
  question: string
  answer: string
}

export const faqSchemaItems: FaqSchemaItem[] = faqItems.map((i) => ({
  question: i.question,
  answer: i.answer
}))

export function buildFaqPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchemaItems.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer }
    }))
  }
}

export const siteKeywords: string[] = [
  'jasa bikin mars hymne semarang',
  'jasa bikin lagu mars jakarta',
  'jasa bikin lagu hymne jakarta',
  'jasa pembuatan mars sekolah islam terpadu',
  'komposer lagu mars yayasan pendidikan',
  'biaya pembuatan hymne sekolah semarang jakarta'
]

export const pageKeywords: Record<string, string[]> = {
  '/': [
    'jasa bikin mars hymne semarang',
    'jasa bikin lagu mars jakarta',
    'jasa bikin lagu hymne jakarta'
  ],
  '/layanan': [
    'jasa pembuatan mars sekolah islam terpadu',
    'biaya pembuatan hymne sekolah semarang jakarta',
    'komposer lagu mars yayasan pendidikan',
    'jasa bikin mars hymne semarang'
  ],
  '/tentang': [
    'komposer lagu mars yayasan pendidikan',
    'ALF Production',
    'jasa bikin mars hymne semarang'
  ],
  '/cara-pemesanan': [
    'biaya pembuatan hymne sekolah',
    'cara pesan mars hymne',
    'cara pemesanan mars hymne'
  ],
  '/portofolio': [
    'portofolio mars hymne',
    'komposer mars sekolah islam',
    'karya mars yayasan pendidikan'
  ],
  '/kemitraan': [
    'kemitraan komposer mars hymne',
    'kerjasama pembuatan mars hymne'
  ],
  '/faq': ['faq mars hymne sekolah', 'pertanyaan pembuatan mars hymne'],
  '/kontak': [
    'kontak jasa mars hymne semarang',
    'wa komposer hymne',
    'hubungi pembuat mars hymne'
  ],
  '/kebijakan-privasi': ['kebijakan privasi'],
  '/syarat-ketentuan': ['syarat dan ketentuan']
}

export interface ProfessionalServiceSchema {
  '@context': string
  '@type': string
  '@id': string
  name: string
  url: string
  image: string
  telephone: string
  priceRange: string
  address: {
    '@type': string
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  geo: {
    '@type': string
    latitude: number
    longitude: number
  }
  areaServed: Array<{ '@type': string; name: string }>
  knowsAbout: string[]
}

export function buildProfessionalServiceSchema(): ProfessionalServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: 'ALF Production - Jasa Pembuatan Mars & Hymne',
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    telephone: '+6285727956892',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Semarang',
      addressRegion: 'Jawa Tengah',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.966667,
      longitude: 110.416664
    },
    areaServed: [
      { '@type': 'City', name: 'Semarang' },
      { '@type': 'City', name: 'Jakarta' },
      { '@type': 'Country', name: 'Indonesia' }
    ],
    knowsAbout: [
      'Pembuatan Mars Sekolah Islam Terpadu',
      'Aransemen Hymne Yayasan',
      'Orkestrasi Musik Institusi',
      'Komposer Musik Video'
    ]
  }
}

export interface ServiceOfferSchema {
  '@type': string
  itemOffered: {
    '@type': string
    name: string
    description: string
  }
}

export interface ServiceCatalogSchema {
  '@context': string
  '@type': string
  serviceType: string
  provider: { '@id': string }
  areaServed: { '@type': string; name: string }
  hasOfferCatalog: {
    '@type': string
    name: string
    itemListElement: ServiceOfferSchema[]
  }
}

export function buildServiceCatalogSchema(): ServiceCatalogSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Jasa Pembuatan Lagu Mars dan Hymne',
    provider: { '@id': `${SITE_URL}/#service` },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Paket Produksi Mars & Hymne',
      itemListElement: servicePackages.map((pkg) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `Paket ${pkg.name}`,
          description: pkg.description
        }
      }))
    }
  }
}

export interface PortfolioItemSchema {
  position: number
  item: {
    '@type': string
    name: string
    description: string
    thumbnailUrl: string
    embedUrl: string
  }
}

export interface PortfolioItemListSchema {
  '@context': string
  '@type': string
  itemListElement: PortfolioItemSchema[]
}

export function buildItemListSchema(): PortfolioItemListSchema | null {
  const items = portfolioItems
    .filter((item) => !item.youtubeId.startsWith('PLACEHOLDER'))
    .map((item, index) => ({
      position: index + 1,
      item: {
        '@type': 'VideoObject',
        name: item.title,
        description: item.description,
        thumbnailUrl: `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${item.youtubeId}`
      }
    }))

  if (items.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items
  }
}

export interface WebSiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  publisher: {
    '@type': string
    '@id': string
    name: string
    url: string
    logo: { '@type': string; url: string }
    sameAs: string[]
  }
}

export function buildWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brand.name,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: brand.name,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
      sameAs: socials.map((s) => s.url)
    }
  }
}
