function* slicePP<T>(x: Iterable<T>, i: number, I: number): IterableIterator<T> {
  var k = -1;
  for(var v of x) {
    if(++k>=I) break;
    if(k>=i) yield v;
  }
}

function* slicePN<T>(x: Iterable<T>, i: number, I: number): IterableIterator<T> {
  var k = -1;
  var a: T[] = [], ai = 0, al = -I;
  for(var v of x) {
    if(++k<i) { yield v; continue; }
    if(a.length>=al) yield a[ai % al];
    a[ai++ % al] = v;
  }
}

function* sliceN<T>(x: Iterable<T>, i: number, I: number): IterableIterator<T> {
  var n = 0;
  var a: T[] = [], ai = 0, al = -i;
  for(var v of x) {
    a[ai++ % al] = v;
    n++;
  }
  I = I<0? I:Math.min(I-n, 0);
  for(; i<I; i++)
    yield a[ai++ % al];
}

/**
 * Gets part of an iterable.
 * @param x an iterable
 * @param i start index (0)
 * @param I end index (end)
 */
function* slice<T>(x: Iterable<T>, i: number=0, I: number=Number.MAX_SAFE_INTEGER): IterableIterator<T> {
  if(i>=0 && I>=0) yield* slicePP(x, i, I);
  else if(i>=0 && I<0) yield* slicePN(x, i, I);
  else yield* sliceN(x, i, I);
}
export default slice;
