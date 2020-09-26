
var fixedRect, movingRect;
var gameObject;

function setup() {
  createCanvas(1200,800);
  
  
  fixedRect = createSprite(400, 200, 30, 80);
  movingRect = createSprite(100, 100, 80, 30);
  gameObject = createSprite(600, 200, 50,50);
  gameObject.shapeColor = "black";
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  

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



