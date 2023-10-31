import { shaderMaterial } from "@react-three/drei";
import waterVertexShader from "./shaders/water/vertex.glsl";
import waterFragmentShader from "./shaders/water/fragment.glsl";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const textureLoader = new THREE.TextureLoader();
const filterTexture = textureLoader.load("./shaderFilter.jpg");

const WaterMaterial = shaderMaterial(
  {
    uTime: 0,

    uBigWavesSpeed: 0.59,
    uBigWavesElevation: 0.012,
    uBigWavesFrequency: new THREE.Vector2(1.516, 2.986),

    uSmallWaveElevation: 0.1,
    uSmallWaveFrequency: 1.671,
    uSmallWaveSpeed: 0.18,
    uSmallWaveIteration: 3,

    uDepthColor: new THREE.Color("#48677F"),
    uSurfaceColor: new THREE.Color("#7F99A8"),
    uColorOffset: 0.02,
    uColorMultiplier: 5.378,
    uTexture: filterTexture,
  },
  waterVertexShader,
  waterFragmentShader
);

extend({ WaterMaterial });

const Water = () => {
  const waterMaterial = useRef();

  useFrame((state, delta) => {
    waterMaterial.current.uTime += delta;
  });

  return (
    <mesh rotation-x={-Math.PI * 0.5} position={[0, -0.885, -2]}>
      <planeGeometry args={[5, 5, 512, 512]} />
      <waterMaterial ref={waterMaterial} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Water;
