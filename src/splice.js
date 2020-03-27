/**
 * Removes or replaces existing values.
 * @param {Iterable} x an iterable
 * @param {number} i remove index
 * @param {number?} n number of values to remove (rest)
 * @param {...any} vs values to insert
 * @returns {Array<Iterable>} [removed, array]
 */
function splice(x, i, n=x.length-i, ...vs) {
  throw new Error('TODO');
}
module.exports = splice;
