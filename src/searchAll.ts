import type {testFn} from './_types';

/**
 * Finds indices of values passing a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns indices of value
 */
function* searchAll<T>(x: Iterable<T>, ft: testFn<T>): IterableIterator<number> {
  var i = -1;
  for(var v of x)
    if(ft(v, ++i, x)) yield i;
}
export default searchAll;
