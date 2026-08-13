import { describe, it, expect } from 'vitest'
import { WA_NUMBER, waLink, nav, heroStats } from '../config/site'
import { servicePackages } from '../config/services'
import { portfolioItems } from '../config/portfolio'

describe('site config', () => {
  it('exports a valid international WhatsApp number', () => {
    expect(WA_NUMBER).toMatch(/^62\d{9,12}$/)
  })

  it('builds a wa.me link containing the number and the encoded message', () => {
    const url = waLink('Halo, ALF Production!')
    expect(url).toContain('wa.me/6285727956892?text=')
    expect(url).toBe('https://wa.me/6285727956892?text=Halo%2C%20ALF%20Production!')
  })

  it('prefills the default message when none is given', () => {
    const url = waLink()
    const encoded = url.split('?text=')[1]
    expect(encoded).toBeDefined()
    expect(decodeURIComponent(encoded)).toBe(
      'Halo ALF Production, saya ingin konsultasi pembuatan Mars/Hymne...'
    )
  })

  it('has exactly 8 nav items with no duplicate paths', () => {
    expect(nav).toHaveLength(8)
    const paths = nav.map((item) => item.to)
    expect(new Set(paths).size).toBe(paths.length)
  })

  it('has exactly 3 hero stats', () => {
    expect(heroStats).toHaveLength(3)
  })
})

describe('service packages', () => {
  it('has exactly 3 packages with unique ids', () => {
    expect(servicePackages).toHaveLength(3)
    const ids = servicePackages.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('every package has non-empty name, price, description, and features', () => {
    for (const p of servicePackages) {
      expect(p.name.trim()).not.toBe('')
      expect(p.price.trim()).not.toBe('')
      expect(p.description.trim()).not.toBe('')
      expect(p.features.length).toBeGreaterThan(0)
    }
  })

  it('has exactly one featured package', () => {
    expect(servicePackages.filter((p) => p.featured)).toHaveLength(1)
  })
})

describe('portfolio items', () => {
  it('has 3 items with unique ids', () => {
    expect(portfolioItems).toHaveLength(3)
    const ids = portfolioItems.map((item) => item.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('every item has non-empty youtubeId, title, and client', () => {
    for (const item of portfolioItems) {
      expect(item.youtubeId.trim()).not.toBe('')
      expect(item.title.trim()).not.toBe('')
      expect(item.client.trim()).not.toBe('')
    }
  })

  it('every item uses a valid category and type', () => {
    for (const item of portfolioItems) {
      expect(['Mars', 'Hymne']).toContain(item.category)
      expect(['SIT', 'Yayasan', 'Sekolah', 'Pesantren']).toContain(item.type)
    }
  })
})
