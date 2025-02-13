import {useState} from "react";
import {Gltf, useCursor} from "@react-three/drei";

export default function Link3DBox() {
    const [hovered, setHovered] = useState(false)
    useCursor(hovered) // 마우스를 올리면 커서 변경

    return (
        <mesh
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => window.location.href = 'https://github.com/hyukyyy'}
        >
            <Gltf src="/glb/github.glb" position={[-3.5, -2.5, -5]} scale={0.5} />
        </mesh>
    )
}
