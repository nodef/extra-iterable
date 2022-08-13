import {IDENTITY} from "extra-function";
import {COMPARE}  from "extra-function";
import {from$} from "extra-array";
import type {compareFn, mapFn} from "./_types";

/**
 * Finds indices of an infix.
 * @param x an iterable
 * @param y search infix
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* searchInfixAll<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>, fm: mapFn<T, T|U>=null): IterableIterator<number> {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var y1 = from$(y), Y = y1.length;
  if(Y===0) yield 0;
  var y1 = y1.map(fm, null) as T[];
  var m = new Array(Y).fill(false);
  var i = -1, J = 0;
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    for(var j=J; j>0; j--)
      m[j] = m[j-1] && fc(u1, y1[j])===0;
    m[0] = fc(u1, y1[0])===0;
    J = Math.min(J+1, Y-1);
    if(m[Y-1]) yield i-Y+1;
  }
}
export default searchInfixAll;
