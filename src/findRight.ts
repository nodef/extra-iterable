import type {testFn} from './_types';

/**
 * Finds value passing a test, from right.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function findRight<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): T {
  var i = -1, a: T;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) a = v;
  return a;
}
export default findRight;
