import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React, { lazy } from "react"
const TextComponent = lazy(() => import("../components/Text"));

export default function TextPage() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <TextComponent />
        <OrbitControls />
      </Canvas>
    </>
  )
}