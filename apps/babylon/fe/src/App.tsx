import { Scene } from '@babylonjs/core'
import EngineCanvas from './components/organization/EngineCanvas';

function App() {
  return <EngineCanvas 
            antialias={false} 
            engineOptions={{
              disableWebGL2Support: false,
              failIfMajorPerformanceCaveat: false,
            }} 
            adaptToDeviceRatio={false} 
            sceneOptions={{
              virtual: true,
            }} 
            onRender={function (scene: Scene): void {
              console.log('Render Started : ', scene);
              throw new Error('Function not implemented.')
            } } 
            onSceneReady={function (scene: Scene): void {
              console.log('Scene Ready : ', scene);
              throw new Error('Function not implemented.')
            } } />
}

export default App
