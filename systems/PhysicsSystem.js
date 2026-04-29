class PhysicsSystem {
  constuctor() {
    this.gravity = { x: 0, y: 9.8 };
  }

  execute(world, dt) {
    let rigidbody = world.query(['Transform']);
    for (let id of rigidbody) {
      let { x, y } = world.getComponent(id, 'Transform');
      x += 10;
      y += 10;
    }
  }
}
export default PhysicsSystem;
