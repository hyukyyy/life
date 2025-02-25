import { useGLTF, useEnvironment } from "@react-three/drei"
import { Object3D } from "three";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 kitchen.glb --transform
Files: kitchen.glb [134.46MB] > kitchen-transformed.glb [2.1MB] (98%)
*/
export function CityScene(props) {
  // Load model
  const { nodes, materials } = useGLTF("/city.glb");
  // const { nodes, materials } = useGLTF("/kitchen-transformed.glb");

  console.log('nodes : ', nodes);
  console.log('materials : ', materials);
  
  return (
    <>
      <group {...props} >
        {Object.keys(nodes).map((key) => {
          const node = nodes[key];
          return (
            node.isMesh && (
              <mesh key={key} geometry={node.geometry} material={node.material} />
            )
          );
        })}
      </group>
    </>
  )
}
