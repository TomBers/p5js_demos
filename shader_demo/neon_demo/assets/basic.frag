precision mediump float;

// Set in the vertex shader and passed in (aTexCoord)
varying vec2 fragCoord;
uniform float millis;

vec3 palette_preset(float t) {
  vec3 a = vec3(0.5);
  vec3 b = vec3(0.5);
  vec3 c = vec3(1.0);
  vec3 d = vec3(0.263, 0.416, 0.557);

  return a + b * cos(6.28318 * (c * t + d));
}

vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  vec2 uv = (fragCoord.xy - 0.5) * 2.0;
  vec2 uv0 = uv;

  vec3 finalColor = vec3(0.0);

  for(float i = 0.; i < 3.; i++) {
    uv = fract(uv * 1.5) - 0.5;

    float d = length(uv) * exp(-length(uv0));
    float t = millis / 2000.;

    vec3 col = palette_preset(length(uv0) + (i * 0.4) + t);

    d = sin(d * 8. + t) / 8.;
    d = abs(d);

    d = pow(.01 / d, 1.2);

    finalColor += col * d;
  }

  gl_FragColor = vec4(finalColor, 1.0);
}

// Brilliant Neon
// **************
// vec3 palette_preset(float t) {
//   vec3 a = vec3(0.5);
//   vec3 b = vec3(0.5);
//   vec3 c = vec3(1.0);
//   vec3 d = vec3(0.263, 0.416, 0.557);

//   return a + b * cos(6.28318 * (c * t + d));
// }

// vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
//   return a + b * cos(6.28318 * (c * t + d));
// }

// void main() {
//   vec2 uv = (fragCoord.xy - 0.5) * 2.0;

//   float d = length(uv);
//   float t = millis / 1000.;

//   vec3 col = palette_preset(d + t);

//   d = sin(d * 8. + t) / 8.;
//   d = abs(d);

//   d = .02 / d;

//   col *= d;

//   gl_FragColor = vec4(col, 1.0);
// }

// Intense Blue Neon
// **************

// void main() {
//   vec2 uv = (fragCoord.xy - 0.5) * 2.0;
//   float d = length(uv);

//   vec3 col = vec3(1.0, 2.0, 3.0);

//   d = sin(d * 8. + millis / 1000.) / 8.;
//   d = abs(d);

//   d = .02 / d;

//   col *= d;

//   gl_FragColor = vec4(col, 1.0);
// }

// Pleasant Glow
// **************
// void main() {
//   vec2 uv = (fragCoord.xy - 0.5) * 2.0;
//   float d = length(uv);
//   d = sin(d * 8. + millis / 1000.) / 8.;
//   d = abs(d);

//   d = .02 / d;

//   gl_FragColor = vec4(d, d, d, 1.0);
// }
