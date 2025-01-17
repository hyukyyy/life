import { CameraControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cathedral } from "../components/template/PlaygroundScene";
import { Effects } from "./Kitchen";

export default function Playground() {
    return (
        <Canvas style={{width: '100vw', height: '100vh'}}>
            <Effects />
            <PerspectiveCamera makeDefault position={[-10000, 10000, 0]} fov={120} near={-1} far={1000} />
            <CameraControls />
            <ambientLight intensity={1.5 * Math.PI} />
            <Sky distance={1000000} />
            <Cathedral />
        </Canvas>
    )
}