import { Create } from '../components/index.js';
class EntityFactory {
  constructor(world) {
    this.world = world;
  }
  createPlayer({ x, y, color = '#fff', width, height } = {}) {
    let id = this.world.createEntity();

    let transform = Create.Transform({ x, y });
    let appearance = Create.Appearance({ color });
    let collider = Create.Collider({ type: 'RECT', width, height });
    console.log(collider);
    this.world.addComponent(id, 'Appearance', appearance);
    this.world.addComponent(id, 'Transform', transform);
    this.world.addComponent(id, 'Collider', collider);

    return id;
  }
}

export default EntityFactory;
