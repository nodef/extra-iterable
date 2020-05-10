import cut from './cut';
import map from './map';

/**
 * Breaks iterable after given indices.
 * @param x an iterable
 * @param is split indices (sorted)
 * @returns ...pieces
 */
function* cutRight<T>(x: Iterable<T>, is: Iterable<number>): IterableIterator<T[]> {
  yield* cut(x, map(is, i => i+1));
}
export default cutRight;
