/**
 * Gives iterator for iterable.
 * @param {Iterable} x an iterable
 * @returns {Iterable}
 */
function iterator<T>(x: Iterable<T>): Iterator<T, T> {
  return x[Symbol.iterator]();
}
module.exports = iterator;
