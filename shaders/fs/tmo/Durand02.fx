uniform sampler2D tHDR;
uniform sampler2D tLuminanceMap;
uniform sampler2D tBilateralMap;
uniform float fExposure;

varying vec2 vUv;

void main(void) {
  vec4 color = texture2D(tHDR, vUv);
  float logBase = texture2D(tBilateralMap, vUv).x;
  float Y = texture2D(tLuminanceMap, vUv).x;
  float Yavg = 1.0;
  float Ymax = 100.0;
  float Ymin = 0.1;

  // compressionFactor is called gamma in original source code
  float compressionFactor = 0.3;

  float logY = log(Y);
  float logDetail = logY - logBase;
  float newLogY = logBase * compressionFactor + logDetail;
  color.xyz /= Y;
  color.xyz *= exp(newLogY) * fExposure;

  gl_FragColor = vec4(pow(color.xyz, vec3(1.0/2.2)), 1.0);
}
