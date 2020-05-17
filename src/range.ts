import id from './_id';
import cmp from './_cmp';
import type {mapFn, compareFn} from './_types';

function rangeCompare<T>(x: Iterable<T>, fn: compareFn<T>=null): [T, T] {
  var fn = fn||cmp;
  var m: T, n: T, i = -1;
  for(var v of x) {
    if(++i===0) { m = n = v; }
    if(fn(v, m)<0) m = v;
    if(fn(v, n)>0) n = v;
  }
  return [m, n];
}

function rangeMap<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null): [T, T] {
  var fn = fn||id, i = -1;
  var mk: T|U, mv: T, nk: T|U, nv: T;
  for(var v of x) {
    var k = fn(v, ++i, x);
    if(i===0) { mk = nk = k; mv = nv = v; }
    if(k<mk) { mk = k; mv = v; }
    if(k>nk) { nk = k; nv = v; }
  }
  return [mv, nv];
}

/**
 * Finds smallest and largest values.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns [min, max]
 */
function range<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): [T, T] {
  var fc = fc||cmp, fm = fm||id;
  var mk: T|U, mv: T, nk: T|U, nv: T, i = -1;
  for(var v of x) {
    var k = fm(v, ++i, x);
    if(i===0) { mk = nk = k; mv = nv = v; }
    if(fc(k, mk)<0) { mk = k; mv = v; }
    if(fc(k, nk)>0) { nk = k; nv = v; }
  }
  return [mv, nv];
}
export default range;
