import isOnce from './isOnce';

/**
 * Checks if value is many iterable.
 * @param v a value
 */
function isMany(v: any): boolean {
  return !isOnce(v);
}
export default isMany;
