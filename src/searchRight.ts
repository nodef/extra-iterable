import type {testFn} from './_types';

/**
 * Searches value passing a test, from right.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @returns index of value, -1 if not found
 */
function searchRight<T>(x: Iterable<T>, fn: testFn<T>): number {
  var i = -1, a = -1;
  for(var v of x)
    if(fn(v, ++i, x)) a = i;
  return a;
}
export default searchRight;
