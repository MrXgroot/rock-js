class EntityHandler {
  constructor(id, world) {
    this.id = id
    this.world = world
  }
  set x(val) {
    this.world.getComponent(this.id, 'Transform').x = val
  }
  get x() {
    this.world.getComponent(this.id, 'Transform').x
  }
}

export default EntityHandler
