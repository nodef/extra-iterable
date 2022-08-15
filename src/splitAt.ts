/**
 * Breaks iterable considering indices as separator.
 * @param x an iterable
 * @param is indices (sorted)
 */
function* splitAt<T>(x: Iterable<T>, is: number[]): IterableIterator<T[]> {
  var a: T[] = [], i = -1;
  for (var v of x) {
    if (!is.includes(++i)) a.push(v);
    else if (a.length) { yield a; a = []; }
  }
  if (a.length) yield a;
}
export default splitAt;
