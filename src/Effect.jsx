import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

const Effect = () => {
  return (
    <EffectComposer disableNormalPass>
      <Vignette offset={0.3} darkness={0.9} />
      <Bloom
        luminanceThreshold={0}
        mipmapBlur
        luminanceSmoothing={0.2}
        intensity={0.1}
      />
    </EffectComposer>
  );
};

export default Effect;
