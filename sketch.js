var movingRect, fixedRect, rect3, rect4, rect5;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(500, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  rect3 = createSprite(100,200,20,60);
  rect3.shapeColor = "blue";
  rect3.debug = true;

  rect4 = createSprite(100,300,30,60);
  rect4.shapeColor = "blue";
  rect4.debug = true;

  rect5 = createSprite(700,200,20,60);
  rect5.shapeColor = "blue";
  rect5.debug = true;

  rect3.velocityX = 3;
  rect5.velocityX = -3;

}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,rect3)) {
    movingRect.shapeColor = "red";
    rect3.shapeColor = "red";
  } 
  else 
  {
    rect3.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  bounceOff(rect5, rect3);

  drawSprites();
}
