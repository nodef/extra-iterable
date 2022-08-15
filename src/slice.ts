import END from "./END";


function* slicePos<T>(x: Iterable<T>, i: number, I: number): IterableIterator<T> {
  var k = -1;
  for (var v of x) {
    if (++k>=I) break;
    if (k>=i) yield v;
  }
}

function* slicePosNeg<T>(x: Iterable<T>, i: number, I: number): IterableIterator<T> {
  var j = 0, k = -1;
  var a = [], A = -I;
  for (var v of x) {
    if (++k<i) continue;
    if (a.length>=A) yield a[j];
    a[j] = v; j = (j+1) % A;
  }
}

function* sliceNeg<T>(x: Iterable<T>, i: number, I: number): IterableIterator<T> {
  var j = 0, n = 0;
  var a = [], A = -i;
  for (var v of x) {
    a[j] = v; j = (j+1) % A;
    n++;
  }
  if (n<A) return;
  var I = I<0? I : Math.min(I-n, 0);
  var n = Math.max(I-i, 0);
  var J = Math.max(j+n-A, 0);
  yield* a.slice(j, j+n);
  yield* a.slice(0, J);
}

/**
 * Gets part of an iterable.
 * @param x an iterable
 * @param i start index (-ve: from right) (0)
 * @param I end index (-ve: from right) (X)
 */
function* slice<T>(x: Iterable<T>, i: number=0, I: number=END): IterableIterator<T> {
  if (i>=0 && I>=0) yield* slicePos(x, i, I);
  else if (i>=0 && I<0) yield* slicePosNeg(x, i, I);
  else yield* sliceNeg(x, i, I);
}
export default slice;
