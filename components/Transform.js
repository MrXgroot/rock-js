/**@typedef {import('../@types/schema.d.ts').ComponentSchema} componentSchema */

const Transform = ({ x, y, rotate = 0, scale = 1 }) => {
  if (typeof x !== 'number') throw new Error('Transform: x is required');
  if (typeof y !== 'number') throw new Error('Transform: y is required');
  return { x, y, rotate, scale };
};

export default Transform;
