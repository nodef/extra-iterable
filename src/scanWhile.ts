import type {testFn} from './_types';

/**
 * Scans from left, while a test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 * @returns index where test fails
 */
function scanWhile<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): number {
  var i = -1;
  for(var v of x)
    if(!fn.call(ths, v, ++i, x)) return i;
  return ++i;
}
export default scanWhile;
