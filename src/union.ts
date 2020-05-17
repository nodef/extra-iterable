import many from './many';
import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn} from './_types';

function* unionCompare<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): IterableIterator<T> {
  var fn = fn||cmp;
  var x = many(x), s = new Set<T>();
  yield* x;
  y: for(var v of y) {
    for(var u of x)
      if(fn(u, v)===0) continue y;
    for(var u of s)
      if(fn(u, v)===0) continue y;
    yield v; s.add(v);
  }
}

function* unionMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, T|U>=null): IterableIterator<T> {
  var fn = fn||id;
  var s = new Set();
  var i = -1, j = -1;
  for(var u of x) {
    var u1 = fn(u, ++i, x);
    s.add(u1); yield u;
  }
  for(var v of y) {
    var v1 = fn(v, ++j, y);
    if(!s.has(v1)) { s.add(v1); yield v; }
  }
}

function* unionDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  var fc = fc||cmp, fm = fm||id;
  var x = many(x), s = new Set<T>();
  yield* x; var j = -1;
  y: for(var v of y) {
    var v1 = fm(v, ++j, y);
    var i = -1;
    for(var u of x) {
      var u1 = fm(u, ++i, x);
      if(fc(u1, v1)===0) continue y;
    }
    var i = -1;
    for(var u of s) {
      var u1 = fm(u, ++i, y);
      if(fc(u1, v1)===0) continue y;
    }
    yield v; s.add(v);
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
