import type {TestFunction} from "./_types";

/**
 * Finds last value passing a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function findRight<T>(x: Iterable<T>, ft: TestFunction<T>): T {
  var i = -1, a: T;
  for(var v of x)
    if(ft(v, ++i, x)) a = v;
  return a;
}
export default findRight;
