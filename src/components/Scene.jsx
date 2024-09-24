import React, { Suspense, useEffect, useRef } from "react";
import {
  CameraControls,
  OrbitControls,
  Center,
  Environment,
  Bounds,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

import { Model } from "@/components/Model";

function Scene({ cameraPosition }) {
  const orbitControlsRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (orbitControlsRef.current) {
      gsap.to(camera.position, {
        x: cameraPosition.x,
        y: cameraPosition.y,
        z: cameraPosition.z,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          orbitControlsRef.current.update();
        },
      });
    }
    return () => {};
  }, [cameraPosition, camera]);

  return (
    <>
      <OrbitControls
        ref={orbitControlsRef}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        minDistance={8}
        maxDistance={16}
      />
      <Center>
        <Model />
      </Center>
    </>
  );
}

export default Scene;
