import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Scene from '../../public/Scene';

function CanvasModel() {
  return (
    <div className=" h-[86vh]">
      <Canvas>
        <ambientLight intensity={0} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="sunset" />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default CanvasModel;
