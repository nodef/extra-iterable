import init from "./init";

/**
 * Removes last value.
 * @param x an iterable
 */
function* pop<T>(x: Iterable<T>): IterableIterator<T> {
  yield* init(x);
}
export default pop;
