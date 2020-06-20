import type {testFn} from './_types';

/**
 * Finds index of last value passing a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns index of value, -1 if not found
 */
function searchRight<T>(x: Iterable<T>, ft: testFn<T>): number {
  var i = -1, a = -1;
  for(var v of x)
    if(ft(v, ++i, x)) a = i;
  return a;
}
export default searchRight;
