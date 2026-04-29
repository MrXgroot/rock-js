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
  width,
  height,
  isTriggered: false,
});
export default Collider;
