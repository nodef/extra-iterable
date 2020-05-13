import many from './many';
import id from './_id';
import type {mapFn} from './_types';

/**
 * Lists cartesian product of iterables.
 * @param xs iterables
 * @param fn map function (vs, i, xs)
 * @param ths this argument
 */
function* productLoopAll<T, U>(xs: Iterable<T>[], fn: mapFn<T[], U>=null, ths: object=null): IterableIterator<U> {
  var fn = fn||id;
  var X = xs.length;
  if(X===0) return;
  var xs = xs.map(many);
  var is = xs.map(x => x[Symbol.iterator]());
  var os = is.map(i => i.next());
  if(os.some(o => o.done)) return;
  var vs = os.map(o => o.value);
  for(var i=0; !os[0].done; i++) {
    yield fn.call(ths, vs.slice(), i, xs);
    for(var r=X-1; r>=0; r--) {
      os[r] = is[r].next();
      if(!os[r].done) {
        vs[r] = os[r].value;
        break;
      }
      else if(r>0) {
        is[r] = xs[r][Symbol.iterator]();
        vs[r] = is[r].next().value;
      }
    }
  }
}

function* productLoopFirst<T, U>(xs: Iterable<T>[], fn: mapFn<T[], U>, ths: object=null): IterableIterator<U> {
  var fn = fn||id;
  var X = xs.length;
  if(X===0) return;
  var x0 = xs[0], i = -1;
  var xs = xs.slice(1).map(many);
  var is = xs.map(x => x[Symbol.iterator]());
  var os = is.map(i => i.next());
  if(os.some(o => o.done)) return;
  for(var v0 of x0) {
    for(;;) {
      var vs = [v0];
      for(var o of os) vs.push(o.value);
      yield fn.call(ths, vs, ++i, xs);
      for(var r=X-2; r>=0; r--) {
        os[r] = is[r].next();
        if(!os[r].done) break;
        is[r] = xs[r][Symbol.iterator]();
        os[r] = is[r].next();
      }
      if(r<0) break;
    }
  }
}

export default productLoopFirst;
