uniform sampler2D tTexture;

varying vec2 vUv;

void main() {
  gl_FragColor = texture2D(tTexture, vUv);
}
