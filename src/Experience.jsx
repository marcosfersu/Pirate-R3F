import {
  Center,
  OrbitControls,
  useScroll,
  ScrollControls,
  Sparkles,
  Text,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import Water from "./Water";
import House from "./House";
import Light from "./Light";
import Moon from "./Moon";
import Miscellaneous from "./Miscellaneous";
import Background from "./Background";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import WaterBg from "./WaterBg";
import Flag from "./Flag";
import Deep from "./Deep";
import Effect from "./Effect";

import { useState } from "react";
import CoinPage from "./CoinPage";

export default function Experience() {
  const [coinView, setCoinView] = useState(false);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <color args={["#0B3C54"]} attach={"background"} />

      <TextScene />
      <TextChest />
      <ScrollControls pages={8}>
        <PirateScene coinView={coinView} setCoinView={setCoinView} />
        {/* Postprocessing */}
        <Effect />
        {/* STARTS */}
        <Sparkles
          size={2.5}
          speed={0}
          scale={[0, 1.5, 10]}
          position={[-1, 1.5, -2]}
          rotation-y={Math.PI * 0.8}
          color={"#80806A"}
        />
        {/* Camera movements */}
        {/* <OrbitControls makeDefault /> */}
        {!coinView && <CameraRig />}
        {coinView && <CoinPage />}
      </ScrollControls>
    </>
  );
}

function PirateScene({ coinView, setCoinView }) {
  return (
    <>
      <Center>
        <Miscellaneous />
        <Light />
        <House />
        <Water />
        <Moon />
        <Background />
      </Center>
      <Flag />
      <Deep coinView={coinView} setCoinView={setCoinView} />
      <WaterBg />
    </>
  );
}

function TextScene() {
  return (
    <>
      <Text
        font="./kaushan-script-v16-latin-regular.woff"
        fontSize={0.1}
        position={[2.2, 0.4, -0.5]}
        rotation-y={1}
        maxWidth={1}
        color={"#917E50"}
        fillOpacity={1}
        lineHeight={1}
      >
        The Pirate's House
      </Text>
    </>
  );
}
function TextChest() {
  return (
    <>
      <Text
        font="./kaushan-script-v16-latin-regular.woff"
        fontSize={0.1}
        position={[1.6, -5, 1.7]}
        rotation-y={1}
        maxWidth={1}
        color={"#917E50"}
        fillOpacity={1}
        lineHeight={1}
      >
        Click Me
      </Text>
    </>
  );
}

function CameraRig() {
  const scrollPage = useScroll();

  useFrame((state, delta) => {
    const offset = scrollPage.offset;
    const pages = scrollPage.pages;

    easing.damp3(
      state.camera.position,
      [
        -1 + ((-state.pointer.x / 2) * state.viewport.width) / 35 + 4.64,
        -1 * (offset * pages * 0.5) + 0.1 + (1 + state.pointer.y) / 15,

        (-state.pointer.x * state.viewport.width) / 20 + 2.44,
      ],
      0.5,
      delta
    );
    offset < 0.44
      ? state.camera.lookAt(1, -0.1, 0)
      : state.camera.lookAt(1, offset * pages * -0.7, 0);
  });
}
