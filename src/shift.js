/**
 * Removes first value.
 * @param {Iterable} x an iterable
 * @returns {Array} [value, iterable]
 */
function shift(x) {
  var ix = x[Symbol.iterator]();
  return [ix.next().value, ix];
}
module.exports = shift;
