/**
 * Breaks iterable into chunks of given size.
 * @param x an iterable
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function* chunk<T>(x: Iterable<T>, n: number=1, s: number=n): IterableIterator<T[]> {
  var a = [], m = 0;
  for(var v of x) {
    a.push(v);
    if(++m<n) continue;
    yield a;
    a = []; m = 0;
  }
  if(a.length>0) yield a;
}
export default chunk;
