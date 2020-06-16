import type {testFn} from './_types';

/**
 * Scans from right, until a test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @returns first index where test fails till end
 */
function scanUntilRight<T>(x: Iterable<T>, fn: testFn<T>): number {
  var i = 0, a = 0;
  for(var v of x)
    if(fn(v, i++, x)) a = i;
  return a;
}
export default scanUntilRight;
