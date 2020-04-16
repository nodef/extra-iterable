import _isInfixOn from '@extra-array/is-infix-on';
import type {mapFn} from './_types';

/**
 * Checks if iterable contains an infix.
 * @param x an iterable
 * @param y infix?
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function isInfixOn<T, U>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): boolean {
  var y1 = Array.isArray(y)? y:Array.from(y);
  return _isInfixOn(x, y1, fn, ths);
}
export default isInfixOn;
