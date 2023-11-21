import { Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, ScrollControls, useScroll } from "@react-three/drei";
import Coins from "./coinsLayout/Coins";
import * as THREE from "three";

const CoinPage = () => {
  return (
    <>
      <ScrollControls>
        <Suspense fallback={null}>
          <Coins />
          <CameraCoin />
          <TextCoin />
        </Suspense>
      </ScrollControls>
    </>
  );
};

function TextCoin() {
  return (
    <Text
      font="./kaushan-script-v16-latin-regular.woff"
      fontSize={0.2}
      position={[2.8, -2.7, -0.5]}
      rotation-y={0}
      maxWidth={1}
      color={"#fff"}
      fillOpacity={1}
      lineHeight={1}
    >
      Thank You
    </Text>
  );
}

function CameraCoin() {
  const scrollPage = useScroll();
  useFrame((state, delta) => {
    const pages = scrollPage.pages;

    state.camera.position.set(2.8, -pages * 2 - 1, 1.5);
    state.camera.rotation.set(THREE.MathUtils.degToRad(8), 0, 0);
  });
}

export default CoinPage;
