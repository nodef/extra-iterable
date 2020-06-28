import searchSubsequence from './searchSubsequence';
import type {mapFn, compareFn} from './_types';

/**
 * Checks if iterable has a subsequence.
 * @param x an iterable
 * @param y subsequence?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function hasSubsequence<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): boolean {
  return searchSubsequence(x, y, fc, fm)>=0;
}
export default hasSubsequence;
