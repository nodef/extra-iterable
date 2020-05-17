import id from './_id';
import cmp from './_cmp';
import type {mapFn, compareFn} from './_types';

function maxCompare<T>(x: Iterable<T>, fn: compareFn<T>=null): T {
  var fn = fn||cmp;
  var m: T, i = -1;
  for(var v of x)
    if(++i===0 || fn(v, m)>0) m = v;
  return m;
}

function maxMap<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null): T {
  var fn = fn||id;
  var mk: T|U, mv: T, i = -1;
  for(var v of x) {
    var k = fn(v, ++i, x);
    if(i===0 || k>mk) { mk = k; mv = v; }
  }
  return mv;
}

/**
 * Finds largest value.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function max<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): T {
  var fc = fc||cmp, fm = fm||id;
  var mk: T|U, mv: T, i = -1;
  for(var v of x) {
    var k = fm(v, ++i, x);
    if(i===0 || fc(k, mk)>0) { mk = k; mv = v; }
  }
  return mv;
}
export default max;
