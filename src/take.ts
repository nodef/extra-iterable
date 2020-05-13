import slice from './slice';

/**
 * Extracts given number of values from iterable.
 * @param x an iterable
 * @param n number of values
 */
function* take<T>(x: Iterable<T>, n: number=0): IterableIterator<T> {
  yield* slice(x, 0, n);
}
export default take;
