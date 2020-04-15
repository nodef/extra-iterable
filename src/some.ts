import type {testFn} from './_types';

/**
 * Checks if any value satisfies a test.
 * @param x an iterable
 * @param fn test function (v, i ,x)
 * @param ths this argument
 */
function some<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): boolean {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) return true;
  return false;
}
export default some;
