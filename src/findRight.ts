import type {testFn} from './_types';

/**
 * Finds last value passing a test.
 * @param x an iterable
 * @param fn test function (v, i, x)
 */
function findRight<T>(x: Iterable<T>, fn: testFn<T>): T {
  var i = -1, a: T;
  for(var v of x)
    if(fn(v, ++i, x)) a = v;
  return a;
}
export default findRight;
