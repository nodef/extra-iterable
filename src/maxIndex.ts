import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Finds index of largest value.
 * @param x an iterable
 * @param fn compare function (a, b)
 */
function maxIndex<T>(x: Iterable<T>, fn: compareFn<T>=null): number {
  var fn = fn||cmp;
  var m: T, mi = -1, i = -1;
  for(var v of x)
    if(++i===0 || fn(v, m)>0) { m = v; mi = i; }
  return mi;
}
export default maxIndex;
