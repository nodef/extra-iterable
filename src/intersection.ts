import {IDENTITY} from "extra-function";
import {COMPARE}  from "extra-function";
import {from as setFrom} from "extra-set";
import type {CompareFunction, MapFunction} from "./_types";


function* intersectionMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  var s = setFrom(y, fm);
  var fm = fm || IDENTITY, i = -1;
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    if(s.has(u1)) yield u;
  }
}

function* intersectionDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var y1 = [...y].map(fm), i = -1;
  x: for(var u of x) {
    var u1 = fm(u, ++i, x);
    for(var v1 of y1)
      if(fc(u1, v1)===0) { yield u; continue x; }
  }
}

/**
 * Gives values present in both iterables.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* intersection<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  if(fc) yield* intersectionDual(x, y, fc, fm);
  else yield* intersectionMap(x, y, fm);
}
export default intersection;
