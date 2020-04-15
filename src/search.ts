import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Searches a value from left.
 * @param x an iterable
 * @param v search value
 * @param fn compare function (a, b)
 * @returns index of value, -1 if not found
 */
function search<T>(x: Iterable<T>, v: T, fn: compareFn<T>=null): number {
  var fn = fn||cmp, i = -1;
  for(var u of x) {
    ++i;
    if(fn(u, v)===0) return i;
  }
  return -1;
}
export default search;
