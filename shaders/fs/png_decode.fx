uniform sampler2D tPNG;

varying vec2 vUv;

vec3 decode_pnghdr(const in vec4 color) {
  vec4 res = color * color;
  float ri = pow(2.0, res.w * 32.0 - 16.0);
  res.xyz = res.xyz * ri;
  return res.xyz;
}

void main() {
  vec4 color = texture2D(tPNG, vUv);
  color.xyz = decode_pnghdr(color);
  gl_FragColor = vec4(color.xyz, 1.0);
}
