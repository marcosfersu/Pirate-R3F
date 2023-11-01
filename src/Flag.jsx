import { shaderMaterial } from "@react-three/drei";
import flagVertexShader from "./shaders/flag/vertex.glsl";
import flagFragmentShader from "./shaders/flag/fragment.glsl";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const textureLoader = new THREE.TextureLoader();
const flagTexture = textureLoader.load("./pirate-flag.jpg");

const FlagMaterial = shaderMaterial(
  {
    uTime: 0,

    uFrequency: new THREE.Vector2(40, 25),

    uTexture: flagTexture,
  },
  flagVertexShader,
  flagFragmentShader
);

extend({ FlagMaterial });

const Flag = () => {
  const flagMaterial = useRef();

  useFrame((state, delta) => {
    flagMaterial.current.uTime += delta;
  });

  return (
    <>
      {/* FLAG */}
      <mesh
        rotation-y={Math.PI * 0.4}
        position={[1.21, 0.64, 1.46]}
        scale={0.15}
      >
        <planeGeometry args={[1.8, 1, 32, 32]} />
        <flagMaterial ref={flagMaterial} />
      </mesh>
    </>
  );
};

export default Flag;
