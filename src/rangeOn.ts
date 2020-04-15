import id from './_id';
import type {mapFn} from './_types';

/**
 * Finds smallest and largest values.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 * @returns [min, max]
 */
function rangeOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): [T, T] {
  var fn = fn||id, i = -1;
  var mk: U, mv: T, nk: U, nv: T;
  for(var v of x) {
    var k: U = fn.call(ths, v, ++i, x);
    if(i===0) { mk = nk = k; mv = nv = v; }
    if(k<mk) { mk = k; mv = v; }
    if(k>nk) { nk = k; nv = v; }
  }
  return [mv, nv];
}
export default rangeOn;
