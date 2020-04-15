import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Finds smallest and largest values.
 * @param x an iterable
 * @param fn compare function (a, b)
 * @returns [min, max]
 */
function range<T>(x: Iterable<T>, fn: compareFn<T>=null): [T, T] {
  var fn = fn||cmp;
  var m: T, n: T, i = -1;
  for(var v of x) {
    if(++i===0) { m = n = v; }
    if(fn(v, m)<0) m = v;
    if(fn(v, n)>0) n = v;
  }
  return [m, n];
}
export default range;
