import id from './_id';
import type {mapFn} from './_types';

/**
 * Checks if there are no duplicate values.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function isUniqueOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): boolean {
  var fn = fn||id;
  var s = new Set<U>(), i = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    if(s.has(v1)) return false;
    s.add(v1);
  }
  return true;
}
export default isUniqueOn;
