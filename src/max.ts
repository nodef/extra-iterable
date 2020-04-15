import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Finds largest value.
 * @param x an iterable
 * @param fn compare function (a, b)
 */
function max<T>(x: Iterable<T>, fn: compareFn<T>=null): T {
  var fn = fn||cmp;
  var m: T, i = -1;
  for(var v of x) {
    if(++i===0) m = v;
    if(fn(v, m)>0) m = v;
  }
  return m;
}
export default max;
