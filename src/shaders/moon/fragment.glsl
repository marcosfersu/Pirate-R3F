uniform vec3 uMoonColor;
uniform vec3 uBgColor;

varying vec2 vUv;

void main()
{
    float strength = step(0.5, distance(vUv, vec2(0.5)) + 0.25);
    vec3 color = mix(uMoonColor, uBgColor, strength);

    gl_FragColor = vec4(vec3(color), 1.0);
}