<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface Particle {
  x: number
  y: number
  radius: number
  speed: number
  drift: number
  opacity: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)

let animationFrameId = 0
let idleTimer = 0
let idleCallbackId = 0
let particles: Particle[] = []
let lastFrame = 0
let cleanup: (() => void) | null = null

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function startParticles(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d', { alpha: true })
  if (!context) return

  const resize = () => {
    const scale = Math.min(window.devicePixelRatio || 1, 1.25)
    canvas.width = Math.round(window.innerWidth * scale)
    canvas.height = Math.round(window.innerHeight * scale)
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    context.setTransform(scale, 0, 0, scale, 0, 0)

    const particleCount = Math.min(72, Math.max(36, Math.round(window.innerWidth / 22)))
    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 0.6 + Math.random() * 1.4,
      speed: 0.04 + Math.random() * 0.1,
      drift: (Math.random() - 0.5) * 0.04,
      opacity: 0.12 + Math.random() * 0.22
    }))
  }

  const render = (time: number) => {
    animationFrameId = window.requestAnimationFrame(render)
    if (document.hidden || time - lastFrame < 42) return
    lastFrame = time

    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for (const particle of particles) {
      particle.y -= particle.speed
      particle.x += particle.drift

      if (particle.y < -4) particle.y = window.innerHeight + 4
      if (particle.x < -4) particle.x = window.innerWidth + 4
      if (particle.x > window.innerWidth + 4) particle.x = -4

      context.beginPath()
      context.fillStyle = `rgba(107, 138, 16, ${particle.opacity})`
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      context.fill()
    }
  }

  resize()
  window.addEventListener('resize', resize, { passive: true })
  animationFrameId = window.requestAnimationFrame(render)

  cleanup = () => {
    window.removeEventListener('resize', resize)
    if (animationFrameId) window.cancelAnimationFrame(animationFrameId)
    animationFrameId = 0
    particles = []
  }
}

onMounted(() => {
  if (window.innerWidth < 768 || prefersReducedMotion()) return

  const canvas = canvasRef.value
  if (!canvas) return

  if ('requestIdleCallback' in window) {
    idleCallbackId = window.requestIdleCallback(() => startParticles(canvas), {
      timeout: 2500
    })
  } else {
    idleTimer = window.setTimeout(() => startParticles(canvas), 1200)
  }
})

onUnmounted(() => {
  if (idleTimer) window.clearTimeout(idleTimer)
  if (idleCallbackId && 'cancelIdleCallback' in window) {
    window.cancelIdleCallback(idleCallbackId)
  }
  cleanup?.()
  cleanup = null
})
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden md:block"
  >
    <div class="cinematic-gradient absolute inset-0" />
    <canvas ref="canvasRef" class="h-full w-full opacity-30" />
  </div>
</template>

<style scoped>
.cinematic-gradient {
  background:
    radial-gradient(
      55rem 55rem at 88% -8%,
      rgba(233, 245, 192, 0.55),
      transparent 65%
    ),
    radial-gradient(
      45rem 45rem at -10% 108%,
      rgba(233, 236, 241, 0.95),
      transparent 70%
    );
}
</style>
