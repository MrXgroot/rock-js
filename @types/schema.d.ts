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
    angularVelocity: number;
  };

  RigidBody: {
    mass: number;
    invMass: number;
    restitution: number;
    friction: number;
    isStatic: boolean;
  };

  Appearance: {
    color: string;
    layer: number;
  };

  Collider: {
    type: 'CIRCLE' | 'RECT';
    width?: number;
    height?: number;
    radius?: number;
  };
}

export type componnetName = keyof ComponentSchema;
