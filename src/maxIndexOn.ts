import id from './_id';
import type {mapFn} from './_types';

/**
 * Finds index of largest value.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function maxIndexOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): number {
  var fn = fn||id;
  var mk: U, mi = -1, i = -1;
  for(var v of x) {
    var k = fn.call(ths, v, ++i, x);
    if(i===0 || k>mk) { mk = k; mi = i; }
  }
  return mi;
}
export default maxIndexOn;
