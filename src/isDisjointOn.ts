import uniques from './_uniques';
import id from './_id';
import type {mapFn} from './_types';

/**
 * Checks if iterables have no value in common.
 * @param x an iterable
 * @param y another iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function isDisjointOn<T, U>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): boolean {
  var s = uniques(y, fn, ths);
  var fn = fn||id, i = -1;
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    if(s.has(u1)) return false;
  }
  return true;
}
export default isDisjointOn;
