// https://www.youtube.com/watch?v=f4s1h2YETNY

// this variable will hold our shader object
let theShader;



function preload() {
  // load the shader
  theShader = loadShader('assets/basic.vert', 'assets/basic.frag');

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