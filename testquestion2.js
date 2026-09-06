let box;
let ground;

function setup() {
  new Canvas(600, 400);
  world.gravity.y = 10;


  box = new Sprite(30, 30, 30,30);
   box.bounciness = 0;

    box.collider = "dynamic";





  ground = new Sprite(300, 350, 600, 100);

}