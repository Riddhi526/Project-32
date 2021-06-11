class Polygon {
    constructor(x,y,r){
        var options={
            isStatic: true
        }
     this.body=Bodies.circle(x,y,r,options);
     this.x=x;
     this.y=y;
     this.r=r;
     this.image=loadImage("polygon.png");
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        
        fill(255,192,203);
        strokeWeight(2);
        stroke("black");
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}