import slice from './slice';

/**
 * Gets values from the left.
 * @param x an iterable
 * @param n number of values (1)
 */
function* left<T>(x: Iterable<T>, n: number=1): Iterable<T> {
  yield* slice(x, 0, n);
}
export default left;
