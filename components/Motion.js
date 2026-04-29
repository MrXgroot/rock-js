/**@typedef {import('../@types/schema.d.ts').ComponentSchema} componentSchema */

/**
 * @param {Object} props
 * @param {number} [props.vx]
 * @param {number} [props.vy]
 * @returns {componentSchema['Motion']}
 */
const Motion = ({ vx = 0, vy = 0, angularVelocity = 0 }) => ({
  vx,
  vy,
  angularVelocity,
});

export default Motion;
