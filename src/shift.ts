/**
 * Removes first value.
 * @param x an iterable
 * @returns [value, iterator]
 */
function shift<T>(x: Iterable<T>): [T, Iterator<T, T>] {
  var ix = x[Symbol.iterator]();
  return [ix.next().value, ix];
}
module.exports = shift;
