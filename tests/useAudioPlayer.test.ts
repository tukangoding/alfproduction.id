// @vitest-environment jsdom

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import type { Ref } from 'vue'

interface Track {
  id: string
  youtubeId: string
  title: string
  category: 'Mars' | 'Hymne'
  client: string
}

interface AudioPlayerApi {
  currentTrack: Ref<Track | null>
  isPlaying: Ref<boolean>
  isOpen: Ref<boolean>
  playTrack: (track: Track) => Promise<void>
  togglePlay: () => void
  closePlayer: () => void
}

const track1: Track = {
  id: 'mars-a',
  youtubeId: 'AAAA1111',
  title: 'Mars Yayasan A',
  category: 'Mars',
  client: 'Yayasan A'
}

const track2: Track = {
  id: 'hymne-b',
  youtubeId: 'BBBB2222',
  title: 'Hymne Sekolah B',
  category: 'Hymne',
  client: 'Sekolah B'
}

class FakeYoutubePlayer {
  static instances: FakeYoutubePlayer[] = []

  calls: string[] = []
  options: { events?: { onStateChange?: (event: { data: number }) => void } }

  constructor(
    elementId: string,
    options: { events?: { onStateChange?: (event: { data: number }) => void } }
  ) {
    this.options = options
    FakeYoutubePlayer.instances.push(this)
  }

  loadVideoById(id: string): void {
    this.calls.push(`loadVideoById:${id}`)
  }

  playVideo(): void {
    this.calls.push('playVideo')
  }

  pauseVideo(): void {
    this.calls.push('pauseVideo')
  }

  fireState(data: number): void {
    this.options?.events?.onStateChange?.({ data })
  }
}

const API_SCRIPT_SRC = 'https://www.youtube.com/iframe_api'

function countApiScripts(): number {
  return document.head.querySelectorAll(`script[src="${API_SCRIPT_SRC}"]`).length
}

function triggerApiReady(): void {
  const win = window as unknown as { onYouTubeIframeAPIReady?: () => void }
  win.onYouTubeIframeAPIReady?.()
}

let playerApi: AudioPlayerApi

async function play(track: Track): Promise<void> {
  const pending = playerApi.playTrack(track)
  triggerApiReady()
  await pending
}

beforeEach(async () => {
  vi.resetModules()
  document.head.innerHTML = ''
  FakeYoutubePlayer.instances = []
  ;(window as any).YT = {
    Player: FakeYoutubePlayer,
    PlayerState: { PLAYING: 1 }
  }
  ;(window as any).onYouTubeIframeAPIReady = undefined
  const mod = await import('../composables/useAudioPlayer')
  playerApi = mod.useAudioPlayer()
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('useAudioPlayer', () => {
  it('does not inject the YouTube API script before any playTrack call', () => {
    expect(countApiScripts()).toBe(0)
  })

  it('injects the YouTube API script on first play, exactly once', async () => {
    expect(countApiScripts()).toBe(0)

    await play(track1)
    expect(countApiScripts()).toBe(1)

    await play(track2)
    expect(countApiScripts()).toBe(1)
  })

  it('reuses the constructed player instance and loads the new video on track switch', async () => {
    await play(track1)
    const player = FakeYoutubePlayer.instances[0]
    player.calls.length = 0

    await play(track2)

    expect(FakeYoutubePlayer.instances).toHaveLength(1)
    expect(player.calls).toEqual(['loadVideoById:BBBB2222', 'playVideo'])
  })

  it('togglePlay pauses when playing and plays when paused', async () => {
    await play(track1)
    const player = FakeYoutubePlayer.instances[0]
    player.calls.length = 0

    expect(playerApi.isPlaying.value).toBe(false)
    playerApi.togglePlay()
    expect(player.calls).toEqual(['playVideo'])

    player.calls.length = 0
    player.fireState(1)
    expect(playerApi.isPlaying.value).toBe(true)
    playerApi.togglePlay()
    expect(player.calls).toEqual(['pauseVideo'])
  })

  it('closePlayer hides the bar and stops playback', async () => {
    await play(track1)
    const player = FakeYoutubePlayer.instances[0]
    player.fireState(1)

    expect(playerApi.isOpen.value).toBe(true)
    expect(playerApi.isPlaying.value).toBe(true)

    playerApi.closePlayer()

    expect(playerApi.isOpen.value).toBe(false)
    expect(playerApi.isPlaying.value).toBe(false)
    expect(player.calls).toContain('pauseVideo')
  })
})
