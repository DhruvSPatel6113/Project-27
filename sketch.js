const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope5;

var bobDiameter = 28;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(400,250,200,10);

	bob1=new Bob(343,400);
	bob2=new Bob(371,400);
	bob3=new Bob(399,400);
	bob4=new Bob(427,400);
	bob5=new Bob(455,400);

	rope1=new rope(bob1.body , roof.body , -bobDiameter*2 , 0);
	rope2=new rope(bob2.body , roof.body , -bobDiameter*1 , 0);
	rope3=new rope(bob3.body , roof.body , 0 , 0);
	rope4=new rope(bob4.body , roof.body , +bobDiameter*1 , 0);
	rope5=new rope(bob5.body , roof.body , +bobDiameter*2 , 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(190);

  drawSprites();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob1.body , bob1.body.position , {x:-20 , y:-20});

	}

}