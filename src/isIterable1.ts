import is from './is';

/**
 * Checks if value is one-time iterable.
 * @param v a value
 */
function isIterable1(v: any): boolean {
  return is(v) && v===v[Symbol.iterator]();
}
export default isIterable1;
