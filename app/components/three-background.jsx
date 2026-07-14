"use client"

import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

/* ---------------------------------------------------------------
   ParticleField – floating 3D particles with mouse interaction
   --------------------------------------------------------------- */

function Particles({ count = 2000, mouse }) {
  const meshRef = useRef(null)

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)

    const palette = [
      new THREE.Color("#7C3AED"), // purple
      new THREE.Color("#8B5CF6"), // violet
      new THREE.Color("#A78BFA"), // light violet
      new THREE.Color("#6D28D9"), // dark purple
    ]

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Spread particles in a sphere
      const radius = 8 + Math.random() * 12
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      pos[i3] = Math.sin(phi) * Math.cos(theta) * radius
      pos[i3 + 1] = Math.sin(phi) * Math.sin(theta) * radius * 0.6
      pos[i3 + 2] = Math.cos(phi) * radius

      const color = palette[Math.floor(Math.random() * palette.length)]
      col[i3] = color.r
      col[i3 + 1] = color.g
      col[i3 + 2] = color.b

      siz[i] = 0.02 + Math.random() * 0.04
    }

    return [pos, col, siz]
  }, [count])

  const particlesRef = useRef(null)

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime
      const positionsAttr = particlesRef.current.geometry.attributes.position
      const array = positionsAttr.array

      // Gentle floating motion
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        // Use sin/cos on original positions stored in userData
        const ox = positions[i3]
        const oy = positions[i3 + 1]
        const oz = positions[i3 + 2]

        const waveX = Math.sin(time * 0.2 + oy * 0.5) * 0.3
        const waveY = Math.cos(time * 0.15 + ox * 0.5) * 0.3
        const waveZ = Math.sin(time * 0.1 + oy * 0.3 + ox * 0.3) * 0.3

        // Mouse influence
        let mx = 0, my = 0
        if (mouse.current) {
          mx = (mouse.current.x / window.innerWidth) * 2 - 1
          my = -(mouse.current.y / window.innerHeight) * 2 + 1
        }

        array[i3] = ox + waveX + mx * 0.5
        array[i3 + 1] = oy + waveY + my * 0.3
        array[i3 + 2] = oz + waveZ
      }

      positionsAttr.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

/* ---------------------------------------------------------------
   FloatingGeometries – rotating 3D shapes (icosahedron, torus, etc.)
   --------------------------------------------------------------- */

function FloatingGeometries({ mouse }) {
  const groupRef = useRef(null)
  const shapes = useMemo(() => {
    const items = []
    const positions = [
      { x: -4, y: 2, z: -5 },
      { x: 5, y: -3, z: -6 },
      { x: 0, y: 4, z: -8 },
      { x: -5, y: -4, z: -4 },
      { x: 6, y: 3, z: -7 },
    ]
    const geometries = [
      { type: "icosahedron", color: "#7C3AED", size: 0.3, speed: 0.3 },
      { type: "torus", color: "#8B5CF6", size: 0.35, speed: 0.2 },
      { type: "octahedron", color: "#A78BFA", size: 0.25, speed: 0.4 },
      { type: "torusKnot", color: "#6D28D9", size: 0.3, speed: 0.15 },
      { type: "icosahedron", color: "#7C3AED", size: 0.2, speed: 0.35 },
    ]

    positions.forEach((pos, i) => {
      items.push({ ...pos, ...geometries[i] })
    })

    return items
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime
      groupRef.current.children.forEach((child, i) => {
        const data = shapes[i]
        child.rotation.x += data.speed * 0.005
        child.rotation.y += data.speed * 0.008
        child.rotation.z += data.speed * 0.003

        // Subtle floating
        child.position.y += Math.sin(time * data.speed + i) * 0.001
      })
    }
  })

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => {
        let geometry
        switch (shape.type) {
          case "icosahedron":
            geometry = <icosahedronGeometry args={[shape.size, 0]} />
            break
          case "torus":
            geometry = <torusGeometry args={[shape.size, shape.size * 0.4, 16, 32]} />
            break
          case "octahedron":
            geometry = <octahedronGeometry args={[shape.size, 0]} />
            break
          case "torusKnot":
            geometry = <torusKnotGeometry args={[shape.size, shape.size * 0.3, 64, 8]} />
            break
          default:
            geometry = <icosahedronGeometry args={[shape.size, 0]} />
        }

        return (
          <mesh
            key={i}
            position={[shape.x, shape.y, shape.z]}
          >
            {geometry}
            <meshPhysicalMaterial
              color={shape.color}
              transparent
              opacity={0.15}
              wireframe
              roughness={0.5}
              metalness={0.5}
            />
          </mesh>
        )
      })}
    </group>
  )
}

/* ---------------------------------------------------------------
   ThreeBackground – main canvas wrapper
   --------------------------------------------------------------- */

export default function ThreeBackground({ mouse }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={2000} mouse={mouse} />
        <FloatingGeometries mouse={mouse} />
      </Canvas>
    </div>
  )
}