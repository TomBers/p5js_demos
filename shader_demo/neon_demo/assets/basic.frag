precision mediump float;

// Set in the vertex shader and passed in (aTexCoord)
varying vec2 pos;
uniform float millis;

void main() {

  vec4 tl = vec4(.5, .1, .9, 1.);
  vec4 tr = vec4(.3, 1., .8, 1.);

  vec4 bl = vec4(.8, .6, .1, 1.);
  vec4 br = vec4(.7, .1, .2, 1.);

  vec4 top = mix(tl, tr, pos.y);
  vec4 bottom = mix(bl, br, pos.y);

  gl_FragColor = mix(top, bottom, pos.x);
}

// SDF Circle
// *************
// const int NUM_CIRCLES = 200;
// uniform vec3 circles[NUM_CIRCLES];

// void main() {

//   float colour = 1.;

//   for(int i = 0; i < NUM_CIRCLES; i++) {
//     vec3 circle = circles[i];

//     // Distance from the current pixel to the center of the circle
//     float d = length(pos - circle.xy) - circle.z;

// // Set to 0 if the pixel is outside the circle
// // When distance is negative, the pixel is inside the circle and we set to 0 else d
//     d = step(0., d);

// // Colour out side of the circle is 1. (white) and inside is 0. (black)
//     colour *= d;
//   }

//   gl_FragColor = vec4(colour, colour, colour, 1.0);
// }

// Gray Scale
// *************

// vec2 newPos = pos;
// newPos.y = 1. - newPos.y;
// newPos = newPos + (sin(pos.x * 16. + millis / 100.) + 1.) / 2. * .1;
// vec4 col = texture2D(background, newPos);
// float avg = (col.r + col.g + col.b) / 3.;
// gl_FragColor = vec4(avg, avg, avg, 1.);

// Wavey Image
// *************
// vec2 newPos = pos;
// newPos.y = 1. - newPos.y;

// newPos = newPos + (sin(pos.x * 16. + millis / 100.) + 1.) / 2. * .1;

// vec4 col = texture2D(background, newPos);
// gl_FragColor = vec4(col);

// Draw Image from Texture (correct for upside down)
// *************
// vec2 newPos = pos;
// newPos.y = 1. - newPos.y;
// vec4 col = texture2D(background, newPos);
// gl_FragColor = vec4(col);

// Moving Sin Wave
// *************
// float c = (sin(pos.x * 16. + millis / 100.) + 1.) / 2.;
// gl_FragColor = vec4(c, 0., 1., 1.);

// Sin Wave
// *************
// float c = sin(pos.x * 16.) + 1. / 2.;
// gl_FragColor = vec4(c, 0., 1., 1.);

// Grad copied 10 times
// *************
// vec2 newPos = fract(pos * 10.);
// gl_FragColor = vec4(newPos, 1., 1.);

// Pretty Circle
// *************
// vec4 tl = vec4(.5, .1, .9, 1.);
// vec4 tr = vec4(.3, 1., .8, 1.);

// vec4 bl = vec4(.8, .6, .1, 1.);
// vec4 br = vec4(.7, .1, .2, 1.);

// vec4 top = mix(tl, tr, pos.y);
// vec4 bottom = mix(bl, br, pos.y);

// gl_FragColor = mix(top, bottom, pos.x);
