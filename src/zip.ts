import id from './_id';
import type {mapFn} from './_types';

/**
 * Combines values from n iterables.
 * @param xs n iterables
 * @param fn map function ([...vs], i, x)
 * @param ths this argument
 */
function* zip<T, U>(xs: Iterable<T>[], fn: mapFn<T[], U>=null, ths: object=null): IterableIterator<U> {
  var fn = fn||id, i = -1;
  var is = xs.map(x => x[Symbol.iterator]());
  while(true) {
    var io = is.map(i => i.next());
    if(io.every(r => r.done)) break;
    var vs = io.map(r => r.value);
    yield fn.call(ths, vs, ++i, xs);
  }
}
export default zip;