import copy from './copy';
import from from './from';

/**
 * Copies part of iterable within.
 * @param x an iterable
 * @param j write index
 * @param i read start index (0)
 * @param I read end index (end)
 */
function* copyWithin<T>(x: Iterable<T>, j: number, i: number=0, I: number=Number.MAX_SAFE_INTEGER): IterableIterator<T> {
  var y = from(x);
  yield* copy(y, y, j, i, I);
}
export default copyWithin;
