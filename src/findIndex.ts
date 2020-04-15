import type {testFn} from './_types';

/**
 * Finds index of leftmost value passing the test.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 * @returns index of value, -1 if not found
 */
function findIndex<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): number {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) return i;
}
export default findIndex;
