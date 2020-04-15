import slice from './slice';

/**
 * Copies part of iterable to another.
 * @param x target iterable
 * @param y source iterable
 * @param j write index (0)
 * @param i read start index (0)
 * @param I read end index (end)
 */
function* copy<T>(x: Iterable<T>, y: Iterable<T>, j: number=0, i: number=0, I: number=Number.MAX_SAFE_INTEGER): Iterable<T> {
  var k = -1, n = 0, K = 0;
  for(var v of x) {
    if(++k===j) {
      for(var u of slice(y, i, I))
      { yield u; n++; }
      K = j + Math.min(I-i, n);
    }
    if(k>=j && k<K) continue;
    else yield v;
  }
  if(j>=k) {
    for(; ++k<j;) yield undefined;
    yield* slice(y, i, I);
  }
}
export default copy;
