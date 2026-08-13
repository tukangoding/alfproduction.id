<script setup lang="ts">
import { useAudioPlayer } from '~/composables/useAudioPlayer'

const { currentTrack, isOpen, isPlaying, togglePlay, closePlayer } = useAudioPlayer()

const toggleLabel = computed(() => (isPlaying.value ? 'Jeda' : 'Putar'))
</script>

<template>
  <div
    id="hidden-youtube-iframe"
    aria-hidden="true"
    class="pointer-events-none fixed h-0 w-0 overflow-hidden opacity-0"
  />

  <div v-if="isOpen && currentTrack" class="fixed inset-x-0 bottom-0 z-50">
    <div
      class="rounded-t-md-large border-t border-outline bg-surface-container md-elevated-2"
    >
      <div class="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <button
          type="button"
          :aria-label="toggleLabel"
          class="md-elevated-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-on transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          @click="togglePlay"
        >
          <svg
            v-if="isPlaying"
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-on-surface">
            {{ currentTrack.title }}
          </p>
          <p class="truncate text-xs text-on-surface-variant">
            {{ currentTrack.client }}
          </p>
        </div>

        <button
          type="button"
          aria-label="Tutup player"
          class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
          @click="closePlayer"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
