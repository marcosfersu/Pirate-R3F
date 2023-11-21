import { useGLTF, useTexture, useAnimations } from "@react-three/drei";
import ChestTop from "./ChestTop";

const Deep = ({ coinView, setCoinView }) => {
  const { nodes } = useGLTF("./model/pirate.glb");
  const anchorBaked = useTexture("./model/bg-baked.jpg");
  anchorBaked.flipY = false;

  return (
    <>
      {/* ANCHOR */}
      <mesh
        geometry={nodes.bakedAnchor.geometry}
        position={[-1.5, -0.3, 1.3]}
        rotation-y={Math.PI * 0.8}
      >
        <meshBasicMaterial map={anchorBaked} />
      </mesh>

      {/* CHEST KEY*/}
      <mesh
        geometry={nodes.chestkey.geometry}
        position={[2, -5.61, 0.28]}
        rotation-y={Math.PI * -0.5}
      >
        <meshBasicMaterial map={anchorBaked} />
      </mesh>

      {/* CHEST TOP*/}
      {/* <mesh
        ref={ref}
        geometry={nodes.chestTop.geometry}
        position={[2, -5.6, -0.265]}
        rotation-y={Math.PI * -0.5}
        rotation-z={Math.PI * -0.5}
      >
        <meshBasicMaterial map={anchorBaked} />
      </mesh> */}
      <ChestTop coinView={coinView} setCoinView={setCoinView} />

      {/* CHEST BUTTON*/}
      <mesh
        geometry={nodes.chestButton.geometry}
        position={[2, -5.8, 0]}
        rotation-y={Math.PI * -0.5}
      >
        <meshBasicMaterial map={anchorBaked} />
      </mesh>

      {/* FLOOR */}
      <mesh
        geometry={nodes.deepFloor.geometry}
        rotation-y={Math.PI * -0.5}
        position={[1.38, -5.99, -0.2]}
      >
        <meshBasicMaterial map={anchorBaked} />
      </mesh>
    </>
  );
};

export default Deep;
