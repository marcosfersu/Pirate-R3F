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
				<meshBasicMaterial color={"#FFEEA8"} />
			</mesh>
		</>
	);
};

export default Light;
