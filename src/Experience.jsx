import {
  Center,
  OrbitControls,
  useScroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import Water from "./Water";
import House from "./House";
import Light from "./Light";
import Miscellaneous from "./Miscellaneous";
import Background from "./Background";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Vignette,
} from "@react-three/postprocessing";
import WaterBg from "./WaterBg";

export default function Experience() {
  return (
    <>
      {/* <Perf position="top-left" /> */}
      <color args={["#0B3C54"]} attach={"background"} />
      {/* <OrbitControls makeDefault /> */}

      <ScrollControls pages={10}>
        <Center>
          <PirateScene />
        </Center>
        <WaterBg />
        {/* Postprocessing */}
        <EffectComposer disableNormalPass>
          <Vignette offset={0.3} darkness={0.9} />
          <Bloom
            luminanceThreshold={0.2}
            mipmapBlur
            luminanceSmoothing={0.3}
            intensity={2}
          />
          {/*
          <DepthOfField
            target={[blur.x, blur.y, blur.z]}
            focalLength={0.025}
            focusDistance={0.025}
            bokehScale={5}
          />
          */}
        </EffectComposer>
        <Sparkles
          size={1}
          speed={0}
          scale={[2, 1, 10]}
          position={[-1, 1, -2]}
          rotation-y={Math.PI * 0.8}
        />
        {/* Camera movements */}
        <CameraRig />
      </ScrollControls>
    </>
  );
}

function PirateScene({ ...props }) {
  return (
    <>
      <Miscellaneous />
      <Light />
      <House />
      <Water />
      <Background />
    </>
  );
}

function CameraRig() {
  // This hook gives you offets, ranges and other useful things
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
    offset < 0.4
      ? state.camera.lookAt(1, -0.3, 0)
      : state.camera.lookAt(0, -1 * (offset * pages), 0);
  });
}