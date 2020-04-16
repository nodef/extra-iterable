import slice from './slice';

/**
 * Gets values from the right.
 * @param x an iterable
 * @param n number of values (1)
 */
function* right<T>(x: Iterable<T>, n: number=1): IterableIterator<T> {
  if(n===0) return;
  yield* slice(x, -n);
}
export default right;
