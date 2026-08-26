import { nextTick } from 'vue'
import {
  initializeAnalytics,
  trackAnalyticsEvent,
  trackPageView
} from '~/composables/useAnalytics'

const CONSENT_KEY = 'alf_analytics_consent'
const CONSENT_EVENT = 'alf:analytics-consent-granted'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const router = useRouter()
  const measurementId = String(config.public.gaMeasurementId ?? '').trim()

  if (!measurementId) return

  const sendCurrentPage = () => {
    trackPageView(
      `${window.location.pathname}${window.location.search}`,
      document.title
    )
  }

  const activate = () => {
    if (!initializeAnalytics(measurementId)) return
    sendCurrentPage()
  }

  if (window.localStorage.getItem(CONSENT_KEY) === 'granted') {
    activate()
  }

  window.addEventListener(CONSENT_EVENT, activate)

  router.afterEach(async () => {
    await nextTick()
    sendCurrentPage()
  })

  document.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof Element)) return

    const link = target.closest<HTMLAnchorElement>('a[href*="wa.me/"]')
    if (!link) return

    trackAnalyticsEvent('whatsapp_click', {
      cta_text: link.textContent?.trim().replace(/\s+/g, ' ').slice(0, 80) || 'WhatsApp',
      page_path: window.location.pathname,
      package_id: link.dataset.packageId
    })
  })
})
