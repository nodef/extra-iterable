import {count as arrayCount} from 'extra-array';
import type {testFn} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function count<T>(x: Iterable<T>, ft: testFn<T>): number {
  return arrayCount(x, ft);
}
export default count;
