import type {testFn} from './_types';

/**
 * Scans from left, until a test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @returns index where test passes
 */
function scanUntil<T>(x: Iterable<T>, fn: testFn<T>): number {
  var i = -1;
  for(var v of x)
    if(fn(v, ++i, x)) return i;
  return ++i;
}
export default scanUntil;
