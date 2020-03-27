/**
 * Converts an iterator to iterable.
 * @param {Iterable} x an iterable
 * @returns {Iterable}
 */
function from(x) {
  return x===x[Symbol.iterator]()? Array.from(x):x;
}
module.exports = from;
