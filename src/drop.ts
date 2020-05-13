import slice from './slice';

/**
 * Drops given number of values from iterable.
 * @param x an iterable
 * @param n number of values
 */
function* drop<T>(x: Iterable<T>, n: number=0): IterableIterator<T> {
  yield* slice(x, n);
}
export default drop;
