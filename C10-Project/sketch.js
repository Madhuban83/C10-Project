var seaBackground;
var ship;

function preload(){

  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(980,720);
  
  seaBackground = createSprite(200,200)
  seaBackground.addImage(seaImg);
  seaBackground.velocityX = -1;

  ship = createSprite(200,300,50,50)
  ship.addAnimation("moving", shipImg1);
  ship.scale = 0.4
  
}

function draw() {
  background("blue");

if(seaBackground.x < 0){
  seaBackground.x = seaBackground.width/2
}  
 
drawSprites();

}
