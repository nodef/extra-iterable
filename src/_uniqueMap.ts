import id from './_id';
import type {mapFn} from './_types';

/**
 * Gets unique map of values.
 * @param x an iterable
 * @param fn map function (v, i, x)
 */
function uniqueMap<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null): Map<T|U, T> {
  var fn = fn||id;
  var a = new Map(), i = -1;
  for(var v of x)
    a.set(fn(v, ++i, x), v);
  return a;
} 
export default uniqueMap;
