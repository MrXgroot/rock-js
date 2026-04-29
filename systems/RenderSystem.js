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
      this.graphics.drawRect({ x, y, w: 20, h: 20, color });
    }
  }
}
export default RenderSystem;
