import id from './_id';
import cmp from './_cmp';
import type {mapFn, compareFn} from './_types';

/**
 * Checks if iterable has a subsequence.
 * @param x an iterable
 * @param y subsequence?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isSubsequence<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): boolean {
  var fc = fc||cmp, fm = fm||id;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return true;
  var i = -1, j = -1;
  var v1 = fm(value, ++j, y);
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    if(fc(u1, v1)!==0) continue;
    var {value, done} = iy.next();
    if(done) return true;
    v1 = fm(value, ++j, y);
  }
  return false;
}
export default isSubsequence;
