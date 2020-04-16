import _isInfix from '@extra-array/is-infix';
import type {compareFn} from './_types';

/**
 * Checks if iterable contains an infix.
 * @param x an iterable
 * @param y infix?
 * @param fn compare function (a, b)
 */
function isInfix<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): boolean {
  var y1 = Array.isArray(y)? y:Array.from(y);
  return _isInfix(x, y1, fn);
}
export default isInfix;
