var canvas, backgroungImg;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var peel, peelImg;

var powerPunch, powerPunchImg,bgImg;

var boxer1,boxer1Img,boxer2,boxer2Img;

function preload(){
  bgImg = loadImage("images/bg_img.jpg");
  peelImg = loadImage("images/banana_peel.png");
  powerPunchImg = loadImage("images/power_punch.jpg")
  boxer1Img = loadImage("images/boxer_1.png")
  boxer2Img = loadImage("images/boxer_2.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();
  

}

function draw() {

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}