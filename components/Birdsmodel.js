import React, { useState, useRef, useEffect, lazy, Suspense, useMemo } from "react"


const birdsmodel = useMemo(
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
          birdable,
          url: `/glb/${bird}.glb`,
        }
      }),
    []
  )


  export default birdsmodel;