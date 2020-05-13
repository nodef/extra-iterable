import type {testFn} from './_types';

/**
 * Drops values till a test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function* dropWhile<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): IterableIterator<T> {
  var c = true, i = -1;
  for(var v of x) {
    c = c && fn.call(ths, v, ++i, x);
    if(!c) yield v;
  }
}
export default dropWhile;
