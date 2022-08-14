import slice from "./slice";


/**
 * Discards first n values only.
 * @param x an iterable
 * @param n number of values (1)
 */
function* drop<T>(x: Iterable<T>, n: number=1): IterableIterator<T> {
  yield* slice(x, n);
}
export default drop;
