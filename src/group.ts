import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Keeps similar values together and in order.
 * @param x an iterable
 * @param fn compare function (a, b)
 */
function* group<T>(x: Iterable<T>, fn: compareFn<T>=null): Iterable<T[]> {
  var fn = fn||cmp;
  var u = x[0], a = [];
  for(var v of x) {
    if(fn(u, v)===0) a.push(v);
    else { yield a; a = [v]; }
    u = v;
  }
  yield a;
}
export default group;
