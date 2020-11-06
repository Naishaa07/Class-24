const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, pig1, Log1, box3, box4, Pig2 , Log2, box5, log3, log4, bird1 ;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(810,350)
    Log1= new Log(810,260,PI/2,300)
    box3= new Box(700,240,70,70)
    box4= new Box(920,240,70,70)
    Pig2= new Pig(810,220)
    Log2= new Log(810,180,PI/2,300)
    box5=new Box(810,160,70,70)
    log3= new Log(760,120,PI/7,150)
    log4= new Log(870,120,-PI/7,150)
    bird1= new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    Log1.display();
    Log2.display();
    box3.display();
    box4.display();
    Pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();

}