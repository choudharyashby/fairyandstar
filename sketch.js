const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,fairy,fairyImg,star,starnight;

function preload(){
  starnight = loadImage("starnight.png");
  fairyImg = loadAnimation("fairy1.png","fairy2.png");
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  fairy.Bodies.rectangle(50,380,100,20);
  World.add(world,fairy)
  fairy.addImage(fairyImg);
  
  star.x = starBody.position.x
  star.y = starBody.position.y

  
}

function draw(){
  background("black");
  if(keydown(left_arrow)){
    fairy.velocityX = 5;
  }
  if(keydown(left_arrow)){
    fairy.velocityX = -5;
  }
  if(starBody.position.y > 470){
    
  }
  drawSprites();
}