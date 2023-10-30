uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform sampler2D uTexture;

varying float vElevation;
varying vec2 vUv;

void main() 
{
  vec4 textureColor = texture2D(uTexture, vUv);
  float strength = distance(textureColor.rgb, vec3(0.0));
  strength = clamp(strength, 0.1, 1.0);

  vec3 blackColor = vec3(0.0, 0.0,0.0);
  vec3 colorDarker = mix(blackColor, uDepthColor, 0.1);
  float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
  vec3 color = mix(uDepthColor,uSurfaceColor,mixStrength);
  vec3 mixColor = mix(colorDarker, color, strength);

  gl_FragColor = vec4(mixColor, 1.0);
  // gl_FragColor = vec4(textureColor);
}