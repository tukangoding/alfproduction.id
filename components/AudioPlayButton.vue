<script setup lang="ts">
import { useAudioPlayer } from '~/composables/useAudioPlayer'
import { trackAnalyticsEvent } from '~/composables/useAnalytics'

const props = withDefaults(
  defineProps<{
    track: { id: string; youtubeId: string; title: string; client: string }
    size?: number
  }>(),
  { size: 56 }
)

const { currentTrack, isPlaying, playTrack } = useAudioPlayer()

const isThisPlaying = computed(() => currentTrack.value?.id === props.track.id && isPlaying.value)
const ariaLabel = computed(() =>
  isThisPlaying.value ? `Jeda ${props.track.title}` : `Putar ${props.track.title}`
)

function onPlay(): void {
  trackAnalyticsEvent('portfolio_play', {
    item_id: props.track.id,
    item_name: props.track.title,
    client: props.track.client
  })
  void playTrack(props.track)
}
</script>

<template>
  <button
    type="button"
    :aria-label="ariaLabel"
    :style="{ width: `${size}px`, height: `${size}px` }"
    class="md-elevated-1 inline-flex shrink-0 items-center justify-center rounded-full bg-primary text-primary-on transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    @click="onPlay"
  >
    <svg
      v-if="isThisPlaying"
      viewBox="0 0 24 24"
      class="h-6 w-6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
    <svg
      v-else
      viewBox="0 0 24 24"
      class="h-6 w-6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </button>
</template>
