import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Finds smallest value.
 * @param x an iterable
 * @param fn compare function (a, b)
 */
function min<T>(x: Iterable<T>, fn: compareFn<T>=null): T {
  var fn = fn||cmp;
  var m: T, i = -1;
  for(var v of x)
    if(++i===0 || fn(v, m)<0) m = v;
  return m;
}
export default min;
