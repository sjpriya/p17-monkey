
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
 //creating monkey
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;

  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
console.log(ground.x); 

 FoodGroup=new Group();
 obstacleGroup = new Group(); 
}


function draw() {
background("white")
ground.x=ground.width/2;
  
 spawnFood(); 
 spawnObstacles();
  
if (keyDown("space")&& monkey.y >= 100) {
  monkey.velocityY=-12
 }
  monkey.velocityY = monkey.velocityY + 0.8
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime:" + survivalTime,100,50);
  
  monkey.collide(ground);
  
 if (FoodGroup.isTouching(monkey)) {
   FoodGroup.destroyEach();
   score=score+1;
 }
 
  if (obstacleGroup.isTouching(monkey)) {
    score=0;
    obstacleGroup.destroyEach();
  }
  
drawSprites();
  text("SCORE:" + score,110,380);
}

function spawnFood() {
if (frameCount%80===0) {
  banana=createSprite(400,200,20,20);
  banana.velocityX=-4;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.y=Math.round(random(120,200));
  banana.lifetime=200;
  FoodGroup.add(banana);
}

}

function spawnObstacles() {
if (frameCount%300===0) {
  obstacle=createSprite(400,330,20,20);
  obstacle.velocityX=-4;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.lifetime=200;
  obstacleGroup.add(obstacle);
}

}



