class Plinkos {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':true
      }
      this.body = Bodies.circle(x, y, 5, options);
    this.r=5;  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255,0,0);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }