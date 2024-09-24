import React, { useContext } from "react";
import { useGLTF } from "@react-three/drei";
import { StoreContext } from "@/context/store";

export function Model(props) {
  const { currentVariation } = useContext(StoreContext);
  const { nodes, materials } = useGLTF("/heel.glb");

  return (
    <group {...props} dispose={null} position={[0, -3, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sole.geometry}
        material={materials.sole}
      >
        <meshStandardMaterial
          side={2}
          color={currentVariation.meshNameList["sole"].color}
          metalness={currentVariation.meshNameList["sole"].metalness}
          roughness={currentVariation.meshNameList["sole"].roughness}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_base.geometry}
        // material={materials.inner_base}
      >
        <meshStandardMaterial
          side={1}
          color={currentVariation.meshNameList["inner_base"].color}
          metalness={currentVariation.meshNameList["inner_base"].metalness}
          roughness={currentVariation.meshNameList["inner_base"].roughness}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_side.geometry}
        // material={materials.inner_side}
      >
        <meshStandardMaterial
          side={2}
          color={currentVariation.meshNameList["inner_side"].color}
          metalness={currentVariation.meshNameList["inner_side"].metalness}
          roughness={currentVariation.meshNameList["inner_side"].roughness}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        // material={materials.body}
      >
        <meshStandardMaterial
          side={2}
          color={currentVariation.meshNameList["body"].color}
          metalness={currentVariation.meshNameList["body"].metalness}
          roughness={currentVariation.meshNameList["body"].roughness}
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
