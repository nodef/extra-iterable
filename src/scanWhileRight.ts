import type {testFn} from "./_types";

/**
 * Scans from right, while a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns first index where test passes till end
 */
function scanWhileRight<T>(x: Iterable<T>, ft: testFn<T>): number {
  var i = 0, a = 0;
  for(var v of x)
    if(!ft(v, i++, x)) a = i;
  return a;
}
export default scanWhileRight;
