const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var backgroundImg;
var snowflakes = [];

function preload() {
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  var canvas = createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;



}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  if(frameCount % 50 === 0){
    snowflakes.push(new Snow());
  }

  for(n = 0; n < snowflakes.length; n = n +1){
    snowflakes[n].display();
  }

  drawSprites();
}