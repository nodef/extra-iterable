import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Checks if iterable has a subsequence.
 * @param x an iterable
 * @param y subsequence?
 * @param fn compare function (a, b)
 */
function isSubsequence<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): boolean {
  var fn = fn||cmp;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return true;
  for(var u of x) {
    if(fn(u, value)!==0) continue;
    var {value, done} = iy.next();
    if(done) return true;
  }
  return false;
}
export default isSubsequence;
