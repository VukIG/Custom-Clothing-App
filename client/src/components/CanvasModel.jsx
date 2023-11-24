import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import Scene from '../../public/Scene'

function CanvasModel() {
  return (
    <div className="w-1/2 h-[80vh] absolute left-1/2 top-20">
      <Canvas>
        <ambientLight intensity={0} />
        <OrbitControls enableZoom={false} />
        <Environment preset="sunset"  />
        <Suspense fallback={null} >
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default CanvasModel;
