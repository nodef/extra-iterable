/**
 * Gets first value.
 * @param x an iterable
 */
function head<T>(x: Iterable<T>): T {
  for(var v of x)
    return v;
}
export default head;
