import many from "./many";
import {IDENTITY} from "extra-function";
import {COMPARE}  from "extra-function";
import type {CompareFunction, MapFunction} from "./_types";


function* unionMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  var fm = fm || IDENTITY;
  var s = new Set();
  var i = -1, j = -1;
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    s.add(u1); yield u;
  }
  for(var v of y) {
    var v1 = fm(v, ++j, y);
    if(!s.has(v1)) yield v;
  }
}

function* unionDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var x = many(x);
  yield* x;
  var x1 = [...x].map(fm), j = -1;
  y: for(var v of y) {
    var v1 = fm(v, ++j, y);
    for(var u1 of x1)
      if(fc(u1, v1)===0) continue y;
    yield v;
  }
}

/**
 * Gives values present in any iterable.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* union<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  if(fc) yield* unionDual(x, y, fc, fm);
  else yield* unionMap(x, y, fm);
}
export default union;
