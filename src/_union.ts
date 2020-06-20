import many from './many';
import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn} from './_types';

function* unionMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  var fm = fm||id;
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

function* unionDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  var fc = fc||cmp, fm = fm||id;
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
function* union<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  if(fc) yield* unionDual(x, y, fc, fm);
  else yield* unionMap(x, y, fm);
}
export default union;
