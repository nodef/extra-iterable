import copy from './copy';
import many from './many';
import size from './size';
import END from './END';

/**
 * Copies part of iterable within.
 * @param x an iterable
 * @param j write index (0)
 * @param i read start index (0)
 * @param I read end index (X)
 */
function* copyWithin<T>(x: Iterable<T>, j: number=0, i: number=0, I: number=END): IterableIterator<T> {
  var x = many(x), n = size(x);
  for(var v of copy(x, x, j, i, I)) {
    if(--n<0) break;
    yield v;
  }
}
export default copyWithin;
