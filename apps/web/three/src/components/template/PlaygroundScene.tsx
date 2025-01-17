import { useGLTF } from "@react-three/drei"
import { filterMeshFromNodes } from "../../utils/destucture-obj";

export const Cathedral = () => {
    const cathedralGlb = useGLTF('/cathedral.glb');

    return <group>
    {
        filterMeshFromNodes(cathedralGlb.nodes).map((node, idx) => {
            // if (idx < 50) {
            return <mesh key={node.uuid + idx} geometry={node.geometry} material={node.material} />
            // }
        })
    }
    </group>
}