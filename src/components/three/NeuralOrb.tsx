'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

// ─── Inner Scene ────────────────────────────────────────────────────────────

function Scene() {
  const groupRef = useRef<THREE.Group>(null)
  const wireRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  // Track scroll and mouse without triggering re-renders
  const scrollProgress = useRef(0)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight
      scrollProgress.current = max > 0 ? window.scrollY / max : 0
    }
    const onMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouse, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  // ── Generate particles using Fibonacci sphere for uniform distribution ──
  const { positions, colors } = useMemo(() => {
    const count = 2400
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const violet = new THREE.Color('#7c3aed')
    const lightPurple = new THREE.Color('#a855f7')
    const cyan = new THREE.Color('#22d3ee')
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
      // Slight radius variation for depth
      const r = 1.85 + (Math.random() - 0.5) * 0.35

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Blend violet → light purple → subtle cyan towards the equator
      const t = i / count
      const color =
        t < 0.65
          ? violet.clone().lerp(lightPurple, t / 0.65)
          : lightPurple.clone().lerp(cyan, ((t - 0.65) / 0.35) * 0.25)

      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const s = scrollProgress.current
    const mx = mouse.current.x
    const my = mouse.current.y

    if (groupRef.current) {
      // Continuous rotation + scroll acceleration
      groupRef.current.rotation.y = t * 0.06 + s * Math.PI * 2.5
      groupRef.current.rotation.x = Math.sin(t * 0.025) * 0.15 + my * 0.04

      // Subtle mouse parallax
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        mx * 0.18,
        0.05
      )
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        -my * 0.12 - s * 1.2,
        0.05
      )

      // Scale up slightly on scroll (orb "expands" as user digs deeper)
      const scale = 1 + s * 0.22
      groupRef.current.scale.setScalar(scale)
    }

    if (wireRef.current) {
      wireRef.current.rotation.y = -t * 0.045
      wireRef.current.rotation.z = t * 0.022
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03
      particlesRef.current.rotation.x = Math.sin(t * 0.018) * 0.08
    }

    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.38
    if (ring2Ref.current) ring2Ref.current.rotation.z = -t * 0.22
    if (ring3Ref.current) ring3Ref.current.rotation.y = t * 0.16
  })

  return (
    <group ref={groupRef}>
      {/* ── Core glow (innermost) ── */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.18} />
      </mesh>

      {/* ── Mid glow shell ── */}
      <mesh>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.06} />
      </mesh>

      {/* ── Outer ambient shell (backside, subtle) ── */}
      <mesh>
        <sphereGeometry args={[2.1, 32, 32]} />
        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.025}
          side={THREE.BackSide}
        />
      </mesh>

      {/* ── Icosahedron wireframe (neural structure) ── */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.48, 2]} />
        <meshBasicMaterial
          color="#a855f7"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* ── Particle field ── */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.017}
          vertexColors
          transparent
          opacity={0.82}
          sizeAttenuation
        />
      </points>

      {/* ── Orbital rings ── */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.28, 0.005, 2, 160]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.55} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 2.8, Math.PI / 5, 0]}>
        <torusGeometry args={[2.72, 0.004, 2, 160]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.28} />
      </mesh>

      <mesh ref={ring3Ref} rotation={[Math.PI / 6, 0, Math.PI / 4]}>
        <torusGeometry args={[3.1, 0.003, 2, 160]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.18} />
      </mesh>
    </group>
  )
}

// ─── Exported Canvas Component ───────────────────────────────────────────────

export default function NeuralOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{ background: 'transparent' }}
    >
      <Scene />
      <EffectComposer>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  )
}
