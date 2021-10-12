var ball;
function setup() {
  createCanvas(1000,600);
  ball=createSprite(500,500);
  ball.shapeColor="yellow"
}

function draw() 
{
  background("red");
if(keyDown("left")){
ball.x=ball.x-2
}
if(keyDown("right")){
 ball.x=ball.x+2 
}
if(keyDown("up")){
  ball.y=ball.y-2 
 }
 
 if(keyDown("down")){
  ball.y=ball.y+2 
 }
 drawSprites() ;


}




