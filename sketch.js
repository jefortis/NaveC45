var canvas;
var erojo,erojoAnimation;
var eazul,eazulAnimation;
var enemigo;
var nave;
var naveImg;
var fondo,fondoImg;
var bala_nave,bala_naveImg;

function preload(){
  
  erojoAnimation= loadAnimation("./image/enemigo_rojo.png","./image/enemigo_rojo_der_abajo.png","./image/enemigo_rojo_izq_abajo.png");
  eazulAnimation= loadAnimation("./image/enemigo_azul.png","./image/enemigo_azul_der_abajo.png","./image/enemigo_azul_izq_abajo.png");
  naveImg=loadImage("./image/space.png");
  fondoImg=loadImage("./image/fondo.jpg");
  bala_naveImg=loadImage("./image/bala_nave.png");
  
}

function setup() {
  //canvas = createCanvas(windowWidth, windowHeight);
  canvas = createCanvas(1520,800);
 

  for (var c = 0; c<8; c++) {
    enemigo= createSprite(250+150*c,50,150,125);
    enemigo.addAnimation("eazul",eazulAnimation);
    enemigo.scale=2.5

  

    enemigo= createSprite(250+150*c,150,150,125);
    enemigo.addAnimation("eazul",eazulAnimation);
    enemigo.scale=2.5

    enemigo= createSprite(250+150*c,250,150,125);
    enemigo.addAnimation("eazul",eazulAnimation);
    enemigo.scale=2.5

    enemigo= createSprite(250+150*c,350,150,125);
    enemigo.addAnimation("eazul",eazulAnimation);
    enemigo.scale=2.5
   
  }
  

  nave=createSprite(750,600,100,100);
  nave.addImage("nave1",naveImg);
  nave.scale=0.2;
  

  bala_nave=createSprite(750,500,50,50);
  bala_nave.addImage("bala_nave",bala_naveImg);
  bala_nave.scale=.5;
  
 
  
}

function draw() {
  background(fondoImg);


 if (keyIsDown(LEFT_ARROW)) 
   {
      nave.x=nave.x -8;
   }
 
   if (keyIsDown(RIGHT_ARROW)) 
   {
      nave.x=nave.x +8;
   }

  
  drawSprites();
}



