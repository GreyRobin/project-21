var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,left,right
var world
var radius = 40

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
  ball = Bodies.circle(150,100,20,ball_options)
  World.add(world,ball)
  ellipseMode(RADIUS);
  ground = new Ground(width/2,670,width,20)
  left = new Ground(1100,600,20,120)
  right = new Ground(1350,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
ellipse(ball.position.x,ball.position.y,20)
ground.display()
left.display()
right.display()
  drawSprites();
 
}



function keyPressed(){
	if(keyCode==UP_ARROW){

	
  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
}
}