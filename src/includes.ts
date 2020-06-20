import slice from './slice';
import isValue from './isValue';

/**
 * Checks if iterable has a value.
 * @param x an iterable
 * @param v search value
 * @param i start index (0)
 */
function includes<T>(x: Iterable<T>, v: T, i: number=0): boolean {
  return isValue(slice(x, i), v);
}
export default includes;
