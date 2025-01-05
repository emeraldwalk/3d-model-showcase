import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export interface ModelProps {
  filePath: string
}

export function Model({ filePath }: ModelProps) {
  const gltf = useLoader(GLTFLoader, `${import.meta.env.BASE_URL}${filePath}`)
  return <primitive object={gltf.scene} />
}
