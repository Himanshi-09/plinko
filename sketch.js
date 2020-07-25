const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var dividers1 = [];
var particles = [];
var plinkos = [];
var dividers;
var divisionHeight = 300;
var plinko1;

function setup() {
createCanvas(500,600);
 engine = Engine.create();
 world = engine.world;

 ground1 = new Ground(400,height,800,20);
 //plinko1 = new Plinko(300,300);
 
 
 for (var k = 0; k<=width;k=k+80){
   dividers1.push(new divisions(k,height - divisionHeight/2,10,divisionHeight));
 }
 for (var j = 10; j <= width;j=j+40){
   plinkos.push(new Plinko(j,55));
 }
 for (var j = 15; j <= width -10;j=j+50){
  plinkos.push(new Plinko(j,105));
}
for (var j = 10; j <= width -10;j=j+40){
  plinkos.push(new Plinko(j,155));
}
for (var j = 15; j <= width -10;j=j+50){
  plinkos.push(new Plinko(j,205));
}
for (var j = 10; j <= width -10;j=j+40){
  plinkos.push(new Plinko(j,255));
}
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  
  ground1.display();
  //plinko1.display();
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
  }
  for (var k =0; k< dividers1.length;k++){
    dividers1[k].display();
  }
  for (var m =0; m< plinkos.length;m++){
    plinkos[m].display();
  }
  for (var n =0; n< particles.length;n++){
    particles[n].display();
  }
  //particle1.display();
  
  //drawSprites();
}