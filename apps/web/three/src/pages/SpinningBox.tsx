import { Canvas } from '@react-three/fiber';
import Box from '../components/molecule/Box';


function SpinningBox() {
  return <Canvas style={{
      width: '100vw',
      height: '100vh'
    }}>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <Box />
  </Canvas>
}

export default SpinningBox;
