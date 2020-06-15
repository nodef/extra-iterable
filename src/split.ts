import type {testFn} from './_types';

/**
 * Breaks iterable considering test as separator.
 * @param x an iterable
 * @param fn test function (v, i, x)
 */
function* split<T>(x: Iterable<T>, fn: testFn<T>): IterableIterator<T[]> {
  var a: T[] = [], i = -1;
  for(var v of x) {
    if(!fn(v, ++i, x)) a.push(v);
    else if(a.length) { yield a; a = []; }
  }
  if(a.length) yield a;
}
export default split;
