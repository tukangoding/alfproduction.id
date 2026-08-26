<template>
  <div class="flex min-h-screen flex-col">
    <LazyAppHeader hydrate-on-interaction />
    <main class="flex-1">
      <slot />
    </main>
    <LazyAppFooter hydrate-never />
    <LazyWhatsAppFloat hydrate-never />
    <StickyAudioPlayer />
    <LazyCinematicCanvas hydrate-on-media-query="(min-width: 768px)" />
    <LazyAnalyticsConsent hydrate-on-idle />
  </div>
</template>
