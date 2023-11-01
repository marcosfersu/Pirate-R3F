import { useGLTF, useTexture } from "@react-three/drei";

const Flag = () => {
	const { nodes } = useGLTF("./model/flag.glb");

	console.log(nodes);
	return (
		<>
			{/* FLAG */}
			<mesh
				geometry={nodes.flag.geometry}
				scale={0.2}
				position={[1.0, -0.87, -2.14]}
			>
				<meshBasicMaterial color={"#211d16"} toneMapped={false} />
			</mesh>
		</>
	);
};

export default Flag;
