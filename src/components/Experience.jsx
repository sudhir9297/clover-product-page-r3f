import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, Lightformer } from "@react-three/drei";

import Scene from "@/components/Scene";
import { LoadingAnimation } from "@/components/LoadingAnimation";

export default function Experience() {
  function Fallback() {
    return (
      <Html>
        <LoadingAnimation />
      </Html>
    );
  }

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%" }}
      camera={{ fov: 45 }}
    >
      <Environment files={"/default.exr"} resolution={512}>
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 0]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 9]}
          scale={[10, 1, 1]}
        />

        <Lightformer
          intensity={12}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          scale={[100, 2, 1]}
        />
        <Lightformer
          intensity={12}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          scale={[100, 2, 1]}
        />

        <Lightformer
          form="ring"
          color="white"
          intensity={10}
          scale={2}
          position={[10, 5, 10]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>

      <Suspense fallback={<Fallback />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
