import { shaderMaterial } from "@react-three/drei";
import moonBgVertexShader from "./shaders/moon/vertex.glsl";
import moonFragmentShader from "./shaders/moon/fragment.glsl";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const MoonMaterial = shaderMaterial(
  {
    uMoonColor: new THREE.Color("#f7f6eb"),
  },
  moonBgVertexShader,
  moonFragmentShader
);

extend({ MoonMaterial });

const WaterBg = () => {
  const moonMaterial = useRef();

  return (
    <mesh rotation-y={Math.PI * 0.25} position={[-3.9, -0.55, -2]}>
      <planeGeometry args={[1.5, 1.5, 1, 1]} />
      <moonMaterial ref={moonMaterial} transparent />
    </mesh>
  );
};

export default WaterBg;
