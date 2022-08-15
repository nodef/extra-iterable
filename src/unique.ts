import type {CompareFunction, MapFunction} from "./_types";
import {IDENTITY} from "extra-function";
import {COMPARE}  from "extra-function";


function* uniqueMap<T, U=T>(x: Iterable<T>, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  var fm = fm || IDENTITY;
  var s = new Set(), i = -1;
  for (var v of x) {
    var v1 = fm(v, ++i, x);
    if (s.has(v1)) continue;
    s.add(v1); yield v;
  }
}

function* uniqueDual<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var s = [], i = -1;
  x: for (var v of x) {
    var v1 = fm(v, ++i, x);
    for (var u1 of s)
      if (fc(u1, v1)===0) continue x;
    s.push(v1); yield v;
  }
}

/**
 * Removes duplicate values.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* unique<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  if (fc) yield* uniqueDual(x, fc, fm);
  else yield* uniqueMap(x, fm);
}
export default unique;
