import slice from "./slice";
import END from "./END";


/**
 * Copies part of iterable to another.
 * @param x target iterable
 * @param y source iterable
 * @param j write index (0)
 * @param i read start index (0)
 * @param I read end index (X)
 */
function* copy<T>(x: Iterable<T>, y: Iterable<T>, j: number=0, i: number=0, I: number=END): IterableIterator<T> {
  var k = -1, J = -1;
  for (var u of x) {
    if (++k===j) {
      J = k;
      for (var v of slice(y, i, I))
      { yield v; ++J; }
    }
    if (k>=j && k<J) continue;
    else yield u;
  }
  if (k<j) {
    for (; ++k<j;) yield undefined;
    yield* slice(y, i, I);
  }
}
export default copy;
