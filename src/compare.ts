import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Compares two iterables.
 * @param x an iterable
 * @param y another iterable
 * @param fn compare function (a, b)
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
function compare<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): number {
  var fn = fn||cmp;
  var ix = x[Symbol.iterator]();
  var iy = y[Symbol.iterator]();
  while(true) {
    var u = ix.next();
    var v = iy.next();
    if(u.done || v.done) break;
    var c = fn(u.value, v.value);
    if(c!==0) return c;
  }
  return (v.done? 1:0) - (u.done? 1:0);
}
export default compare;
