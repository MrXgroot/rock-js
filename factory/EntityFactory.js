import { Create } from '../components/index.js';
class EntityFactory {
  constructor(world) {
    this.world = world;
  }
  createPlayer({ x, y, color = '#fff', width = 20, height = 50 } = {}) {
    let id = this.world.createEntity();

    let transform = Create.Transform({ x, y });
    let appearance = Create.Appearance({ color, width, height });

    this.world.addComponent(id, 'Appearance', appearance);
    this.world.addComponent(id, 'Transform', transform);

    return id;
  }
}

export default EntityFactory;
