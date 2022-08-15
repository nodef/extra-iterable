/**
 * Gets values except last.
 * @param x an iterable
 */
function* init<T>(x: Iterable<T>): IterableIterator<T> {
  var u: T, i = -1;
  for (var v of x) {
    if (++i>0) yield u;
    u = v;
  }
}
export default init;
