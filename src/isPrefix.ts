import searchPrefix from './searchPrefix';
import type {mapFn, compareFn} from './_types';

/**
 * Checks if iterable starts with a prefix.
 * @param x an iterable
 * @param y prefix?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isPrefix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): boolean {
  return searchPrefix(x, y, fc, fm)>=0;
}
export default isPrefix;
