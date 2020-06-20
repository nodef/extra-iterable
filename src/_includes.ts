import isValue from './isValue';

/**
 * Checks if iterable has a value.
 * @param x an iterable
 * @param v search value
 */
function includes<T>(x: Iterable<T>, v: T): boolean {
  return isValue(x, v);
}
export default includes;
