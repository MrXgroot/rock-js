/**@typedef {import('../@types/schema.d.ts').ComponentSchema} ComponentSchema */

/**
 * @param {Object} props
 * @param {string} [props.type]
 * @param {number} [props.width=1]
 * @param {number} [props.height=1]
 * @param {number} [props.depth=1]
 * @returns {ComponentSchema['Collider']}
 */

const Collider = ({ type = 'BOX', width = 1, height = 1, depth = 1 }) => ({
  type: 'BOX',
  size: { x: width, y: height, z: depth },
  halfSize: { x: width / 2, y: height / 2, z: depth / 2 },
  isTriggered: false,
});
export default Collider;
