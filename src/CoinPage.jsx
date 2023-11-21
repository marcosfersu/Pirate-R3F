import { Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, ScrollControls, useScroll } from "@react-three/drei";
import Coins from "./coinsLayout/Coins";
import * as THREE from "three";
import { useState } from "react";

const CoinPage = ({ isMobile }) => {
  return (
    <>
      <ScrollControls>
        <Suspense fallback={null}>
          <Coins />
          <CameraCoin isMobile={isMobile} />
          <TextCoin isMobile={isMobile} />
        </Suspense>
      </ScrollControls>
    </>
  );
};

function TextCoin({ isMobile }) {
  return (
    <Text
      font="./kaushan-script-v16-latin-regular.woff"
      fontSize={isMobile ? 0.1 : 0.2}
      position={[isMobile ? 1.95 : 2.8, -2.7, -0.5]}
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

function CameraCoin({ isMobile }) {
  const scrollPage = useScroll();
  useFrame((state, delta) => {
    const pages = scrollPage.pages;

    state.camera.position.set(isMobile ? 2 : 2.8, -pages * 2 - 1, 1.5);
    state.camera.rotation.set(THREE.MathUtils.degToRad(8), 0, 0);
  });
}

export default CoinPage;
