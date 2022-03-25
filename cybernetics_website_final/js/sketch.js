/**
Project title
Author

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/* - - - - - - - - - - - VARIABLES - - - - - - - - - - - - - - - - - - - - -  */

// Variable to style canvas
let canvasProperties = {
// Set canvas width and height
  w: 850,
  h: 550,
};

// Variable to style the background

let bg = {
  r: 4,
  g: 118,
  b: 217,
};

// Variable to set starting state to `title`

let state = `title`;

let waveEffect;

let freq= 400;



/*********************** PRELOAD **********************************************/

/**
Description of preload
*/
function preload() {

}


/*********************** SETUP ************************************************/

/**
Description of setup
*/
function setup() {

  createCanvas(100, 100);

// hide the cursor
  noCursor();

// Variable to allow putting p5 sketch in div
let myCanvas = createCanvas(460, 450);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  myCanvas.parent('sketch-holder');

waveEffect = new p5.SinOsc();
// waveEffect.start();

}


/*********************** DRAW *************************************************/


/**
Description of draw
*/
function draw() {
  background(bg.r, bg.g, bg.b);

  push();
  fill(33, 40, 40);
  // ellipse(width / 2, height / 2, 90);
  ellipse(mouseX, mouseY, 90);
  pop();

// Sine effect
// Map mousex value from 20hz to 440hz
let hertz = map(mouseX, 0, width, 20.0, 440.0);

waveEffect.freq(hertz);

//Draw the wave

stroke(204);
for (let x = 0; x < width; x++) {
  let angle = map(x, 0 , width, 0, TWO_PI * hertz);
  var sinValue = sin(angle) * 120;
  line(x, 0, x, height / 2 + sinValue);
}

// Win condition

if (mouseX > 240 && mouseX < 260 && mouseY > 240 && mouseY < 260) {
  push();
  fill(13, 13, 13);
  textSize(22);
  textAlign(CENTER, CENTER);
  text('Congratulations, you just demonstrated a cybernetic system in action!', 150, 240);
  pop();
}

    // Alternate between game states
  if (state === `title`) {
    titleState();
  }
  if (state === `animation`) {
    animationState();
  }

} // End of draw()

/* - - - - - - - - - - - USER INTERACTION - - - - - - - - - - - - - - - - - - */

/*********************** KEY PRESSED ******************************************/

// function keyPressed() {
// }

/*********************** MOUSE PRESSED ****************************************/

// function mousePressed() {
// }

/* - - - - - - - - - - - STATES - - - - - - - - - - - - - - - - - - - - - - - */

/*********************** ANIMATION STATE **************************************/

function animationState() {

}

/*********************** TITLE STATE ******************************************/

function titleState() {

}

/*********************** RESET STATES *****************************************/

function resetStates() {

}
