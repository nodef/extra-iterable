import uniques from './_uniques';
import id from './_id';
import { mapFn } from './_types';

/**
 * Gives values present in both iterables.
 * @param x an iterable
 * @param y another iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function* intersectionOn<T, U>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): Iterable<T> {
  var s = uniques(y, fn, ths);
  var fn = fn||id, i = -1;
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    if(s.has(u1)) yield u;
  }
}
export default intersectionOn;
