const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var piedra;
var hierro;
var hule;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    piedra = new Piedra(520,70,70,70);
    hierro = new Hierro(630,100,120,120);
    hule = new Hule(720,130,50);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    piedra.display();
    hierro.display();
    hule.display();

    
 
}