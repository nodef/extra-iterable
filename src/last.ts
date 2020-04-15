/**
 * Gets last value.
 * @param x an iterable
 */
function last<T>(x: Iterable<T>): T {
  for(var v of x);
  return v;
}
export default last;
