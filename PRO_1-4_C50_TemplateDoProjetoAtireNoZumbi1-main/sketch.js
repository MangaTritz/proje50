var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zumbiImg;
var heart1Img, heart2Img, heart3Img, heart4, heart5, heart6;


function preload()
{
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bgImg = loadImage("assets/bg.jpeg")
  zumbiImg = loadImage("assets/zombie.png")
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")
}

function setup() 
{
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1

  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
 
  player.debug = true
  player.setCollider("rectangle",0,0,250,250)

  zumbiGroup = new Group();
 
  heart4 = createSprite(displayWidth-300, 40, 20, 20);
  heart4.visible = false;
  heart4.addImage(heart1Img);
  heart4.scale=0.4;

  heart5 = createSprite(displayWidth-300, 40, 20, 20);
  heart5.visible = false;
  heart5.addImage(heart2Img);
  heart5.scale=0.4;

  heart6 = createSprite(displayWidth-340, 40, 20, 20);
  heart6.visible = false;
  heart6.addImage(heart3Img);
  heart6.scale=0.4;
}

function draw() {
  background(0); 

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }

  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }


//libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada
  if(keyWentDown("space"))
  {
  
    player.addImage(shooter_shooting)
  
  }
  else if(keyWentUp("space"))
  {
  player.addImage(shooterImg)

  }

  if (zumbiGroup.isTouching(player))
  {
    for (let index = 0; index < zumbiGroup.length; index++) 
    {
      if (zumbiGroup[index].isTouching(player))
      {
        zumbiGroup[index].destroy()
      }
    }
  }

  enemy();

drawSprites();

}

function enemy()
{
  if(frameCount %50 === 0)
  {
    var zumbi = createSprite (random(1000,1300), random(100,500), 40, 40);
    zumbi.addImage(zumbiImg);
    zumbi.scale=0.15;
    zumbi.debug=true;
    zumbi.setCollider("rectangle", 0, 0, 250, 250);
    zumbi.velocityX=-3;
    zumbi.lifeTime=400;
    zumbiGroup.add(zumbi);
  }

}