import { Float, PivotControls, useGLTF, useTexture } from "@react-three/drei";

const Deep = () => {
  const { nodes } = useGLTF("./model/pirate.glb");
  const anchorBaked = useTexture("./model/bg-baked.jpg");
  anchorBaked.flipY = false;

  return (
    <>
      {/* ANCHOR */}
      <mesh
        geometry={nodes.bakedAnchor.geometry}
        position={[-1.5, -0.5, 1]}
        rotation-y={Math.PI * 0.8}
      >
        <meshBasicMaterial map={anchorBaked} />
      </mesh>

      {/* CHEST TOP*/}
      <mesh
        geometry={nodes.chestTop.geometry}
        position={[2, -6.65, 0]}
        rotation-y={Math.PI * -0.5}
        rotation-z={Math.PI * -0.5}
      >
        <meshBasicMaterial map={anchorBaked} />
      </mesh>

      {/* CHEST BUTTON*/}
      <mesh
        geometry={nodes.chestButton.geometry}
        position={[2, -7, 0]}
        rotation-y={Math.PI * -0.5}
      >
        <meshBasicMaterial map={anchorBaked} />
      </mesh>

      {/* FLOOR */}
      <mesh rotation-x={-Math.PI * 0.5} position={[2, -7.19, 0]}>
        <planeGeometry args={[15, 15, 1, 1]} />
        <meshBasicMaterial color={"#3D322C"} />
      </mesh>
    </>
  );
};

export default Deep;
