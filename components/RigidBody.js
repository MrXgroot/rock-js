/**@typedef {import('../@types/schema.d.ts').ComponentSchema} ComponentSchema */

/**
 * @typedef {Force} force
 * @property {number} fx
 * @property {number} fy
 */
/**
 * @param {Object} props
 * @param {number} [props.mass]
 * @param {number}  [props.restituion]
 * @param {number}  [props.friction]
 * @param {number}  [props.invMass]
 * @param {boolean} [props.isStatic]
 * @param {force} [props.force]
 * @returns {ComponentSchema['RigidBody']}
 */
const RigidBody = ({ mass = 1, restitution = 0.1, friction = 0.1, isStatic = false }) => ({
  mass,
  restituion,
  friction,
  isStatic,
  invMass: mass > 0 ? 1 / mass : 0,
  force: { x: 0, y: 0 },
});

export default RigidBody;
