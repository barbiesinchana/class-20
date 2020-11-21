var frect,mrect ;

function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);
  frect.shapeColor="red";
  frect.velocityX=1;
  mrect=createSprite(600,200,60,70);
  mrect.shapeColor="red";
  mrect.velocityX=-1;


}

function draw() {
  
  background("black");
  
  //mrect.x=World.mouseX;
  //mrect.y=World.mouseY;

 /* if(mrect.x-frect.x<mrect.width/2+frect.width/2&&
    frect.x-mrect.x<mrect.width/2+frect.width/2&&
    mrect.y-frect.y<mrect.height/2+frect.height/2&&
    frect.y-mrect.y<mrect.height/2+frect.height/2){

    frect.shapeColor="yellow";
    mrect.shapeColor="yellow";
  }
  else{
    frect.shapeColor="red";
    mrect.shapeColor="red";
  }*/

if(mrect.x-frect.x<mrect.width/2+frect.width/2&&
  frect.x-mrect.x<mrect.width/2+frect.width/2){
    frect.velocityX =frect.velocityX*-1;
    mrect.velocityX=mrect.velocityX*-1;
  }

if(mrect.y-frect.y<mrect.height/2+frect.height/2&&
frect.y-mrect.y<mrect.height/2+frect.height/2){
  frect.velocityY =frect.velocityY*-1;
    mrect.velocityY=mrect.velocityY*-1;
}

  drawSprites();
}