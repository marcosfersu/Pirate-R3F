import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { useState } from "react";

const Effect = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <EffectComposer disableNormalPass>
      <Vignette offset={0.3} darkness={isMobile ? 0.9 : 0.7} />
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
