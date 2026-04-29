export default class CollissionSystem {
  execute(world, dt) {
    let collidable = world.query(['Collider,Transform']);
    for (let id of collidable) {
      let collider = world.getComponent(id, 'Collider');
      if (!collider) continue;
      console.log(collider);
    }
  }
}
