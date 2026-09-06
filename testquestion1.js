let player;
let floor;

function setup() {

  new Canvas(600, 400);

  world.gravity.y = 10;

  
  player = new Sprite(300, 100, 30, 30);
  player.color = 'blue';
  player.collider = 'dynamic'

  
  floor = new Sprite(1200, 390, 2400, 20);
  floor.collider = 'static';
  floor.color = 'green';
}

function draw() {
  background(220);
}
