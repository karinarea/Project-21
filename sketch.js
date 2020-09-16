var wall, thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1365,400);
  bullet = createSprite(50,200,50,10);
  bullet.shapeColor="white";
  
   weight=random(30,52);
  thickness=random(22,83);
  wall = createSprite(1265,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  bullet.velocityX = speed;
 
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  }
if(damage>10) {
  wall.shapeColor = color(255,0,0);
}
if(damage<10) {
  wall.shapeColor=color(0,255,0);
}
  
  drawSprites();
}

function hasCollided (bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallleftEdge = wall.x;
  if(bulletRightEdge>=wallleftEdge) {
    return true;
  }
  return false;
}
