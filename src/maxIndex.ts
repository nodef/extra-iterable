import id from './_id';
import cmp from './_cmp';
import type {mapFn, compareFn} from './_types';

function maxIndexCompare<T>(x: Iterable<T>, fn: compareFn<T>=null): number {
  var fn = fn||cmp;
  var m: T, mi = -1, i = -1;
  for(var v of x)
    if(++i===0 || fn(v, m)>0) { m = v; mi = i; }
  return mi;
}

function maxIndexMap<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null): number {
  var fn = fn||id;
  var mk: T|U, mi = -1, i = -1;
  for(var v of x) {
    var k = fn(v, ++i, x);
    if(i===0 || k>mk) { mk = k; mi = i; }
  }
  return mi;
}

/**
 * Finds index of largest value.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function maxIndex<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): number {
  var fc = fc||cmp, fm = fm||id;
  var mk: T|U, mi = -1, i = -1;
  for(var v of x) {
    var k = fm(v, ++i, x);
    if(i===0 || fc(k, mk)>0) { mk = k; mi = i; }
  }
  return mi;
}
export default maxIndex;
