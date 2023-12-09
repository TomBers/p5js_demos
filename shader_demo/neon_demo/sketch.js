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
  createCanvas(500, 500, WEBGL);
  shader(theShader);


  noStroke();
}

function draw() {
  theShader.setUniform("millis", millis());
  rect(0, 0, width, height);

}