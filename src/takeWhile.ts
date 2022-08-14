import type {TestFunction} from "./_types";

/**
 * Keeps values from left, while a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function* takeWhile<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T> {
  var i = -1;
  for(var v of x) {
    if(ft(v, ++i, x)) yield v;
    else return;
  }
}
export default takeWhile;
