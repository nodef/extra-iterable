import cmp from './_cmp';
import array from './_array';
import type {compareFn} from './_types';

/**
 * Checks if iterable ends with a suffix.
 * @param x an iterable
 * @param y suffix?
 * @param fn compare function (a, b)
 */
function isSuffix<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): boolean {
  var fn = fn||cmp;
  var y1 = array(y);
  var Y = y1.length, a = [], ai = 0;
  if(Y===0) return true;
  for(var u of x)
    a[ai++ % Y] = u;
  if(a.length<Y) return false;
  for(var i=0; i<Y; i++)
    if(fn(a[ai++ % Y], y1[i])!==0) return false;
  return true;
}
export default isSuffix;
