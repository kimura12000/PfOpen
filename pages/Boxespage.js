import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/Box'

import React, { useState, useRef, useEffect, lazy, Suspense, useMemo } from "react"



import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // プラグイン登録

const ModelComponent = lazy(() => import("../components/Model2"));
const ModelComponent2 = lazy(() => import("../components/Bird"));

const BoxesPage =  React.memo(({ mainRef }) => {

  let birdable = {
    x: 1,
    y: 1,
    z: 1,
    opacity: 1,
  }

  const birds = useMemo(
    () =>
      new Array(10).fill().map((_, index) => {
        const x =
          (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1)
        const y = -10 + Math.random() * 20
        const z = -5 + Math.random() * 10
        const bird = ['stork', 'parrot', 'flamingo'][
          Math.round(Math.random() * 2)
        ]
        const speed = bird === 'stork' ? 0.5 : bird === 'flamingo' ? 2 : 5
        const factor =
          bird === 'stork'
            ? 0.5 + Math.random()
            : bird === 'flamingo'
            ? 0.25 + Math.random()
            : 1 + Math.random() - 0.5
  
        return {
          key: index,
          position: [x, y, z],
          rotation: [0, x > 0 ? Math.PI : 0, 0],
          speed,
          factor,
          url: `/glb/${bird}.glb`,
        }
      }),
    []
  )

  console.log(birds[0])

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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: 'center center',
          end: 'bottom center',
          scrub: true,
          markers: false
        }
      })
      tl.to(modelable, {
        x: 0.18,
        y: 0.18,
        z: 0.18
      })
      tl.to(modelable, {
        x: 0,
        y: 0,
        z: 0
      })
 
    }


  if (mainRef) {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
        start: 'center center',
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
    tl2.to(boxable, {
      x: 0,
      y: 0,
      z: 0
    })
  }

  if (mainRef) {
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
        start: 'center center',
        end: 'bottom center',
        scrub: true,
        markers: false
      }
    })
    tl3.to(birdable, {
      x: 1.3,
      y: 1.3,
      z: 1.3,
      opacity: 0,
    })
    tl3.to(birdable, {
      x: 0,
      y: 0,
      z: 0,
      opacity: 0,
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
      <Suspense fallback={null}>
        {birds.map((props) => (
          <ModelComponent2 {...props} key={props.key} props={birdable} />
        ))}
      </Suspense>
      <OrbitControls />
    </Canvas>
  </>
)
})

export default BoxesPage;
