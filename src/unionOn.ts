import id from './_id';
import type {mapFn} from './_types';

/**
 * Gives values present in any iterable.
 * @param x an iterable
 * @param y another iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function* unionOn<T, U>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): Iterable<T> {
  var fn = fn||id;
  var s = new Set<U>();
  var i = -1, j = -1;
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    s.add(u1); yield u;
  }
  for(var v of y) {
    var v1 = fn.call(ths, v, ++j, y);
    if(!s.has(v1)) { s.add(v1); yield v; }
  }
}
export default unionOn;
