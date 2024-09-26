import React, { createRef, useContext, useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import { StoreContext } from "@/context/store";
import MeshCustomStandardMaterial from "@/shader/customStandardMaterial";

export function Model(props) {
  const refs = useRef([createRef(), createRef(), createRef(), createRef()]);
  const { currentVariation } = useContext(StoreContext);
  const { nodes, materials } = useGLTF("/heel.glb");

  const meshList = currentVariation.meshNameList;

  useEffect(() => {
    refs.current.forEach((ref) => {
      if (ref.current) {
        const name = ref.current.name;
        const currentColor = `0x${meshList[name].color.replace("#", "")}`;
        ref.current.uniforms.uValueZ.value = 7.0;
        ref.current.uniforms.uColor2.value = new THREE.Color().setHex(
          currentColor,
        );

        gsap.to(ref.current.uniforms.uValueZ, {
          duration: 0.75,
          value: -6.0,
          ease: "linear",
          onComplete() {
            ref.current.uniforms.uValueZ.value = 7.0;
            ref.current.uniforms.uColor1.value = new THREE.Color().setHex(
              currentColor,
            );
          },
        });
      }
    });

    return () => {};
  }, [currentVariation]);

  return (
    <group {...props} dispose={null} position={[0, -3, 0]}>
      <mesh geometry={nodes.sole.geometry} material={materials.sole}>
        <MeshCustomStandardMaterial
          ref={refs.current[0]}
          name="sole"
          side={2}
          metalness={meshList["sole"].metalness}
          roughness={meshList["sole"].roughness}
        />
      </mesh>
      <mesh geometry={nodes.inner_base.geometry}>
        <MeshCustomStandardMaterial
          ref={refs.current[1]}
          name="inner_base"
          side={1}
          metalness={meshList["inner_base"].metalness}
          roughness={meshList["inner_base"].roughness}
        />
      </mesh>
      <mesh geometry={nodes.inner_side.geometry}>
        <MeshCustomStandardMaterial
          ref={refs.current[2]}
          name="inner_side"
          side={2}
          metalness={meshList["inner_side"].metalness}
          roughness={meshList["inner_side"].roughness}
        />
      </mesh>
      <mesh geometry={nodes.body.geometry}>
        <MeshCustomStandardMaterial
          ref={refs.current[3]}
          name="body"
          side={2}
          metalness={meshList["body"].metalness}
          roughness={meshList["body"].roughness}
        />
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
