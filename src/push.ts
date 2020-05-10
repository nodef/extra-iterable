/**
 * Adds values to the end. 
 * @param x an iterable
 * @param vs values to add
 */
function* push<T>(x: Iterable<T>, ...vs: T[]): IterableIterator<T> {
  yield* x;
  yield* vs;
}
export default push;
