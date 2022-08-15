/**
 * Gets values except first.
 * @param x an iterable
 */
function* tail<T>(x: Iterable<T>): IterableIterator<T> {
  var i = -1;
  for (var v of x)
    if (++i>0) yield v;
}
export default tail;
