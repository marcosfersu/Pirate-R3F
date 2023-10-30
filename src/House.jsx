import { useGLTF, useTexture } from "@react-three/drei";

const House = () => {
	const { nodes } = useGLTF("./model/pirate.glb");
	const bakedTextureDock = useTexture("./model/baked-dock.jpg");
	const bakedTextureHouse = useTexture("./model/house-baked.jpg");
	const boatPalmRHouseBaked = useTexture("./model/boat-palm-rhouse-baked.jpg");
	bakedTextureDock.flipY = false;
	bakedTextureHouse.flipY = false;
	boatPalmRHouseBaked.flipY = false;

	return (
		<>
			{/* ROPE */}
			<mesh
				geometry={nodes.bakedRope.geometry}
				scale={0.2}
				position={[1.0, -0.87, -2.14]}
			>
				<meshBasicMaterial color={"#211d16"} />
			</mesh>
			{/* HOUSE RIGHT*/}
			<mesh
				geometry={nodes.bakedHouseRight.geometry}
				scale={0.2}
				position={[0.33, 0, -2.36]}
			>
				<meshBasicMaterial map={boatPalmRHouseBaked} />
			</mesh>
			{/* HOUSE */}
			<mesh
				geometry={nodes.bakedHouse.geometry}
				scale={0.2}
				position={[0.12, -0.582, -1.805]}
			>
				<meshBasicMaterial map={bakedTextureHouse} />
			</mesh>
			{/* DOCK */}
			<mesh
				geometry={nodes.bakedDock.geometry}
				scale={0.2}
				position={[0.24, -0.76, -1.53]}
			>
				<meshBasicMaterial map={bakedTextureDock} />
			</mesh>
		</>
	);
};

export default House;
