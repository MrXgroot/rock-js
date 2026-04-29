import Engine from '../index.js';
let world = Engine.create();
world.body.createPlayer({ x: 100, y: 100, width: 200, height: 100, color: '#000' });
function draw(dt) {
  world.step(dt);
  requestAnimationFrame(draw);
}

draw();
