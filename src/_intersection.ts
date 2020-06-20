import id from './_id';
import cmp from './_cmp';
import uniqueSet from './_uniqueSet';
import type {compareFn, mapFn} from './_types';

function* intersectionMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  var s = uniqueSet(y, fm);
  var fm = fm||id, i = -1;
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    if(s.has(u1)) yield u;
  }
}

function* intersectionDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  var fc = fc||cmp, fm = fm||id;
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
function* intersection<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  if(fc) yield* intersectionDual(x, y, fc, fm);
  else yield* intersectionMap(x, y, fm);
}
export default intersection;
