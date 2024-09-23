"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Center, Environment } from "@react-three/drei";
import { Model } from "./Model";

const Experience = ({ cubeRotation }) => {
  return (
    <Canvas className="rounded-lg" camera={{ position: [-8, 3, 8] }}>
      <color attach="background" args={["#F2F0EA"]} />
      <Environment files={"/default.exr"} blur={1} />
      <Center>
        <Model cubeRotation={cubeRotation} />
      </Center>

      <CameraControls
        minDistance={6}
        maxDistance={20}
        verticalDragToForward={true}
      />
    </Canvas>
  );
};

export default Experience;
