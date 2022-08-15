import type {TestFunction} from "./_types";


/**
 * Discards the values which pass a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function* reject<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T> {
  var i = -1;
  for (var v of x)
    if (!ft(v, ++i, x)) yield v;
}
export default reject;
