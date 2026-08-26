// @vitest-environment jsdom

import { beforeEach, describe, expect, it } from 'vitest'
import {
  initializeAnalytics,
  trackAnalyticsEvent,
  trackPageView
} from '../composables/useAnalytics'

interface TestAnalyticsWindow extends Window {
  dataLayer?: unknown[][]
  gtag?: (...args: unknown[]) => void
  __alfAnalyticsInitialized?: boolean
}

const target = window as TestAnalyticsWindow

beforeEach(() => {
  document.head.innerHTML = ''
  target.dataLayer = undefined
  target.gtag = undefined
  target.__alfAnalyticsInitialized = undefined
})

describe('analytics', () => {
  it('stays disabled for an empty or invalid measurement id', () => {
    expect(initializeAnalytics('')).toBe(false)
    expect(initializeAnalytics('UA-123')).toBe(false)
    expect(document.querySelector('[data-alf-analytics]')).toBeNull()
  })

  it('initializes GA4 only once', () => {
    expect(initializeAnalytics('G-ABC123')).toBe(true)
    expect(initializeAnalytics('G-ABC123')).toBe(true)
    expect(document.querySelectorAll('[data-alf-analytics]')).toHaveLength(1)
    expect(target.dataLayer?.length).toBe(2)
  })

  it('queues events only after analytics has been initialized', () => {
    trackAnalyticsEvent('whatsapp_click', { page_path: '/' })
    expect(target.dataLayer).toBeUndefined()

    initializeAnalytics('G-ABC123')
    trackAnalyticsEvent('whatsapp_click', { page_path: '/' })
    trackPageView('/layanan', 'Layanan')

    expect(target.dataLayer?.slice(-2)).toEqual([
      ['event', 'whatsapp_click', { page_path: '/' }],
      ['event', 'page_view', { page_path: '/layanan', page_title: 'Layanan' }]
    ])
  })
})
