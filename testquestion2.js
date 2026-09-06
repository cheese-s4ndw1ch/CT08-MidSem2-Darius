let box;
let ground;

function setup() {
  new Canvas(600, 400);
  world.gravity.y = 10;


  box = new Sprite(30, 30, 30,30);
  box.bounciness = 0;
  box.collider = "dynamic";
  startCoordinates = [50, height - box.height / 2]; //array for start point. 
  box.x = startCoordinates[0];
  box.y = startCoordinates[1];





  ground = new Sprite(300, 350, 600, 100);

}