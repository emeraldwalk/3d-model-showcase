import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function Model() {
  const gltf = useLoader(
    GLTFLoader,
    `${import.meta.env.BASE_URL}/closet-shelves.glb`,
  )
  return <primitive object={gltf.scene} />
}
