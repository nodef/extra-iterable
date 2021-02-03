import slice from "./slice";

/**
 * Gets values from middle.
 * @param x an iterable
 * @param i start index (0)
 * @param n number of values (1)
 */
function* middle<T>(x: Iterable<T>, i: number=0, n: number=1): IterableIterator<T> {
  yield* slice(x, i, i+n);
}
export default middle;
