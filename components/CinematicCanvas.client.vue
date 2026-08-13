<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

let renderer: import('three').WebGLRenderer | null = null
let animationFrameId = 0
let observer: IntersectionObserver | null = null
let disposed = false

function shouldRender(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.innerWidth >= 768 &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

onMounted(() => {
  if (!shouldRender()) return

  const canvas = canvasRef.value
  if (!canvas) return

  observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return
    observer?.disconnect()
    observer = null
    void loadParticles(canvas)
  })
  observer.observe(canvas)
})

async function loadParticles(canvas: HTMLCanvasElement) {
  const THREE = await import('three')
  if (disposed) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.setSize(window.innerWidth, window.innerHeight)

  const geometry = new THREE.BufferGeometry()
  const count = 200
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: '#6b8a10',
    size: 0.045,
    transparent: true,
    opacity: 0.35
  })

  const points = new THREE.Points(geometry, material)
  scene.add(points)

  const animate = () => {
    if (disposed) return
    animationFrameId = requestAnimationFrame(animate)
    points.rotation.y += 0.001
    renderer?.render(scene, camera)
  }
  animate()
}

onUnmounted(() => {
  disposed = true
  observer?.disconnect()
  observer = null
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  renderer?.dispose()
  renderer = null
})
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
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
