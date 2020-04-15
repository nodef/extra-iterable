import type {testFn} from './_types';

/**
 * Finds indices of values passing the test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable<number>}
 */
function* findIndices<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): Iterable<number> {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) yield i;
}
export default findIndices;
