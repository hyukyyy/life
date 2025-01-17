import { easing } from "maath"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sky, Bvh, CameraControls, PerspectiveCamera, FirstPersonControls, KeyboardControls } from "@react-three/drei"
import { EffectComposer, Selection, Outline, N8AO, TiltShift2, ToneMapping } from "@react-three/postprocessing"
import { CityScene } from "../components/template/CityScene"
import * as THREE from 'three';

export const City = () => { 
  return (
  <KeyboardControls
    map={[
      { name: "forward", keys: ["ArrowUp", "w", "W"] },
      { name: "backward", keys: ["ArrowDown", "s", "S"] },
      { name: "left", keys: ["ArrowLeft", "a", "A"] },
      { name: "right", keys: ["ArrowRight", "d", "D"] },
      { name: "jump", keys: ["Space"] },
  ]}>
    <Canvas 
      style={{width: '100vw', height: '100vh'}} 
      flat 
      dpr={[1, 1.5]} 
      gl={{ antialias: false }} 
    >
      {/* <FirstPersonControls object={new THREE.PerspectiveCamera()}/> */}
      {/* <PerspectiveCamera makeDefault ref={cameraRef} /> */}
      {/* <CameraControls minPolarAngle={0} masdxPolarAngle={Math.PI / 1.6} /> */}
      <ambientLight intensity={1.5 * Math.PI} />
      <Sky />
      <Bvh firstHitOnly>
        <Selection>
          <Effects />
          <CityScene rotation={[0, Math.PI / 2, 0]} position={[0, 0, 0]} />
        </Selection>
      </Bvh>
    </Canvas>
  </KeyboardControls>
)
}
function Effects() {
  const { size } = useThree();
  
  // useFrame((state, delta) => {
  //   console.log(state);
  //   easing.damp3(state.camera.position, [state.camera.position.x + 100, state.camera.position.y, state.camera.position.z], 0, delta)
  //   state.camera.lookAt(0, 0, 0);
    
  //   // const speed = 0.1;
  //   // if (state.keys.w) camera.position.z -= speed;
  //   // if (state.keys.s) camera.position.z += speed;
  //   // if (state.keys.a) camera.position.x -= speed;
  //   // if (state.keys.d) camera.position.x += speed;
  // });

  return (
    <EffectComposer 
      stencilBuffer disableNormalPass autoClear={false} multisampling={4}>
      <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} />
      <Outline visibleEdgeColor="white" hiddenEdgeColor="white" blur width={size.width * 1.25} edgeStrength={10} />
      <TiltShift2 samples={5} blur={0.1} />
      <ToneMapping />
    </EffectComposer>
  );
}
