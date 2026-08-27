<template>
  <div class="flex min-h-screen flex-col">
    <LazyAppHeader hydrate-on-interaction />
    <main class="flex-1">
      <slot />
    </main>
    <LazyAppFooter hydrate-never />
  </div>
  <LazyWhatsAppFloat hydrate-never />
  <StickyAudioPlayer />
  <LazyAnalyticsConsent hydrate-on-idle />
</template>
