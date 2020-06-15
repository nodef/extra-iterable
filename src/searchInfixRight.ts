import last from './last';
import searchInfixAll from './searchInfixAll';
import type {compareFn, mapFn} from './_types';

/**
 * Searches an infix, from right.
 * @param x an iterable
 * @param y search infix
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function searchInfix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>, fm: mapFn<T, T|U>=null): number {
  return last(searchInfixAll(x, y, fc, fm), -1);
}
export default searchInfix;
