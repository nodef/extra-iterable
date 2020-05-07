/**
 * Exchanges two values.
 * @param x an iterable
 * @param i an index
 * @param j another index
 */
function* swap<T>(x: Iterable<T>, i: number, j: number): IterableIterator<T> {
  if(i===j) yield* x;
  var k = Math.min(i, j);
  var l = Math.max(i, j);
  var m: T[] = [];
  var vk: T, i = -1;
  for(var v of x) {
    if(++i<k || i>l) yield v;
    else if(i===k) vk = v;
    else if(i<l) m.push(v)
    else { yield v; yield* m; yield vk; }
  }
}
export default swap;
