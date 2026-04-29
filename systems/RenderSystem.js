/**@typedef {import('../core/World').default} World */

class RenderSystem {
  /**@param {import('../core/Graphics').default} graphics */
  constructor(graphics) {
    this.graphics = graphics;
  }

  /**
   * @param {World} world;
   * @param {number} dt
   */
  execute(world, dt) {
    const ids = world.query(['Transform']);
    for (let id of ids) {
      const { x, y } = world.getComponent(id, 'Transform');
      const { color } = world.getComponent(id, 'Appearance');
      const { width, height } = world.getComponent(id, 'Collider');
      this.graphics.drawRect({ x, y, width, height, color });
    }
  }
}
export default RenderSystem;
