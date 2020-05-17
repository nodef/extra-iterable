import id from './_id';
import type {mapFn} from './_types';

/**
 * Counts occurrences of values.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 * @returns Map {value => count}
 */
function countOn<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null, ths: object=null): Map<T|U, number> {
  var fn = fn||id;
  var m = new Map(), i = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    m.set(v1, (m.get(v1)||0) + 1);
  }
  return m;
}
export default countOn;
