import id from './_id';
import type {mapFn} from './_types';

/**
 * Checks if iterable ends with a suffix.
 * @param x an iterable
 * @param y suffix?
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function isSuffixOn<T, U>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): boolean {
  var fn = fn||id, n = 0;
  var y = Array.isArray(y)? y:Array.from(y);
  var Y = y.length, a = [], ai = 0;
  if(Y===0) return true;
  for(var u of x) {
    a[ai++ % Y] = u;
    n++;
  }
  if(a.length<Y) return false;
  for(var i=0, j=n-Y; i<Y; i++, j++) {
    var u1 = fn.call(ths, a[ai++ % Y], j, x);
    var v1 = fn.call(ths, y[i], i, y);
    if(u1!==v1) return false;
  }
  return true;
}
export default isSuffixOn;
