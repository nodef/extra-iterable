/**
 * Adds values to the start.
 * @param x an iterable
 * @param vs values to add
 * @returns iterable
 */
function* unshift<T>(x: Iterable<T>, ...vs: T[]): Iterable<T> {
  yield* vs;
  yield* x;
}
export default unshift;
