var car,wall;
var speed,weight
var Deformation

function setup() {
  createCanvas(1600,800);
  car = createSprite(50, 200, 50, 50);
  wall= createSprite(1500,200,60,height/2);
  wall.shapeColor= color(80,80,80) ;
  speed= random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 
 car.velocityX = speed;
 

 if(wall.x-car.x < (car.width+wall.width)/2){
  var Deformation = 0.5 * weight * speed * speed/ 22500;
  car.velocityX = 0;
  car.collide(wall);
  
  if (Deformation>180){
   car.shapeColor= "red";
  }
 
  if (Deformation<180 && Deformation>100){
    car.shapeColor= "yellow";
   }

   if (Deformation<100){
    car.shapeColor= "green";
  }

}
 
  drawSprites();
}