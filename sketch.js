var bedda, beddaImg, carne, carneImg, corazon, corazonImg;
var pilares, pilaresImg, bc, bcImg;

function preload(){
  beddaImg = loadImage("Bedda.png");
  carneImg = loadImage("carne.png");
  corazonImg = loadImage("Corazon.png");
  pilaresImg = loadImage("Pilar.png");
  bcImg = loadImage("bc.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bc = createSprite(935,450);
  bc.addImage(bcImg);
  bc.scale = 0.75
  bedda = createSprite(50,50,10,20);
}

function draw(){
  background("white");
  bc.velocityX = -4;
  if(bc.x < 0 ){
    bc.x = bc.width/3.2;
  
  }
  drawSprites();
}
