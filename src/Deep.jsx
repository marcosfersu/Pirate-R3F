import { Float, PivotControls, useGLTF, useTexture } from "@react-three/drei";

const Deep = () => {
  const { nodes } = useGLTF("./model/pirate.glb");
  const anchorBaked = useTexture("./model/bg-baked.jpg");
  anchorBaked.flipY = false;
  console.log(nodes.anchor.geometry, anchorBaked);
  return (
    <>
      {/* ANCHOR */}

      <mesh
        geometry={nodes.anchor.geometry}
        position={[-1.5, -0.5, 1]}
        rotation-y={Math.PI * 0.8}
      >
        <meshBasicMaterial map={anchorBaked} />
      </mesh>
    </>
  );
};

export default Deep;
