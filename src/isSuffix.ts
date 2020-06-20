import id from './_id';
import cmp from './_cmp';
import {from$} from 'extra-array';
import type {compareFn, mapFn} from './_types';

/**
 * Checks if iterable ends with a suffix.
 * @param x an iterable
 * @param y suffix?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isSuffix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>, fm: mapFn<T, T|U>=null): boolean {
  var fc = fc||cmp, fm = fm||id;
  var y1 = from$(y), Y = y1.length;
  var a = [], ai = 0, n = 0;
  if(Y===0) return true;
  for(var u of x) {
    a[ai++ % Y] = u;
    n++;
  }
  if(a.length<Y) return false;
  for(var i=0, j=n-Y; i<Y; i++, j++) {
    var u1 = fm(a[ai++ % Y], j, x);
    var v1 = fm(y1[i], i, y);
    if(fc(u1, v1)!==0) return false;
  }
  return true;
}
export default isSuffix;
