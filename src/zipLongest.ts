import id from './_id';
import type {mapFn} from './_types';

/**
 * Combines values from iterables, till longest.
 * @param xs iterables
 * @param vd default value
 * @param fn map function (vs, i, xs)
 * @param ths this argument
 */
function* zipLongest<T, U>(xs: Iterable<T>[], vd: U, fn: mapFn<T[], U>=null, ths: object=null): IterableIterator<U> {
  var fn = fn||id, i = -1;
  var is = xs.map(x => x[Symbol.iterator]());
  while(true) {
    var ns = is.map(i => i.next());
    if(ns.every(r => r.done)) break;
    var vs = ns.map(r => r.value || vd);
    yield fn.call(ths, vs, ++i, xs);
  }
}
export default zipLongest;
