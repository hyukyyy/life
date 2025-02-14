import {Billboard, Environment, Gltf, MeshPortalMaterial, PerspectiveCamera, Text as DreiText} from '@react-three/drei'
import {Canvas, useFrame} from '@react-three/fiber'
import {Root, Container, Text, setPreferredColorScheme, Content } from '@react-three/uikit'
import {useMemo, useRef} from 'react'
import {signal} from '@preact/signals-core'
import {easing, geometry} from 'maath'
import useLayoutStore from "@/store/LayoutStore.ts";
import Link3DBox from "@/components/molecule/Link3DBox.tsx";

setPreferredColorScheme('light')

export default function Card() {
    const {isDarkMode} = useLayoutStore();

    return (
        <Canvas
            camera={{position: [0, 0, 18], fov: 20}}
            style={{width: '100vw', height: '56vw', touchAction: 'none'}}
            gl={{localClippingEnabled: true}}
        >
            <ambientLight intensity={Math.PI}/>
            <spotLight decay={0} position={[0, 5, 10]} angle={0.25} penumbra={1} intensity={2} castShadow/>
            <CardPage/>
            <Environment preset={isDarkMode ? 'night' : "city"}/>
            <Rig/>
            <Link3DBox />
            <Billboard
                position={[0, 3, 1]}
                follow={false}
            >
                <DreiText
                    fontSize={0.8}
                    fontWeight={'bold'}
                    color={isDarkMode ? 'gray' : 'black'}
                >
                    Hello to my world!
                </DreiText>
            </Billboard>
        </Canvas>
    )
}

function Rig() {
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [-state.pointer.x * 3, -state.pointer.y * 5, 20], 0.2, delta);
        state.camera.lookAt(0, 0, -10);
    })
    return null
}

const cardGeometry = new geometry.RoundedPlaneGeometry(1, 1, 0.025)

export function CardPage() {
    const openRef = useRef(false)
    const translateY = useMemo(() => signal(-460), [])
    const translateZ = useMemo(() => signal(0), [])
    const {isDarkMode} = useLayoutStore();

    useFrame((_, delta) => {
        easing.damp(translateY, 'value', openRef.current ? 0 : -200, 0.2, delta)
        easing.damp(translateZ, 'value', openRef.current ? 100 : 0, 0.2, delta)
    })
    return (
        <Root flexDirection="column" pixelSize={0.01} sizeX={4.4}>
            <Container
                backgroundColor={0xffffff}
                dark={{backgroundColor: 0x0}}
                borderRadius={20}
                onClick={(e) => (e.stopPropagation(), (openRef.current = !openRef.current))}
                cursor="pointer"
                flexDirection="column"
                zIndexOffset={10}
                transformTranslateZ={translateZ}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Content transformTranslateZ={1} padding={14} keepAspectRatio={false} width={500} height={500}>
                    <mesh geometry={cardGeometry}>
                        <MeshPortalMaterial transparent>
                            <Gltf src="/glb/totoro.glb" position={[0, -13, -15]}/>

                            <color attach="background" args={[isDarkMode ? 'black' : 'white']}/>
                            <ambientLight intensity={Math.PI}/>
                            <Environment preset="city"/>
                            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50}/>
                        </MeshPortalMaterial>
                    </mesh>
                </Content>
                <Container
                    backgroundColor={0xffffff}
                    dark={{backgroundColor: 0x0}}
                    flexDirection="row"
                    padding={28}
                    paddingTop={28 + 4}
                    alignItems="center"
                    justifyContent="flex-start"
                    borderBottomRadius={20}
                    castShadow
                >
                    <Container flexDirection="column" gap={8} alignItems={'center'}>
                        <Text fontWeight="normal" fontSize={24} lineHeight="100%">
                        HYUKYYY
                        </Text>
                        <Text fontSize={20} fontWeight="medium" letterSpacing={-0.4}>
                            HI! I'M HYUKYYY
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
