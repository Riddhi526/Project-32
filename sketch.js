const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var stand1,stand2;
var blue1,blue2,blue3,blue4,blue5,blue6,blue7,blue8,blue9,blue10,blue11,blue12,blue13;
var pink1,pink2,pink3,pink4,pink5,pink6,pink7;
var green1,green2,green3,green4,green5,green6,green7;
var black1,black2;
var polygon;
var slingshot1;
var score  = 0;
function preload(){
  polygon_Image = loadImage("polygon.png");
}
function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground1 = new Ground(500,490,1000,15);
  stand1 = new Ground(450,400,400,10);
  stand2 = new Ground(800,250,300,10);
  blue1 = new Boxblue(300,360,40,70);
  blue2 = new Boxblue(340,360,40,70);
  blue3 = new Boxblue(380,360,40,70);
  blue4 = new Boxblue(420,360,40,70);
  blue5 = new Boxblue(460,360,40,70);
  blue6 = new Boxblue(500,360,40,70);
  blue7 = new Boxblue(540,360,40,70);
  blue8 = new Boxblue(580,360,40,70);
  blue9 = new Boxblue(700,210,40,70);
  blue10 = new Boxblue(740,210,40,70);
  blue11 = new Boxblue(780,210,40,70);
  blue12 = new Boxblue(820,210,40,70);
  blue13 = new Boxblue(860,210,40,70);
  
  pink1 = new Boxpink(340,290,40,70);
  pink2 = new Boxpink(380,290,40,70);
  pink3 = new Boxpink(420,290,40,70);
  pink4 = new Boxpink(460,290,40,70);
  pink5 = new Boxpink(500,290,40,70);
  pink6 = new Boxpink(540,290,40,70);
  pink7 = new Boxpink(780,70,40,70)
  green1 = new Boxgreen(380,220,40,70);
  green2 = new Boxgreen(420,220,40,70);
  green3 = new Boxgreen(460,220,40,70);
  green4 = new Boxgreen(500,220,40,70);
  green5 = new Boxgreen(740,140,40,70);
  green6 = new Boxgreen(780,140,40,70);
  green7 = new Boxgreen(820,140,40,70);

  black1 = new Boxblack(420,150,40,70);
  black2 = new Boxblack(460,150,40,70);

  polygon = Bodies.circle(50,200,50)
  World.add(world,polygon);

  slingshot1 = new SlingShot(this.polygon,{x:100,y:200});
 
}

function draw() {
  
  background(56,44,44);  
  textSize(20);
  fill("white")
  text("Drag the Hexagonal stone and Release it, to launch it towards the blocks",110,50);
  textSize(20);
  fill("white")
  text("Press 'space' to replay!! ", 50, 450)
  textSize(25);
  fill("white")
  text("SCORE: "+score,50,100);

  ground1.display();
  stand1.display();
  stand2.display();
  blue1.display();
  blue2.display();
  blue3.display();
  blue4.display();
  blue5.display();
  blue6.display();
  blue7.display();
  blue8.display();
  pink1.display();
  pink2.display();
  pink3.display();
  pink4.display();
  pink5.display();
  pink6.display();
  green1.display();
  green2.display();
  green3.display();
  green4.display();
  black1.display();
  black2.display();
  blue9.display();
  blue10.display();
  blue11.display();
  blue12.display();
  blue13.display();
  green5.display();
  green6.display();
  green7.display();
  pink7.display();
  //score
  blue1.score();
  blue2.score();
  blue3.score();
  blue4.score();
  blue5.score();
  blue6.score();
  blue7.score();
  blue8.score();
  pink1.score();
  pink2.score();
  pink3.score();
  pink4.score();
  pink5.score();
  pink6.score();
  green1.score();
  green2.score();
  green3.score();
  green4.score();
  black1.score();
  black2.score();
  blue9.score();
  blue10.score();
  blue11.score();
  blue12.score();
  blue13.score();
  green5.score();
  green6.score();
  green7.score();
  pink7.score();
  imageMode(CENTER);
  image(polygon_Image,polygon.position.x,polygon.position.y,40,40)
  slingshot1.display();
 
  drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x: mouseX,y: mouseY});
}
function mouseReleased(){
  slingshot1.fly();

}
function keyPressed(){
  if (keyCode === 32){
    slingshot1.attach(this.polygon);
  }
}
  
  
  

  