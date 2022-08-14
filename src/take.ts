import slice from "./slice";


/**
 * Keeps first n values only.
 * @param x an iterable
 * @param n number of values (1)
 */
function* take<T>(x: Iterable<T>, n: number=1): IterableIterator<T> {
  yield* slice(x, 0, n);
}
export default take;
