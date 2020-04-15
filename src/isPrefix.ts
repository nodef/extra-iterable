import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Checks if iterable starts with a prefix.
 * @param x an iterable
 * @param y prefix?
 * @param fn compare function (a, b)
 */
function isPrefix<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): boolean {
  var fn = fn||cmp;
  var ix = x[Symbol.iterator]();
  for(var v of y) {
    var {value, done} = ix.next();
    if(done || fn(value, v)!==0) return false;
  }
  return true;
}
export default isPrefix;
