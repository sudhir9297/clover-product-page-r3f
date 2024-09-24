import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

export function Model(props) {
  const ref = useRef();
  const prevRotation = useRef({ x: 0, y: 0, z: 0 });
  const { nodes, materials } = useGLTF("/heel.glb");

  useEffect(() => {
    if (props.cubeRotation) {
      gsap.to(prevRotation.current, {
        x: props.cubeRotation.x,
        y: props.cubeRotation.y,
        z: props.cubeRotation.z,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          ref.current.rotation.x = prevRotation.current.x;
          ref.current.rotation.y = prevRotation.current.y;
          ref.current.rotation.z = prevRotation.current.z;
        },
      });
    }
  }, [props.cubeRotation]);

  return (
    <group ref={ref} {...props} dispose={null} position={[0, -3, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sole.geometry}
        material={materials.sole}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_base.geometry}
        material={materials.inner_base}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_side.geometry}
        material={materials.inner_side}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.body}
      >
        {/* <meshStandardMaterial
          color="#C90023"
          metalness={0.0001}
          roughness={0.077273}
        /> */}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shadow_plane.geometry}
        material={materials.shadow_plane}
        scale={4.77}
      />
    </group>
  );
}

useGLTF.preload("/heel.glb");
