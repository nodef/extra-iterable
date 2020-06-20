import id from './_id';
import type {mapFn} from './_types';

/**
 * Gets unique map of values.
 * @param x an iterable
 * @param fm map function (v, i, x)
 */
function uniqueMap<T, U=T>(x: Iterable<T>, fm: mapFn<T, T|U>=null): Map<T|U, T> {
  var fm = fm||id;
  var a = new Map(), i = -1;
  for(var v of x)
    a.set(fm(v, ++i, x), v);
  return a;
} 
export default uniqueMap;
