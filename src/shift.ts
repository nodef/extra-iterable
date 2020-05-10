import from from './from';

/**
 * Removes first value.
 * @param x an iterable
 * @returns [value, iterator]
 */
function shift<T>(x: Iterable<T>): [T, Iterable<T>] {
  var ix = x[Symbol.iterator]();
  return [ix.next().value, from(ix)];
}
export default shift;
