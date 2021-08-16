//declaring the variables
var car, wall;
var speed, weight;

function setup() {
  //creating the canvas
  createCanvas(1500,600);

//creating teh car and the wall
  car = createSprite(50, 200, 50, 50);
  wall = createSprite (1200, 200, 30, 100);

  //giving a random speed of 20 to 90 to speed
  speed=random(50,90);
  //giving the radom weight for the weight as 400 to 1500
  weight=random(400,1500);

  //ataching the var with the speed
  car.velocityX = speed; 

}
function draw() {

  //setting the background color as black
  background("black");  

  //if the car crosses the wall 
  if (wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX=0;
  //if the car crosses the wall with speed greater than 180 then the color should be red
  var deformation=0.5 * weight * speed * speed/22509;
  if (deformation>180) {
  car.shapeColor = "red";
  }
  //if the car crosses the wall with speed greater than 100 then the color should be yellow
  if (deformation<180 && deformation>100) {
  car.shapeColor = "yellow";
  }
  //if the car crosses the wall with speed less than 100 then the color should be green
  if (deformation<100) {
  car.shapeColor = "green";
  }
} 
//drawing the sprites !important

  drawSprites();
}