import { ref } from 'vue'

export interface Track {
  id: string
  youtubeId: string
  title: string
  category: 'SIT' | 'Yayasan' | 'Hymne' | 'Mars'
  client: string
}

const currentTrack = ref<Track | null>(null)
const isPlaying = ref<boolean>(false)
const isApiLoaded = ref<boolean>(false)
const isOpen = ref<boolean>(false)
const playerInstance = ref<any>(null)

export const useAudioPlayer = () => {
  const loadYoutubeApi = (): Promise<void> => {
    return new Promise((resolve) => {
      if (isApiLoaded.value) return resolve()
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
      ;(window as any).onYouTubeIframeAPIReady = () => {
        isApiLoaded.value = true
        resolve()
      }
    })
  }

  const playTrack = async (track: Track) => {
    currentTrack.value = track
    isOpen.value = true
    if (!isApiLoaded.value) {
      await loadYoutubeApi()
    }

    if (!playerInstance.value) {
      playerInstance.value = new (window as any).YT.Player('hidden-youtube-iframe', {
        height: '0',
        width: '0',
        videoId: track.youtubeId,
        playerVars: { autoplay: 1, controls: 0 },
        events: {
          onStateChange: (event: any) => {
            isPlaying.value = event.data === (window as any).YT.PlayerState.PLAYING
          }
        }
      })
    } else {
      playerInstance.value.loadVideoById(track.youtubeId)
      playerInstance.value.playVideo()
    }
  }

  const togglePlay = () => {
    if (!playerInstance.value) return
    if (isPlaying.value) {
      playerInstance.value.pauseVideo()
    } else {
      playerInstance.value.playVideo()
    }
  }

  const closePlayer = () => {
    if (playerInstance.value) {
      playerInstance.value.pauseVideo()
    }
    isPlaying.value = false
    isOpen.value = false
  }

  return { currentTrack, isPlaying, isOpen, playTrack, togglePlay, closePlayer }
}
