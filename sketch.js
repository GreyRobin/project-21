var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ball = Bodies.circle(150,100,20,ball_options)
  World.add(world,ball)
  ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown("UP_ARROW")){
	  force()
  }
  drawSprites();
 
}



function force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})