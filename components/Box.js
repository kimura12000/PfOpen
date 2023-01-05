import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box as NativeBox } from '@react-three/drei'

export default function Box(props) {
  const mesh = useRef()
  const mesh2 = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.x += 0.01
    mesh.current.rotation.z = mesh.current.rotation.z += 0.01
    mesh.current.scale.x = props.props.x
    mesh.current.scale.y = props.props.y
    mesh.current.scale.z = props.props.z

    mesh2.current.rotation.y = mesh.current.rotation.y += 0.01
    mesh2.current.rotation.x = mesh.current.rotation.x += 0.01
    mesh2.current.scale.x = props.props.x
    mesh2.current.scale.y = props.props.y
    mesh2.current.scale.z = props.props.z
  })

  return (
    <>
    <NativeBox
      args={[1, 1, 1]}
      position={props.props.position1}
      ref={mesh}
      scale={[props.props.x, props.props.y, props.props.z]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        attach="material"
        color={hovered ? '#2b6c76' : '#720b23'}
      />
    </NativeBox>
    <NativeBox
    args={[1, 1, 1]}
    position={props.props.position2}
    ref={mesh2}
    scale={[props.props.x, props.props.y, props.props.z]}
    onClick={() => setActive(!active)}
    onPointerOver={() => setHover(true)}
    onPointerOut={() => setHover(false)}
  >
    <meshStandardMaterial
      attach="material"
      color={hovered ? '#2b6c76' : '#720b23'}
    />
  </NativeBox>
  </>
  )
}
