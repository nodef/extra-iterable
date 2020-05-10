import tail from './tail';

/**
 * Removes first value.
 * @param x an iterable
 */
function* shift<T>(x: Iterable<T>): IterableIterator<T> {
  yield* tail(x);
}
export default shift;
