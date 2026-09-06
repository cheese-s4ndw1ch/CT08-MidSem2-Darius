let box;
let ground;

function setup() {
  new Canvas(600, 400);
  world.gravity.y = 10;


  box = new Sprite(30, 30, 30,30);
  box.color = "blue";
  box.bounciness = 2;
  box.collider = "dynamic";
  startCoordinates = [50, height - box.height / 2]; //array for start point. 
  box.x = startCoordinates[0];
  box.y = startCoordinates[1];






  floor = new Sprite(1200, 390, 2400, 20);
  floor.collider = "static";
  floor.color = "green";


}
function draw() {
  background(220);


   if ((kb.presses('space') || mouse.presses()) && jumpChance > 0) {

            box.vel.y = -10;

            box.rotateTo(box.rotation + 359, 15);

            jumpChance -= 1;

        }

        if (box.collides(floor) && jumpChance < MAX_JUMP) {

            jumpChance = MAX_JUMP;
        

 if (box.x >= width / 2) {

            camera.x = box.x;

         } else {

            camera.x = width / 2;

         }
}}