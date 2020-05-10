import id from './_id';
import type {mapFn} from './_types';

/**
 * Combines values from iterables.
 * @param xs iterables
 * @param fn map function (vs, i, xs)
 * @param ths this argument
 */
function* zip<T, U>(xs: Iterable<T>[], fn: mapFn<T[], U>=null, ths: object=null): IterableIterator<U> {
  var fn = fn||id, i = -1;
  if(xs.length===0) return;
  var is = xs.map(x => x[Symbol.iterator]());
  while(true) {
    var ns = is.map(i => i.next());
    if(ns.some(r => r.done)) break;
    var vs = ns.map(r => r.value);
    yield fn.call(ths, vs, ++i, xs);
  }
}
export default zip;
