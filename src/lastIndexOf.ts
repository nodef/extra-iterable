import searchRight from './searchRight';
import slice from './slice';

/**
 * Finds last index of a value.
 * @param x an iterable
 * @param v search value
 * @param i start index
 */
function lastIndexOf<T>(x: Iterable<T>, v: T, i: number=Number.MAX_SAFE_INTEGER-1): number {
  return searchRight(slice(x, 0, i+1), v);
}
export default lastIndexOf;
