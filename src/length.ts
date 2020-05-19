import size from './size';
import END from './END';

/**
 * Counts the number of values.
 * @param x an iterable
 * @param i start index (0)
 * @param I end index (end)
 */
function length<T>(x: Iterable<T>, i: number=0, I: number=END): number {
  return size(x, i, I);
}
export default length;
