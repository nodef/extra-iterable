/**
 * Lists all values.
 * @param x an iterable
 */
function* values<T>(x: Iterable<T>): IterableIterator<T> {
  yield* x;
}
export default values;
