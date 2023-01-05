import React, { useState, useRef, useEffect } from "react"

import { useLoader, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'




const Model2 = (props) => {
    
    console.log(props);
    const group = useRef()
    const nodes = useGLTF(`/glb/scene.gltf`)
    console.log(nodes);
    useFrame(() => {
        group.current.rotation.y += 0.008

        group.current.scale.x = props.props.x
        group.current.scale.y = props.props.y
        group.current.scale.z = props.props.z
    });
    return (
      <primitive object={nodes.scene} ref={group} scale={[props.props.x, props.props.y, props.props.z]}
      position={[16, -10, -4.5]}
      rotation={[0.1, -0.4, 0]}/>
    )
  }

  export default Model2;