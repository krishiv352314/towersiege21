const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

polygon = Bodies.circle(200,200,20,{restitution:1,density:1})
World.add(world,polygon);
  slingshot = new SlingShot(polygon,{x:200, y:200});
  ground = new Ground(780,350,100,10)
  box1=new Box (750,330,20,40)
  box2=new Box (770,330,20,40)
  box3=new Box (790,330,20,40)
  box4=new Box (810,330,20,40)
  box5=new Box (770,290,20,40)
  box6=new Box (790,290,20,40)
  box7=new Box (780,250,20,40)

}

function draw(){
  background("white")
    Engine.update(engine);
    ellipseMode(RADIUS)
    ellipse(polygon.position.x,polygon.position.y,20,20);
    slingshot.display()
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
  }

  function mouseDragged(){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  slingshot.attach(polygon);
}