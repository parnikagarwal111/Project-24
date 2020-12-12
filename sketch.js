
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var ground;
var dustbinSide1,dustbinSide2,dustbinBase;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(300,600,800,20);
	dustbinSide1=new Dustbin(500,637,20,100);
	dustbinSide2=new Dustbin(700,637,20,100);
	dustbinBase= new Dustbin(600,685,200,20)

	paperBall= new PaperBall(10,300,10);
	
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("black");

  ground.display();
  dustbinSide1.display();
  dustbinSide2.display();
  paperBall.display();
  dustbinBase.display();
  
 
}

function keyPressed(){

	if (keyDown("up")){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:10,y:-15});
	}

}



