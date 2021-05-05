
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight  =300;

var engine, world;
var ground;

function setup() {
  
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  for ( var v = 10 ; v <=width;v=v+50 ){

    plinkos.push(new Plinkos(v,100))
    
      }

      for ( var v = 40 ; v <=width;v=v+50 ){

      plinkos.push(new Plinkos(v,200))
        
        }

      for ( var v = 10 ; v <=width;v=v+50 ){

      plinkos.push(new Plinkos(v,300))

      }

      for ( var v = 0 ; v <=width;v=v+80 ){

     divisions.push(new Division(v,height-divisionHeight/2))
                
      }

      




      ground=new Ground(400,793,800,10)
}

function draw() {
 
  background(0);
  Engine.update(engine)

  for ( var v = 0 ; v <=plinkos.length-1;v++){

    plinkos[v].display();
    
      }

    for (var v = 0 ; v <=divisions.length-1;v++){

      divisions[v].display();
        
         }

    if(frameCount%60===0){
      particles.push(new  Particlels(random(width/2-10, width/2+10),10,10));

    }
     
    for (var v = 0 ; v <=particles.length-1;v++){

      particles[v].display();
        
         }

  
  drawSprites();
  ground.display();
}