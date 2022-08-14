import type {TestFunction} from "./_types";


/**
 * Keeps values from right, while a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function* takeWhileRight<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T> {
  var i = -1, a = [];
  for(var v of x) {
    if(ft(v, ++i, x)) a.push(v);
    else a.length = 0;
  }
  yield* a;
}
export default takeWhileRight;
