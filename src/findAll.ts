import filter from './filter';
import type {testFn} from './_types';

/**
 * Finds values passing a test.
 * @param x an iterable
 * @param fn test function (v, i, x)
 */
function* findAll<T>(x: Iterable<T>, fn: testFn<T>): IterableIterator<T> {
  yield* filter(x, fn);
}
export default findAll;
