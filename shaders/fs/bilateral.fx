#define INV_SQRT_2_PI 0.398942280401433
#define KERNEL_SIZE 43

varying vec2 vUvCenter;
varying vec2 vUv;

uniform sampler2D tLuminanceMap;
uniform vec2 uImageIncrement;
uniform float cKernel[KERNEL_SIZE];

float photometricWeight(const in float intensityDistance) {
  float stdDev = 0.4;
  float weight = ( INV_SQRT_2_PI / stdDev ) * exp( -( intensityDistance * intensityDistance ) / ( 2.0 * stdDev * stdDev ) );
  return weight;
}

void main(void) {
  float weight;
  float intensity;
  float intensityDistance;
  float numerator = 0.0;
  float denominator = 0.0;

  vec2 imageCoord = vUv;

  float intensityAtCenter = texture2D( tLuminanceMap, vUvCenter ).r;

  for (int i = 0; i < KERNEL_SIZE; ++i) {
    intensity = texture2D( tLuminanceMap, imageCoord).r;
    intensityDistance = abs( intensity - intensityAtCenter);

    weight = cKernel[i] * photometricWeight( intensityDistance );

    numerator += weight * intensity;
    denominator += weight;

    imageCoord += uImageIncrement;
  }

  gl_FragColor = vec4( vec3( numerator / denominator ), 1.0);
}
