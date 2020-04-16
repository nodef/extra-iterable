import from from './from';
import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Checks if there are no duplicate values.
 * @param x an iterable
 * @param fn compare function (a, b)
 */
function isUnique<T>(x: Iterable<T>, fn: compareFn<T>=null): boolean {
  var fn = fn||cmp;
  var x = from(x), i = -1;
  for(var u of x) {
    var j = -1; ++i;
    for(var v of x) {
      if(++j>=i) break;
      if(fn(u, v)===0) return false;
    }
  }
  return true;
}
export default isUnique;
