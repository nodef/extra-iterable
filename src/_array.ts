/**
 * Converts iterable to array.
 * @param x an iterable
 */
function array<T>(x: Iterable<T>): T[] {
  return Array.isArray(x)? x : Array.from(x);
}
export default array;
