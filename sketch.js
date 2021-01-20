const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand;
var polygon;
var slingShot;
var polygon_img;

function preload(){

polygon_img = loadImage("polygon.png")

}

function setup(){

  createCanvas(900, 400)

 engine = Engine.create();
 world = engine.world;
 Engine.run(engine);

 

ground = new Ground(450,390,900,20);
stand = new Stand(390,265,200,10);

block1 = new Box(330,235,30,40);
block2 = new Box(360,235,30,40);
block3 = new Box(390,235,30,40);
block4 = new Box(420,235,30,40);
block5 = new Box(450,235,30,40);

block6 = new Box(360,195,30,40);
block7 = new Box(390,195,30,40);
block8 = new Box(420,195,30,40);

block9 = new Box(390,155,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100, y:200});


}

function draw(){

background("black");

//Engine.update(engine);

ground.display();
stand.display();
strokeWeight(2);
stroke(15);
fill("skublue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
fill("pink");
block6.display();
block7.display();
block8.display();
fill("orange")
block9.display();

imageMode(CENTER)
image(polygon_img ,polygon.position.x, polygon.position.y,40,40 )

//polygon.display();

slingShot.display();

}

function mouseDragged(){

    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){

    slingShot.fly();
}

function keyPressed(){
    if(keyCode == 32){
        slingShot.attach(this.polygon);
    }
  }

