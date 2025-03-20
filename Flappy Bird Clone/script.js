//?background

let bg;
let bgWidth = 360;
let bgHeight = 640 ;
let context;

//? Bird

let birdWidth = 34; // Width/Height Ratio
let birdHeight = 24;
let birdX = bgWidth/8;
let birdY = bgHeight/2;

let bird ={
  x: birdX,
  y: birdY,
  width: birdWidth,
  height : birdHeight
}

//? PIpes
let pipeArray = [];
let pipeWidth = 64; //H-W ratio= 1/8
let pipeHeight = 512;
let pipeX = bgWidth;
let pipeY = 0;

let upPipeImg ;
let bottomPipeImg;

// ? Game Movement
let velocityX = -1; // left speed pipes
let velocityY = 0; // bird jump speed
let stablity = 0.1;

let gameOver = false;

let score = 0;

let wingSound = new Audio ("sfx_wing.wav");
let hitSound = new Audio( " sfx_hit.wav ");
let dieSound = new Audio ( " sfx_die.wav");
let pointSound = new Audio ( " sfx_point.wav");

window.onload = function (){
  bg = document.getElementById("bg");
  bg.height = bgHeight;
  bg.width = bgWidth;
  context = bg.getContext("2d"); //for drawing
  
  //? load imagees
  birdImg = new Image();
  birdImg.src = "flappybird.png";
  birdImg.onload = function() {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

  }

  upPipeImg = new Image();
  upPipeImg.src = "uppipe.png";

  bottomPipeImg = new Image();
  bottomPipeImg.src = "bottompipe.png";

  requestAnimationFrame(update);
  setInterval(setPipes, 1500); //1.5 second
  document.addEventListener("keydown",moveBird);

};


function update(){
  requestAnimationFrame(update);
  if(gameOver) {
    return;
  }
  context.clearRect(0, 0, bg.width, bg.height);
  


  //bIRD
  velocityY += stablity;
  //bird.y += velocityY;
  bird.y = Math.max(bird.y + velocityY, 0);
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
  if (bird.y > bg.height) {
    gameOver= true;
  }
  
  //pipes
  for (let i=0; i<pipeArray.length; i++){
    let pipe = pipeArray[i];
    pipe.x += velocityX;
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

    if (!pipe.passed && bird.x > pipe.x + pipe.width){
      score += 0.5;
      pipe.passed = true;
      pointSound.play();
    }

    if (detectCaught(bird, pipe)) {
      hitSound.play();
      gameOver= true;
    }
  };

  while ( pipeArray.length > 0 && pipeArray[0].x < - pipeWidth){
    pipeArray.shift();
  }
  //Score 
  context.fillStyle = "black";
  context.font = "45px sans-serif";
  context.fillText(score, 5, 45);

  if (gameOver){
    context.fillText("GAME OVER", 5, 90)
    dieSound.play();
  }
};

function setPipes(){
  if(gameOver) {
    return;
  }
  //(0-1) * pipeHeight/2.
    // 0 -> -128 (pipeHeight/4)
    // 1 -> -128 - 256 (pipeHeight/4 - pipeHeight/2) = -3/4 pipeHeight
  let randomY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
  let openingArea = bg.height/4;


  let upPipe ={
    img: upPipeImg,
    x : pipeX,
    y : randomY,
    width : pipeWidth,
    height: pipeHeight,
    passed: false
  }

  pipeArray.push(upPipe);

  let bottompipe ={
    img : bottomPipeImg,
    x: pipeX,
    y : randomY+ pipeHeight + openingArea,
    width : pipeWidth,
    height: pipeHeight,
    passed: false
  }
  pipeArray.push(bottompipe);
};

function moveBird(r) {
  if (r.code == "Space" || r.code =="ArrowUp" || r.code == "KeyX"){
    wingSound.play();
    velocityY = -3; //Jump

    if (gameOver) {
      bird.y = birdY;
      pipeArray = [];
      score= 0;
      gameOver = false;
    }
  }
};



// logic for checking caught between 2 rectangles
function detectCaught (a, b){ 
  return a.x < b.x + b.width && a.x + a.width> b.x &&
         a.y < b.y + b.height && a.y + a.height> b.y;
          
};

