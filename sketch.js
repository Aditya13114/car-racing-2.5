var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1Image, car2Image,car3Image,car4Image;
var groundImage, trackImage;

function preload(){
  car1Image = loadImage("../sprites/car1.png"); // "relative path = sprites/abc.png"
  car2Image = loadImage("../sprites/car2.png");
  car3Image = loadImage("../sprites/car3.png");
  car4Image = loadImage("../sprites/car4.png");
  groundImage = loadImage("../sprites/ground.png");
  trackImage = loadImage("../sprites/track.jpg");

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
