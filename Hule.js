class Hule {
  constructor(x, y,radio) {
    var options = {
        'restitution':0.3,
        'friction':5,
        'density':1.0
    }
    this.body = Bodies.circle(x, y,radio, options);
    this.radio = radio;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill(255);
    ellipse(pos.x, pos.y, this.radio);
    pop();
  }
};