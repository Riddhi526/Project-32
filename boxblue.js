class Boxblue{
  constructor(x, y, width, height) {
      var options = {
        'restitution':0.8,
        'friction':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;
    
  }
  display(){
    if (this.body.speed<3){
      var angle = this.body.angle;
      var pos = this.body.position
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(128,128,128);
      strokeWeight(2);
      stroke(15)
      fill("#87CEE9")
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
    }
    else {
    World.remove(world,this.body);
    push()
    this.Visibility = this.Visibility - 5;
    tint(255,this.Visibility);
    rect(999,999,this.width,this.height)
    pop()
    }
    
  }
  score(){
    if (this.Visibility<0 && this.Visibility>-105){
      score++
    }
  }
}
          
      