import is from './is';

/**
 * Checks if value is once iterable.
 * @param v a value
 */
function isOnce(v: any): boolean {
  return is(v) && v===v[Symbol.iterator]();
}
export default isOnce;
