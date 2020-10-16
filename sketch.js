var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstaclesGroup;
var count;
var cloudimg;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  cloudimg = loadImage("cloud.png");
  
}

function setup() {
  createCanvas(windowWidth, 200);
 
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  trex.velocityX = 4;
  
  ground = createSprite(windowWidth/2,180,windowWidth*10,20);
  ground.addImage("ground",groundImage);
  //ground.resize(windowWidth,20);
  //ground.x = windowWidth/2;
  ground.velocityX = -3;

  
  invisibleGround = createSprite(width/2,hieght-10,width,125);
  invisibleGround.visible = false;

  obstaclesGroup = new Group();
  count = 0;
}

function draw() {
  background(100);
  camera.x = trex.x;
  //camera.x = ground.x;
  //camera.x = invisibleGround.x;
  //camera.y = trex.y;

  if(keyDown("space")&&trex.y>=161.5) {
    trex.velocityY = -10;
  }

    //if(trex.x>400){
      //ground.x = ground.width/2
    //}
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (camera.x % 800===0){
    ground2 = createSprite(camera.x+300,height,windowWidth*30,10);
    ground2.addImage("ground",groundImage);
    //ground.resize(windowWidth,20);
    //ground.x = windowWidth/2;
    ground2.velocityX = -3;

  invisibleGround = createSprite(width/2,hieght-10,width,125);
  invisibleGround.visible = false;
  trex.depth = ground21.depth
  trex.depth = trex.depth+4
  console.log(trex.depth_)



  }

  console.log(camera.x);
  console.log(windowWidth);  

  trex.collide(invisibleGround);

  count = count + Math.round(getFrameRate()/60);
  
  text("score:" + count, 300,50);
  
  //console.log(trex.y);
  
  spawnObstacles();
  spawnClouds();
  drawSprites();
}

function spawnObstacles() {
  if(frameCount%60 === 0){
    var obstacle = createSprite(windowWidth + 50,170,20,20);
    obstacle.velocityX = -3;
    obstacle.scale = 0.5;
  var rand = Math.round(random(1,6));
  switch(rand){
      case 1: obstacle.addImage("ob1", obstacle1);
      break;
      case 2: obstacle.addImage("ob2", obstacle2);
      break;
      case 3: obstacle.addImage("ob3", obstacle3);
      break;
      case 4: obstacle.addImage("ob4", obstacle4);
      break;
      case 5: obstacle.addImage("ob5", obstacle5);
      break;
      case 6: obstacle.addImage("ob6", obstacle6);           break;
  }
    obstacle.lifetime = 200;
    obstaclesGroup.add(obstacle);
}
}
function spawnClouds(){
  if(frameCount%80 === 0){
    var cloud = createSprite(windowWidth + 50,120,20,20);
    cloud.y = Math.round(random(110,130));
    cloud.velocityX = -3;
    cloud.addImage("cloud",cloudimg)
    cloud.scale = 0.5;
  }
}