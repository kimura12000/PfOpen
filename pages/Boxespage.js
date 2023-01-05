import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/Box'
import React, { useState, useRef, useEffect, lazy } from "react"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // プラグイン登録

const ModelComponent = lazy(() => import("../components/Model2"));

const BoxesPage =  React.memo(({ mainRef }) => {

  let modelable = {
    x: 0.6,
    y: 0.6,
    z: 0.6,
  }
  let boxable = {
    x: 3,
    y: 3,
    z: 3,
    position1: [-10, 0, 0],
    position2: [0, 10, 0],
  }

  useEffect(() => {

    if (mainRef) {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          markers: false
        }
      })
      tl2.to(modelable, {
        x: 0.18,
        y: 0.18,
        z: 0.18
      })
      tl2.to(modelable, {
        x: 0,
        y: 0,
        z: 0
      })
    }


  if (mainRef) {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: false
      }
    })
    tl2.to(boxable, {
      x: 0.18,
      y: 0.18,
      z: 0.18
    })
    tl2.to(boxable, {
      x: 0,
      y: 0,
      z: 0
    })
  }
}, [mainRef])

return (
  <>
    <Canvas camera={{ position: [0, 0, 35] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Box props={boxable} />
      <ModelComponent props={modelable} />
      <OrbitControls />
    </Canvas>
  </>
)
})

export default BoxesPage;
