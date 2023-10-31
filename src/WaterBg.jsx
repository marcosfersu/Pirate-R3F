import { shaderMaterial } from "@react-three/drei";
import waterBgVertexShader from "./shaders/waterBg/vertex.glsl";
import waterBgFragmentShader from "./shaders/waterBg/fragment.glsl";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const WaterBgMaterial = shaderMaterial(
  {
    uDepthColor: new THREE.Color("#0B3C54"),
    uSurfaceColor: new THREE.Color("#657f8b"),
  },
  waterBgVertexShader,
  waterBgFragmentShader
);

extend({ WaterBgMaterial });

const WaterBg = () => {
  const waterBgMaterial = useRef();

  return (
    <mesh rotation-y={Math.PI * 0.25} position={[3.2, -1.6, 2]}>
      <planeGeometry args={[5, 2, 1, 1]} />
      <waterBgMaterial ref={waterBgMaterial} />
    </mesh>
  );
};

export default WaterBg;
