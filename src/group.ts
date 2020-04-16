import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Keeps similar values together and in order.
 * @param x an iterable
 * @param fn compare function (a, b)
 */
function* group<T>(x: Iterable<T>, fn: compareFn<T>=null): IterableIterator<T[]> {
  var fn = fn||cmp;
  var a = [], u: T, i = -1;
  for(var v of x) {
    if(++i>0 && fn(u, v)!==0) { yield a; a = [v]; }
    else a.push(v);
    u = v;
  }
  yield a;
}
export default group;
