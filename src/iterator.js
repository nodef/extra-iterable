/**
 * Gives iterator for iterable.
 * @param {Iterable} x an iterable
 * @returns {Iterator}
 */
function iterator(x) {
  return x[Symbol.iterator]();
}
module.exports = iterator;
