import id from './_id';
import { mapFn } from './_types';

/**
 * Checks if iterable has a subsequence.
 * @param x an iterable
 * @param y subsequence?
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function isSubsequenceOn<T, U>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): boolean {
  var fn = fn||id, i = -1, j = -1;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return true;
  var v1 = fn.call(ths, value, ++j, y);
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    if(u1!==v1) continue;
    var {value, done} = iy.next();
    if(done) return true;
    v1 = fn.call(ths, value, ++j, y);
  }
  return false;
}
export default isSubsequenceOn;
