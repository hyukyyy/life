import { Canvas } from '@react-three/fiber'
import { Fisheye, Environment, Billboard, Text } from '@react-three/drei'
import { Level, Sudo, Camera, Cactus, Box } from '../components/template/GameLandScene'
import { Color } from 'three'
import WasdControls from '../components/molecule/WASDControls'

export default function GameLand() {
  return (
    <Canvas style={{width: '100vw', height: '100vh'}} flat>
      <Fisheye zoom={0}>
        <WasdControls />
        <ambientLight intensity={Math.PI / 2} />
        <group scale={20} position={[5, -11, -5]}>
          <Level />
          <Sudo />
          <Camera />
          <Cactus />
          <Box position={[-0.8, 1.4, 0.4]} scale={0.15} />
        </group>
        <Environment preset="dawn" background blur={1} />
        <Billboard
          position={[3, 3, 3]}
          follow={true}
        >
          <Text 
            fontSize={2} 
            color={new Color(0, 0, 0)}
          >
            This is my house
          </Text>
        </Billboard>
      </Fisheye>
    </Canvas>
  )
}
