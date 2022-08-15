/**
 * Gets first value.
 * @param x an iterable
 * @param vd default value
 */
function head<T>(x: Iterable<T>, vd?: T): T {
  for (var v of x)
    return v;
  return vd;
}
export default head;
