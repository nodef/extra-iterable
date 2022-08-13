import {IDENTITY} from "extra-function";
import {COMPARE}  from "extra-function";
import type {compareFn, mapFn} from "./_types";

/**
 * Finds last index of a value.
 * @param x an iterable
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns index of value, -1 if not found
 */
function searchValueRight<T, U=T>(x: Iterable<T>, v: T, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): number {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var v1 = fm(v, 0, null), i = -1, j = -1;
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    if(fc(u1, v1)===0) j = i;
  }
  return j;
}
export default searchValueRight;
