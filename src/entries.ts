/**
 * Lists all index-value pairs.
 * @param x an iterable
 */
function* entries<T>(x: Iterable<T>): IterableIterator<[number, T]> {
  var i = -1;
  for (var v of x)
    yield [++i, v];
}
export default entries;
