import many from './many';
import id from './_id';
import type {mapFn} from './_types';

/**
 * Lists cartesian product of iterables.
 * @param xs iterables
 * @param fn map function (vs, i, xs)
 * @param ths this argument
 */
function* cartesianProduct<T, U>(xs: Iterable<T>[], fn: mapFn<T[], U>=null, ths: object=null): IterableIterator<U> {
  var fn = fn||id;
  var X = xs.length;
  if(X===0) return;
  var is = [], os = [];
  for(var i=0; i<X; i++) {
    xs[i] = i>0? many(xs[i]) : xs[i];
    is[i] = xs[i][Symbol.iterator]();
    os[i] = is[i].next();
    if(os[i].done) return;
  }
  for(var i=0;; i++) {
    var vs = [];
    for(var o of os) vs.push(o.value);
    yield fn.call(ths, vs, i, xs);
    for(var r=X-1; r>=0; r--) {
      os[r] = is[r].next();
      if(!os[r].done) break;
      is[r] = xs[r][Symbol.iterator]();
      os[r] = is[r].next();
    }
    if(r<0) break;
  }
}
export default cartesianProduct;
