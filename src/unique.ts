import union from './union';
import type {compareFn} from './_types';

/**
 * Removes duplicate values.
 * @param x an iterable
 * @param fn compare function (a, b)
 */
function* unique<T>(x: Iterable<T>, fn: compareFn<T>=null): IterableIterator<T> {
  yield* union([], x, fn);
}
export default unique;
