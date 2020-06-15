import type {testFn} from './_types';

/**
 * Scans while a test passes, from right.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 * @returns first index where test passes till end
 */
function scanWhileRight<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): number {
  var i = 0, a = 0;
  for(var v of x)
    if(!fn.call(ths, v, i++, x)) a = i;
  return a;
}
export default scanWhileRight;
