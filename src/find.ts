import type {testFn} from "./_types";

/**
 * Finds first value passing a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function find<T>(x: Iterable<T>, ft: testFn<T>): T {
  var i = -1;
  for(var v of x)
    if(ft(v, ++i, x)) return v;
}
export default find;
