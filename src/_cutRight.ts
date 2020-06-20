import type {testFn} from './_types';

/**
 * Breaks iterable after test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function* cutRight<T>(x: Iterable<T>, ft: testFn<T>): IterableIterator<T[]> {
  var i = -1, a = [];
  for(var v of x) {
    a.push(v);
    if(ft(v, ++i, x)) { yield a; a = []; }
  }
  yield a;
}
export default cutRight;
