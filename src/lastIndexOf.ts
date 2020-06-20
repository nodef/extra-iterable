import searchValueRight from './searchValueRight';
import slice from './slice';
import END from './END';

/**
 * Finds last index of a value.
 * @param x an iterable
 * @param v search value
 * @param i start index (X-1)
 */
function lastIndexOf<T>(x: Iterable<T>, v: T, i: number=END-1): number {
  return searchValueRight(slice(x, 0, i+1), v);
}
export default lastIndexOf;
