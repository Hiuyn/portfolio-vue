<template>
  <div class="particle-waves">
    <div ref="canvasRef" class="canvas-container" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

// ─── Constants ────────────────────────────────────────────────────────────────
const SEPARATION = 100
const AMOUNTX = 50
const AMOUNTY = 50

// ─── Reactive state ───────────────────────────────────────────────────────────
const canvasRef = ref(null)
const particleCount = ref(AMOUNTX * AMOUNTY)
const frameCount = ref(0)
const waveProgress = ref(0)

// ─── Three.js internals ───────────────────────────────────────────────────────
let camera, scene, renderer, particles
let count = 0
let animId = null

// ─── Shaders ──────────────────────────────────────────────────────────────────
const vertexShader = /* glsl */ `
  attribute float scale;
  attribute float waveHeight;
  varying  float vWave;

  void main() {
    vWave = waveHeight;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = scale * (300.0 / -mvPosition.z);
    gl_Position  = projectionMatrix * mvPosition;
  }
`

const fragmentShader = /* glsl */ `
  uniform vec3 colorA;
  uniform vec3 colorB;
  varying float vWave;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.475) discard;

    float alpha = 1.0 - smoothstep(0.28, 0.475, dist);
    vec3  color = mix(colorA, colorB, vWave * 0.5 + 0.5);
    gl_FragColor = vec4(color, alpha);
  }
`

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  const container = canvasRef.value
  const W = container.clientWidth
  const H = container.clientHeight

  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0a0a0f)

  // Camera — diagonal isometric-style top-down view
  // Position: elevated + offset along X & Z → looks diagonally down at origin
  camera = new THREE.PerspectiveCamera(75, W / H, 1, 10000)
  camera.position.set(200, 250, 1000)
  camera.lookAt(0, 0, 0)

  // Geometry
  const num = AMOUNTX * AMOUNTY
  const positions = new Float32Array(num * 3)
  const scales = new Float32Array(num)
  const waveH = new Float32Array(num)

  let i = 0,
    j = 0
  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
      positions[i + 1] = 0
      positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
      scales[j] = 1
      waveH[j] = 0
      i += 3
      j++
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))
  geometry.setAttribute('waveHeight', new THREE.BufferAttribute(waveH, 1))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      colorA: { value: new THREE.Color(0xbf5af2) },
      colorB: { value: new THREE.Color(0x5ac8fa) }
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(W, H)
  container.appendChild(renderer.domElement)

  window.addEventListener('resize', onResize)
  animId = requestAnimationFrame(loop)
}

// ─── Resize ───────────────────────────────────────────────────────────────────
function onResize() {
  const container = canvasRef.value
  camera.aspect = container.clientWidth / container.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.clientWidth, container.clientHeight)
}

// ─── Animation loop ───────────────────────────────────────────────────────────
function loop() {
  animId = requestAnimationFrame(loop)

  const pos = particles.geometry.attributes.position.array
  const scl = particles.geometry.attributes.scale.array
  const wvh = particles.geometry.attributes.waveHeight.array

  let i = 0,
    j = 0
  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      const sinX = Math.sin((ix + count) * 0.3)
      const sinY = Math.sin((iy + count) * 0.5)

      pos[i + 1] = sinX * 50 + sinY * 50
      scl[j] = (sinX + 1) * 16 + (sinY + 1) * 16
      wvh[j] = (sinX + sinY) / 2

      i += 3
      j++
    }
  }

  particles.geometry.attributes.position.needsUpdate = true
  particles.geometry.attributes.scale.needsUpdate = true
  particles.geometry.attributes.waveHeight.needsUpdate = true

  renderer.render(scene, camera)

  count += 0.07
  frameCount.value++
  waveProgress.value = ((count % (Math.PI * 2)) / (Math.PI * 2)) * 100
}

// ─── Lifecycle ────────────────────────────────────────────────────────────────
onMounted(init)

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', onResize)
  renderer?.dispose()
})
</script>

<style scoped>
/* Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Root */
.particle-waves {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #0a0a0f;
}

.canvas-container {
  width: 100%;
  height: 100%;
}
</style>
