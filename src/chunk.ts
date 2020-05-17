/**
 * Breaks iterable into chunks of given size.
 * @param x an iterable
 * @param s chunk step (1)
 * @param n chunk size (s)
 */
function* chunk<T>(x: Iterable<T>, s: number=1, n: number=s): IterableIterator<T[]> {
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
