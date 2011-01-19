const vec3 luminanceVector = vec3(0.27, 0.67, 0.006);

uniform sampler2D tHDR;

varying vec2 vUv;

void main() {
  vec4 color = texture2D(tHDR, vUv);
  float luminance = dot(color.xyz, luminanceVector);
  gl_FragColor = vec4(luminance, luminance, luminance, 1.0);
}
