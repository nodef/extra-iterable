import {IDENTITY} from "extra-function";
import {COMPARE}  from "extra-function";
import {from as setFrom} from "extra-set";
import type {CompareFunction, MapFunction} from "./_types";

function* differenceMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fm: MapFunction<T, T|U>=null): IterableIterator<T> {
  var s = setFrom(y, fm);
  var fm = fm || IDENTITY, i = -1;
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    if(!s.has(u1)) yield u;
  }
}

function* differenceDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U>=null, fm: MapFunction<T, T|U>=null): IterableIterator<T> {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var y1 = [...y].map(fm), i = -1;
  x: for(var u of x) {
    var u1 = fm(u, ++i, x);
    for(var v1 of y1)
      if(fc(u1, v1)===0) continue x;
    yield u;
  }
}

/**
 * Gives values not present in another iterable.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* difference<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U>=null, fm: MapFunction<T, T|U>=null): IterableIterator<T> {
  if(fc) yield* differenceDual(x, y, fc, fm);
  else yield* differenceMap(x, y, fm);
}
export default difference;
