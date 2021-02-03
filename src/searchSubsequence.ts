import id from "./_id";
import cmp from "./_cmp";
import type {mapFn, compareFn} from "./_types";

/**
 * Finds first index of a subsequence.
 * @param x an iterable
 * @param y search subsequence
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns start index of subsequence, -1 if not found
 */
function searchSubsequence<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): number {
  var fc = fc||cmp, fm = fm||id;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return 0;
  var i = -1, j = -1, a = -1;
  var v1 = fm(value, ++j, y);
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    if(fc(u1, v1)!==0) continue;
    if(a<0) a = i;
    var {value, done} = iy.next();
    if(done) return a;
    v1 = fm(value, ++j, y);
  }
  return -1;
}
export default searchSubsequence;
