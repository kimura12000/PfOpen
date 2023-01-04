import React, { useState, useRef, useEffect } from "react"

import { useLoader, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'




const TextModel = () => {
    
    console.log();
    const group = useRef()
    const nodes = useGLTF(`/glb/dbbText.glb`)
    console.log(nodes);
    useFrame(() => {
        group.current.rotation.y += 0.008

        // group.current.scale.x = props.props.x
        // group.current.scale.y = props.props.y
        // group.current.scale.z = props.props.z
    });
    return (
      <primitive object={nodes.scene} ref={group} scale={[3.4, 3.4, 3.4]}
      position={[0, -8, 0]}
      rotation={[0.1, -0.4, 0]}/>
    )
  }

  export default TextModel;