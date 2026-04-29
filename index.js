//@ts-check
import World from './core/World.js';
import EntityFactory from './factory/EntityFactory.js';
import Graphics from './core/Graphics.js';
import { System } from './systems/index.js';
/**@returns {import('./types.d.ts').EngineInstance}*/
const Engine = {
  create: () => {
    let world = new World();
    let systems = [];
    let graphics = new Graphics('#mycanvas');

    systems.push(new System.Physics());
    systems.push(new System.Collission());
    systems.push(new System.Render(graphics));

    return {
      register: (system) => systems.push(system),
      step: (dt) => systems.forEach((system) => system.execute(world, dt)),
      body: new EntityFactory(world),
      query: (componentNames) => world.query(componentNames),
    };
  },
};

export default Engine;
