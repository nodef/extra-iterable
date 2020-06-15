import id from './_id';
import cmp from './_cmp';
import type {mapFn, compareFn} from './_types';

/**
 * Keeps similar values together and in order.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* group<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T[]> {
  var fc = fc||cmp, fm = fm||id;
  var a = [], u1: T|U, i = -1;
  for(var v of x) {
    var v1 = fm(v, ++i, x);
    if(i>0 && fc(u1, v1)!==0) { yield a; a = [v]; }
    else a.push(v);
    u1 = v1;
  }
  yield a;
}
export default group;
