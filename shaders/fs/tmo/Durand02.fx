uniform sampler2D tHDR;
uniform sampler2D tLuminanceMap;
uniform sampler2D tBilateralMap;
uniform float fExposure;
uniform float fGamma;

varying vec2 vUv;

void main(void) {
  vec3 luminanceVector = vec3(20.0/61.0, 40.0/61.0, 1.0/61.0);

  vec4 color = texture2D( tHDR, vUv );

  float Yavg = 0.25;
  float Ymax = 150.0;
  float Ymin = 0.0001;

  float Y = dot( color.rgb, luminanceVector );
  color.rgb /= Y;
  float logY = log(Y);
  float logBase = log( texture2D( tBilateralMap, vUv ).x );
  float logDetail = logY - logBase;

  float baseFactor = 5.0;
  float compressionFactor = baseFactor / (log(Ymax) - log(Ymin));
  // float compressionFactor = 0.3;

  float outLogY = logBase * compressionFactor + logDetail;
  float outY = exp( outLogY );
  color.rgb *= outY * fExposure;

  gl_FragColor = vec4(pow(color.rgb, vec3(1.0 / fGamma)), 1.0);
}
