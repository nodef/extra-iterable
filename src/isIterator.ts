import is from './is';

/**
 * Checks if value is an iterator (can iterate only once).
 * @param v a value
 */
function isIterator(v: any): boolean {
  return is(v) && v===v[Symbol.iterator]();
}
export default isIterator;
