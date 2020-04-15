/**
 * Adds values to the end. 
 * @param x an iterable
 * @param vs values to add
 * @returns iterable
 */
function* push<T>(x: Iterable<T>, ...vs: T[]): Iterable<T> {
  yield* x;
  yield* vs;
}
export default push;
