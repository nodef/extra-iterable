import type {testFn} from './_types';

/**
 * Extracts values, while a test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 */
function* takeWhile<T>(x: Iterable<T>, fn: testFn<T>): IterableIterator<T> {
  var i = -1;
  for(var v of x) {
    if(fn(v, ++i, x)) yield v;
    else return;
  }
}
export default takeWhile;
