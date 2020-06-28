import slice from './slice';
import hasValue from './hasValue';

/**
 * Checks if iterable has a value.
 * @param x an iterable
 * @param v search value
 * @param i start index (0)
 */
function includes<T>(x: Iterable<T>, v: T, i: number=0): boolean {
  return hasValue(slice(x, i), v);
}
export default includes;
