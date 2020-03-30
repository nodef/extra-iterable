/**
 * Removes or replaces existing values.
 * @param {Iterable} x an iterable
 * @param {number} i remove index
 * @param {number?} n number of values to remove (rest)
 * @param {...any} vs values to insert
 * @returns {Array<Iterable>} [removed, iterable]
 */
function splice(x, i, n=Number.MAX_SAFE_INTEGER-i, ...vs) {
  throw new Error('TODO');
  var j = -1;
  for(var u of x) {
    if(++j<i || j>=i+n) yield u;
    else yield* vs;
  }
}
module.exports = splice;
