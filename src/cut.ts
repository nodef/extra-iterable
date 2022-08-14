import type {TestFunction} from "./_types";

/**
 * Breaks iterable when test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function* cut<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T[]> {
  var i = -1, a = [];
  for(var v of x) {
    if(ft(v, ++i, x)) { yield a; a = []; }
    a.push(v);
  }
  yield a;
}
export default cut;
