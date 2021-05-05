class  Particlels {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':0,
          'density':0,
          'isStatic':false
      }
      this.body = Matter.Bodies.circle(200, 100, 10, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     // 
     // translate(pos.x, pos.y);
     // rotate(angle);
      ellipseMode(RADIUS);
      noStroke();
      fill(255,0,0);
      ellipse(pos.x,pos.y,10,10);
     // 
    }
  }