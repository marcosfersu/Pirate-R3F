uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;

varying vec2 vUv;

void main()
{
    float strength = 1.0 - vUv.y * 0.05;
    vec3 color = mix(uSurfaceColor, uDepthColor, strength);

    gl_FragColor = vec4(vec3(color), 1.0);
}