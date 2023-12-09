// https://www.youtube.com/watch?v=3mfvZ-mdtZQ

// this variable will hold our shader object
let theShader;
let img;
const numCircles = 200;

function preload() {
  // load the shader
  theShader = loadShader('assets/basic.vert', 'assets/basic.frag');
  img = loadImage('test.jpg');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(1000, 1000, WEBGL);
  shader(theShader);

  theShader.setUniform("background", img);

  const circles = [];
  for (let i = 0; i < numCircles; i++) {
    circles.push(random(), random(), random(0.05, 0.01));
  }

  theShader.setUniform("circles", circles);
  noStroke();
}

function draw() {
  theShader.setUniform("millis", millis());
  // rect(0, 0, width, height);
  ellipse(0, 0, width, height, 150)
}