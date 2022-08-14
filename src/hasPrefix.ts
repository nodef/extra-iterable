import {IDENTITY} from "extra-function";
import {COMPARE}  from "extra-function";
import type {MapFunction, CompareFunction} from "./_types";

/**
 * Checks if iterable starts with a prefix.
 * @param x an iterable
 * @param y prefix?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function hasPrefix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U>=null, fm: MapFunction<T, T|U>=null): boolean {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var ix = x[Symbol.iterator](), i = -1;
  for(var v of y) {
    var {value, done} = ix.next();
    if(done) return false;
    var u1 = fm(value, ++i, x);
    var v1 = fm(v, i, y);
    if(fc(u1, v1)!==0) return false;
  }
  return true;
}
export default hasPrefix;
