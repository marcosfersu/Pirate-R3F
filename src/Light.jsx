import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

const Light = () => {
	const { nodes } = useGLTF("./model/pirate.glb");
	// const { colorLight } = useControls("light", {
	// 	colorLight: "#FFEEA8",
	// });
	return (
		<>
			{/* LIGHT */}
			<mesh
				geometry={nodes.bakedLight.geometry}
				scale={0.2}
				position={[0.42, -0.585, -1.655]}
			>
				<meshBasicMaterial
					color={[2.5 * 10, 2 * 10, 1 * 10]}
					toneMapped={false}
				/>
			</mesh>
		</>
	);
};

export default Light;
