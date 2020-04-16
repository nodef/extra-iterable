import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Searches a value throughout.
 * @param x an iterable
 * @param v search value
 * @param fn compare function (a, b)
 * @returns indices of value
 */
function* searchAll<T>(x: Iterable<T>, v: T, fn: compareFn<T>=null): IterableIterator<number> {
  var fn = fn||cmp, i = -1;
  for(var u of x) {
    ++i;
    if(fn(u, v)===0) yield i;
  }
}
export default searchAll;
