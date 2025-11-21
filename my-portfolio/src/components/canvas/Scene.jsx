import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import Starfield from "./Starfield";

const Scene = () => {
  return (
    <div
      className="canvas-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Starfield />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
