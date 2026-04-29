//types.d.ts

export interface ComponentSchema {
  Transform: {
    x: number;
    y: number;
    rotation: number;
    scale: number;
  };

  Motion: {
    vx: number;
    vy: number;
    angularVeloctiy: number;
  };

  RigidBody: {
    mass: number;
    inverseMass: number;
    restitution: number;
    friction: number;
    isStatic: number;
  };

  Collider: {
    type: 'CIRCLE' | 'RECT' | 'POLY';
    width?: number;
    height?: number;
    radius?: number;
  };

  Appearance: {
    color: string;
    layer: number;
  };
}

export type ComponentName = keyof ComponentSchema;

export interface EngineInstance {
  register: (System: any) => void;
  step: (dt: number) => void;
  body: import('./factory/EntityFactory').default;
  query: (ComponentNames: ComponentName[]) => number[];
}
