import copy from './copy';
import many from './many';
import size from './size';

/**
 * Copies part of iterable within.
 * @param x an iterable
 * @param j write index
 * @param i read start index (0)
 * @param I read end index (end)
 */
function* copyWithin<T>(x: Iterable<T>, j: number, i: number=0, I: number=Number.MAX_SAFE_INTEGER): IterableIterator<T> {
  var x = many(x), n = size(x);
  for(var v of copy(x, x, j, i, I)) {
    if(--n<0) break;
    yield v;
  }
}
export default copyWithin;
