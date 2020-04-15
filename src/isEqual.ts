import compare from './compare';
import type {compareFn} from './_types';

/**
 * Checks if two iterables are equal.
 * @param x an iterable
 * @param y another iterable
 * @param fn compare function (a, b)
 */
function isEqual<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): boolean {
  return compare(x, y, fn)===0;
}
export default isEqual;
