import id from './_id';
import type {mapFn, tillFn} from './_types';

function tillShortest<T>(os: IteratorResult<T>[]): boolean {
  for(var o of os)
    if(o.done) return true;
  return false;
}

/**
 * Combines values from iterables.
 * @param xs iterables
 * @param vd default value
 * @param fn map function (vs, i, xs)
 * @param ths this argument
 * @param ftill till function (os)
 */
function* zip<T, U>(xs: Iterable<T>[], vd?: T, fn: mapFn<T[], U>=null, ths: object=null, ftill: tillFn<T>=null): IterableIterator<U> {
  var fn = fn||id;
  var ftill = ftill||tillShortest;
  var X = xs.length;
  if(X===0) return;
  var is = [], os = [], vs = [];
  for(var r=0; r<X; r++)
    is[r] = xs[r][Symbol.iterator]();
  for(var i=0;; i++) {
    for(var r=0; r<X; r++) {
      os[r] = is[r].next();
      vs[r] = os[r].done? vd : os[r].value;
    }
    if(ftill(os)) break;
    yield fn.call(ths, vs.slice(), i, xs);
  }
}
export default zip;
