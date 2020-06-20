import type {mapFn} from './_types';

/**
 * Gets unique set of values.
 * @param x an iterable
 * @param fn map function (v, i, x)
 */
function uniqueSet<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null): Set<T|U> {
  if(!fn) return new Set(x);
  var a = new Set<T|U>(), i = -1;
  for(var v of x)
    a.add(fn(v, ++i, x));
  return a;
} 
export default uniqueSet;
