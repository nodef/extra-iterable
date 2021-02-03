import type {testFn} from "./_types";

/**
 * Discards values from right, while a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function* dropWhileRight<T>(x: Iterable<T>, ft: testFn<T>): IterableIterator<T> {
  var i = -1, a = [];
  for(var v of x) {
    if(ft(v, ++i, x)) a.push(v);
    else { yield* a; yield v; a.length = 0; }
  }
}
export default dropWhileRight;
