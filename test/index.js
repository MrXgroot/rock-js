import Engine from '../index.js';
let world = Engine.create();
world.body.createPlayer({ x: 100, y: 100, color: '#fff' });
function draw(dt) {
  world.step(dt);
  requestAnimationFrame(draw);
}

draw();
