import filter from './filter';
import type {testFn} from './_types';

/**
 * Finds values passing a test.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function* findAll<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): IterableIterator<T> {
  yield* filter(x, fn, ths);
}
export default findAll;
