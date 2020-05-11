function* rotateRight<T>(x: Iterable<T>, n: number): IterableIterator<T> {
  var a = Array.from(x);
  var n = n % a.length;
  yield* a.slice(-n);
  yield* a.slice(0, -n);
}

function* rotateLeft<T>(x: Iterable<T>, n: number): IterableIterator<T> {
  var a = [], i = -1;
  for(var v of x) {
    if(++i<n) a.push(v);
    else yield v;
  }
  if(++i>=n) { yield* a; return; }
  var n = n % i;
  yield* a.slice(n);
  yield* a.slice(-n);
}

/**
 * Rotates values in iterable.
 * @param x an iterable
 * @param n rotate amount (-ve: left, +ve: right)
 */
function* rotate<T>(x: Iterable<T>, n: number): IterableIterator<T> {
  if(n===0) yield* x;
  else if(n>0) yield* rotateRight(x, n);
  else yield* rotateLeft(x, -n);
}
export default rotate;
