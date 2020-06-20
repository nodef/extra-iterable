import type {testFn} from './_types';

/**
 * Breaks iterable when test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 */
function* cut<T>(x: Iterable<T>, fn: testFn<T>): IterableIterator<T[]> {
  var i = -1, a = [];
  for(var v of x) {
    if(fn(v, ++i, x)) { yield a; a = []; }
    a.push(v);
  }
  yield a;
}
export default cut;
