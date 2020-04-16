import id from './_id';
import type {mapFn} from './_types';

/**
 * Keeps similar values together and in order.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function* groupOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): IterableIterator<T[]> {
  var fn = fn||id;
  var a = [], u1: U, i = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    if(i>0 && u1!==v1) { yield a; a = [v]; }
    else a.push(v);
    u1 = v1;
  }
  yield a;
}
export default groupOn;
