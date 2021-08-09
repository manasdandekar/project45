var knight,knightImage; 
var dragon,dragonImg;
var backgroundImg;
var soldier,soldierImg;
var dragon_gif;
var attackCount = 0;
var goldCount = 0;

function preload() {
 knightImage = loadImage("spearman.png");
 backgroundImg = loadImage("bg.png");
 //dragonImg = loadImage("dragon.gif");
 dragon_gif = createImg("dragon.gif");
 soldierImg = loadImage("knight2.png");
} 

function setup() {
 createCanvas(1500,1500);

 knight = createSprite(100,1000,50,50);
 knight.addImage("knight",knightImage);
 knight.scale=0.5;

 soldier=createSprite(100,950,50,50);
 soldier.addImage("boy",soldierImg);
 soldier.scale=0.4;
 soldier.velocityX=10;

 dragon = createSprite(1300,1000,1,1);
 //dragon_createImg.addImage("dragon",dragon_createImg);
 //dragon.scale=0.5;
}

function draw() {
 background(backgroundImg);

 dragon_gif.position(1000,900);

 if(soldier.isTouching(dragon)){
  attackCount=attackCount+1;
  if(attackCount=== 4){
   dragon_gif.destroy();
  }
  soldier.destroy();
  console.log(attackCount)
 }

 textSize(30);
 text("Press C to create soldiers",500,500);

 if(frameCount%1000 === 0){
   goldCount = goldCount+1;
 }

if(goldCount = 100){
 if(keyWentDown("C")){
   soldier=createSprite(100,950,50,50);
   soldier.addImage("boy",soldierImg);
   soldier.scale=0.4;
   soldier.velocityX=10;
   goldCount-100;
 }
}

console.log(goldCount);

 drawSprites();
}