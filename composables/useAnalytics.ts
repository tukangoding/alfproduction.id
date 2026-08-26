export type AnalyticsEventParameters = Record<
  string,
  string | number | boolean | undefined
>

interface AnalyticsWindow extends Window {
  dataLayer?: unknown[][]
  gtag?: (...args: unknown[]) => void
  __alfAnalyticsInitialized?: boolean
}

function analyticsWindow(): AnalyticsWindow | null {
  return typeof window === 'undefined' ? null : (window as AnalyticsWindow)
}

export function initializeAnalytics(measurementId: string): boolean {
  const target = analyticsWindow()
  const id = measurementId.trim()
  if (!target || !/^G-[A-Z0-9]+$/i.test(id)) return false
  if (target.__alfAnalyticsInitialized) return true

  target.dataLayer = target.dataLayer ?? []
  target.gtag = (...args: unknown[]) => {
    target.dataLayer?.push(args)
  }
  target.gtag('js', new Date())
  target.gtag('config', id, {
    send_page_view: false,
    anonymize_ip: true
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  script.dataset.alfAnalytics = 'true'
  document.head.appendChild(script)
  target.__alfAnalyticsInitialized = true
  return true
}

export function trackAnalyticsEvent(
  name: string,
  parameters: AnalyticsEventParameters = {}
): void {
  const target = analyticsWindow()
  if (!target?.__alfAnalyticsInitialized || !target.gtag) return
  target.gtag('event', name, parameters)
}

export function trackPageView(path: string, title: string): void {
  trackAnalyticsEvent('page_view', {
    page_path: path,
    page_title: title
  })
}
