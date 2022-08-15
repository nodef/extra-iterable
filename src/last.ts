/**
 * Gets last value.
 * @param x an iterable
 * @param vd default value
 */
function last<T>(x: Iterable<T>, vd?: T): T {
  var v = vd;
  for (var v of x);
  return v;
}
export default last;
