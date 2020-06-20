import type {mapFn} from './_types';

/**
 * Gets unique set of values.
 * @param x an iterable
 * @param fm map function (v, i, x)
 */
function uniqueSet<T, U=T>(x: Iterable<T>, fm: mapFn<T, T|U>=null): Set<T|U> {
  if(!fm) return new Set(x);
  var a = new Set<T|U>(), i = -1;
  for(var v of x)
    a.add(fm(v, ++i, x));
  return a;
} 
export default uniqueSet;
