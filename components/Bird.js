import { useEffect,useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'

export default function Bird({ speed, factor, url, birdable, ...props }) {
  const { nodes, animations } = useGLTF(url)
  console.log(nodes);
  const { ref, mixer } = useAnimations(animations)

  useEffect(
    () => void mixer.clipAction(animations[0], ref.current).play(),
    [mixer, animations, ref]
  )

  useFrame((state, delta) => {
    ref.current.rotation.y +=
      Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5
    mixer.update(delta * speed)
    ref.current.scale.x = props.props.x
    ref.current.scale.y = props.props.y
    ref.current.scale.z = props.props.z

    ref.current.opacity = props.props.opacity
  })


  return (
    <group ref={ref} >
      <scene name="Scene" {...props} >
        <mesh
          name="Object_0"
          morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
          rotation={[1.5707964611537577, 0, 0]}
          scale={[props.props.x, props.props.y, props.props.z]}
          opacity={props.props.opacity}
        >
          <bufferGeometry attach="geometry" {...nodes.Object_0.geometry}/>
          <meshStandardMaterial
            attach="material"
            opacity={props.props.opacity}
            {...nodes.Object_0.material}
            name="Material_0_COLOR_0"
          />
        </mesh>
      </scene>
    </group>
  )
}
