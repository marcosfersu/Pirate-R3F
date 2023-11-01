import { useGLTF } from "@react-three/drei";

const Light = () => {
  const { nodes } = useGLTF("./model/pirate.glb");
  return (
    <>
      {/* LIGHT */}
      <mesh
        geometry={nodes.bakedLight.geometry}
        scale={0.2}
        position={[0.42, -0.585, -1.655]}
      >
        <meshBasicMaterial color={[2.5 * 8, 2 * 8, 1 * 8]} toneMapped={false} />
      </mesh>
      {/* LANTER */}
      <mesh
        geometry={nodes.bakedLanter.geometry}
        scale={0.2}
        position={[0.42, -0.585, -1.655]}
      >
        <meshBasicMaterial
          color={[7 * 15, 5 * 15, 3 * 15]}
          toneMapped={false}
        />
      </mesh>
    </>
  );
};

export default Light;
