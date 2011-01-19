uniform sampler2D tHDR;
uniform sampler2D tLuminanceMap;
uniform float fExposure;

varying vec2 vUv;

void main(void) {
  vec4 color = texture2D(tHDR, vUv);
  float luminance = texture2D(tLuminanceMap, vUv).x;
  gl_FragColor = vec4(pow(fExposure * color.xyz, vec3(0.474)), 1.0);
}
