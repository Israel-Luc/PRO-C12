var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png");
  boyImg = loadAnimation ("Runner-1.png","Runner-2.png");
 
}

function setup(){
  createCanvas(400,400);

path = createSprite(200,200);
path.addImage (pathImg);
path.scale=1.2;
path.velocityY = 4;

boy = createSprite (300,300,30,30);
boy.addAnimation ("jakeRunning", boyImg);
boy.scale=0.08;


//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
 
  boy.x = World.mouseX;

  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}