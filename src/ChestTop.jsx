import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useState } from "react";

const ChestTop = ({ coinView, setCoinView }) => {
  const { nodes, animations, scene } = useGLTF("./model/chestTop.glb");
  const anchorBaked = useTexture("./model/bg-baked.jpg");
  anchorBaked.flipY = false;

  const [active, setActive] = useState(0);
  // create a common spring that will be used later to interpolate other values
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  // interpolate values from commong spring
  const rotation = spring.to([0, Math.PI * 0.5], [Math.PI * -0.5, -1.4]);
  return (
    <>
      <a.mesh
        geometry={nodes.chestTop.geometry}
        position={[2, -5.6, -0.265]}
        rotation-y={Math.PI * -0.5}
        rotation-z={rotation}
        onPointerOver={() => setActive(Number(!active))}
        onPointerOut={() => setActive(Number(!active))}
        onClick={() => setCoinView(!coinView)}
      >
        <meshBasicMaterial map={anchorBaked} />
      </a.mesh>
      {/* CHEST */}
      <mesh position={[2, -5.6, 0]} scale={[1, 0.3, 0.3]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial
          color={[7 * 15, 5.5 * 15, 3 * 15]}
          toneMapped={false}
        />
      </mesh>
    </>
  );
};

export default ChestTop;
