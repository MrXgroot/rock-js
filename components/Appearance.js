/**@typedef {import('../@types/schema.d.ts').ComponentSchema} ComponentSchema */

/**
 * @param {Object} props
 * @param {string} [props.color]
 * @param {number} [props.layer]
 * @returns {ComponentSchema['Appearance']}

 */
const Appearance = ({ color = '#fff', layer = 1 }) => ({
  color,
  layer,
});
export default Appearance;
