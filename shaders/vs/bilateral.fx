#define KERNEL_SIZE 43

varying vec2 vUv;
varying vec2 vUvCenter;

uniform vec2 uImageIncrement;

void main() {
    vUvCenter = uv;
    vUv = uv - ((float(KERNEL_SIZE) - 1.0) / 2.0) * uImageIncrement;
    gl_Position = vec4(position, 1.0);
}
