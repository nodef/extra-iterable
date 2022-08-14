import {IDENTITY} from "extra-function";
import {COMPARE}  from "extra-function";
import type {MapFunction, CompareFunction} from "./_types";

/**
 * Keeps similar values together and in order.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* group<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U>=null, fm: MapFunction<T, T|U>=null): IterableIterator<T[]> {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var a = [], u1: T|U, i = -1;
  for(var v of x) {
    var v1 = fm(v, ++i, x);
    if(i>0 && fc(u1, v1)!==0) { yield a; a = [v]; }
    else a.push(v);
    u1 = v1;
  }
  yield a;
}
export default group;
