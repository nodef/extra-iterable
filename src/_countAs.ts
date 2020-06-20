import id from './_id';
import type {mapFn} from './_types';

/**
 * Counts occurrences of values.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @returns Map {value => count}
 */
function countAs<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null): Map<T|U, number> {
  var fn = fn||id;
  var m = new Map(), i = -1;
  for(var v of x) {
    var v1 = fn(v, ++i, x);
    m.set(v1, (m.get(v1)||0) + 1);
  }
  return m;
}
export default countAs;
