  var trex, trex_running, trex_collided;
  var ground, invisibleGround, groundImage;
  var nube
  var nubeImagen
  var obstaculo
  var obstaculo1,obstaculo2,obstaculo3,obstaculo4,obstaculo5,obstaculo6
  var puntos=0

  function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
  nubeImagen=loadImage("nube.png")
  obstaculo1=loadImage("obstacle1.png")
  obstaculo2=loadImage("obstacle2.png")
  obstaculo3=loadImage("obstacle3.png")
  obstaculo4=loadImage("obstacle4.png")
  obstaculo5=loadImage("obstacle5.png")
  obstaculo6=loadImage("obstacle6.png")
  }

  function setup() {
   createCanvas(600, 200);
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear suelo invisible
  invisibleGround=createSprite(200,200,400,20);
  invisibleGround.visible=false;

  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  }

  function draw() {
  background("white");

text("kilometrage"+puntos,420,100);
puntos=puntos+Math.round(frameCount/60);

  //presionar boton espace para saltar
  if (keyDown("space")&&trex.y>=160) {
   trex.velocityY = -10;
   }
console.log(trex.y)
  trex.velocityY = trex.velocityY + 0.8
  if (ground.x < 0) {
ground.x = ground.width / 2;
  }
   trex.collide(invisibleGround);
  cloud()
  
  obstaculos();
   drawSprites();

  }

//funcion para dibujar las nubes
function cloud(){
  if(frameCount%60===0){
    nube=createSprite(610,10,20,5)
    nube.velocityX = -2
    nube.addImage(nubeImagen);
    nube.scale=0.2
    nube.y=Math.round(random(10,90))
    nube.depth=trex.depth
    trex.depth=trex.depth+1;
    nube.lifetime=300;
  }




}

//funcion de obstaculos 
function obstaculos (){
if (frameCount%60===0){
obstaculo=createSprite(610,180,10,40)
obstaculo.velocityX=-4
var rand=Math.round(random(1,6));
switch(rand){

case 1:obstaculo.addImage(obstaculo1);
break;

case 2:obstaculo.addImage(obstaculo2);
break;

case 3:obstaculo.addImage(obstaculo3);
break;

case 4:obstaculo.addImage(obstaculo4);
break;

case 5:obstaculo.addImage(obstaculo5);
break;

case 6:obstaculo.addImage(obstaculo6);
break;

default:break
}
obstaculo.scale=0.1;
obstaculo.lifetime=300;


}


}





