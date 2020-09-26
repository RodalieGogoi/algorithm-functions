
var fixedRect, movingRect;
var gameObject;

function setup() {
  createCanvas(1200,800);
  
  
  fixedRect = createSprite(400, 100, 30, 80);
  movingRect = createSprite(400, 700, 80, 30);

  fixedRect.velocityY = 6;
  movingRect.velocityY = -4;


  gameObject = createSprite(600, 200, 50,50);
  gameObject.shapeColor = "black";
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  
  
 bounceOff(fixedRect,movingRect);
  

  if(isTouching(gameObject, movingRect)){

    gameObject.shapeColor = "green";
    movingRect.shapeColor = "green";
  
  }
  else{
    gameObject.shapeColor = "black";
    movingRect.shapeColor = "blue";
  }

  if(isTouching(fixedRect, movingRect)){

    fixedRect.shapeColor = "yellow";
    
  
  }
  else{
    fixedRect.shapeColor = "red";
   
  }
  
  

  drawSprites();
}