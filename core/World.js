/**@typedef {import('../types.d.ts').ComponentSchema} ComponentSchema */
/**@typedef {import('../types.d.ts').ComponentName} ComponentName */

class World {
  constructor() {
    this.entities = new Set();
    /**@type {Object<string,Object<number,any>} */
    this.components = {};
    this.nextId = 0;
  }

  createEntity() {
    const id = this.nextId++;
    this.entities.add(id);
    return id;
  }
  /**
   *
   * @param {number} id
   * @param {string} componentName
   * @param {Object} data
   */
  addComponent(id, componentName, data) {
    if (!this.components[componentName]) {
      this.components[componentName] = {};
    }
    this.components[componentName][id] = data;
  }

  /**
   * @template {ComponentName} T
   * @param {number} id
   * @param {T} componentName
   * @returns {ComponentSchema[T]}
   */
  getComponent(id, componentName) {
    // console.log(componentName, id);
    let component = this.components[componentName][id];
    // console.log('called', this.components['Transform']);
    return component;
  }

  /**
   * @param {ComponentName[]} componentNames
   * @returns {number[]}
   */
  query(componentNames) {
    const results = [];
    for (const id of this.entities) {
      const match = componentNames.every((name) => {
        return this.components[name] && id in this.components[name];
      });
      if (match) {
        results.push(id);
      }
    }

    return results;
  }
}

export default World;
