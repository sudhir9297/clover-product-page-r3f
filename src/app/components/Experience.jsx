"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

const Experience = ({ cubeRotation }) => {
  return (
    <Canvas className="rounded-lg" camera={{ position: [0, 0, 2], far: 1000 }}>
      <color attach="background" args={["#F2F0EA"]} />
      <OrbitControls />
      <Environment preset="city" blur={1} />
      <Model cubeRotation={cubeRotation} />
    </Canvas>
  );
};

export default Experience;
