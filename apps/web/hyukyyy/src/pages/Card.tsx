import { Environment, MeshPortalMaterial, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Root, Container, Text, setPreferredColorScheme, Content, Fullscreen } from '@react-three/uikit'
import { useMemo, useRef } from 'react'
import { signal } from '@preact/signals-core'
import { easing, geometry } from 'maath'

setPreferredColorScheme('light')

export default function Card() {
  return (
      <Canvas
          camera={{ position: [0, 0, 18], fov: 32.5 }}
          style={{ height: '100dvh', touchAction: 'none' }}
          gl={{ localClippingEnabled: true }}
      >
        <ambientLight intensity={Math.PI} />
        <spotLight decay={0} position={[0, 5, 10]} angle={0.25} penumbra={1} intensity={2} castShadow />
        <CardPage />
        <Fullscreen flexDirection="column" justifyContent="flex-end" alignItems="center" paddingBottom={32}>
          <Text>Source Code</Text>
        </Fullscreen>
        <Environment preset="city" />
        <Rig />
      </Canvas>
  )
}

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.pointer.x * 10, state.pointer.y * 10, 20], 0.2, delta);
    state.camera.lookAt(0, 0, -10);
  })
  return null
}

const cardGeometry = new geometry.RoundedPlaneGeometry(1, 1, 0.025)

export function CardPage() {
  const openRef = useRef(false)
  const translateY = useMemo(() => signal(-460), [])
  const translateZ = useMemo(() => signal(0), [])
  useFrame((_, delta) => {
    easing.damp(translateY, 'value', openRef.current ? 0 : -460, 0.2, delta)
    easing.damp(translateZ, 'value', openRef.current ? 200 : 0, 0.2, delta)
  })
  return (
      <Root flexDirection="column" pixelSize={0.01} sizeX={4.4}>
        <Container
            backgroundColor={0xffffff}
            dark={{ backgroundColor: 0x0 }}
            borderRadius={20}
            onClick={(e) => (e.stopPropagation(), (openRef.current = !openRef.current))}
            cursor="pointer"
            flexDirection="column"
            zIndexOffset={10}
            transformTranslateZ={translateZ}
        >
          <Content transformTranslateZ={1} padding={14} keepAspectRatio={false} width="100%" height={400}>
            <mesh geometry={cardGeometry}>
              <MeshPortalMaterial transparent>
                <color attach="background" args={['white']} />
                <ambientLight intensity={Math.PI} />
                <Environment preset="city" />
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
              </MeshPortalMaterial>
            </mesh>
          </Content>
          <Container
              backgroundColor={0xffffff}
              dark={{ backgroundColor: 0x0 }}
              flexDirection="row"
              padding={28}
              paddingTop={28 + 4}
              alignItems="center"
              justifyContent="space-between"
              borderBottomRadius={20}
              castShadow
          >
            <Container flexDirection="column" gap={8}>
              <Text fontWeight="normal" fontSize={24} lineHeight="100%">
                VanArsdel Marketing
              </Text>
              <Text fontSize={20} fontWeight="medium" letterSpacing={-0.4}>
                1 activities for you
              </Text>
            </Container>
          </Container>
        </Container>
        <Container flexDirection="column" transformTranslateY={-40} overflow="hidden">
          <Container
              paddingTop={40}
              transformTranslateY={translateY}
              borderRadius={20}
              flexDirection="column"
          >
          </Container>
        </Container>
      </Root>
  )
}
