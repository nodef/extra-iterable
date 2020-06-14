import type {testFn} from './_types';

/**
 * Searches last value passing a test.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 * @returns index of value, -1 if not found
 */
function searchRight<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): number {
  var i = -1, a = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) a = i;
  return a;
}
export default searchRight;
