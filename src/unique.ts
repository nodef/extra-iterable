import type {compareFn, mapFn} from './_types';
import id from './_id';
import cmp from './_cmp';

function* uniqueMap<T, U=T>(x: Iterable<T>, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  var fm = fm||id;
  var s = new Set(), i = -1;
  for(var v of x) {
    var v1 = fm(v, ++i, x);
    if(s.has(v1)) continue;
    s.add(v1); yield v;
  }
}

function* uniqueDual<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  var fc=fc||cmp, fm = fm||id;
  var s = [], i = -1;
  x: for(var v of x) {
    var v1 = fm(v, ++i, x);
    for(var u1 of s)
      if(fc(u1, v1)===0) continue x;
    s.push(v1); yield v;
  }
}

/**
 * Removes duplicate values.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* unique<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  if(fc) yield* uniqueDual(x, fc, fm);
  else yield* uniqueMap(x, fm);
}
export default unique;
