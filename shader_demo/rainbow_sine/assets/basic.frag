precision mediump float;

// Set in the vertex shader and passed in (aTexCoord)
varying vec2 fragCoord;
uniform float millis;

void main() {
  vec2 p = fragCoord * 2.0 - 1.0;
  float time = millis / 1000.0;

  vec3 rCol = vec3(0.9, 0.0, 0.3);
  vec3 gCol = vec3(0.0, 0.9, 0.3);
  vec3 bCol = vec3(0.0, 0.3, 0.9);
  vec3 yCol = vec3(0.9, 0.9, 0.3);

  float a = sin(p.y * 5.0 - time * 0.2) / 2.0;
  float b = cos(p.y * 5.0 - time * 0.2) / 2.0;
  float c = sin(p.y * 5.0 - time * 0.2 + 3.14) / 2.0;
  float d = cos(p.y * 5.0 - time * 0.2 + 3.14) / 2.0;

  float e = 0.01 / abs(p.x + a);
  float f = 0.01 / abs(p.x + b);
  float g = 0.01 / abs(p.x + c);
  float h = 0.01 / abs(p.x + d);

  vec3 destCol = rCol * e + gCol * f + bCol * g + yCol * h;

  gl_FragColor = vec4(destCol, 1.0);
}
