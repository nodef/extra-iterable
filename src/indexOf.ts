import searchValue from './searchValue';
import slice from './slice';

/**
 * Finds first index of a value.
 * @param x an iterable
 * @param v search value
 * @param i start index (0)
 */
function indexOf<T>(x: Iterable<T>, v: T, i: number=0): number {
  var a = searchValue(slice(x, i), v);
  return a<0? a : a+i;
}
export default indexOf;
