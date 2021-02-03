import id from "./_id";
import cmp from "./_cmp";
import type {compareFn, mapFn} from "./_types";

/**
 * Compares two iterables.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
function compare<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): number {
  var fc = fc||cmp, fm = fm||id;
  var ix = x[Symbol.iterator]();
  var iy = y[Symbol.iterator]();
  for(var i=0;; i++) {
    var u = ix.next();
    var v = iy.next();
    if(u.done || v.done) break;
    var u1 = fm(u.value, i, x);
    var v1 = fm(v.value, i, y);
    var c = fc(u1, v1);
    if(c!==0) return c;
  }
  return (v.done? 1:0) - (u.done? 1:0);
}
export default compare;
