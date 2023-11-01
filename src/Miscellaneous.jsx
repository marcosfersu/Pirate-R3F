import { Float, useGLTF, useTexture } from "@react-three/drei";

const Miscellaneous = () => {
	const { nodes } = useGLTF("./model/pirate.glb");
	const boatPalmRHouseBaked = useTexture("./model/boat-palm-rhouse-baked.jpg");
	boatPalmRHouseBaked.flipY = false;
	const barrilBaked = useTexture("./model/bg-baked.jpg");
	barrilBaked.flipY = false;

	return (
		<>
			{/* BOAT */}
			<Float
				speed={4} // Animation speed, defaults to 1
				rotationIntensity={0.05} // XYZ rotation intensity, defaults to 1
				floatIntensity={0.05} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
				floatingRange={[0, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
			>
				<mesh
					geometry={nodes.boat.geometry}
					scale={0.2}
					position={[1.03, -0.89, -2.05]}
					rotation-y={Math.PI}
				>
					<meshBasicMaterial map={boatPalmRHouseBaked} toneMapped={false} />
				</mesh>

				{/* BOAT ROPE */}

				<mesh
					geometry={nodes.boatRope.geometry}
					scale={0.2}
					position={[0.99, -0.87, -2.14]}
				>
					<meshBasicMaterial color={"#211d16"} toneMapped={false} />
				</mesh>
			</Float>
			{/* FLOAT BARRIL */}
			<Float
				speed={7} // Animation speed, defaults to 1
				rotationIntensity={0.02} // XYZ rotation intensity, defaults to 1
				floatIntensity={0.02} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
				floatingRange={[0, 0.01]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
			>
				<mesh
					geometry={nodes.barrielFloat.geometry}
					scale={0.2}
					position={[0.75, -0.882, -2.8]}
					rotation-x={Math.PI * 0.1}
				>
					<meshBasicMaterial map={barrilBaked} toneMapped={false} />
				</mesh>
			</Float>
			{/* PALM */}
			<mesh
				geometry={nodes.palm.geometry}
				scale={0.2}
				position={[0.055, -0.63, -2.86]}
				rotation-y={Math.PI * 0.285}
			>
				<meshBasicMaterial map={boatPalmRHouseBaked} toneMapped={false} />
			</mesh>
		</>
	);
};

export default Miscellaneous;
