/**
 * Lists all values.
 * @param x an iterable
 * @returns ...values
 */
function* values<T>(x: Iterable<T>): IterableIterator<T> {
  yield* x;
}
export default values;
