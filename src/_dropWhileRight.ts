import type {testFn} from './_types';

/**
 * Drops values from right, while a test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 */
function* dropWhileRight<T>(x: Iterable<T>, fn: testFn<T>): IterableIterator<T> {
  var i = -1, a = [];
  for(var v of x) {
    if(fn(v, ++i, x)) a.push(v);
    else { yield* a; yield v; a.length = 0; }
  }
}
export default dropWhileRight;
