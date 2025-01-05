import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Model'

export function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={0.8} castShadow />
      <Model />
      <OrbitControls />
    </Canvas>
  )
}

export default App
