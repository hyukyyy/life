import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame, ThreeElements, ThreeEvent, RootState } from '@react-three/fiber'

export default function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    
    useFrame((state: RootState, delta: number) => {
        meshRef.current.rotation.x += delta;
        console.log('useFrame state : ', state)
    });

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event: ThreeEvent<MouseEvent>) => {
                console.log('ThreeEvent<MouseEvent> event : ', event);
                setActive(!active);
            }}
            onPointerOver={(event: ThreeEvent<MouseEvent>) => {
                console.log('ThreeEvent<MouseEvent> event : ', event);
                setHover(true);
            }}
            onPointerOut={(event: ThreeEvent<MouseEvent>) => {
                console.log('ThreeEvent<MouseEvent> event : ', event);
                setHover(false);
            }}>
            <boxGeometry args={[1, 1, 2]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
        </mesh>
    )
}
