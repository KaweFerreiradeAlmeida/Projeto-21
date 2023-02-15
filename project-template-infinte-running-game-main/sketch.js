var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;


var PLAY=1;
var END=0;
var gameState=1;

function preload(){
}
 
function setup(){
  
  createCanvas(400,600);

}

function draw() {
  if(gameState===PLAY){
    gameState=END;

}
}