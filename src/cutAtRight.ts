import cutAt from "./cutAt";
import map from "./map";

/**
 * Breaks iterable after given indices.
 * @param x an iterable
 * @param is split indices (sorted)
 */
function* cutAtRight<T>(x: Iterable<T>, is: Iterable<number>): IterableIterator<T[]> {
  yield* cutAt(x, map(is, i => i+1));
}
export default cutAtRight;
