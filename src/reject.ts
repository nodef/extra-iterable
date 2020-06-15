import type {testFn} from './_types';

/**
 * Discards the values which pass a test.
 * @param x an iterable
 * @param fn test function (v, i, x)
 */
function* reject<T>(x: Iterable<T>, fn: testFn<T>): IterableIterator<T> {
  var i = -1;
  for(var v of x)
    if(!fn(v, ++i, x)) yield v;
}
export default reject;
