/**
 * Adds values to the start.
 * @param x an iterable
 * @param vs values to add
 */
function* unshift<T>(x: Iterable<T>, ...vs: T[]): IterableIterator<T> {
  yield* vs;
  yield* x;
}
export default unshift;
