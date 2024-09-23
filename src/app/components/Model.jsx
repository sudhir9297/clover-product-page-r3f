import React, { act, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { gsap } from "gsap";

export function Model(props) {
  const ref = useRef();
  const prevRotation = useRef({ x: 0, y: 0, z: 0 });
  const { nodes, materials, animations } = useGLTF("/gold_dress-v3.glb");
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions) {
      actions["Walk Cycle"].reset().fadeIn(0.5).play();
    }
  }, [actions]);

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
    <group ref={ref} {...props} dispose={null}>
      <mesh
        name="Dress"
        castShadow
        receiveShadow
        geometry={nodes.Dress.geometry}
        material={materials.Dress}
        morphTargetDictionary={nodes.Dress.morphTargetDictionary}
        morphTargetInfluences={nodes.Dress.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("/gold_dress-v3.glb");
