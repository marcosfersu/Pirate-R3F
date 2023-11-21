import * as THREE from "three";
import { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Detailed, useTexture } from "@react-three/drei";

function Coin({ index, z, speed }) {
  const ref = useRef();

  const { viewport, camera } = useThree();

  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  const { nodes } = useGLTF("./model/pirate.glb");
  const anchorBaked = useTexture("./model/bg-baked.jpg");
  anchorBaked.flipY = false;

  const [data] = useState({
    y: THREE.MathUtils.randFloatSpread(height * 2),

    x: THREE.MathUtils.randFloatSpread(2),

    spin: THREE.MathUtils.randFloat(8, 12),

    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, dt) => {
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z
      );

    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin)
    );

    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });

  return (
    <Detailed ref={ref} distances={[0, 65, 80]}>
      <mesh geometry={nodes.coin.geometry}>
        <meshBasicMaterial map={anchorBaked} toneMapped={false} />
      </mesh>
    </Detailed>
  );
}

export default function Coins({
  speed = 1,
  count = 80,
  depth = 5,
  easing = (x) => Math.sqrt(0.5 - Math.pow(x - 1, 2)),
}) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <Coin
          key={i}
          index={i}
          z={Math.round(easing(i / count) * depth)}
          speed={speed}
        />
      ))}
    </>
  );
}
