import { useGLTF, useTexture } from "@react-three/drei";

const Background = () => {
	const { nodes } = useGLTF("./model/pirate.glb");
	const BgBaked = useTexture("./model/bg-baked.jpg");

	BgBaked.flipY = false;

	return (
		<mesh
			geometry={nodes.rockBg.geometry}
			scale={0.2}
			position={[-1.28, -0.79, -5.92]}
			rotation-y={Math.PI * -0.7}
		>
			<meshBasicMaterial map={BgBaked} />
		</mesh>
	);
};

export default Background;
