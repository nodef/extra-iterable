import splice from "./splice";

/**
 * Removes value at index.
 * @param x an iterable
 * @param i index
 */
function* remove<T>(x: Iterable<T>, i: number): IterableIterator<T> {
  yield* splice(x, i, 1);
}
export default remove;
