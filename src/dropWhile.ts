import type {testFn} from './_types';

/**
 * Drops values, while a test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 */
function* dropWhile<T>(x: Iterable<T>, fn: testFn<T>): IterableIterator<T> {
  var c = true, i = -1;
  for(var v of x) {
    c = c && fn(v, ++i, x);
    if(!c) yield v;
  }
}
export default dropWhile;
