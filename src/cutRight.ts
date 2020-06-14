import type {testFn} from './_types';

/**
 * Breaks iterable after test passes.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function* cutRight<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): IterableIterator<T[]> {
  var i = -1, a = [];
  for(var v of x) {
    a.push(v);
    if(fn.call(ths, v, ++i, x)) { yield a; a = []; }
  }
  yield a;
}
export default cutRight;
