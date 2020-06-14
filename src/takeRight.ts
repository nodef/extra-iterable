import slice from './slice';

/**
 * Extracts values from right of iterable.
 * @param x an iterable
 * @param n number of values (1)
 */
function* takeRight<T>(x: Iterable<T>, n: number=1): IterableIterator<T> {
  if(n>0) yield* slice(x, -n);
}
export default takeRight;
