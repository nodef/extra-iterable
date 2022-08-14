import type {TestFunction} from "./_types";


/**
 * Scans from right, until a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns first index where test fails till end
 */
function scanUntilRight<T>(x: Iterable<T>, ft: TestFunction<T>): number {
  var i = 0, a = 0;
  for(var v of x)
    if(ft(v, i++, x)) a = i;
  return a;
}
export default scanUntilRight;
