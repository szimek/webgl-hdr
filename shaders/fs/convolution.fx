#define KERNEL_SIZE 43

varying vec2 vUv;

uniform sampler2D tHDR;
uniform vec2 uImageIncrement;
uniform float cKernel[KERNEL_SIZE];

void main(void) {
  vec2 imageCoord = vUv;
  vec4 sum = vec4( 0.0 );

  for( int i = 0; i < KERNEL_SIZE; ++i ) {
    sum += texture2D( tHDR, imageCoord ) * cKernel[i];
    imageCoord += uImageIncrement;
  }

  gl_FragColor = sum;
}
