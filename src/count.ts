import type {testFn} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x an iterable
 * @param fn test function (v, i, x)
 */
function count<T>(x: Iterable<T>, fn: testFn<T>): number {
  var n = 0, i = -1;
  for(var v of x)
    if(fn(v, ++i, x)) n++;
  return n;
}
export default count;
