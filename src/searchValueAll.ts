import {IDENTITY} from "extra-function";
import {COMPARE}  from "extra-function";
import type {CompareFunction, MapFunction} from "./_types";


/**
 * Finds indices of a value.
 * @param x an iterable
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns indices of value
 */
function* searchValueAll<T, U=T>(x: Iterable<T>, v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<number> {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var v1 = fm(v, 0, null), i = -1;
  for (var u of x) {
    var u1 = fm(u, ++i, x);
    if (fc(u1, v1)===0) yield i;
  }
}
export default searchValueAll;
