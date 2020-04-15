import uniques from './_uniques';
import id from './_id';
import type {mapFn} from './_types';

/**
 * Gives values of an iterable not present in another.
 * @param x an iterable
 * @param y another iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function* differenceOn<T, U>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): Iterable<T> {
  var fn = fn||id, i = -1;
  var s = uniques(y, fn, ths);
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    if(!s.has(u1)) yield u;
  }
}
export default differenceOn;
