import * as THREE from "three";
import { forwardRef } from "react";
import { extend } from "@react-three/fiber";

class CustomStandardMaterial extends THREE.MeshStandardMaterial {
  constructor(args) {
    super(args);

    this.uniforms = {
      uValueZ: { value: 7.0 },
      uColor1: { value: new THREE.Color("#C90023") },
      uColor2: { value: new THREE.Color("#C90023") },
    };

    this.onBeforeCompile = (shader) => {
      shader.uniforms = {
        ...shader.uniforms,
        ...this.uniforms,
      };

      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        `#include <common>
          varying vec3 uPosition;
          `,
      );

      shader.vertexShader = shader.vertexShader.replace(
        "vViewPosition = - mvPosition.xyz;",
        `vViewPosition = - mvPosition.xyz;
          uPosition = position.xyz;
          `,
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <common>",
        `#include <common>
          uniform float uValueZ;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          varying vec3 uPosition;
          `,
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "vec4 diffuseColor = vec4( diffuse, opacity );",
        `float posZ = (uPosition.y / 1.0) + uValueZ;

          float uValueOffset = (uPosition.y / 1.0) + (uValueZ + 0.25);
          float posZBorder = step(uValueOffset, 0.5);
          posZ = step(posZ ,0.5);
          vec3 borderColor = vec3(1.0, 1.0, 1.0);
          float borderOffset = 0.2;
          vec3 newColor2 = uColor2;
          newColor2 = mix(borderColor, newColor2, posZBorder);
          vec3 finalColor = mix(uColor1, newColor2 , posZ);
          vec4 diffuseColor = vec4( finalColor, opacity );`,
      );
    };

    Object.keys(this.uniforms).forEach((name) =>
      Object.defineProperty(this, name, {
        get: () => this.uniforms[name].value,
        set: (v) => (this.uniforms[name].value = v),
      }),
    );
  }
}

extend({ CustomMaterial: CustomStandardMaterial });

export default forwardRef(function MeshCustomStandardMaterial(props, ref) {
  return <customMaterial ref={ref} {...props} />;
});
