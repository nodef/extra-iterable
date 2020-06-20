/**
 * Breaks iterable into chunks of given size.
 * @param x an iterable
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function* chunk<T>(x: Iterable<T>, n: number=1, s: number=n): IterableIterator<T[]> {
  var M = Math.max(n, s);
  var m = 0, a = [];
  for(var v of x) {
    if(m<n) a.push(v);
    if(++m<M) continue;
    yield a;
    a = a.slice(s);
    m = a.length;
  }
  if(a.length>0) yield a;
}
export default chunk;
